---
"@db-ux/core-components": minor
"@db-ux/ngx-core-components": minor
"@db-ux/react-core-components": minor
"@db-ux/wc-core-components": minor
"@db-ux/v-core-components": minor
---

feat(DBFooterMeta): derive the meta layout from the available width

The copyright and the secondary content sit side by side while there is room for both and
stack once there is not, with the copyright aligned to the top of the row either way. The
switch is intrinsic to the flex layout rather than driven by a viewport media query, so a
footer narrowed by its surroundings, such as a shell with an open side panel, stacks even
while a wide window is open.

The strip also sets `body-sm` on itself, so the list items no longer keep the inherited
body size and push the links below the copyright next to them. Related fix: the `width`
variants clamp the inner content in `rem` instead of `em`, because `em` resolved against
each area's own font size and made the meta area 96 px narrower than the content area.
