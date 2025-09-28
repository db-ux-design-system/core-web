# ADR-02 - Monorepo

## Decision and Rationale

To reduce the amount of time spent deploying and linking dependant packages, we combined [base](https://github.com/db-ui/base), [core](https://github.com/db-ui/core) and [elements](https://github.com/db-ui/elements) into a single monorepo, and evolved afterwards regarding new technologies (compare to ADR 01).

## Problem description and context

We had the problem that issues inside UI elements often occurs on the token level (base).
For developers, it was a time-consuming task to link the projects, find and fix the issue. Sometimes base or core had to be deployed to test if the solution really works, which leads to countless hours waiting for deployments until the result was fine.

## General conditions and decision criteria

### General conditions

- Development should be easier
- Changes inside tokens should be tested directly in components
- Issues inside components should be fixed in same deployment
- Issues can be reported via 1 repository

### Decision Criteria

- For marketing, we just need one URL instead of three
- Development is faster and easier
- Team members have experience with monorepos

## Consequences

- Complex CI/CD
- A lot of files, hard for new contributors
- Time to migrate 3 repos into 1
