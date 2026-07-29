# Icon Font Size (Intern)

Internes Variablen-System für die Größenanpassung von Icons innerhalb von Typografie-Kontexten.

## Überblick

Icons innerhalb von Text (Body/Headline) müssen mit dem Text skalieren. Das `db-base-icon-font-size`-System liefert density- und device-abhängige Icon-Größen, die zu jeder Typografie-Stufe passen.

## Variablen-Pattern

```text
--db-base-icon-font-size-{density}-{device}-{type}-{size}
```

Aufgelöste Kurzform, die auf Elementen verwendet wird:

```text
--db-icon-font-size
--db-base-body-icon-font-size-{size}
--db-base-headline-icon-font-size-{size}
```

## Parameter

- **density**: expressive, regular, functional
- **device**: desktop, mobile
- **type**: body, headline
- **size**: 3xs, 2xs, xs, sm, md, lg, xl, 2xl, 3xl

## Funktionsweise

1. SCSS-Mixin generiert alle Kombinationen von density × device × type × size
2. Der aktive Density- und Device-Mode löst den korrekten Wert auf
3. Komponenten nutzen `--db-icon-font-size`, das auf den aufgelösten Wert zeigt
4. Die Icon-Font-Size wird aus `font-size × line-height` des zugehörigen Typografie-Tokens berechnet

## Figma

In Figma sind das `✳️ db-base/icon-font-size`-Variablen in der Density Collection. Sie sind interne Primitive — nicht für direkte Nutzung durch Designer, sondern werden von Komponenten-Internals konsumiert.

## Nutzung in der Komponentenentwicklung

Beim Bau einer Komponente, die Icons neben Text enthält:

```scss
@use "icons";

.my-component-icon {
	font-size: icons.$default-icon-font-size; // var(--db-icon-font-size)
}
```

Der Wert passt sich automatisch an den umgebenden Typografie-Kontext und die Density an.
