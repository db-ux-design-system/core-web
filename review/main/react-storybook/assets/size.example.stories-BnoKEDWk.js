import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-BpX3lQ6F.js";import{E as n,t as r}from"./src-FlJ3DuBk.js";var i,a,o,s,c,l;e((()=>{r(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBCheckbox/Size`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},indeterminate:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},message:{control:`text`},showMessage:{control:`boolean`},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},placeholder:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{name:`Size`,children:`(Default) Medium`},render:e=>(0,i.jsx)(n,{...e})},c={args:{name:`Size`,size:`small`,children:`Small`},render:e=>(0,i.jsx)(n,{...e})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Size",
    "children": "(Default) Medium"
  },
  render: (properties: any) => <DBCheckbox {...properties} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Size",
    "size": "small",
    "children": "Small"
  },
  render: (properties: any) => <DBCheckbox {...properties} />
}`,...c.parameters?.docs?.source}}},l=[`DefaultMedium`,`Small`]}))();export{s as DefaultMedium,c as Small,l as __namedExportsOrder,o as default};