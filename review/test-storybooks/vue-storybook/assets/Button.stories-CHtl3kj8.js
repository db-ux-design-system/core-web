import{_ as o}from"./Button-CNFMtpZ_.js";import"./iframe-DfU7SB9c.js";import"./preload-helper-BYMY91UF.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,m={title:"Example/Button",component:o,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"]},backgroundColor:{control:"color"}},args:{primary:!1,onClick:t()}},r={args:{primary:!0,label:"Button"}},a={args:{primary:!1,label:"Button"}},e={args:{label:"Button",size:"large"}},s={args:{label:"Button",size:"small"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    primary: false,
    label: 'Button'
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    size: 'large'
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    size: 'small'
  }
}`,...s.parameters?.docs?.source}}};const p=["Primary","Secondary","Large","Small"];export{e as Large,r as Primary,a as Secondary,s as Small,p as __namedExportsOrder,m as default};
