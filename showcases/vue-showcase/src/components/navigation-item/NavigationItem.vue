<!--
SPDX-FileCopyrightText: 2025 DB Systel GmbH

SPDX-License-Identifier: Apache-2.0
-->

<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/navigation-item.json";
import { DBNavigationItem } from "../../../../../output/vue/src";

const log = (exampleName?: string) => {
	// eslint-disable-next-line no-alert
	alert(exampleName);
};
</script>

<template>
	<DefaultComponent
		title="DBNavigationItem"
		:variants="defaultComponentVariants"
	>
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<ul>
				<DBNavigationItem
					:icon="exampleProps?.icon"
					:width="exampleProps?.width"
					:disabled="exampleProps?.disabled"
					:active="exampleProps?.active"
					:areaPopup="exampleProps?.areaPopup"
					@click="log(exampleName)"
				>
					<template v-if="exampleProps?.areaPopup" #sub-navigation>
						<ul>
							<DBNavigationItem
								><a href="#">Test1</a></DBNavigationItem
							>
							<DBNavigationItem
								><a href="#">Test2</a></DBNavigationItem
							>
							<DBNavigationItem
								><a href="#">Test3</a></DBNavigationItem
							>
						</ul>
					</template>
					<template v-if="exampleProps?.areaPopup">
						{{ exampleName }}
					</template>
					<a v-if="!exampleProps?.areaPopup" href="#">{{
						exampleName
					}}</a>
				</DBNavigationItem>
			</ul>
		</template>
	</DefaultComponent>
</template>
