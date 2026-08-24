---
"@db-ux/agent-cli": patch
---

fix: derive the bootstrap chunk size instead of hard-coding it

The store-once bootstrap split the runtime into fixed 7 000-character chunks, so transferring it
took 11 verbatim `use_figma` calls. The binding constraint is not either hard limit — the
`use_figma` `code` cap is 50 000 characters and Figma allows 100 kB per shared-plugin-data entry —
it is the MODEL, which must reproduce each chunk byte-for-byte in one message.

The chunk COUNT is now derived from a per-message budget (`MAX_CHUNK`) and the runtime is spread
evenly over it, currently 5 chunks. Deriving it beats a fixed size twice over: a fixed size left
the last chunk holding a fraction of the payload, which cost a whole extra verbatim round trip for
a few percent of the bytes, and every growth spurt past a multiple flipped the count — which
invalidates the bootstrap and every concrete number in the docs. Evenly sized chunks also fail more
predictably: no outlier chunk that is several times the size of the others.

The doc-drift guard no longer demands the exact chunk size and last-chunk length in prose, because
both now change on almost every build; it still checks the COUNT, which is what tells an agent how
many calls to make and which files to paste. Existing Figma files re-bootstrap lazily on their next
render.
