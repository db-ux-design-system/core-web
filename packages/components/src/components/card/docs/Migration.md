<!--
SPDX-FileCopyrightText: 2025 DB Systel GmbH

SPDX-License-Identifier: Apache-2.0
-->

## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).

## DB UI Core ➡ DB UX Design System Core components

### class

| Before     | Status | After     | Description |
| ---------- | :----: | --------- | ----------- |
| `cmp-card` |   🔁   | `db-card` |             |

### variant

| Before    | Status |   After   | Description                                                                                                                    |
| --------- | :----: | :-------: | ------------------------------------------------------------------------------------------------------------------------------ |
| `variant` |   🔁   | `variant` | There is no default `header`/`content` anymore. Now you can change the card with `variant="interactive"` to act like a button. |
| `header`  |   ❌   |    ❌     | Add your own content via children/slot.                                                                                        |
| `content` |   ❌   |    ❌     | Add your own content via children/slot.                                                                                        |

### image

| Before                   | Status | After       | Description |
| ------------------------ | :----: | ----------- | ----------- |
| `alt`                    |   🔁   | `imgAlt`    |             |
| `image`                  |   🔁   | `imgSrc`    |             |
|                          |   🆕   | `imgWidth`  |             |
|                          |   🆕   | `imgHeight` |             |
| `illustration`           |   ❌   | ❌          |             |
| `uiCoreIllustrationPath` |   ❌   | ❌          |             |
