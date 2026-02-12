import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./checkbox-Danbg_dH.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./form-components-B5fJjToM.js";import"./infotext-CZi0xQss.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBCheckbox/Example",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},indeterminate:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},message:{control:"text"},showMessage:{control:"boolean"},size:{control:"select",options:["small","medium"]},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},label:{control:"text"},placeholder:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},o={args:{name:"Example",checked:!0,children:"Long label"},render:r=>e.jsx("div",{style:{width:"100px"},children:e.jsx(t,{...r})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Example",
    "checked": true,
    "children": "Long label"
  },
  render: (properties: any) => <div style={{
    width: '100px'
  }}><DBCheckbox {...properties} /></div>
}`,...o.parameters?.docs?.source}}};const b=["Longlabel"];export{o as Longlabel,b as __namedExportsOrder,x as default};
