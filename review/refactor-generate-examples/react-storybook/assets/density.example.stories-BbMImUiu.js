import{j as n}from"./jsx-runtime-u17CrQMm.js";import{D as a}from"./switch-7gmPLUSI.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./form-components-B5fJjToM.js";import"./infotext-CZi0xQss.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,h={title:"Components/DBSwitch/Density",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},visualAid:{control:"boolean"},size:{control:"select",options:["small","medium"]},label:{control:"text"},variant:{control:"select",options:["leading","trailing"]},showLabel:{control:"boolean"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},icon:{control:"select",options:["arrow_down","arrow_left","arrow_right","arrow_up","arrow_up_right","brand","calendar","check-circle","check","check_circle","chevron_down","chevron_left","chevron_right","chevron_up","circle","circular_arrows","clock","cross","cross_circle","exclamation_mark_circle","exclamation_mark_triangle","information_circle","magnifying_glass","menu","minus","plus","resize_handle_corner","x_placeholder"]},iconLeading:{control:"select",options:["arrow_down","arrow_left","arrow_right","arrow_up","arrow_up_right","brand","calendar","check-circle","check","check_circle","chevron_down","chevron_left","chevron_right","chevron_up","circle","circular_arrows","clock","cross","cross_circle","exclamation_mark_circle","exclamation_mark_triangle","information_circle","magnifying_glass","menu","minus","plus","resize_handle_corner","x_placeholder"]},iconTrailing:{control:"select",options:["arrow_down","arrow_left","arrow_right","arrow_up","arrow_up_right","brand","calendar","check-circle","check","check_circle","chevron_down","chevron_left","chevron_right","chevron_up","circle","circular_arrows","clock","cross","cross_circle","exclamation_mark_circle","exclamation_mark_triangle","information_circle","magnifying_glass","menu","minus","plus","resize_handle_corner","x_placeholder"]},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},showMessage:{control:"boolean"},message:{control:"text"},autocomplete:{control:"text"},messageIcon:{control:"text"},name:{control:"text"},value:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{"data-density":"functional",children:"functional"},render:r=>n.jsx(a,{...r})},o={args:{"data-density":"regular",children:"regular (Default)"},render:r=>n.jsx(a,{...r})},c={args:{"data-density":"expressive",children:"expressive"},render:r=>n.jsx(a,{...r})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "children": "functional"
  },
  render: (properties: any) => <DBSwitch {...properties} />
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "children": "regular (Default)"
  },
  render: (properties: any) => <DBSwitch {...properties} />
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "children": "expressive"
  },
  render: (properties: any) => <DBSwitch {...properties} />
}`,...c.parameters?.docs?.source}}};const g=["functional","regularDefault","expressive"];export{g as __namedExportsOrder,h as default,c as expressive,e as functional,o as regularDefault};
