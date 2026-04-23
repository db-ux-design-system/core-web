import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-DnaggZxp.js";import{E as n,t as r}from"./src-DK5dTc4z.js";var i,a,o,s,c,l,u;e((()=>{r(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBCheckbox/Validation`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},indeterminate:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},message:{control:`text`},showMessage:{control:`boolean`},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},placeholder:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{name:`Validation`,validation:`no-validation`,children:`(Default) No validation`},render:e=>(0,i.jsx)(n,{...e})},c={args:{name:`Validation`,validation:`invalid`,invalidMessage:`Invalid Message`,children:`Invalid`},render:e=>(0,i.jsx)(n,{...e})},l={args:{name:`Validation`,validation:`valid`,validMessage:`Valid message`,children:`Valid`},render:e=>(0,i.jsx)(n,{...e})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Validation",
    "validation": "no-validation",
    "children": "(Default) No validation"
  },
  render: (properties: any) => <DBCheckbox {...properties} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Validation",
    "validation": "invalid",
    "invalidMessage": "Invalid Message",
    "children": "Invalid"
  },
  render: (properties: any) => <DBCheckbox {...properties} />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Validation",
    "validation": "valid",
    "validMessage": "Valid message",
    "children": "Valid"
  },
  render: (properties: any) => <DBCheckbox {...properties} />
}`,...l.parameters?.docs?.source}}},u=[`DefaultNovalidation`,`Invalid`,`Valid`]}))();export{s as DefaultNovalidation,c as Invalid,l as Valid,u as __namedExportsOrder,o as default};