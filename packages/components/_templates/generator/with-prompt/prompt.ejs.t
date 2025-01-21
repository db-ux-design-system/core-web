# SPDX-FileCopyrightText: 2025 DB Systel GmbH
#
# SPDX-License-Identifier: Apache-2.0

---
to: _templates/<%= name %>/<%= action || 'new' %>/prompt.js
---

// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    type: 'input',
    name: 'message',
    message: "What's your message?"
  }
]
