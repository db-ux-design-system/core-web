<script setup lang="ts">
import { DBButton, DBSelect, DBStack, DBTooltip } from "@components";

interface Props {
	hasNextPage: boolean;
	hasPreviousPage: boolean;
	nextPage: () => void;
	pageCount: number;
	pageIndex: number;
	pageSize: number;
	previousPage: () => void;
	setPageIndex: (index: number) => void;
	setPageSize: (size: number) => void;
}

defineProps<Props>();
</script>

<template>
	<DBStack direction="row" alignment="center" justifyContent="center">
		<DBButton
			@click="setPageIndex(0)"
			:disabled="!hasPreviousPage"
			variant="ghost"
			noText
			icon="double_chevron_left"
		>
			First Page
			<DBTooltip placement="top">First Page</DBTooltip>
		</DBButton>
		<DBButton
			@click="previousPage()"
			:disabled="!hasPreviousPage"
			variant="ghost"
			noText
			icon="chevron_left"
		>
			Previous Page
			<DBTooltip placement="top">Previous Page</DBTooltip>
		</DBButton>
		<DBButton
			@click="nextPage()"
			:disabled="!hasNextPage"
			variant="ghost"
			noText
			icon="chevron_right"
		>
			Next Page
			<DBTooltip placement="top">Next Page</DBTooltip>
		</DBButton>
		<DBButton
			@click="setPageIndex(pageCount - 1)"
			:disabled="!hasNextPage"
			variant="ghost"
			noText
			icon="double_chevron_right"
		>
			Last Page
			<DBTooltip placement="top">Last Page</DBTooltip>
		</DBButton>
		<DBStack style="width: fit-content" gap="3x-small">
			<div>Page</div>
			<strong>{{ pageIndex + 1 }} of {{ pageCount }}</strong>
		</DBStack>
		<DBSelect
			variant="floating"
			label="Amount of Entries"
			:modelValue="pageSize"
			@update:modelValue="setPageSize(Number($event))"
		>
			<option
				v-for="size in [5, 10, 20, 30, 40, 50]"
				:key="size"
				:value="size"
			>
				Show {{ size }}
			</option>
		</DBSelect>
	</DBStack>
</template>
