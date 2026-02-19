import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./custom-button-gzkn4Nhi.js";import"./index-20fQ7N7z.js";import"./iframe-B14DFsEh.js";import"./preload-helper-COTrxSA1.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBCustomButton/Checkbox",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},disabled:{control:"boolean"},noText:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},id:{control:"text"},autofocus:{control:"boolean"}}},o={args:{children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox"}),"Checkbox"]})},render:r=>e.jsx(n,{...r})},t={args:{children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:!0}),"Checkbox"]})},render:r=>e.jsx(n,{...r})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <label><input type="checkbox" />
                    Checkbox
                </label>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <label><input type="checkbox" checked />
                    Checkbox
                </label>
  },
  render: (properties: any) => <DBCustomButton {...properties} />
}`,...t.parameters?.docs?.source}}};const u=["Unchecked","Checked"];export{t as Checked,o as Unchecked,u as __namedExportsOrder,d as default};
