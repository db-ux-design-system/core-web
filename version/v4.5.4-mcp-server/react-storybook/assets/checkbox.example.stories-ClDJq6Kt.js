import{j as o}from"./jsx-runtime-u17CrQMm.js";import{D as c}from"./custom-button-CrU8GxxW.js";import"./index-D2E5Z_bU.js";import"./iframe-BhiBouzR.js";import"./preload-helper-BHRuClfA.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBCustomButton/Checkbox",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},noText:{control:"boolean"},wrap:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{children:o.jsxs("label",{htmlFor:"checkbox01",children:[o.jsx("input",{type:"checkbox",id:"checkbox01"}),"Checkbox"]})},render:r=>o.jsx(c,{...r})},t={args:{children:o.jsxs("label",{htmlFor:"checkbox02",children:[o.jsx("input",{type:"checkbox",id:"checkbox02",checked:!0}),"Checkbox"]})},render:r=>o.jsx(c,{...r})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <label htmlFor="checkbox01"><input type="checkbox" id="checkbox01" />
                    Checkbox
                </label>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <label htmlFor="checkbox02"><input type="checkbox" id="checkbox02" checked />
                    Checkbox
                </label>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...t.parameters?.docs?.source}}};const h=["Unchecked","Checked"];export{t as Checked,e as Unchecked,h as __namedExportsOrder,d as default};
