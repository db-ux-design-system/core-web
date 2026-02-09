import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as s}from"./radio-DQum7n_3.js";import"./index-OxcJkKaM.js";import"./iframe-Duf2yS0l.js";import"./preload-helper-D8o24SmT.js";import"./form-components-DAXh6kxU.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBRadio/Show Required Asterisk",component:s,render:o=>t.jsx(s,{...o,children:o.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},validation:{control:"text"},size:{control:"text"},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"}}},e={args:{children:"(Default) True",required:!0,showRequiredAsterisk:!0,name:"Asterisk"}},r={args:{children:"False",required:!0,showRequiredAsterisk:!1,name:"Asterisk"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: "(Default) True",
    "required": true,
    "showRequiredAsterisk": true,
    "name": "Asterisk"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: "False",
    "required": true,
    "showRequiredAsterisk": false,
    "name": "Asterisk"
  }
}`,...r.parameters?.docs?.source}}};const p=["DefaultTrue","False"];export{e as DefaultTrue,r as False,p as __namedExportsOrder,m as default};
