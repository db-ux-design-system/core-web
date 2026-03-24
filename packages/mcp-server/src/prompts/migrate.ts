export function handleMigrateComponentPrompt({
	legacy_code,
	source_context,
	target_framework
}: {
	legacy_code: string;
	source_context: string;
	target_framework: string;
}) {
	return {
		description:
			'Migrates legacy UI code to DB UX v3 standards using MCP tools',
		messages: [
			{
				role: 'user' as const,
				content: {
					type: 'text' as const,
					text: `You are a Legacy Systems Modernization Specialist and DB UX Architecture Expert.
Your assignment is to securely migrate UI code from ${source_context} into the modern DB UX Design System v3 standard.

<legacy_snippet>
${legacy_code}
</legacy_snippet>

Target V3 Framework: ${target_framework}

Do not perform a naive, line-by-line syntax translation. Be aware of these documented structural shifts in DB UX v3:

PACKAGE RENAMES (db-ui → db-ux):
- @db-ui/foundations → @db-ux/core-foundations
- @db-ui/components → @db-ux/core-components
- @db-ui/ngx-components → @db-ux/ngx-core-components
- @db-ui/react-components → @db-ux/react-core-components
- @db-ui/v-components → @db-ux/v-core-components
- @db-ui/web-components → @db-ux/wc-core-components

KNOWN BREAKING CHANGES TO APPLY:
- data-color-scheme → data-mode
- data-container-color → data-color
- behaviour → behavior (all components)
- data-icon-before/after → data-icon-leading/trailing, iconLeading/iconTrailing
- DBButton: removed describedbyid/ariaexpanded/ariapressed/label props → use native aria-* attributes directly
- DBLink: removed selected/current/label props → use aria-selected/aria-current/aria-label
- DBNavigation: removed labelledBy → use aria-labelledby
- DBCard behavior='interactive': no longer sets role='button' or tabIndex — wrap with <button> or <a> instead
- DBSwitch: emphasis prop removed
- DBCustomSelect: ariaListLabel renamed to listLabel
- Tooltip: variant='with arrow'|'basic' → showArrow=true|false

COMPONENTS WITHOUT DIRECT V3 EQUIVALENTS (do not invent replacements — use documented strategies):
- rea-main → db-page (already includes <main>)
- rea-grid → CSS Grid with var(--db-spacing-fixed-md) or db-stack
- rea-footer → semantic <footer> + db-link (planned Q4/2025)
- elm-headline → semantic <h1>–<h6> + db-infotext for subtitles
- elm-loadingindicator → planned Q4/2025; use aria-live region temporarily
- elm-progress → planned Q4/2025; use HTML5 <progress> with aria-label
- elm-chip → db-tag wrapping db-button/db-checkbox/db-radio
- cmp-breadcrumb → planned Q4/2025; use <nav aria-label="Breadcrumb"> + db-link
- cmp-pagination → planned Q4/2025; use db-button with ARIA labels
- cmp-table → under research; use semantic <table> with custom styling
- cmp-sidenavi → db-navigation inside db-drawer
- cmp-dialog → db-drawer or custom modal with focus management + ARIA

CLI AUTOMATION HINT: Inform the developer that automated search-and-replace migration is available:
- DB UI v1 → v1.0.0: npx @db-ux/core-migration --type=v007_v100 --src=./src
- v1/v2 → v3.0.0: npx @db-ux/core-migration --type=v200_v300 --src=./src
- v3 → v4.0.0: npx @db-ux/core-migration --type=v300_v400 --src=./src
Always advise the developer to review CLI output manually afterwards.

You must execute this cognitive workflow:

1. SEMANTIC PARSING: Analyze the legacy snippet to understand its functional intent (e.g., navigation bar, data table, form with validation states). Identify which of the known breaking changes or missing components apply.
2. V3 MAPPING: Call 'list_components' to verify the exact equivalent components in the DB UX v3 ecosystem. If a component has no direct equivalent, apply the documented strategy above — do not invent a custom solution.
3. SPECIFICATION ACQUISITION: For every confirmed v3 component, call 'get_component_props' and 'get_example_code' with framework="${target_framework}". Study the v3 prop API carefully — do not assume legacy prop names still exist.
4. TOKEN MIGRATION: Call 'get_design_tokens' to replace any legacy CSS variables, utility classes, or hardcoded values with the correct --db-* custom properties.

Your response must be structured as follows:

1. "Migration Analysis": Map each legacy element to its v3 replacement. Explicitly call out every breaking change applied and every component without a direct equivalent (with its documented workaround).
2. "V3 Refactored Code": The fully migrated, production-ready code block using the correct @db-ux/* package for "${target_framework}". No legacy prop names, no hardcoded values, no invented components.
3. "CLI Migration Hint": State the exact npx @db-ux/core-migration command applicable for the detected source_context.
4. "Actionable Post-Migration Notes": List behavioral shifts and ARIA states the developer must manually verify after migration.`
				}
			}
		]
	};
}
