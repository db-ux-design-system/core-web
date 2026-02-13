<script lang="ts" setup></script>

<template></template>

<style lang="scss" scoped>
.test {
	background: colors.$db-adaptive-bg-basic-level-1-default;
	border: 1px solid $white;
	height: 100%;
	width: 200px;
	padding: functions.to-rem(20px);

	&__aa {
		padding: 0 spaces.$spaceL spaces.$spaceL spaces.$space5XL;

		@include test.bla {
			padding: 0 spaces.$spaceM spaces.$spaceM spaces.$spaceM;
		}
	}

	&__a {
		align-items: center;
		display: flex;
		margin-bottom: functions.to-rem(20px);

		&-title {
			font-size: functions.to-rem(20px);
			font-weight: bold;
		}
	}

	&__b {
		display: flex;
		flex-direction: column;
		margin-top: functions.to-rem(20px);
		border: 1px solid red;
		border-radius: functions.to-rem(4px);

		&-title {
			font-size: functions.to-rem(16px);
			font-weight: bold;
			border-width: 1em;
		}

		&-x {
			margin: functions.to-rem(8px) 0;
		}

		&-y {
			margin-top: 8px;
		}

		&-z {
			margin-left: 16px;
		}
	}

	&__c {
		margin-bottom: 0.5rem;
	}
}
</style>
