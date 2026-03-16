import{j as a}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./textarea-B8Xxqiko.js";import"./index-D2E5Z_bU.js";import"./iframe-D0Rqs9UN.js";import"./preload-helper-aOBw0osJ.js";import"./constants-C-ysBZRi.js";import"./form-components-OaQ73I72.js";import"./infotext-CU95Uxoe.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,b={title:"Components/DBTextarea/Readonly",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},disabled:{control:"boolean"},readOnly:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},rows:{control:"number"},cols:{control:"number"},showResizer:{control:"boolean"},fieldSizing:{control:"select",options:["fixed","content"]},resize:{control:"select",options:["none","both","horizontal","vertical"]},spellCheck:{control:"boolean"},wrap:{control:"select",options:["hard","soft","off"]},placeholder:{control:"text"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},minLength:{control:"number"},maxLength:{control:"number"},autocomplete:{control:"text"},messageIcon:{control:"text"},showMessage:{control:"boolean"},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{label:"Label",value:"(Default) False",placeholder:"(Default) False",readOnly:!1},render:r=>a.jsx(t,{...r})},o={args:{label:"Label",value:"True",placeholder:"True",readOnly:!0},render:r=>a.jsx(t,{...r})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "value": "(Default) False",
    "placeholder": "(Default) False",
    "readOnly": false
  },
  render: (properties: any) => <DBTextarea {...properties} />
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "value": "True",
    "placeholder": "True",
    "readOnly": true
  },
  render: (properties: any) => <DBTextarea {...properties} />
}`,...o.parameters?.docs?.source}}};const x=["DefaultFalse","True"];export{e as DefaultFalse,o as True,x as __namedExportsOrder,b as default};
