# Colors

Adaptive Farb-Tokens für konsistent aufgebaute Paletten, mit Background- und Content-Farben, die Barrierefreiheit durch definierte Kontrastverhältnisse sicherstellen.

## Regeln

1. Das Farbsystem basiert auf definierten Hintergrundfarben (bg) mit dazu passenden Inhaltsfarben (on-bg). Immer den passenden on-bg-Token zusammen mit dem jeweiligen bg-Token verwenden.
2. Es gibt vier Gruppen: Basic, Inverted, Vibrant und Origin. bg- und on-bg-Tokens innerhalb einer Gruppe gehören immer zusammen und können nicht mit Tokens aus anderen Gruppen kombiniert werden.
3. Adaptive Tokens standardmäßig verwenden — ohne explizite Zuweisung bilden sie die Neutral Farbpalette ab. Weitere Details befinden sich in der _principles/adaptive-colors.md
4. Für barrierefreien Text ist ein Kontrastverhältnis von mindestens 4,5:1 einzuhalten. Für Icons mindestens 3:1. Das ergibt folgende mögliche Kombinationen:
    - bg-basic-level-1/2/3 + on-bg-basic-emphasis-100/90/80 für Text
    - bg-basic-level-1/2/3 + on-bg-basic-emphasis-100/90/80/70 für Icons
    - bg-basic-level-1/2/3 + on-bg-basic-emphasis-60 für dekorative Elemente die keine Kontrastverhältnisse gewährleisten müssen
    - bg-basic-level-1/2/3 + bg-basic-transparent-full/semi + on-bg-basic-emphasis-100/90/80 für Text
    - bg-basic-level-1/2/3 + bg-basic-transparent-full/semi + on-bg-basic-emphasis-100/90/80/70 für Icons
    - bg-inverted-contrast-max/high + on-bg-inverted für Text
    - bg-inverted-contrast-max/high/low + on-bg-inverted für Icons
    - bg-vibrant + on-bg-vibrant für Text und Icons
    - origin + on-origin für Text und Icons
5. Beim Übereinanderlegen mehrerer Hintergründe kann der Kontrast der Hintergründe zueinander nicht automatisch garantiert werden. Solche Fälle müssen daher individuell geprüft werden. Ausgenommen ist die Kombination bg-basic-level-1/2/3 + bg-basic-transparent-full/semi.
6. Elemente werden standardmäßig immer mit den -default Tokens eingefärbt. -hovered und -pressed werden nur für die jeweiligen Interaktionszustände genutzt.
