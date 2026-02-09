import{j as s}from"./jsx-runtime-u17CrQMm.js";import{D as c}from"./switch-DwHEq2ET.js";import"./index-OxcJkKaM.js";import"./iframe-Duf2yS0l.js";import"./preload-helper-D8o24SmT.js";import"./constants-BqjZCLvV.js";import"./form-components-DAXh6kxU.js";import"./infotext-DSB5wS-D.js";const{fn:g}=__STORYBOOK_MODULE_TEST__,k={title:"Components/DBSwitch/Visual Aid",component:c,render:a=>s.jsx(c,{...a,children:a.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},visualAid:{control:"boolean"},iconLeading:{control:"text"},iconTrailing:{control:"text"},size:{control:"text"},label:{control:"text"},variant:{control:"text"},showLabel:{control:"boolean"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},showMessage:{control:"boolean"},message:{control:"text"},icon:{control:"text"}}},e={args:{children:"(Default) False (Unchecked)",visualAid:!1}},r={args:{children:"(Default) False (Checked)",visualAid:!1,checked:!0}},o={args:{children:"True (Unchecked)",visualAid:!0,iconLeading:"moon",iconTrailing:"sun"}},n={args:{children:"True (Checked)",visualAid:!0,checked:!0,iconLeading:"moon",iconTrailing:"sun"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: "(Default) False (Unchecked)",
    "visualAid": false
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: "(Default) False (Checked)",
    "visualAid": false,
    "checked": true
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: "True (Unchecked)",
    "visualAid": true,
    "iconLeading": "moon",
    "iconTrailing": "sun"
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: "True (Checked)",
    "visualAid": true,
    "checked": true,
    "iconLeading": "moon",
    "iconTrailing": "sun"
  }
}`,...n.parameters?.docs?.source}}};const T=["DefaultFalseUnchecked","DefaultFalseChecked","TrueUnchecked","TrueChecked"];export{r as DefaultFalseChecked,e as DefaultFalseUnchecked,n as TrueChecked,o as TrueUnchecked,T as __namedExportsOrder,k as default};
