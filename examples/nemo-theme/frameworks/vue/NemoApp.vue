<template>
  <div :style="containerStyle">
    <h1>NEMO Vue Beispiel</h1>
    
    <div :style="controlsStyle">
      <button 
        :style="buttonStyle"
        @click="toggleDarkMode"
      >
        {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
      </button>
      <button 
        :style="buttonStyle"
        @click="toggleHighContrast"
      >
        {{ isHighContrast ? 'Normal Kontrast' : 'Hoher Kontrast' }}
      </button>
      <button 
        :style="buttonStyle"
        @click="handleValidateTheme"
      >
        Theme validieren
      </button>
    </div>
    
    <NemoWagonLayout
      wagon-number="A"
      wagon-class="first"
      :seats="wagonASeats"
      :interactive="true"
      :show-stats="true"
      @seat-click="handleSeatClick"
    />
    
    <NemoWagonLayout
      wagon-number="B"
      wagon-class="second"
      :seats="wagonBSeats"
      :interactive="true"
      :show-stats="true"
      @seat-click="handleSeatClick"
    />
    
    <div :style="{ marginTop: '40px' }">
      <h2>Prioritäts-Tags</h2>
      <div :style="priorityExamplesStyle">
        <NemoPriorityTag priority="high">Hoch</NemoPriorityTag>
        <NemoPriorityTag priority="medium">Mittel</NemoPriorityTag>
        <NemoPriorityTag priority="low">Niedrig</NemoPriorityTag>
        <NemoPriorityTag priority="info">Info</NemoPriorityTag>
      </div>
    </div>
    
    <div :style="{ marginTop: '40px' }">
      <h2>Wagenklassen</h2>
      <div :style="priorityExamplesStyle">
        <NemoClassTag class-type="first" />
        <NemoClassTag class-type="business" />
        <NemoClassTag class-type="second" />
      </div>
    </div>
    
    <div :style="{ marginTop: '40px' }">
      <h2>Debug Informationen</h2>
      <div :style="debugStyle">
        <p><strong>Dark Mode:</strong> {{ isDarkMode ? 'Aktiv' : 'Inaktiv' }}</p>
        <p><strong>High Contrast:</strong> {{ isHighContrast ? 'Aktiv' : 'Inaktiv' }}</p>
        <p><strong>Theme Status:</strong> {{ themeValidation.isValid ? '✅ Gültig' : '❌ Fehlerhaft' }}</p>
        <div v-if="!themeValidation.isValid">
          <p><strong>Fehlende Eigenschaften:</strong></p>
          <ul>
            <li v-for="prop in themeValidation.missingProperties" :key="prop">{{ prop }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import NemoSeat from './NemoSeat.vue'
import NemoClassTag from './NemoClassTag.vue'
import NemoPriorityTag from './NemoPriorityTag.vue'
import NemoWagonLayout from './NemoWagonLayout.vue'
import { useNemoTheme } from './composables/useNemoTheme'

type SeatStatus = 'available' | 'occupied' | 'reserved' | 'disabled'

interface Seat {
  number: string
  status: SeatStatus
}

const { 
  isDarkMode, 
  isHighContrast, 
  toggleDarkMode, 
  toggleHighContrast, 
  validateTheme 
} = useNemoTheme()

const wagonASeats = ref<Seat[]>([
  { number: '1A', status: 'available' },
  { number: '1B', status: 'occupied' },
  { number: '1C', status: 'available' },
  { number: '1D', status: 'reserved' },
  { number: '2A', status: 'occupied' },
  { number: '2B', status: 'available' },
  { number: '2C', status: 'disabled' },
  { number: '2D', status: 'available' }
])

const wagonBSeats = ref<Seat[]>([
  { number: '4A', status: 'available' },
  { number: '4B', status: 'available' },
  { number: '4C', status: 'occupied' },
  { number: '4D', status: 'available' },
  { number: '5A', status: 'reserved' },
  { number: '5B', status: 'occupied' },
  { number: '5C', status: 'available' },
  { number: '5D', status: 'available' },
  { number: '6A', status: 'available' },
  { number: '6B', status: 'disabled' },
  { number: '6C', status: 'reserved' },
  { number: '6D', status: 'available' }
])

const themeValidation = ref({ isValid: true, missingProperties: [] as string[] })

const handleSeatClick = (seatNumber: string, status: SeatStatus) => {
  const updateSeats = (seats: Seat[]) => {
    return seats.map(seat => {
      if (seat.number === seatNumber) {
        if (status === 'available') {
          return { ...seat, status: 'reserved' as SeatStatus }
        } else if (status === 'reserved') {
          return { ...seat, status: 'available' as SeatStatus }
        }
      }
      return seat
    })
  }
  
  // Check which wagon the seat belongs to
  if (wagonASeats.value.some(seat => seat.number === seatNumber)) {
    wagonASeats.value = updateSeats(wagonASeats.value)
  } else if (wagonBSeats.value.some(seat => seat.number === seatNumber)) {
    wagonBSeats.value = updateSeats(wagonBSeats.value)
  }
}

const handleValidateTheme = () => {
  const result = validateTheme()
  themeValidation.value = result
  
  if (result.isValid) {
    alert('✅ NEMO Theme erfolgreich geladen!')
  } else {
    alert(`❌ Fehlende NEMO Theme-Eigenschaften: ${result.missingProperties.join(', ')}`)
  }
}

// Computed styles
const containerStyle = computed(() => ({
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
  fontFamily: 'var(--db-font-family-sans)',
  backgroundColor: 'var(--db-adaptive-bg-basic-level-1-default)',
  color: 'var(--db-adaptive-on-bg-basic-emphasis-100-default)',
  minHeight: '100vh'
}))

const controlsStyle = computed(() => ({
  display: 'flex',
  gap: '12px',
  marginBottom: '20px',
  flexWrap: 'wrap'
}))

const buttonStyle = computed(() => ({
  padding: '8px 16px',
  borderRadius: '4px',
  border: '1px solid var(--db-adaptive-bg-basic-level-3-default)',
  backgroundColor: 'var(--db-adaptive-bg-basic-level-2-default)',
  color: 'var(--db-adaptive-on-bg-basic-emphasis-100-default)',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: '600'
}))

const priorityExamplesStyle = computed(() => ({
  display: 'flex',
  gap: '12px',
  flexWrap: 'wrap',
  margin: '16px 0'
}))

const debugStyle = computed(() => ({
  padding: '16px',
  backgroundColor: 'var(--db-adaptive-bg-basic-level-2-default)',
  borderRadius: '8px',
  border: '1px solid var(--db-adaptive-bg-basic-level-3-default)'
}))

onMounted(() => {
  // Initial theme validation
  setTimeout(() => {
    themeValidation.value = validateTheme()
  }, 100)
})
</script>