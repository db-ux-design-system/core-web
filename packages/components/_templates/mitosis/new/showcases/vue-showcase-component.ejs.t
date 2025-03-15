# SPDX-FileCopyrightText: 2025 DB Systel GmbH
#
# SPDX-License-Identifier: Apache-2.0

---
to: "<%= showcases ? `../../showcases/vue-showcase/src/components/${name}/${h.changeCase.pascal(name)}.vue` : null %>"
---
<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/<%= name %>.json";
import { DB<%= h.changeCase.pascal(name) %> } from "../../../../../output/vue/src";
</script>

<template>
	<DefaultComponent title="DB<%= h.changeCase.pascal(name) %>" :variants="defaultComponentVariants">
		<template #example="{ exampleIndex, variantIndex, exampleName, exampleProps }">
            <DB<%= h.changeCase.pascal(name) %>>{{exampleName}}</DB<%= h.changeCase.pascal(name) %>>
		</template>
	</DefaultComponent>
</template>

