import{j as i}from"./jsx-runtime-u17CrQMm.js";import{D as r}from"./switch-7gmPLUSI.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./form-components-B5fJjToM.js";import"./infotext-CZi0xQss.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,g={title:"Components/DBSwitch/Visual Aid",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},visualAid:{control:"boolean"},size:{control:"select",options:["small","medium"]},label:{control:"text"},variant:{control:"select",options:["leading","trailing"]},showLabel:{control:"boolean"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},icon:{control:"select",options:["arrow_down","arrow_left","arrow_right","arrow_up","arrow_up_right","brand","calendar","check-circle","check","check_circle","chevron_down","chevron_left","chevron_right","chevron_up","circle","circular_arrows","clock","cross","cross_circle","exclamation_mark_circle","exclamation_mark_triangle","information_circle","magnifying_glass","menu","minus","plus","resize_handle_corner","x_placeholder"]},iconLeading:{control:"select",options:["arrow_down","arrow_left","arrow_right","arrow_up","arrow_up_right","brand","calendar","check-circle","check","check_circle","chevron_down","chevron_left","chevron_right","chevron_up","circle","circular_arrows","clock","cross","cross_circle","exclamation_mark_circle","exclamation_mark_triangle","information_circle","magnifying_glass","menu","minus","plus","resize_handle_corner","x_placeholder"]},iconTrailing:{control:"select",options:["arrow_down","arrow_left","arrow_right","arrow_up","arrow_up_right","brand","calendar","check-circle","check","check_circle","chevron_down","chevron_left","chevron_right","chevron_up","circle","circular_arrows","clock","cross","cross_circle","exclamation_mark_circle","exclamation_mark_triangle","information_circle","magnifying_glass","menu","minus","plus","resize_handle_corner","x_placeholder"]},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},showMessage:{control:"boolean"},message:{control:"text"},autocomplete:{control:"text"},messageIcon:{control:"text"},name:{control:"text"},value:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},o={args:{visualAid:!1,children:"(Default) False (Unchecked)"},render:e=>i.jsx(r,{...e})},c={args:{visualAid:!1,checked:!0,children:"(Default) False (Checked)"},render:e=>i.jsx(r,{...e})},n={args:{iconLeading:"moon",iconTrailing:"sun",visualAid:!0,children:"True (Unchecked)"},render:e=>i.jsx(r,{...e})},a={args:{iconLeading:"moon",iconTrailing:"sun",visualAid:!0,checked:!0,children:"True (Checked)"},render:e=>i.jsx(r,{...e})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "visualAid": false,
    "children": "(Default) False (Unchecked)"
  },
  render: (properties: any) => <DBSwitch {...properties} />
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "visualAid": false,
    "checked": true,
    "children": "(Default) False (Checked)"
  },
  render: (properties: any) => <DBSwitch {...properties} />
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "iconLeading": "moon",
    "iconTrailing": "sun",
    "visualAid": true,
    "children": "True (Unchecked)"
  },
  render: (properties: any) => <DBSwitch {...properties} />
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "iconLeading": "moon",
    "iconTrailing": "sun",
    "visualAid": true,
    "checked": true,
    "children": "True (Checked)"
  },
  render: (properties: any) => <DBSwitch {...properties} />
}`,...a.parameters?.docs?.source}}};const k=["DefaultFalseUnchecked","DefaultFalseChecked","TrueUnchecked","TrueChecked"];export{c as DefaultFalseChecked,o as DefaultFalseUnchecked,a as TrueChecked,n as TrueUnchecked,k as __namedExportsOrder,g as default};
