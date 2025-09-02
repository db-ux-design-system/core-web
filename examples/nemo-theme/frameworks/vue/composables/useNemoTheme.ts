import { ref, computed } from 'vue'

export function useNemoTheme() {
  const isDarkMode = ref(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.getAttribute('data-mode') === 'dark' ||
             window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })
  
  const isHighContrast = ref(false)
  
  const toggleDarkMode = () => {
    const newMode = isDarkMode.value ? 'light' : 'dark'
    document.documentElement.setAttribute('data-mode', newMode)
    isDarkMode.value = !isDarkMode.value
  }
  
  const toggleHighContrast = () => {
    const newContrast = !isHighContrast.value
    document.body.style.filter = newContrast ? 'contrast(200%)' : ''
    isHighContrast.value = newContrast
  }
  
  const validateTheme = () => {
    const requiredProperties = [
      '--nemo-seat-available-bg',
      '--nemo-seat-occupied-bg',
      '--nemo-seat-reserved-bg',
      '--nemo-seat-disabled-bg',
      '--nemo-class-first-bg',
      '--nemo-class-second-bg',
      '--nemo-class-business-bg'
    ]
    
    const root = getComputedStyle(document.documentElement)
    const missing = requiredProperties.filter(prop => 
      !root.getPropertyValue(prop).trim()
    )
    
    return {
      isValid: missing.length === 0,
      missingProperties: missing
    }
  }
  
  const logThemeValues = () => {
    const root = getComputedStyle(document.documentElement)
    const nemoProps = [
      '--nemo-seat-available-bg',
      '--nemo-seat-occupied-bg',
      '--nemo-seat-reserved-bg',
      '--nemo-seat-disabled-bg',
      '--nemo-class-first-bg',
      '--nemo-class-second-bg',
      '--nemo-class-business-bg'
    ]
    
    const values = nemoProps.reduce((acc, prop) => {
      acc[prop] = root.getPropertyValue(prop).trim()
      return acc
    }, {} as Record<string, string>)
    
    console.table(values)
    return values
  }
  
  return {
    isDarkMode: computed(() => isDarkMode.value),
    isHighContrast: computed(() => isHighContrast.value),
    toggleDarkMode,
    toggleHighContrast,
    validateTheme,
    logThemeValues
  }
}