import{j as s}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./switch-DwHEq2ET.js";import"./index-OxcJkKaM.js";import"./iframe-Duf2yS0l.js";import"./preload-helper-D8o24SmT.js";import"./constants-BqjZCLvV.js";import"./form-components-DAXh6kxU.js";import"./infotext-DSB5wS-D.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,g={title:"Components/DBSwitch/Examples",component:t,render:r=>s.jsx(t,{...r,children:r.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},visualAid:{control:"boolean"},iconLeading:{control:"text"},iconTrailing:{control:"text"},size:{control:"text"},label:{control:"text"},variant:{control:"text"},showLabel:{control:"boolean"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},showMessage:{control:"boolean"},message:{control:"text"},icon:{control:"text"}}},o={args:{children:"Custom Icons",visualAid:!0,icon:"cross_circle",iconTrailing:"clock"}},e={args:{children:"Required + Visual Aid",visualAid:!0,required:!0,validMessage:"Valid"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Custom Icons",
    "visualAid": true,
    "icon": "cross_circle",
    "iconTrailing": "clock"
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Required + Visual Aid",
    "visualAid": true,
    "required": true,
    "validMessage": "Valid"
  }
}`,...e.parameters?.docs?.source}}};const x=["CustomIcons","RequiredVisualAid"];export{o as CustomIcons,e as RequiredVisualAid,x as __namedExportsOrder,g as default};
