import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-BpX3lQ6F.js";import{d as n,t as r}from"./src-DlEUsYnd.js";var i,a,o,s,c,l,u;e((()=>{r(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBRadio/Density`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},value:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{"data-density":`functional`,name:`Density`,value:`functional`,children:`Functional`},render:e=>(0,i.jsx)(n,{...e})},c={args:{"data-density":`regular`,name:`Density`,value:`regular`,children:`(Default) Regular`},render:e=>(0,i.jsx)(n,{...e})},l={args:{"data-density":`expressive`,name:`Density`,value:`expressive`,children:`Expressive`},render:e=>(0,i.jsx)(n,{...e})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "name": "Density",
    "value": "functional",
    "children": "Functional"
  },
  render: (properties: any) => <DBRadio {...properties} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "name": "Density",
    "value": "regular",
    "children": "(Default) Regular"
  },
  render: (properties: any) => <DBRadio {...properties} />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "name": "Density",
    "value": "expressive",
    "children": "Expressive"
  },
  render: (properties: any) => <DBRadio {...properties} />
}`,...l.parameters?.docs?.source}}},u=[`Functional`,`DefaultRegular`,`Expressive`]}))();export{c as DefaultRegular,l as Expressive,s as Functional,u as __namedExportsOrder,o as default};