import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./textarea-Ce19kOwE.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./form-components-B5fJjToM.js";import"./infotext-CZi0xQss.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,b={title:"Components/DBTextarea/Field Sizing",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},showLabel:{control:"boolean"},showMessage:{control:"boolean"},message:{control:"text"},disabled:{control:"boolean"},readOnly:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},rows:{control:"number"},cols:{control:"number"},showResizer:{control:"boolean"},fieldSizing:{control:"select",options:["fixed","content"]},resize:{control:"select",options:["none","both","horizontal","vertical"]},spellCheck:{control:"boolean"},wrap:{control:"select",options:["hard","soft","off"]},placeholder:{control:"text"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},minLength:{control:"number"},maxLength:{control:"number"},autocomplete:{control:"text"},messageIcon:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{label:"Label",fieldSizing:"fixed",placeholder:"(Default) Fixed"},render:r=>t.jsx("div",{style:{width:"300px"},children:t.jsx(n,{...r})})},o={args:{label:"Label",fieldSizing:"content",placeholder:"Content"},render:r=>t.jsx("div",{style:{width:"300px"},children:t.jsx(n,{...r})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "fieldSizing": "fixed",
    "placeholder": "(Default) Fixed"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBTextarea {...properties} /></div>
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "fieldSizing": "content",
    "placeholder": "Content"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBTextarea {...properties} /></div>
}`,...o.parameters?.docs?.source}}};const u=["DefaultFixed","Content"];export{o as Content,e as DefaultFixed,u as __namedExportsOrder,b as default};
