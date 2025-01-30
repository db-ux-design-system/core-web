# ADR-04 - Use `cursor: pointer` on Buttons and Interactive Elements

## Decision and justification

We have decided to use the `cursor: pointer` CSS property on buttons and other interactive elements to improve the user experience by providing a visual cue that these elements are clickable.

There are strong opinions against a `cursor: pointer` like in this [article](https://medium.com/simple-human/buttons-shouldnt-have-a-hand-cursor-b11e99ca374b). But based on feedback from our users they "learned" that websites have the pointer on interactive elements. If we keep with the standard behaviour, we cause a lot of confusion.
Even Apple and Microsoft are using `cursor: pointer` on their websites, while providing a default cursor in their Operating Systems.

## Problem description and context

In web applications, it is important to provide clear visual feedback to users about which elements are interactive. By default, the cursor does not change when hovering over buttons or other interactive elements, which can lead to confusion and a poor user experience.

## General conditions and decision criteria

### General conditions

- The application should be intuitive and easy to use.
- Users should be able to easily identify interactive elements.

### Decision criteria

- Improve user experience by providing clear visual feedback.
- Follow common web design practices and standards.

## Alternatives

### A - Use `cursor: pointer` on interactive elements

#### Evaluation

- Pros:

    - Provides a clear visual cue that an element is clickable.
    - Follows common web design practices and standards.
    - Improves overall user experience.

- Cons:
    - Requires additional CSS rules.

### B - Do not use `cursor: pointer` on interactive elements

#### Evaluation

- Pros:

    - No additional CSS rules required.

- Cons:
    - Users may not easily identify interactive elements.
    - Poor user experience due to lack of visual feedback.

## Consequences

By using `cursor: pointer` on buttons and other interactive elements, we ensure that users have a clear visual indication of which elements are clickable, leading to a more intuitive and user-friendly application.

## Links

- [MDN Web Docs: cursor](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor)
- [W3C Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/#content-on-hover-or-focus)
