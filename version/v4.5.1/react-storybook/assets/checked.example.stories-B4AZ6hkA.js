import{j as a}from"./jsx-runtime-u17CrQMm.js";import{D as r}from"./checkbox-DRtzzb8s.js";import"./index-D2E5Z_bU.js";import"./iframe-D7o_mymi.js";import"./preload-helper-DYrPA5AR.js";import"./constants-C-ysBZRi.js";import"./form-components-OaQ73I72.js";import"./infotext-C4SWbymK.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBCheckbox/Checked",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},indeterminate:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},message:{control:"text"},showMessage:{control:"boolean"},size:{control:"select",options:["small","medium"]},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},label:{control:"text"},placeholder:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{name:"State",checked:!1,children:"(Default) False"},render:t=>a.jsx(r,{...t})},o={args:{name:"State",checked:!0,children:"True"},render:t=>a.jsx(r,{...t})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "State",
    "checked": false,
    "children": "(Default) False"
  },
  render: (properties: any) => <DBCheckbox {...properties} />
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "State",
    "checked": true,
    "children": "True"
  },
  render: (properties: any) => <DBCheckbox {...properties} />
}`,...o.parameters?.docs?.source}}};const h=["DefaultFalse","True"];export{e as DefaultFalse,o as True,h as __namedExportsOrder,x as default};
