"use client";
import { useState, useEffect, useCallback } from "react";

const BODY = "'Archivo', 'Helvetica Neue', Arial, sans-serif";
const HEADING = "'Operetta 12', Georgia, 'Times New Roman', serif";

interface ContentFile {
  name: string;
  content: Record<string, unknown>;
  sha: string;
  dirty: boolean;
}

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [files, setFiles] = useState<string[]>([]);
  const [activeFile, setActiveFile] = useState<ContentFile | null>(null);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const loadFileList = useCallback(async (pw: string) => {
    const res = await fetch(`/api/content?password=${encodeURIComponent(pw)}`);
    if (res.ok) {
      const data = await res.json();
      setFiles(data.files);
      setAuthed(true);
    } else {
      setStatus("Invalid password");
    }
  }, []);

  const loadFile = useCallback(async (name: string) => {
    setLoading(true);
    const res = await fetch(`/api/content?file=${name}&password=${encodeURIComponent(password)}`);
    if (res.ok) {
      const data = await res.json();
      setActiveFile({ name, content: data.content, sha: data.sha, dirty: false });
    }
    setLoading(false);
  }, [password]);

  const saveFile = useCallback(async () => {
    if (!activeFile) return;
    setSaving(true);
    setStatus("");
    try {
      const res = await fetch("/api/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          file: activeFile.name,
          content: activeFile.content,
          sha: activeFile.sha,
          password,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setActiveFile((prev) => prev ? { ...prev, sha: data.sha, dirty: false } : null);
        setStatus("Published. Site will redeploy in ~30 seconds.");
      } else {
        setStatus(`Error: ${data.error}`);
      }
    } catch {
      setStatus("Network error. Try again.");
    }
    setSaving(false);
  }, [activeFile, password]);

  // Login screen
  if (!authed) {
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#0f2218", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ maxWidth: "400px", width: "100%", padding: "48px", backgroundColor: "#f5f0eb", border: "1px solid rgba(28,56,40,0.12)" }}>
          <p style={{ fontFamily: BODY, fontSize: "11px", color: "#b8913a", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: "600", margin: "0 0 16px 0" }}>
            Armature CMS
          </p>
          <h1 style={{ fontFamily: HEADING, fontSize: "28px", fontWeight: "500", color: "#1c3828", margin: "0 0 32px 0" }}>
            Content Editor
          </h1>
          <input
            type="password"
            placeholder="Admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && loadFileList(password)}
            style={{
              width: "100%",
              padding: "12px 16px",
              fontFamily: BODY,
              fontSize: "14px",
              border: "1.5px solid rgba(28,56,40,0.2)",
              backgroundColor: "white",
              outline: "none",
              marginBottom: "16px",
              boxSizing: "border-box",
            }}
          />
          <button
            onClick={() => loadFileList(password)}
            style={{
              width: "100%",
              padding: "14px",
              fontFamily: BODY,
              fontSize: "12px",
              color: "#1c3828",
              backgroundColor: "#d4a84c",
              border: "none",
              cursor: "pointer",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontWeight: "600",
            }}
          >
            Sign In
          </button>
          {status && <p style={{ fontFamily: BODY, fontSize: "13px", color: "#c44", marginTop: "16px" }}>{status}</p>}
        </div>
      </div>
    );
  }

  // Editor screen
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f5f0eb", paddingTop: "100px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "220px 1fr", gap: "40px" }}>
        {/* Sidebar */}
        <div>
          <p style={{ fontFamily: BODY, fontSize: "11px", color: "#b8913a", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: "600", margin: "0 0 24px 0" }}>
            Content Files
          </p>
          {files.map((f) => (
            <button
              key={f}
              onClick={() => loadFile(f)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                padding: "10px 16px",
                fontFamily: BODY,
                fontSize: "14px",
                color: activeFile?.name === f ? "#1c3828" : "#4a6155",
                backgroundColor: activeFile?.name === f ? "#ede8e0" : "transparent",
                border: "none",
                cursor: "pointer",
                marginBottom: "4px",
                fontWeight: activeFile?.name === f ? "600" : "400",
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Editor */}
        <div>
          {loading && <p style={{ fontFamily: BODY, color: "#6a8070" }}>Loading...</p>}
          {activeFile && !loading && (
            <>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
                <div>
                  <h2 style={{ fontFamily: HEADING, fontSize: "24px", fontWeight: "500", color: "#1c3828", margin: "0 0 4px 0" }}>
                    {activeFile.name}
                  </h2>
                  {activeFile.dirty && (
                    <span style={{ fontFamily: BODY, fontSize: "12px", color: "#d4a84c" }}>Unsaved changes</span>
                  )}
                </div>
                <button
                  onClick={saveFile}
                  disabled={saving || !activeFile.dirty}
                  style={{
                    padding: "12px 28px",
                    fontFamily: BODY,
                    fontSize: "12px",
                    color: activeFile.dirty ? "#1c3828" : "#6a8070",
                    backgroundColor: activeFile.dirty ? "#d4a84c" : "#ede8e0",
                    border: "none",
                    cursor: activeFile.dirty ? "pointer" : "default",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontWeight: "600",
                    opacity: saving ? 0.5 : 1,
                  }}
                >
                  {saving ? "Publishing..." : "Publish Changes"}
                </button>
              </div>
              {status && (
                <p style={{
                  fontFamily: BODY,
                  fontSize: "13px",
                  color: status.startsWith("Error") ? "#c44" : "#2e7d32",
                  marginBottom: "24px",
                  padding: "12px 16px",
                  backgroundColor: status.startsWith("Error") ? "#fef0f0" : "#f0fef4",
                  border: `1px solid ${status.startsWith("Error") ? "#fcc" : "#cfc"}`,
                }}>
                  {status}
                </p>
              )}
              <ContentEditor
                data={activeFile.content}
                onChange={(updated) => setActiveFile((prev) => prev ? { ...prev, content: updated as Record<string, unknown>, dirty: true } : null)}
              />
            </>
          )}
          {!activeFile && !loading && (
            <div style={{ padding: "80px 0", textAlign: "center" }}>
              <p style={{ fontFamily: BODY, fontSize: "16px", color: "#6a8070" }}>
                Select a content file to begin editing.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Recursive content editor â€” renders editable fields for any JSON structure
function ContentEditor({
  data,
  onChange,
  path = "",
}: {
  data: unknown;
  onChange: (updated: unknown) => void;
  path?: string;
}) {
  if (typeof data === "string") {
    return (
      <textarea
        value={data}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%",
          minHeight: data.length > 100 ? "120px" : "48px",
          padding: "10px 14px",
          fontFamily: BODY,
          fontSize: "14px",
          color: "#1c3828",
          border: "1.5px solid rgba(28,56,40,0.15)",
          backgroundColor: "white",
          resize: "vertical",
          lineHeight: "1.6",
          outline: "none",
          boxSizing: "border-box",
        }}
        onFocus={(e) => { e.target.style.borderColor = "#b8913a"; }}
        onBlur={(e) => { e.target.style.borderColor = "rgba(28,56,40,0.15)"; }}
      />
    );
  }

  if (typeof data === "number" || typeof data === "boolean") {
    return (
      <input
        type={typeof data === "number" ? "number" : "text"}
        value={String(data)}
        onChange={(e) => {
          if (typeof data === "number") onChange(Number(e.target.value));
          else onChange(e.target.value === "true");
        }}
        style={{
          width: "200px",
          padding: "10px 14px",
          fontFamily: BODY,
          fontSize: "14px",
          color: "#1c3828",
          border: "1.5px solid rgba(28,56,40,0.15)",
          backgroundColor: "white",
          outline: "none",
        }}
      />
    );
  }

  if (Array.isArray(data)) {
    return (
      <div style={{ marginLeft: path ? "0" : "0" }}>
        {data.map((item, i) => (
          <div
            key={i}
            style={{
              padding: "16px",
              marginBottom: "8px",
              backgroundColor: "rgba(237,232,224,0.5)",
              border: "1px solid rgba(28,56,40,0.08)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
              <span style={{ fontFamily: BODY, fontSize: "11px", color: "#6a8070", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Item {i + 1}
              </span>
              <div style={{ display: "flex", gap: "8px" }}>
                {i > 0 && (
                  <button
                    onClick={() => {
                      const arr = [...data];
                      [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
                      onChange(arr);
                    }}
                    style={{ fontFamily: BODY, fontSize: "11px", color: "#4a6155", background: "none", border: "1px solid rgba(28,56,40,0.2)", padding: "4px 8px", cursor: "pointer" }}
                  >
                    â†‘
                  </button>
                )}
                {i < data.length - 1 && (
                  <button
                  ºw^~)Þ