# Release Management

We aim to provide reliable and consistent releases. Due to dependencies on other projects, as well as our roadmap, we need to actively manage releases and decide on their scope. This is done through frequent alignments.

In order to support this process, and to gain some insight into the current state of issues, we need to both "tag" and track issues in a standardised and normative wording.

To do this, we
- use semantic versioning wording in our pull request titles (`fix: ` for bugfixes that would be published in a patch release, and `refactor: ` or `feat: ` for targeting minor releases).
- won't set Pull Requests for minor releases to `auto-merge' (they would be merged into the `main' branch on release day)
- set their status in the [UX Engineering Team Backlog board](https://github.com/orgs/db-ux-design-system/projects/6/views/1) to "ready for release" after reviewing them, so that we have a clear overview of the candidates for the next releases.

tbd: Both the release scope and the merging of Pull Requests on release day are managed by a Release Manager.
