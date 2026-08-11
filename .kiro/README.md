# Kiro Configuration

This folder contains [Kiro](https://kiro.dev) steering files and configuration for the DB UX Design System `core-web` repository.

## Steering Files

Steering files provide guided workflows that can be activated in Kiro chat using `#<name>`:

| Steering             | File                            | Purpose                                                                       |
| -------------------- | ------------------------------- | ----------------------------------------------------------------------------- |
| `#code-review`       | `steering/code-review.md`       | Perform a PR code review using GitHub MCP tools                               |
| `#pre-commit-review` | `steering/pre-commit-review.md` | Self-review checklist before committing and pushing                           |
| `#issue-triage`      | `steering/issue-triage.md`      | Triage issues: validate template, label, set priority/effort, post AI summary |

---

## Issue Triage Process

The `#issue-triage` steering automates issue triage for the repository. It validates issue quality, assigns labels, estimates priority/effort, checks for duplicates, and posts an AI-generated summary comment. Our developers should run this frequently manually.

### Prerequisites

The issue triage workflow requires the **GitHub MCP server** to be configured so Kiro can interact with GitHub issues, labels, and pull requests.

### Setting Up the GitHub MCP Server

#### Option A: Configure for VS Code

Add the following to your [MCP configuration file](https://code.visualstudio.com/docs/agent-customization/mcp-servers#_configure-the-mcpjson-file) (`.vscode/mcp.json` in the workspace, or `mcp.json` in [your user-profile](https://code.visualstudio.com/docs/configure/profiles)):

```json
{
	"servers": {
		"github": {
			"type": "http",
			"url": "https://api.githubcopilot.com/mcp"
		}
	}
}
```

#### Option B: Configure for Kiro

Add the following to your **user-level** config at `~/.kiro/settings/mcp.json` (not in the workspace — a token here might be committed to git by accident):

```json
{
	"mcpServers": {
		"github": {
			"type": "http",
			"url": "https://api.githubcopilot.com/mcp/",
			"headers": {
				"Authorization": "Bearer <your-token>"
			},
			"autoApprove": [...]
		}
	}
}
```

> **Important:** Never place a real token in the workspace-level `.kiro/settings/mcp.json` — use `~/.kiro/settings/mcp.json` instead.

##### Required PAT scopes

Create a [GitHub Personal Access Token](https://github.com/settings/personal-access-tokens/new) with the permissions you want to grant your AI tools. Refer to the [GitHub MCP Server documentation](https://github.com/github/github-mcp-server#readme) for details on recommended scopes.

### How the Triage Works

Once the GitHub MCP is set up, activate the steering in Kiro chat with `#issue-triage` and provide an issue number (single triage) or ask to triage all new issues (batch triage).

#### Single Issue Triage

Provide an issue number and the workflow will:

1. **Fetch issue details** — Reads the issue body, comments, labels, and metadata
2. **Check for duplicates** — Searches open/closed issues and PRs for related work
3. **Validate template completeness** — Checks required fields are filled (reproduction case, expected behaviour, etc.)
4. **Determine community feedback** — Adds a label if the author is not a team member
5. **Estimate priority & effort** — Assigns priority (Urgent/High/Medium/Low) and effort (High/Medium/Low), but only if the GitHub MCP server exposes the issue-field tools (`remote_mcp_issue_fields` feature flag). Otherwise the estimates are only recorded in the summary comment and triage continues.
6. **Set issue type** — Assigns Bug, Task, or Story based on content, but only if no type is set yet **and** completeness is ⚠️ Partial or ✅ Complete. Incomplete reports are left untyped to avoid locking in a wrong guess.
7. **Apply labels** — Adds relevant area, technology, and process labels
8. **Post AI summary comment** — Structured comment with completeness rating, related issues, suggested solution, and workaround
9. **Handle missing info** — If incomplete, requests clarification from the author

#### Batch Triage

Ask Kiro to "triage all new issues" and it will:

1. Fetch all open issues without the `🤖ai-triaged` label
2. Filter out PRs and issues already waiting for info (unless the author responded)
3. Process each issue through the single triage workflow
4. Track progress through a temporary spec file

### Key Behaviors

- **Never closes issues** — Only triages and annotates; humans decide on resolution
- **Conservative priority** — When unsure, defaults to Medium
- **Respects existing labels** — Only adds labels, with one exception: `⏳waiting-for-info` is removed when a previously incomplete issue is re-triaged as ✅ Complete or ⚠️ Partial (the author supplied the missing details). All other existing labels are preserved.
- **Re-triages on author response** — Issues marked `⏳waiting-for-info` are re-processed once the author provides missing details
