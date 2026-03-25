import{j as n}from"./jsx-runtime-u17CrQMm.js";import{D as o}from"./textarea-COFDXKLu.js";import"./index-D2E5Z_bU.js";import"./iframe-DwOpbq5K.js";import"./preload-helper-j823Xs5Z.js";import"./constants-C-ysBZRi.js";import"./form-components-OaQ73I72.js";import"./infotext-DTRuL2Hl.js";const{fn:g}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBTextarea/Examples Floating Label",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},disabled:{control:"boolean"},readOnly:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},rows:{control:"number"},cols:{control:"number"},showResizer:{control:"boolean"},fieldSizing:{control:"select",options:["fixed","content"]},resize:{control:"select",options:["none","both","horizontal","vertical"]},spellCheck:{control:"boolean"},wrap:{control:"select",options:["hard","soft","off"]},placeholder:{control:"text"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},minLength:{control:"number"},maxLength:{control:"number"},autocomplete:{control:"text"},messageIcon:{control:"text"},showMessage:{control:"boolean"},id:{control:"text"},autofocus:{control:"boolean"}}},a={args:{label:"Label",variant:"floating",placeholder:"(Default) Empty"},render:e=>n.jsx(o,{...e})},r={args:{label:"Label",value:"Filled",variant:"floating",placeholder:"Filled"},render:e=>n.jsx(o,{...e})},l={args:{label:"Label",variant:"floating",placeholder:"Disabled",disabled:!0},render:e=>n.jsx(o,{...e})},t={args:{label:"Label",value:"Readonly - Filled",variant:"floating",placeholder:"Readonly - Filled",readOnly:!0},render:e=>n.jsx(o,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "variant": "floating",
    "placeholder": "(Default) Empty"
  },
  render: (properties: any) => <DBTextarea {...properties} />
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "value": "Filled",
    "variant": "floating",
    "placeholder": "Filled"
  },
  render: (properties: any) => <DBTextarea {...properties} />
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "variant": "floating",
    "placeholder": "Disabled",
    "disabled": true
  },
  render: (properties: any) => <DBTextarea {...properties} />
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "value": "Readonly - Filled",
    "variant": "floating",
    "placeholder": "Readonly - Filled",
    "readOnly": true
  },
  render: (properties: any) => <DBTextarea {...properties} />
}`,...t.parameters?.docs?.source}}};const f=["DefaultEmpty","Filled","Disabled","ReadonlyFilled"];export{a as DefaultEmpty,l as Disabled,r as Filled,t as ReadonlyFilled,f as __namedExportsOrder,x as default};
