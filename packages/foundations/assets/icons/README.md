# How to create and provide the technical icon files

We're getting these icons by the [DB Design System colleagues](https://dbsw.sharepoint.com/:f:/r/teams/CXM.Teams-DDSTeam/Shared%20Documents/DDS%20Team/01--Design-System/04--Foundations/07--Icons/04--Exchange-Icons/01--Functional?csf=1&web=1&e=ZEa9Qz) and process the following changes:

-   Minifications with [`ImageOptim`](https://imageoptim.com/mac)
-   Adding some contents within the SVGs (these assets might get exported correctly in the future)
    -   CSS variables (replace `fill="#282D37"` by `fill="#282D37" style="fill: currentColor;fill: var(--db-icon-color, currentColor)"`)
    -   `id`-Attribute (generic `icon` id within all SVG files)
-   Afterwards the JSON files within the `source/_patterns/icons` path might need to get updated
