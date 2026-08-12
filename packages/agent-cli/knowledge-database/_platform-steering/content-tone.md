---
name: db-ux-content-tone
description: Applies the right tone of voice when writing or revising text for the design system platform. The platform has two areas – "Product & Services" (confident & distinguished) and "Documentation" (fact-based, clear & direct). Always use when writing descriptions, guidelines, component texts, changelogs, or product content.
---

# Content Tone of Voice

The platform has two areas, each with its own tone. Pick the right one before writing.

## Step 1: Determine the area

| Area | Typical content | Tone reference |
|---|---|---|
| **Product & Services** | General information about the design system, value/benefit arguments, status updates | #[[file:content-tone/product-and-services.md]] |
| **Documentation** | Component descriptions, guidelines, usage notes, changelogs | #[[file:content-tone/documentation.md]] |

If it isn't clear from context, ask briefly.

## Step 2: Apply tone rules

Read the matching reference file and follow its rules. Pay close attention to the "What to avoid" list – that's the clearest signal a text has drifted into the wrong area.

## Phrasing Patterns

Patterns that apply across both areas:

- Soft rules: "Keep ... reasonable", "... is supported but reduces..."
- Hard rules: "Don't use ... for ...", state technical limits clearly
- Recommendations: "Use ... when ...", "... is better suited for..."

## Do/Dont Texts

Rules for guideline Do/Dont descriptions:

- Do: Formulate positively, state what to do
- Dont: Start with "Don't...", include a concrete reason
- Caution: Use instead of Dont when the usage is suboptimal but not a hard error. Formulate as a neutral observation with a recommendation
- Always provide the "why" or the consequence
- Soft wording when there is no hard error, restrictive when technically limited
- Register: no colloquialisms and no evaluative phrases. Name the criterion instead of judging it. Avoid "lohnt sich", "bequem", "macht Sinn", "ist praktisch", "pays off", "is convenient", "makes sense". This applies to guideline intro texts as well as Do/Dont/Caution descriptions

### German Do/Dont Pattern

Both Do and Dont use imperative (direct address):

- **Do:** "Verwende eine Badge, um Status neben einem Listenelement anzuzeigen."
- **Dont:** "Setze eine Badge nicht als einzigen Hinweis für kritische Informationen ein."

Structure: Verb (Imperativ) + Objekt + "nicht" + Rest. The negation sits naturally after the object, not at the start of the sentence. Never start with "Nicht..." — always lead with the verb.

Nothing may sit between the object and "nicht". A condition or qualifier placed there strands the negation in the middle of the sentence and the reference becomes unclear. Put the condition into a following `wenn` clause and the reason into a sentence of its own.

- **Bad:** "Verwende Sub Navigation Top bei vielen Navigation Items auf Unterebene nicht, weil der horizontale Platz nicht ausreicht und Items umbrechen oder abgeschnitten werden."
- **Good:** "Verwende Sub Navigation Top nicht, wenn die Unterebene viele Navigation Items enthält. Der horizontale Platz reicht dann nicht aus und Items werden abgeschnitten."

This keeps the object short, so "nicht" closes the main clause. Two short sentences are always preferable to one nested sentence carrying condition and reason at once.

### German Guideline Intro Texts

The short paragraph above Do/Dont images must read as a natural German sentence. Never use bare infinitive constructions without a subject — these read like bullet-point fragments, not prose.

- **Bad:** "Für Links im Fließtext Text-Link-Styles statt der eigenständigen Link-Komponente verwenden."
- **Good:** "Verwende für Links im Fließtext Text-Link-Styles statt der eigenständigen Link-Komponente."
- **Also good:** "Für Links im Fließtext eignen sich Text-Link-Styles besser als die eigenständige Link-Komponente."

Rule: Every guideline intro paragraph must have a clear subject or start with an imperative verb. No dangling infinitives at the end of a sentence.

## Release Notes Tone

- Write for humans, not machines – release notes are read by designers and developers
- Use present tense or present perfect to describe the state after the release ("is now", "has been added")
- Avoid commit prefixes like `feat:`, `fix:`, `chore:` – these belong in git history, not user-facing notes
- Be specific: name the component, the variant, or the property that changed
- Keep each entry to 1–2 sentences maximum; use sub-bullets for lists of affected items
- An exception might be simple entries, like e.g. Icons – do not add redundancy by sentences like "New icons for social media platforms have been added.", as this is even already in the `##### Added` section, but list the new icons instead
- End every bullet point with a period – release notes entries are full sentences

## Edge cases

- Free/editorial content (blog posts, campaigns, social media) doesn't fall into either area – that's covered by the separate "Lively & Fresh" tone, which this skill doesn't cover. In that case, point out that this skill isn't meant for it.
- A text can contain elements from both areas (e.g. a documentation page with a product summary at the top). In that case, apply the matching tone per section rather than blending them.
