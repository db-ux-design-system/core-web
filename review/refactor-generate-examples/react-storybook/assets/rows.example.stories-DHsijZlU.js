import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as a}from"./textarea-Ce19kOwE.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./form-components-B5fJjToM.js";import"./infotext-CZi0xQss.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBTextarea/Rows",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},showLabel:{control:"boolean"},showMessage:{control:"boolean"},message:{control:"text"},disabled:{control:"boolean"},readOnly:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},rows:{control:"number"},cols:{control:"number"},showResizer:{control:"boolean"},fieldSizing:{control:"select",options:["fixed","content"]},resize:{control:"select",options:["none","both","horizontal","vertical"]},spellCheck:{control:"boolean"},wrap:{control:"select",options:["hard","soft","off"]},placeholder:{control:"text"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},minLength:{control:"number"},maxLength:{control:"number"},autocomplete:{control:"text"},messageIcon:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},o={args:{label:"(Default) 4 Rows",value:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",placeholder:"(Default) 4 Rows"},render:r=>t.jsx("div",{style:{width:"328px"},children:t.jsx(a,{...r})})},e={args:{label:"Custom Example 8 Rows",value:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",placeholder:"Custom",rows:8},render:r=>t.jsx("div",{style:{width:"328px"},children:t.jsx(a,{...r})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) 4 Rows",
    "value": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    "placeholder": "(Default) 4 Rows"
  },
  render: (properties: any) => <div style={{
    width: '328px'
  }}><DBTextarea {...properties} /></div>
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Custom Example 8 Rows",
    "value": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    "placeholder": "Custom",
    "rows": 8
  },
  render: (properties: any) => <div style={{
    width: '328px'
  }}><DBTextarea {...properties} /></div>
}`,...e.parameters?.docs?.source}}};const v=["Default4Rows","Custom"];export{e as Custom,o as Default4Rows,v as __namedExportsOrder,x as default};
