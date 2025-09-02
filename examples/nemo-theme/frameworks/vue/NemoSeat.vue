<template>
  <div 
    :data-nemo-seat-status="status" 
    :class="`nemo-seat ${additionalClasses}`"
    @click="onSeatClick"
    @keydown.enter="onSeatClick"
    @keydown.space.prevent="onSeatClick"
    :aria-label="ariaLabel"
    :tabindex="isInteractive ? '0' : null"
    role="button"
    :style="seatStyle"
  >
    {{ seatNumber }}
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type SeatStatus = 'available' | 'occupied' | 'reserved' | 'disabled'

interface Props {
  seatNumber: string
  status: SeatStatus
  interactive?: boolean
  additionalClasses?: string
}

interface Emits {
  (e: 'seatClick', seatNumber: string, status: SeatStatus): void
}

const props = withDefaults(defineProps<Props>(), {
  interactive: true,
  additionalClasses: ''
})

const emit = defineEmits<Emits>()

const isInteractive = computed(() => {
  return props.interactive && (props.status === 'available' || props.status === 'reserved')
})

const ariaLabel = computed(() => {
  const statusText = {
    available: 'verfügbar',
    occupied: 'besetzt',
    reserved: 'reserviert',
    disabled: 'nicht verfügbar'
  }
  
  return `Platz ${props.seatNumber}, ${statusText[props.status]}`
})

const seatStyle = computed(() => ({
  cursor: isInteractive.value 
    ? 'pointer' 
    : (props.status === 'occupied' || props.status === 'disabled') 
      ? 'not-allowed' 
      : 'default',
  userSelect: 'none',
  outline: 'none'
}))

const onSeatClick = () => {
  if (!isInteractive.value) return
  emit('seatClick', props.seatNumber, props.status)
}
</script>

<style scoped>
.nemo-seat:focus {
  outline: 2px solid var(--db-adaptive-on-bg-basic-emphasis-100-default);
  outline-offset: 2px;
}
</style>