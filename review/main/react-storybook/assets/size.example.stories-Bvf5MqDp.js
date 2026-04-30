import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-BpX3lQ6F.js";import{d as n,t as r}from"./src-FlJ3DuBk.js";var i,a,o,s,c,l;e((()=>{r(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBRadio/Size`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},value:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{name:`Size`,children:`(Default) Medium`},render:e=>(0,i.jsx)(n,{...e})},c={args:{name:`Size`,size:`small`,children:`Small`},render:e=>(0,i.jsx)(n,{...e})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Size",
    "children": "(Default) Medium"
  },
  render: (properties: any) => <DBRadio {...properties} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Size",
    "size": "small",
    "children": "Small"
  },
  render: (properties: any) => <DBRadio {...properties} />
}`,...c.parameters?.docs?.source}}},l=[`DefaultMedium`,`Small`]}))();export{s as DefaultMedium,c as Small,l as __namedExportsOrder,o as default};