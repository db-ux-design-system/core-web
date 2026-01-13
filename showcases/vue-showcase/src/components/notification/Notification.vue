<script setup lang="ts">
import { DBLink, DBNotification } from "@components";
import defaultComponentVariants from "../../../../shared/notification.json";
import DefaultComponent from "../DefaultComponent.vue";

const log = (exampleName: string) => {
	// eslint-disable-next-line no-notification
	alert(exampleName);
};
</script>

<template>
	<DefaultComponent
		title="DBNotification"
		:variants="defaultComponentVariants"
	>
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBNotification
				:semantic="exampleProps?.semantic"
				:headline="exampleProps?.headline"
				:variant="exampleProps?.variant"
				:link-variant="exampleProps?.linkVariant"
				:timestamp="exampleProps?.timestamp"
				:icon="exampleProps?.icon"
				:closeable="exampleProps?.closeable"
				:showIcon="exampleProps?.showIcon"
				:showHeadline="exampleProps?.showHeadline"
				:showTimestamp="exampleProps?.showTimestamp"
				@onClose="log(exampleName)"
			>
				<template v-if="exampleProps?.link" v-slot:link>
					<DBLink href="#">Textlink</DBLink>
				</template>
				<template v-if="exampleProps?.img" v-slot:image>
					<img
						src="/assets/images/placeholder.jpg"
						alt="this is a fancy placeholder"
					/>
				</template>
				{{ exampleName }}
			</DBNotification>
		</template>
	</DefaultComponent>
</template>
