# ADR 2025-06-10: Documentation strategy for GitHub Copilot and developer docs

## Context

We need a consistent, maintainable documentation approach that serves both developers and AI-assisted coding
tools (GitHub Copilot) without duplicating effort. The documentation must cover component usage, variants, props,
examples, and allow Copilot to answer questions like "What variants does the Button support?" without manually
opening multiple files.

Key requirements:

- Single source of truth for component documentation.
- Automatic inclusion of context in Copilot Chat for both IDEs, VS Code and IntelliJ.
- Developer-friendly Markdown for manual reading and static site generation.
- Compatibility with LLM context conventions (llms.txt; to be integrated in a later phase) and GitHub Copilot Custom Instructions (`copilot-instructions.md`).

## Decision

1. Documentation Format & Location
    - Use Markdown files per component, stored in packages/components/docs/ or packages/components/src/components/docs/.
    - Central table of contents in docs/llms.txt listing all component docs with relative paths.

2. GitHub Copilot Custom Instructions
    - Place `copilot-instructions.md` in the project root (under .github/) to provide global guidance.
    - Instruct Copilot Chat to load this file automatically; it will include links to llms.txt and recommended file paths.

3. Automatic Context Loading
    - In VS Code and IntelliJ, Copilot Chat will automatically read `.github/copilot-instructions.md` on new chats.
    - To surface specific details, embed documentation (e.g., Button.md) directly in `copilot-instructions.md`.

4. Interactive Context Attachment
    - For deeper or ad-hoc queries, use the "Attach Context" feature in Copilot Chat to load component Markdown files during the session.

5. Static Site & Developer Docs (future usage, not part of the current scope)
    - Integrate component docs via Astro as a package in the monorepo, referencing Markdown sources in packages/components/... .
    - Render pages dynamically under /components/[slug] and /api/[slug] for manual browsing.

6. Automated Propagation of Copilot Instructions

    We add a `postinstall` hook to our component package that:
    - copies or appends the package-specific file `.github/copilot-instructions.md` to the target project,
    - uses unique markers to automatically replace outdated blocks during future installations,
    - handles missing or already existing files as well as idempotent updates cleanly, ensuring that every installation immediately provides the latest Copilot context for our package.

7. Automate generation and propagation of Copilot instructions on package build.
    - Define `generate:agent` in `package.json` and hook into `prepare`.
    - Only include `*.md` files whose filename matches the parent directory converted to PascalCase (e.g. `custom-select` → `CustomSelect.md`), ensuring no unrelated MDs are merged.

## Alternatives Considered

- Rely solely on Code Search: Let Copilot use workspace search to locate docs dynamically. Rejected due to inconsistency and limited to agent mode.
- TypeDoc-only approach: Generate API docs from TypeScript. Provides type detail but lacks usage narratives and cross-framework examples.
- Mitosis Metadata Model: Embed JSON metadata via useMetadata and generate docs. Promising, but requires custom plugins and not widely adopted yet.

## Consequences

- Pros:
    - Clear separation: manual design guidance (Markdown) vs. AI context (`copilot-instructions.md` + `llms.txt` snippets).
    - Maintains single source (docs in packages/components/docs).
    - Enables Copilot to provide accurate, component-specific suggestions without manual file opening.
    - Developer site generation remains straightforward via Astro.
    - Consumers always receive the latest Copilot context without manual steps.
    - Guarantees that only the intended component documentation is merged into Copilot instructions.

- Cons:
    - Requires maintaining excerpts in `copilot-instructions.md` when docs change.
    - Copilot cannot truly auto-load all linked docs; manual attachment or excerpt embedding needed for deep context.
    - Postinstall hooks may be disabled for security reasons, making it impossible to automate the copying of the copilot instructions.
    - Relies on strict naming conventions; any divergence between folder and file names will cause a component’s docs to be skipped.
