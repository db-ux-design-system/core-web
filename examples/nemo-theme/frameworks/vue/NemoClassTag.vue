<template>
  <div 
    :data-nemo-class="classType"
    :class="`nemo-class-tag ${additionalClasses}`"
  >
    {{ displayText }}
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type WagonClass = 'first' | 'second' | 'business'

interface Props {
  classType: WagonClass
  additionalClasses?: string
}

const props = withDefaults(defineProps<Props>(), {
  additionalClasses: ''
})

const displayText = computed(() => {
  const classTexts = {
    first: '1. Klasse',
    second: '2. Klasse',
    business: 'Business'
  }
  
  return classTexts[props.classType]
})
</script>

<style scoped>
.nemo-class-tag {
  display: inline-flex;
  align-items: center;
}
</style>