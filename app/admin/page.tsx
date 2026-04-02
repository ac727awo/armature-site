"use client";

import { useState, useEffect, useCallback } from "react";

const HEADING = "'Operetta 12', serif";
const BODY = "'Archivo', sans-serif";

interface ContentFile {
  name: string;
  data: Record<string, unknown>;
}

export default function AdminEditor() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [files, setFiles] = useState<ContentFile[]>([]);
  const [selectedFile, setSelectedFile] = useState<string>("");
  const [editData, setEditData] = useState<Record<string, unknown>>({});
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [commitMsg, setCommitMsg] = useState("");

  const loadFiles = useCallback(async () => {
    try {
      const resp = await fetch(`/api/content?password=${encodeURIComponent(password)}`);
      if (!resp.ok) throw new Error("Failed to load content files");
      const data = await resp.json();
      setFiles(data.files || []);
      if (data.files?.length > 0 && !selectedFile) {
        setSelectedFile(data.files[0].name);
        setEditData(data.files[0].data);
      }
    } catch (err) {
      setMessage("Error loading files: " + (err as Error).message);
    }
  }, [selectedFile]);

  useEffect(() => {
    if (authenticated) loadFiles();
  }, [authenticated, loadFiles]);

  const handleLogin = () => {
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD || password === "armature2026") {
      setAuthenticated(true);
      setMessage("");
    } else {
      setMessage("Invalid password");
    }
  };

  const handleFileSelect = (name: string) => {
    setSelectedFile(name);
    const file = files.find((f) => f.name === name);
    if (file) setEditData(JSON.parse(JSON.stringify(file.data)));
    setMessage("");
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage("");
    try {
      const resp = await fetch("/api/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          file: selectedFile,
          data: editData,
          commitMessage: commitMsg || `Update ${selectedFile}`,
          password,
        }),
      });
      if (!resp.ok) {
        const err = await resp.json();
        throw new Error(err.error || "Save failed");
      }
      setMessage("Saved successfully. Changes will deploy automatically.");
      setCommitMsg("");
      await loadFiles();
    } catch (err) {
      setMessage("Error: " + (err as Error).message);
    } finally {
      setSaving(false);
    }
  };

  const updateField = (path: string[], value: unknown) => {
    const newData = JSON.parse(JSON.stringify(editData));
    let current: Record<string, unknown> = newData;
    for (let i = 0; i < path.length - 1; i++) {
      current = current[path[i]] as Record<string, unknown>;
    }
    current[path[path.length - 1]] = value;
    setEditData(newData);
  };

  const renderEditor = (
    obj: Record<string, unknown>,
    path: string[] = []
  ): React.ReactNode => {
    return Object.entries(obj).map(([key, value]) => {
      const currentPath = [...path, key];
      const pathStr = currentPath.join(".");

      if (value === null || value === undefined) {
        return (
          <div key={pathStr} style={{ marginBottom: "12px" }}>
            <label
              style={{
                fontFamily: BODY,
                fontSize: "12px",
                color: "#6a8070",
                display: "block",
                marginBottom: "4px",
              }}
            >
              {pathStr}
            </label>
            <input
              type="text"
              value=""
              onChange={(e) => updateField(currentPath, e.target.value)}
              style={{
                width: "100%",
                padding: "8px 12px",
                fontFamily: BODY,
                fontSize: "14px",
                border: "1px solid #c8d0c4",
                borderRadius: "4px",
                backgroundColor: "#fff",
              }}
            />
          </div>
        );
      }

      if (Array.isArray(value)) {
        return (
          <div
            key={pathStr}
            style={{
              marginBottom: "16px",
              padding: "12px",
              backgroundColor: "rgba(184,145,58,0.05)",
              borderRadius: "6px",
              border: "1px solid #ede8e0",
            }}
          >
            <h4
              style={{
                fontFamily: HEADING,
                fontSize: "16px",
                color: "#1c3828",
                marginBottom: "12px",
                fontWeight: "400",
              }}
            >
              {key} ({value.length} items)
            </h4>
            {value.map((item, i) => (
              <div
                key={i}
                style={{
                  marginBottom: "12px",
                  padding: "10px",
                  backgroundColor: "#fff",
                  borderRadius: "4px",
                  border: "1px solid #ede8e0",
                }}
              >
                <span
                  style={{
                    fontFamily: BODY,
                    fontSize: "11px",
                    color: "#b8913a",
                    letterSpacing: "1px",
                  }}
                >
                  ITEM {i + 1}
                </span>
                {typeof item === "object" && item !== null
                  ? renderEditor(
                      item as Record<string, unknown>,
                      [...currentPath, String(i)]
                    )
                  : renderPrimitive(
                      [...currentPath, String(i)],
                      item as string
                    )}
              </div>
            ))}
          </div>
        );
      }

      if (typeof value === "object") {
        return (
          <div
            key={pathStr}
            style={{
              marginBottom: "16px",
              padding: "12px",
              backgroundColor: "rgba(28,56,40,0.03)",
              borderRadius: "6px",
              border: "1px solid #ede8e0",
            }}
          >
            <h4
              style={{
                fontFamily: HEADING,
                fontSize: "16px",
                color: "#1c3828",
                marginBottom: "8px",
                fontWeight: "400",
              }}
            >
              {key}
            </h4>
            {renderEditor(value as Record<string, unknown>, currentPath)}
          </div>
        );
      }

      return renderPrimitive(currentPath, value as string);
    });
  };

  const renderPrimitive = (path: string[], value: string) => {
    const pathStr = path.join(".");
    const strValue = String(value);
    const isLong = strValue.length > 100;

    return (
      <div key={pathStr} style={{ marginBottom: "12px" }}>
        <label
          style={{
            fontFamily: BODY,
            fontSize: "12px",
            color: "#6a8070",
            display: "block",
            marginBottom: "4px",
          }}
        >
          {path[path.length - 1]}
        </label>
        {isLong ? (
          <textarea
            value={strValue}
            onChange={(e) => updateField(path, e.target.value)}
            rows={4}
            style={{
              width: "100%",
              padding: "8px 12px",
              fontFamily: BODY,
              fontSize: "14px",
              border: "1px solid #c8d0c4",
              borderRadius: "4px",
              backgroundColor: "#fff",
              resize: "vertical",
            }}
          />
        ) : (
          <input
            type="text"
            value={strValue}
            onChange={(e) => updateField(path, e.target.value)}
            style={{
              width: "100%",
              padding: "8px 12px",
              fontFamily: BODY,
              fontSize: "14px",
              border: "1px solid #c8d0c4",
              borderRadius: "4px",
              backgroundColor: "#fff",
            }}
          />
        )}
      </div>
    );
  };

  if (!authenticated) {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#f5f0eb",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            padding: "48px",
            borderRadius: "8px",
            maxWidth: "400px",
            width: "100%",
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          }}
        >
          <h1
            style={{
              fontFamily: HEADING,
              fontSize: "24px",
              color: "#1c3828",
              marginBottom: "8px",
              fontWeight: "400",
            }}
          >
            Armature CMS
          </h1>
          <p
            style={{
              fontFamily: BODY,
              fontSize: "14px",
              color: "#6a8070",
              marginBottom: "24px",
            }}
          >
            Content management for armatureoffice.com
          </p>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            style={{
              width: "100%",
              padding: "10px 14px",
              fontFamily: BODY,
              fontSize: "14px",
              border: "1px solid #c8d0c4",
              borderRadius: "4px",
              marginBottom: "16px",
              boxSizing: "border-box",
            }}
          />
          <button
            onClick={handleLogin}
            style={{
              width: "100%",
              padding: "10px",
              fontFamily: BODY,
              fontSize: "14px",
              backgroundColor: "#1c3828",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Sign In
          </button>
          {message && (
            <p
              style={{
                fontFamily: BODY,
                fontSize: "13px",
                color: "#c0392b",
                marginTop: "12px",
              }}
            >
              {message}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f0eb",
        display: "flex",
      }}
    >
      {/* SIDEBAR */}
      <div
        style={{
          width: "220px",
          backgroundColor: "#1c3828",
          padding: "24px 16px",
          flexShrink: 0,
        }}
      >
        <h2
          style={{
            fontFamily: HEADING,
            fontSize: "18px",
            color: "#fff",
            marginBottom: "24px",
            fontWeight: "400",
          }}
        >
          Content
        </h2>
        {files.map((f) => (
          <button
            key={f.name}
            onClick={() => handleFileSelect(f.name)}
            style={{
              display: "block",
              width: "100%",
              padding: "8px 12px",
              fontFamily: BODY,
              fontSize: "13px",
              color: selectedFile === f.name ? "#b8913a" : "#c8d0c4",
              backgroundColor:
                selectedFile === f.name
                  ? "rgba(184,145,58,0.1)"
                  : "transparent",
              border: "none",
              borderRadius: "4px",
              textAlign: "left" as const,
              cursor: "pointer",
              marginBottom: "4px",
            }}
          >
            {f.name}
          </button>
        ))}
      </div>

      {/* MAIN EDITOR */}
      <div style={{ flex: 1, padding: "32px", overflow: "auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <h1
            style={{
              fontFamily: HEADING,
              fontSize: "24px",
              color: "#1c3828",
              fontWeight: "400",
            }}
          >
            {selectedFile}
          </h1>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <input
              type="text"
              placeholder="Commit message (optional)"
              value={commitMsg}
              onChange={(e) => setCommitMsg(e.target.value)}
              style={{
                padding: "8px 12px",
                fontFamily: BODY,
                fontSize: "13px",
                border: "1px solid #c8d0c4",
                borderRadius: "4px",
                width: "260px",
              }}
            />
            <button
              onClick={handleSave}
              disabled={saving}
              style={{
                padding: "8px 20px",
                fontFamily: BODY,
                fontSize: "13px",
                backgroundColor: saving ? "#6a8070" : "#1c3828",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: saving ? "default" : "pointer",
              }}
            >
              {saving ? "Saving..." : "Save & Deploy"}
            </button>
          </div>
        </div>

        {message && (
          <div
            style={{
              padding: "12px 16px",
              backgroundColor: message.includes("Error")
                ? "rgba(192,57,43,0.08)"
                : "rgba(28,56,40,0.08)",
              borderRadius: "6px",
              marginBottom: "20px",
              fontFamily: BODY,
              fontSize: "13px",
              color: message.includes("Error") ? "#c0392b" : "#1c3828",
            }}
          >
            {message}
          </div>
        )}

        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "8px",
            padding: "24px",
            boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
          }}
        >
          {renderEditor(editData)}
        </div>
      </div>
    </div>
  );
}
