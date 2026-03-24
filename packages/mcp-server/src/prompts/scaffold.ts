/**
 * Generates a structured prompt that guides an AI agent through the full DB UX
 * MCP discovery workflow before scaffolding a complete page layout.
 * @param page_type - The functional domain of the page (e.g. "Dashboard", "Login Portal").
 * @param framework - The target framework (react, angular, vue, web-components, html).
 * @param additional_requirements - Optional constraints that refine the component plan.
 */
export function handleScaffoldPagePrompt({
	page_type,
	framework,
	additional_requirements
}: {
	page_type: string;
	framework: string;
	additional_requirements?: string;
}) {
	return {
		description:
			'Builds a DB UX page layout using the full MCP discovery workflow',
		messages: [
			{
				role: 'user' as const,
				content: {
					type: 'text' as const,
					text: `You are a Lead Enterprise Frontend Architect specializing in the DB UX Design System v3. Your objective is to architect and implement a production-ready page layout for the Deutsche Bahn digital ecosystem.

Target Framework: ${framework}
Page Type: ${page_type}
Additional Requirements: ${additional_requirements ?? 'None specified.'}

The DB UX system strictly enforces declarative, accessible, and decoupled HTML/CSS architecture. Framework-specific components reside in dedicated packages (e.g., @db-ux/react-core-components, @db-ux/ngx-core-components, @db-ux/v-core-components, @db-ux/wc-core-components).

CRITICAL INSTRUCTION: You are explicitly FORBIDDEN from:
- Hallucinating component names, properties, CSS variables, or import statements
- Using native HTML interactive elements (<button>, <input>, <select>, <a>, <textarea>) where a DB UX component exists
- Using hardcoded color values (e.g. #ec0016) or magic spacing numbers (e.g. margin: 15px) — always use design tokens
- Inventing icon names — always verify via list_icons

If a required UI element does not exist as a DB UX component, STOP and explicitly report which element is missing instead of falling back to a native HTML or custom implementation.

You MUST follow this exact workflow using your MCP tools BEFORE writing any code:

1. PLANNING PHASE: Deconstruct the requested "${page_type}" into logical UI blocks (e.g., Header, Main Content, Form Fields, Data Tables, Modals). Factor in the Additional Requirements: "${additional_requirements ?? 'None specified.'}" — they may add, remove, or constrain the components in your plan.

2. COMPONENT DISCOVERY: Execute 'list_components' to verify that every planned UI block maps to an existing DB UX v3 component. Remove any block whose component does not exist and report it.

3. PROPS & EXAMPLES RETRIEVAL: For every confirmed component:
   a. Execute 'get_component_props' to retrieve the full TypeScript prop API (types, required fields, defaults).
   b. Execute 'get_component_details' to list available example names.
   c. Execute 'get_example_code' with the component name, the most relevant example name, and framework="${framework}" to obtain the exact generated source. Adapt this code — do not rewrite it from scratch.

4. TOKEN & ASSET VALIDATION:
   a. Execute 'list_design_token_categories' to retrieve all valid token categories.
   b. Execute 'get_design_tokens' for every category you need (e.g. "colors", "spacing", "typography"). Use only the returned CSS custom properties (--db-*) — never hardcode values.
   c. If any icon prop is required, execute 'list_icons' and copy the exact name from the returned array.

Native HTML replacement rules (enforce strictly):
- <button>      → DBButton
- <input>       → DBInput
- <select>      → DBSelect
- <a>           → DBLink
- <textarea>    → DBTextarea
- <div> layout  → DBStack, DBSection, DBCard

Do not output code until all four phases are complete. Then structure your response as follows:

1. "Architectural Blueprint": Bulleted list of DB UX components selected, the example used for each, and how Additional Requirements influenced the plan.
2. "Implementation": Complete source code for the requested page as a single file (or clearly separated components if complexity demands it). All imports must reference the correct @db-ux/* package for "${framework}". No hardcoded values, no native interactive elements, no invented icon names.
3. "Accessibility Statement": Confirmation of how semantic HTML and ARIA states are applied through DB UX components, and any additional accessibility measures taken.`
				}
			}
		]
	};
}
