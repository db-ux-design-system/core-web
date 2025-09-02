<template>
  <div 
    :class="`wagon-layout ${additionalClasses}`"
    :data-wagon-class="wagonClass"
    :style="wagonLayoutStyle"
  >
    <div class="wagon-header" :style="wagonHeaderStyle">
      <NemoClassTag :class-type="wagonClass" />
      <span 
        class="wagon-number"
        :style="wagonNumberStyle"
      >
        Wagon {{ wagonNumber }}
      </span>
    </div>
    
    <div class="seats-grid" :style="seatsGridStyle">
      <NemoSeat
        v-for="(seat, index) in seats"
        :key="`${seat.number}-${index}`"
        :seat-number="seat.number"
        :status="seat.status"
        :interactive="interactive"
        @seat-click="onSeatClick"
      />
    </div>
    
    <div 
      v-if="showStats"
      class="wagon-stats" 
      :style="wagonStatsStyle"
    >
      <div class="stat" :style="statStyle">
        <span class="stat-label" :style="statLabelStyle">Verfügbar:</span>
        <span class="stat-value" :style="statValueStyle">{{ availableCount }}</span>
      </div>
      <div class="stat" :style="statStyle">
        <span class="stat-label" :style="statLabelStyle">Besetzt:</span>
        <span class="stat-value" :style="statValueStyle">{{ occupiedCount }}</span>
      </div>
      <div class="stat" :style="statStyle">
        <span class="stat-label" :style="statLabelStyle">Reserviert:</span>
        <span class="stat-value" :style="statValueStyle">{{ reservedCount }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import NemoSeat from './NemoSeat.vue'
import NemoClassTag from './NemoClassTag.vue'

type SeatStatus = 'available' | 'occupied' | 'reserved' | 'disabled'
type WagonClass = 'first' | 'second' | 'business'

interface Seat {
  number: string
  status: SeatStatus
}

interface Props {
  wagonNumber: string
  wagonClass: WagonClass
  seats: Seat[]
  interactive?: boolean
  showStats?: boolean
  additionalClasses?: string
}

interface Emits {
  (e: 'seatClick', seatNumber: string, status: SeatStatus): void
}

const props = withDefaults(defineProps<Props>(), {
  interactive: true,
  showStats: true,
  additionalClasses: ''
})

const emit = defineEmits<Emits>()

const availableCount = computed(() => {
  return props.seats.filter(seat => seat.status === 'available').length
})

const occupiedCount = computed(() => {
  return props.seats.filter(seat => seat.status === 'occupied').length
})

const reservedCount = computed(() => {
  return props.seats.filter(seat => seat.status === 'reserved').length
})

const onSeatClick = (seatNumber: string, status: SeatStatus) => {
  emit('seatClick', seatNumber, status)
}

// Computed styles
const wagonLayoutStyle = computed(() => ({
  border: '2px solid var(--db-adaptive-bg-basic-level-3-default)',
  borderRadius: '8px',
  padding: '16px',
  backgroundColor: 'var(--db-adaptive-bg-basic-level-1-default)',
  margin: '16px 0'
}))

const wagonHeaderStyle = computed(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '12px',
  paddingBottom: '8px',
  borderBottom: '1px solid var(--db-adaptive-bg-basic-level-3-default)'
}))

const wagonNumberStyle = computed(() => ({
  fontWeight: '600',
  color: 'var(--db-adaptive-on-bg-basic-emphasis-90-default)'
}))

const seatsGridStyle = computed(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '8px',
  margin: '16px 0'
}))

const wagonStatsStyle = computed(() => ({
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: '12px',
  paddingTop: '8px',
  borderTop: '1px solid var(--db-adaptive-bg-basic-level-3-default)'
}))

const statStyle = computed(() => ({
  textAlign: 'center',
  fontSize: '12px'
}))

const statLabelStyle = computed(() => ({
  display: 'block',
  color: 'var(--db-adaptive-on-bg-basic-emphasis-70-default)'
}))

const statValueStyle = computed(() => ({
  display: 'block',
  fontWeight: '600',
  color: 'var(--db-adaptive-on-bg-basic-emphasis-100-default)'
}))
</script>

<style scoped>
@media (max-width: 768px) {
  .seats-grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }
  
  .wagon-header {
    flex-direction: column !important;
    gap: 8px !important;
    text-align: center !important;
  }
}
</style>