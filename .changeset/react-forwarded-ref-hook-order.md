---
"@db-ux/react-core-components": patch
---

fix: call `useRef` unconditionally in all components so that switching a forwarded `ref` between `null` and a ref object no longer changes the hook order and crashes the component
