import{j as r}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./radio-h3b26zTk.js";import{D as a}from"./infotext-CZi0xQss.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./form-components-B5fJjToM.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBRadio/Show Label",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},size:{control:"select",options:["small","medium"]},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},label:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{name:"Content",showLabel:!0,children:"(Default) True"},render:n=>r.jsx(t,{...n})},o={args:{name:"Content",showLabel:!1,children:"False"},render:n=>r.jsxs("div",{children:[r.jsx(t,{...n}),r.jsx(a,{semantic:"informational",size:"small",icon:"none",children:"False"})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Content",
    "showLabel": true,
    "children": "(Default) True"
  },
  render: (properties: any) => <DBRadio {...properties} />
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Content",
    "showLabel": false,
    "children": "False"
  },
  render: (properties: any) => <div><DBRadio {...properties} /><DBInfotext semantic="informational" size="small" icon="none">
                    False
                </DBInfotext></div>
}`,...o.parameters?.docs?.source}}};const x=["DefaultTrue","False"];export{e as DefaultTrue,o as False,x as __namedExportsOrder,f as default};
