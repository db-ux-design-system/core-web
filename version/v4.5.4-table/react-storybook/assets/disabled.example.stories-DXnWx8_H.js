import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as a}from"./radio-Dx90zI_L.js";import"./index-D2E5Z_bU.js";import"./iframe-DwOpbq5K.js";import"./preload-helper-j823Xs5Z.js";import"./form-components-OaQ73I72.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBRadio/Disabled",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},size:{control:"select",options:["small","medium"]},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},label:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{name:"Disabled",disabled:!1,children:"(Default) False"},render:r=>t.jsx(a,{...r})},o={args:{name:"Disabled",disabled:!0,children:"True"},render:r=>t.jsx(a,{...r})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Disabled",
    "disabled": false,
    "children": "(Default) False"
  },
  render: (properties: any) => <DBRadio {...properties} />
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Disabled",
    "disabled": true,
    "children": "True"
  },
  render: (properties: any) => <DBRadio {...properties} />
}`,...o.parameters?.docs?.source}}};const u=["DefaultFalse","True"];export{e as DefaultFalse,o as True,u as __namedExportsOrder,p as default};
