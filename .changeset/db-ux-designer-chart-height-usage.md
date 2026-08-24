---
"@db-ux/agent-cli": patch
---

fix: scale bar graphs onto the height their panel actually has

Bar heights come from the plan as pixels, and a plan cannot know how tall a bento card ends up. A
stretched card therefore turned its extra height into dead space ABOVE the bars while they stayed at
their authored 56/72/88px, using well under half the panel.

Bar graphs now use the height they were given: the runtime rescales the bars of a row onto the
available height with ONE factor, so the ratios — the data — are preserved while a stretched bento
card no longer turns its extra height into dead space above the bars. New audit check
`chart-height-unused` reports what is left, and names the two remaining causes (the row never owned
a height to distribute, or the bars could not be resized) instead of only the symptom.
