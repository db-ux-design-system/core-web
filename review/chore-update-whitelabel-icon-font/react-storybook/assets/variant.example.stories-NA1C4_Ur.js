import{j as l}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./button-D4uhPSHI.js";import"./iframe-DtG0sk3F.js";import"./preload-helper-Cpx4QZsw.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBButton/Variant",component:t,render:a=>l.jsx(t,{...a,children:a.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},disabled:{control:"boolean"},form:{control:"text"},name:{control:"text"},noText:{control:"boolean"},type:{control:"select",options:["button","reset","submit"]},value:{control:"text"},icon:{control:"select",options:["arrow_down","arrow_left","arrow_right","arrow_up","arrow_up_right","brand","calendar","check-circle","check","check_circle","chevron_down","chevron_left","chevron_right","chevron_up","circle","circular_arrows","clock","cross","cross_circle","exclamation_mark_circle","exclamation_mark_triangle","information_circle","magnifying_glass","menu","minus","plus","resize_handle_corner","x_placeholder"]},iconLeading:{control:"select",options:["arrow_down","arrow_left","arrow_right","arrow_up","arrow_up_right","brand","calendar","check-circle","check","check_circle","chevron_down","chevron_left","chevron_right","chevron_up","circle","circular_arrows","clock","cross","cross_circle","exclamation_mark_circle","exclamation_mark_triangle","information_circle","magnifying_glass","menu","minus","plus","resize_handle_corner","x_placeholder"]},iconTrailing:{control:"select",options:["arrow_down","arrow_left","arrow_right","arrow_up","arrow_up_right","brand","calendar","check-circle","check","check_circle","chevron_down","chevron_left","chevron_right","chevron_up","circle","circular_arrows","clock","cross","cross_circle","exclamation_mark_circle","exclamation_mark_triangle","information_circle","magnifying_glass","menu","minus","plus","resize_handle_corner","x_placeholder"]},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},r={args:{children:"(Default) Outlined - Adaptive",onClick:c(),variant:"outlined"}},o={args:{children:"Filled - Adaptive",onClick:c(),variant:"filled"}},e={args:{children:"Ghost - Adaptive",onClick:c(),variant:"ghost"}},n={args:{children:"Brand",onClick:c(),variant:"brand"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: "(Default) Outlined - Adaptive",
    "onClick": fn(),
    "variant": "outlined"
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Filled - Adaptive",
    "onClick": fn(),
    "variant": "filled"
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Ghost - Adaptive",
    "onClick": fn(),
    "variant": "ghost"
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Brand",
    "onClick": fn(),
    "variant": "brand"
  }
}`,...n.parameters?.docs?.source}}};const h=["Outlined","Filled","Ghost","Brand"];export{n as Brand,o as Filled,e as Ghost,r as Outlined,h as __namedExportsOrder,m as default};
