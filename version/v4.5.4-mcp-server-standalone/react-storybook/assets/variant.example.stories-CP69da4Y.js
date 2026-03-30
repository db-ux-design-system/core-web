import{j as a}from"./jsx-runtime-u17CrQMm.js";import{D as r}from"./textarea-DVMLsy0W.js";import"./index-D2E5Z_bU.js";import"./iframe-DqPoox06.js";import"./preload-helper-B2VkDja_.js";import"./constants-C-ysBZRi.js";import"./form-components-OaQ73I72.js";import"./infotext-DrFHvgRy.js";const{fn:b}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBTextarea/Variant",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},disabled:{control:"boolean"},readOnly:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},rows:{control:"number"},cols:{control:"number"},showResizer:{control:"boolean"},fieldSizing:{control:"select",options:["fixed","content"]},resize:{control:"select",options:["none","both","horizontal","vertical"]},spellCheck:{control:"boolean"},wrap:{control:"select",options:["hard","soft","off"]},placeholder:{control:"text"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},minLength:{control:"number"},maxLength:{control:"number"},autocomplete:{control:"text"},messageIcon:{control:"text"},showMessage:{control:"boolean"},id:{control:"text"},autofocus:{control:"boolean"}}},o={args:{label:"Label",placeholder:"(Default) Above"},render:t=>a.jsx(r,{...t})},e={args:{label:"Label",variant:"floating",value:"Floating Label",placeholder:"Floating"},render:t=>a.jsx(r,{...t})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "placeholder": "(Default) Above"
  },
  render: (properties: any) => <DBTextarea {...properties} />
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "variant": "floating",
    "value": "Floating Label",
    "placeholder": "Floating"
  },
  render: (properties: any) => <DBTextarea {...properties} />
}`,...e.parameters?.docs?.source}}};const g=["DefaultAbove","Floating"];export{o as DefaultAbove,e as Floating,g as __namedExportsOrder,u as default};
