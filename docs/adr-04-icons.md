# ADR-04 - How to handle functional icons

_WIP_

## Decision and justification

We'll provide both SVG files, as well as icon fonts for total flexibility by the consuming developers. Out of our system we're focusing on using the latter, as this simplifies problems regarding e.g. referencing the assets at the correct path.

In general, these would be the ways how to reference a functional icon:
- Icons that we'd like to set based on the guidelines (like a specific icon for a specific variant, type or whatever): Via SCSS mixin, especially to separate markup from styling, and to ensure non-breaking update feasibility.
- Icons that the user could set: Either via SCSS mixin, or HTML attribute `data-icon`, depending on their tech stack.

## Problem description and context

## General conditions and decision criteria

### General conditions

### Decision criteria

-   ...

## Alternatives

### A - Alternative name

#### Evaluation

### B - Alternative name

#### Evaluation

## Consequences

## Links
