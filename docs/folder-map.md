# Folder map — Jejak Kediri

Standard top-level layout (framework paths stay where tooling expects them):

```text
.
├── app/                 # Vinext / App Router pages & UI (source)
├── public/              # Static assets (photos, logo, favicon)
├── db/                  # Drizzle schema & DB helpers
├── worker/              # Edge worker entry (hosting)
├── tests/               # Node test runner (rendered HTML)
├── docs/                # Human docs (you are here)
├── examples/d1/         # Optional D1 sample API
├── drizzle/             # Generated migrations metadata
├── LICENSE
├── CONTRIBUTING.md
└── README.md
```

## Naming

- **Folders:** kebab-case (`public/photos`, `docs/`).
- **React components:** PascalCase files inside `app/`.
- **Assets:** kebab-case WebP/SVG under `public/`.

## Do not move

- `app/` — required by Vinext/Next-style routing.
- `.openai/hosting.json` — deployment bindings.
