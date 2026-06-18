# Release Management

We aim to provide reliable and consistent releases. Due to dependencies on other projects, as well as our roadmap, we need to actively manage releases and decide on their scope. This is done through frequent alignments.

In order to support this process, and to gain some insight into the current state of issues, we need to both "tag" and track issues in a standardised and normative wording.

To do this, we

- use semantic versioning wording in our pull request titles ([`fix:`](https://github.com/db-ux-design-system/core-web/blob/main/docs/conventions.md?plain=1#L11) for bugfixes that would be published in a patch release, and [`refactor:`](https://github.com/db-ux-design-system/core-web/blob/main/docs/conventions.md?plain=1#L11) or [`feat:`](https://github.com/db-ux-design-system/core-web/blob/main/docs/conventions.md?plain=1#L11) for targeting minor releases).
- still leave them in draft state even when setting it to "in review" state in the [UX Engineering Team Backlog board](https://github.com/orgs/db-ux-design-system/projects/6/views/1)
- set their status in the [UX Engineering Team Backlog board](https://github.com/orgs/db-ux-design-system/projects/6/views/1) to "ready for release" after reviewing them, so that we have a clear overview of the candidates for the next releases.

Both the release scope, ensuring that all issues are ready for release, and even also other issues candidates might get pushed to that state, and the merging of Pull Requests on release day are managed by a Release Manager.

## Repositories

You would still need to check all repositories for release candidates, that might not be listed within [UX Engineering Team Backlog board](https://github.com/orgs/db-ux-design-system/projects/6/views/1) to "ready for release" column: <https://github.com/db-ux-design-system/.github-private/blob/main/profile/README.md#repositories-mit-ggf-weiteren-release-relevanten-prs>
