# Release Management

We'd like to provide a reliable and consistent releases. Due to dependencies to other crafts as well as our roadmap we need to actively manage releases and decide on their scope. This is handled through frequent alignments.

To support this process and gain some insight on the current status of issues, we need to both "tag" and proceed with the issues in a standarized way and with normative wording.

That for, we
- use semantic versioning wordings within our Pull Request titles (`fix: ` for bugfixes that would get published in a patch release, and `refactor: ` or `feat: ` for targeting minor releases).
- won't set Pull Requests for minor releases to `auto-merge` (they would get merged to `main` branch on release day)
- set their status within ["UX Engineering Team Backlog" board](https://github.com/orgs/db-ux-design-system/projects/6/views/1) to "ready for release" after reviewing it, so that we have a clear overview regarding candidates for the next releases.

tbd: Both the release scope as well as merging the Pull Requests on release day is managed by a Release Manager.
