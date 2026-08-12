# Platform-Steering (temporärer Arbeitsstand)

Arbeitskopie der Steering-Dateien aus dem Platform-Repo `db-ux-design-system.github.io`. **Dieser Ordner ist temporär** und wird nach dem Zurückspielen der Änderungen wieder entfernt.

## Warum hier

Die `documentation.json` wird in dieser Wissensbasis generiert, die Tonalitätsregeln für die generierten Texte liegen aber im Platform-Repo. Ergibt sich beim Generieren eine Lücke in diesen Regeln, wird sie hier ergänzt und gesammelt in das Platform-Repo integriert, statt pro Fund einen eigenen Wechsel zwischen den Repos zu machen.

## Herkunft

| Datei hier                             | Quelle im Platform-Repo                               |
| -------------------------------------- | ----------------------------------------------------- |
| `content-tone.md`                      | `.kiro/steering/content-tone.md`                      |
| `content-tone/documentation.md`        | `.kiro/steering/content-tone/documentation.md`        |
| `content-tone/product-and-services.md` | `.kiro/steering/content-tone/product-and-services.md` |
| `content-formatting.md`                | `.kiro/steering/content-formatting.md`                |

Stand des Imports: 2026-08-12, Branch `feat(documentation)--component-documentation-shell-controlpanel`, Commit `4ac350d`.

`product-and-services.md` ist inhaltlich nicht betroffen und nur mitkopiert, damit der Include in `content-tone.md` auflöst.

## Regeln für diesen Ordner

- Der Ordner ist in `.prettierignore` und `.markdownlintignore` eingetragen. Die Dateien bleiben damit byte-identisch zum Platform-Repo und der Diff beim Zurückspielen enthält nur die fachlichen Änderungen.
- Änderungen werden ausschließlich hier gemacht, nie parallel im Platform-Repo.
- Die Dateien sind **kein aktives Steering** in diesem Repo. Sie liegen bewusst nicht unter `.kiro/steering/`.

## Offene Änderungen zum Zurückspielen

| Datei             | Abschnitt                    | Änderung                                                     |
| ----------------- | ---------------------------- | ------------------------------------------------------------ |
| `content-tone.md` | `### German Do/Dont Pattern` | Bedingung darf nicht zwischen Objekt und „nicht" stehen      |
| `content-tone.md` | `## Do/Dont Texts`           | Register: keine Umgangssprache und keine wertenden Wendungen |

Nach dem Zurückspielen: Einträge aus dieser Tabelle entfernen, Ordner löschen, die beiden Ignore-Einträge zurücknehmen und den Verweis in `writing-conventions.md` wieder auf das Platform-Repo richten.
