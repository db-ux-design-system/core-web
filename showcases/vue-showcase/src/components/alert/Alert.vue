<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/alert";
import { DBAlert } from "../../../../../output/vue/vue3/src";
import { DefaultComponentVariants } from "../../../../shared/default-component-data";

defaultComponentVariants.forEach((variant) => {
	variant.examples[0].code = "<Alert>Alert</Alert>";
});

const linkSlot = "<template v-slot:link>Link</template>";

// Type
defaultComponentVariants[0].examples[0].code = `<DBAlert type="alert" headline="Headline" :link=\"{href: "#"}\">Alert ${linkSlot}</DBAlert>`;
defaultComponentVariants[0].examples[1].code = `<DBAlert type="inline" headline="Headline" :link=\"{href: "#"}\">Alert ${linkSlot}</DBAlert>`;

// Variant
defaultComponentVariants[1].examples[0].code = `<DBAlert icon="account" type="alert" headline="Headline" :link=\"{href: "#"}\">Alert ${linkSlot}</DBAlert>`;

defaultComponentVariants[1].examples[1].code = `<DBAlert variant="critical" headline="Headline" :link=\"{href: "#"}\">Alert ${linkSlot}</DBAlert>`;

defaultComponentVariants[1].examples[2].code = `<DBAlert variant="informational" headline="Headline" :link=\"{href: "#"}\">Alert ${linkSlot}</DBAlert>`;
defaultComponentVariants[1].examples[3].code = `<DBAlert variant="successful" headline="Headline" :link=\"{href: "#"}\">Alert ${linkSlot}</DBAlert>`;

defaultComponentVariants[1].examples[4].code = `<DBAlert variant="warning" headline="Headline" :link=\"{href: "#"}\">Alert ${linkSlot}</DBAlert>`;

// Content
defaultComponentVariants[2].examples[0].code = `<DBAlert icon="account" headline="Headline" :link=\"{href: "#"}\">Headline & Text & Link & Icon ${linkSlot}</DBAlert>`;
defaultComponentVariants[2].examples[1].code = `<DBAlert headline="Headline" :link=\"{href: "#"}\">Headline & Text & Link ${linkSlot}</DBAlert>`;
defaultComponentVariants[2].examples[2].code = `<DBAlert :link=\"{href: "#"}\">Text & Link ${linkSlot}</DBAlert>`;
defaultComponentVariants[2].examples[3].code = `<DBAlert>Text</DBAlert>`;

// Behaviour
defaultComponentVariants[3].examples[0].code = `<DBAlert headline="Headline" :link=\"{href: "#"}\" onClick={()=>{alert("click close button")}}>Alert ${linkSlot}</DBAlert>`;
defaultComponentVariants[3].examples[1].code = `<DBAlert headline="Headline" :link=\"{href: "#"}\" behaviour="permanent">Alert ${linkSlot}</DBAlert>`;

const onClick = () => {
	alert("click close button");
};
</script>

<template>
	<DefaultComponent title="DBAlert" :variants="defaultComponentVariants">
		<template #example="{ exampleIndex, variantIndex, exampleName }">
			<template v-if="exampleIndex === 0 && variantIndex === 0">
				<DBAlert type="alert" headline="Headline" :link="{ href: '#' }">
					{{ exampleName }}
					<template v-slot:link> Link </template>
				</DBAlert>
			</template>
			<template v-if="exampleIndex === 1 && variantIndex === 0">
				<DBAlert
					type="inline"
					headline="Headline"
					:link="{ href: '#' }"
				>
					{{ exampleName }}
					<template v-slot:link> Link </template>
				</DBAlert>
			</template>

			<template v-if="exampleIndex === 0 && variantIndex === 1">
				<DBAlert
					icon="account"
					type="alert"
					headline="Headline"
					:link="{ href: '#' }"
				>
					{{ exampleName }}
					<template v-slot:link> Link </template>
				</DBAlert>
			</template>
			<template v-if="exampleIndex === 1 && variantIndex === 1">
				<DBAlert
					variant="critical"
					headline="Headline"
					:link="{ href: '#' }"
				>
					{{ exampleName }}
					<template v-slot:link> Link </template>
				</DBAlert>
			</template>
			<template v-if="exampleIndex === 2 && variantIndex === 1">
				<DBAlert
					variant="informational"
					headline="Headline"
					:link="{ href: '#' }"
				>
					{{ exampleName }}
					<template v-slot:link>Link</template>
				</DBAlert>
			</template>
			<template v-if="exampleIndex === 3 && variantIndex === 1">
				<DBAlert
					variant="successful"
					headline="Headline"
					:link="{ href: '#' }"
				>
					{{ exampleName }}
					<template v-slot:link> Link </template>
				</DBAlert>
			</template>
			<template v-if="exampleIndex === 4 && variantIndex === 1">
				<DBAlert
					variant="warning"
					headline="Headline"
					:link="{ href: '#' }"
				>
					{{ exampleName }}
					<template v-slot:link> Link </template>
				</DBAlert>
			</template>

			<template v-if="exampleIndex === 0 && variantIndex === 2">
				<DBAlert
					icon="account"
					headline="Headline"
					:link="{ href: '#' }"
				>
					{{ exampleName }}
					<template v-slot:link> Link </template>
				</DBAlert>
			</template>
			<template v-if="exampleIndex === 1 && variantIndex === 2">
				<DBAlert headline="Headline" :link="{ href: '#' }">
					{{ exampleName }}
					<template v-slot:link> Link </template>
				</DBAlert>
			</template>
			<template v-if="exampleIndex === 2 && variantIndex === 2">
				<DBAlert :link="{ href: '#' }">
					{{ exampleName }}
					<template v-slot:link> Link </template>
				</DBAlert>
			</template>
			<template v-if="exampleIndex === 3 && variantIndex === 2">
				<DBAlert>{{ exampleName }}</DBAlert>
			</template>

			<template v-if="exampleIndex === 0 && variantIndex === 3">
				<DBAlert
					headline="Headline"
					@click="onClick()"
					:link="{ href: '#' }"
				>
					{{ exampleName }}
					<template v-slot:link> Link </template>
				</DBAlert>
			</template>
			<template v-if="exampleIndex === 1 && variantIndex === 3">
				<DBAlert
					headline="Headline"
					:link="{ href: '#' }"
					behaviour="permanent"
				>
					{{ exampleName }}
					<template v-slot:link> Link </template>
				</DBAlert>
			</template>
		</template>
	</DefaultComponent>
</template>
