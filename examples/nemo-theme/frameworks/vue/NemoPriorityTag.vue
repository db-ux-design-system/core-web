<template>
  <div 
    :data-nemo-priority="priority"
    :class="`nemo-priority-tag ${additionalClasses}`"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
type PriorityLevel = 'high' | 'medium' | 'low' | 'info'

interface Props {
  priority: PriorityLevel
  additionalClasses?: string
}

withDefaults(defineProps<Props>(), {
  additionalClasses: ''
})
</script>

<style scoped>
.nemo-priority-tag {
  display: inline-flex;
  align-items: center;
}
</style>