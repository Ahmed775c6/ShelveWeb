"use client";

import Image from "next/image";
import { useState } from "react";

type Platform = "windows" | "macos" | "linux";

const downloads: Record<
  Platform,
  { label: string; detail: string; file: string; size: string; url: string }
> = {
  windows: {
    label: "Windows",
    detail: "Windows 10 and later",
    file: "Shelve Setup 0.1.0.exe",
    size: "~240 MB ",
    url: "https://github.com/Ahmed775c6/Shelve/releases/download/v0.1.0/Shleve.Setup.0.1.0.exe",
  },
  macos: {
    label: "macOS",
    detail: "Apple silicon and Intel",
    file: "Shelve-macos-latest.zip",
    size: "~263 MB  ",
    url: "https://github.com/Ahmed775c6/Shelve/releases",
  },
  linux: {
    label: "Linux",
    detail: "AppImage for desktop",
    file: "Shelve-0.1.0-linux.zip",
    size: "~334 MB ",
    url: "https://github.com/Ahmed775c6/Shelve/releases",
  },
};

function CopyButton({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  const copyCommand = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button type="button" className="docs-copy" onClick={copyCommand}>
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

function Command({ children }: { children: string }) {
  return (
    <div className="docs-command">
      <code>{children}</code>
      <CopyButton command={children} />
    </div>
  );
}

export default function InstallationDocsPage() {
  const [activeTab, setActiveTab] = useState<Platform>("windows");
  const current = downloads[activeTab];

  return (
    <main className="docs-page">
      <div className="page-container">
        <header className="site-nav docs-nav">
          <a href="/" className="brand" aria-label="Shelve home">
            <span className="brand-mark">
              <Image src="/icon.png" alt="" width={36} height={36} />
            </span>
            <span>Shelve</span>
          </a>
          <nav aria-label="Main navigation">
            <a href="/#features">Why Shelve 0.1.0</a>
            <a href="/#preview">The app</a>
            <a href="/#download">Download</a>
            <a className="nav-download docs-nav-current" href="/docs">Documentation</a>
          </nav>
        </header>

        <div className="docs-layout">
          <aside className="docs-sidebar" aria-label="Documentation sections">
            <p className="docs-sidebar-label">DOCUMENTATION</p>
            <a className="selected" href="#installation"><span>01</span> Installation</a>
            <a href="#requirements"><span>02</span> Requirements</a>
            <a href="#platform-guide"><span>03</span> Platform guide</a>
          </aside>

          <article className="docs-content" id="installation">
            <p className="docs-kicker"><i /> v0.1.0 Public Beta</p>
            <h1>Install Shelve<br /><em>on your desktop.</em></h1>
            <p className="docs-lead">
              Download the desktop build for your platform, complete the short setup,
              and make yourself at home.
            </p>

            <section className="docs-notice" id="requirements">
              <div className="docs-notice-title">
                <span>!</span>
                <h2>Before you install</h2>
              </div>
              <ul>
                <li><strong>MongoDB is required.</strong> Shelve expects a local server at <code>localhost:27017</code>.</li>
                <li><strong>This is an unsigned beta.</strong> Your operating system may ask you to confirm the first launch.</li>
              </ul>
            </section>

            <section className="docs-download" id="platform-guide">
              <div className="docs-download-heading">
                <div>
                  <p className="panel-kicker">CHOOSE YOUR PLATFORM</p>
                  <h2>Desktop download</h2>
                </div>
                <span className="release-status"><i /> Beta release</span>
              </div>

              <div className="docs-tabs" role="tablist" aria-label="Operating system">
                {(Object.keys(downloads) as Platform[]).map((platform) => (
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeTab === platform}
                    key={platform}
                    onClick={() => setActiveTab(platform)}
                    className={activeTab === platform ? "active" : ""}
                  >
                    {downloads[platform].label}
                  </button>
                ))}
              </div>

              <div className="docs-download-card">
                <div>
                  <p className="docs-file-detail">{current.detail}</p>
                  <p className="docs-file">{current.file} <span>{current.size}</span></p>
                </div>
                <a href={current.url} download>
                  Download for {current.label}
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </section>

            <section className="docs-steps" aria-label={`${current.label} installation instructions`}>
              {activeTab === "windows" && (
                <>
                  <article>
                    <span className="docs-step-number">01</span>
                    <div><h2>Extract and run</h2><p>Open the downloaded installer and follow the Windows setup prompts.</p></div>
                  </article>
                  <article>
                    <span className="docs-step-number">02</span>
                    <div><h2>Allow the first launch</h2><p>If SmartScreen says &ldquo;Windows protected your PC,&rdquo; choose <strong>More info</strong>, then <strong>Run anyway</strong>.</p></div>
                  </article>
                  <article>
                    <span className="docs-step-number">03</span>
                    <div><h2>Start MongoDB</h2><p>Confirm that the MongoDB Windows service is running before signing in or adding books.</p></div>
                  </article>
                </>
              )}

              {activeTab === "macos" && (
                <>
                  <article>
                    <span className="docs-step-number">01</span>
                    <div><h2>Open the archive</h2><p>Double-click <code>Shelve-macos-latest.zip</code>, open the resulting disk image, and drag Shelve into Applications.</p></div>
                  </article>
                  <article>
                    <span className="docs-step-number">02</span>
                    <div><h2>Allow the unsigned app</h2><p>Right-click Shelve in Applications, choose <strong>Open</strong>, then choose <strong>Open</strong> again.</p></div>
                  </article>
                  <article>
                    <span className="docs-step-number">03</span>
                    <div><h2>Clear the quarantine flag</h2><p>If Gatekeeper still blocks the app, run this command in Terminal:</p><Command>xattr -cr /Applications/Shelve.app</Command></div>
                  </article>
                </>
              )}

              {activeTab === "linux" && (
                <>
                  <article>
                    <span className="docs-step-number">01</span>
                    <div><h2>Make it executable</h2><p>Extract the archive, open a terminal in that folder, and run:</p><Command>chmod +x Shelve-0.1.0.AppImage</Command></div>
                  </article>
                  <article>
                    <span className="docs-step-number">02</span>
                    <div><h2>Launch Shelve</h2><p>Double-click the AppImage or start it from Terminal:</p><Command>./Shelve-0.1.0.AppImage</Command></div>
                  </article>
                  <article>
                    <span className="docs-step-number">03</span>
                    <div><h2>Install FUSE if needed</h2><p>On newer Ubuntu releases, install libfuse2 if the AppImage does not open:</p><Command>sudo apt install libfuse2</Command></div>
                  </article>
                </>
              )}
            </section>
          </article>
        </div>

        <footer className="docs-footer">
          <span>Shelve v0.1.0 Beta</span>
          <div>
            <a href="https://github.com/Ahmed775c6/Shelve/releases" target="_blank" rel="noreferrer">Release notes ↗</a>
            <a href="https://github.com/Ahmed775c6/Shelve/issues" target="_blank" rel="noreferrer">Report a bug ↗</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
