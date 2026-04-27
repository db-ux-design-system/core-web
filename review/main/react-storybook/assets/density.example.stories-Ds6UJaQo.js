import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-DC6t-S6Q.js";import{D as n,t as r}from"./src-Dg0IbgPT.js";var i,a,o,s,c,l,u;e((()=>{r(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBInfotext/Density`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},size:{control:`select`,options:[`small`,`medium`]},showIcon:{control:`boolean`},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{"data-density":`functional`,children:`Functional`},render:e=>(0,i.jsx)(n,{...e})},c={args:{"data-density":`regular`,children:`(Default) Regular`},render:e=>(0,i.jsx)(n,{...e})},l={args:{"data-density":`expressive`,children:`Expressive`},render:e=>(0,i.jsx)(n,{...e})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "children": "Functional"
  },
  render: (properties: any) => <DBInfotext {...properties} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "children": "(Default) Regular"
  },
  render: (properties: any) => <DBInfotext {...properties} />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "children": "Expressive"
  },
  render: (properties: any) => <DBInfotext {...properties} />
}`,...l.parameters?.docs?.source}}},u=[`Functional`,`DefaultRegular`,`Expressive`]}))();export{c as DefaultRegular,l as Expressive,s as Functional,u as __namedExportsOrder,o as default};