# pnpm node package manager

## Running pnpm install in the pipeline (AI answer)

Let's clarify a few key points to help you make the best decision for your CI/CD pipeline setup with **pnpm**:

---

### 🔧 `npm ci` vs `pnpm install --frozen-lockfile` vs `pnpm install`

| Command                          | Behavior                                                                             | Use Case                     |
| -------------------------------- | ------------------------------------------------------------------------------------ | ---------------------------- |
| `npm ci`                         | Strict install from `package-lock.json`, removes `node_modules`, no deviance allowed | CI pipelines                 |
| `pnpm install --frozen-lockfile` | Installs from lockfile, errors out if lockfile and `package.json` mismatch           | Reproducible CI installs     |
| `pnpm install`                   | Regular install; optimized behavior in CI when `CI=true` is detected                 | Preferred for most CI setups |

---

### ✅ Best Practice for CI with `pnpm`

You **should generally use**:

```bash
pnpm install
```

in your CI pipelines **without `--frozen-lockfile`**, and here's why:

#### 💡 Why `pnpm install` is enough (and preferred)

1. **Smart CI Detection**: `pnpm` checks for the `CI=true` environment variable (commonly set by CI platforms like GitHub Actions, GitLab CI, etc.).
2. **Lockfile Integrity Enforcement**: In CI mode, `pnpm install` **automatically fails** if:
    - The lockfile is out of sync with `package.json`.
    - Integrity hashes don’t match.

3. **Better Performance**: `pnpm` can skip non-essential postinstall scripts and other dev-friendly features when running in CI.
4. **Simpler Caching**: Some CI/CD systems (e.g., GitHub Actions) have better cache hits when using `pnpm install` alone.

---

### 🧪 So when _would_ you use `--frozen-lockfile`?

Use `--frozen-lockfile` **only** when:

- You want to strictly enforce "no changes allowed" behavior _outside_ CI (e.g., local testing before commit).
- You're in a non-standard CI environment where `CI=true` isn't automatically set.

---

### 📌 Summary Recommendation

For CI (especially GitHub Actions):

```bash
pnpm install
```

> ✅ Let `pnpm` handle the optimization and integrity checking — it's designed to be smarter than `npm ci`.

Let me know if you’d like a sample GitHub Actions config optimized for `pnpm`.
