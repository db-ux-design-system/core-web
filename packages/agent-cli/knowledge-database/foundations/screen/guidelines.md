# Screen

Viewport-Größen für responsives Design.

## Regeln

1. Breakpoints ausschließlich über `screen`-Tokens setzen, nie über eigene Zwischenwerte.

## Zusätzliche Informationen

- Die CSS Custom Properties `--db-screen-*` funktionieren nicht in Media Queries, weil `@media` keine Custom Properties auflöst. Für Breakpoints in SCSS stehen stattdessen der `screen`-Mixin (`@include screen-sizes.screen("md") { … }`) und die SCSS-Variablen `$db-breakpoint-*` bereit.
