<!--
SPDX-FileCopyrightText: 2025 DB Systel GmbH

SPDX-License-Identifier: Apache-2.0
-->

## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).

## DB UI Core ➡ DB UX Design System Core components

### class

| Before             | Status | After             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------ | :----: | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `elm-notification` |   🔁   | `db-notification` | The old notification component has been split into 2 different components [Notification](https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/db-ux-design-system-v3/components/feedback/notification) and [Notification](https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/db-ux-design-system-v3/components/feedback/notification) for more information (when and how to use it). |

### variant ➡ type

| Before         | Status | After          | Description                                             |
| -------------- | :----: | -------------- | ------------------------------------------------------- |
| `notification` |   🔁   | `notification` | Default notification with different look                |
| `status`       |   ❌   | ❌             | Status can be changed by `variants`                     |
|                |   🆕   | `inline`       | New styling with shadow and rounded corners (like card) |

### type ➡ variants

| Before        | Status | After           | Description                                              |
| ------------- | :----: | --------------- | -------------------------------------------------------- |
|               |   🆕   | `adaptive`      | Default: change colors based on background               |
| `error`       |   🔁   | `critical`      | 'Red' colored notification to show error messages        |
| `informative` |   🔁   | `informational` | 'Blue' colored notification to show information messages |
| `warning`     |   🔁   | `warning`       | 'Yellow' colored notification to show warning messages   |
| `success`     |   🔁   | `successful`    | 'Green' colored notification to show success messages    |
