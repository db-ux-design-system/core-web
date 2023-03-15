---
to: ../../showcases/vue-showcase/src/components/<%= name %>/<%= h.changeCase.pascal(name) %>.vue
---
<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/<%= name %>";
import { DB<%= h.changeCase.pascal(name) %> } from "../../../../../output/vue/vue3/src";
</script>

<template>
	<DefaultComponent title="<%= h.changeCase.pascal(name) %>" :variants="defaultComponentVariants">
		<template #example="{ exampleIndex, variantIndex, exampleName }">
				<template v-if="exampleIndex === 0">
            		<DB<%= h.changeCase.pascal(name) %>>{{exampleName}}</DB<%= h.changeCase.pascal(name) %>>
            	</template>
		</template>
	</DefaultComponent>
</template>

