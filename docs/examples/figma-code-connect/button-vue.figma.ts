import figma from '@figma/code-connect';
import { h } from 'vue';
import { DBButton } from './components/button/button.vue';

/**
 * Vue Code Connect configuration for DB Button component.
 * This demonstrates multi-framework support for the same Figma component.
 * 
 * To use this:
 * 1. Replace FIGMA_COMPONENT_URL_PLACEHOLDER with actual Figma component URL
 * 2. Adjust prop mappings to match your Figma component properties
 * 3. Run: npm run figma:connect:publish
 */

figma.connect(DBButton, 'FIGMA_COMPONENT_URL_PLACEHOLDER', {
  props: {
    // Map Figma variant properties to Vue props
    variant: figma.enum('Variant', {
      Primary: 'brand',
      Secondary: 'outlined',
      Tertiary: 'ghost',
      Filled: 'filled'
    }),
    
    // Map boolean properties
    disabled: figma.boolean('Disabled'),
    noText: figma.boolean('No Text'),
    
    // Map size property
    size: figma.enum('Size', {
      Small: 'small',
      Medium: 'medium',
      Large: 'large'
    }),
    
    // Map width property
    width: figma.enum('Width', {
      Auto: undefined,
      Full: 'full'
    }),
    
    // Map icon properties
    iconLeading: figma.string('Icon Leading'),
    showIconLeading: figma.boolean('Show Icon Leading'),
    iconTrailing: figma.string('Icon Trailing'),
    showIconTrailing: figma.boolean('Show Icon Trailing'),
    
    // Map text content (Vue uses default slot)
    children: figma.string('Label')
  },
  
  example: (props) => h(DBButton, {
    variant: props.variant,
    disabled: props.disabled,
    noText: props.noText,
    size: props.size,
    width: props.width,
    iconLeading: props.iconLeading,
    showIconLeading: props.showIconLeading,
    iconTrailing: props.iconTrailing,
    showIconTrailing: props.showIconTrailing
  }, props.children)
});

// Icon-only button variant for Vue
figma.connect(DBButton, 'FIGMA_ICON_BUTTON_URL_PLACEHOLDER', {
  variant: { 'Icon Only': true },
  props: {
    variant: figma.enum('Variant', {
      Primary: 'brand',
      Secondary: 'outlined',
      Tertiary: 'ghost'
    }),
    iconLeading: figma.string('Icon'),
    showIconLeading: true,
    noText: true
  },
  example: (props) => h(DBButton, {
    variant: props.variant,
    iconLeading: props.iconLeading,
    showIconLeading: true,
    noText: true
  })
});