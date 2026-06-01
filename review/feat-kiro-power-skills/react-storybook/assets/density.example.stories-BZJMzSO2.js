import{i as e}from"./preload-helper-DAz2H_jd.js";import{t}from"./jsx-runtime-BXhj9UbI.js";import{c as n,t as r,u as i}from"./src-D9RvsHEM.js";var a,o,s,c,l,u,d;e((()=>{r(),a=t(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBTabItem/Density`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{label:{control:`text`},active:{control:`boolean`},disabled:{control:`boolean`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},noText:{control:`boolean`},checked:{control:`boolean`},name:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{"data-density":`functional`,label:`Functional`},render:e=>(0,a.jsx)(n,{children:(0,a.jsx)(i,{...e})})},l={args:{"data-density":`regular`,label:`(Default) Regular`},render:e=>(0,a.jsx)(n,{children:(0,a.jsx)(i,{...e})})},u={args:{"data-density":`expressive`,label:`Expressive`},render:e=>(0,a.jsx)(n,{children:(0,a.jsx)(i,{...e})})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "label": "Functional"
  },
  render: (properties: any) => <DBTabList><DBTabItem {...properties} /></DBTabList>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "label": "(Default) Regular"
  },
  render: (properties: any) => <DBTabList><DBTabItem {...properties} /></DBTabList>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "label": "Expressive"
  },
  render: (properties: any) => <DBTabList><DBTabItem {...properties} /></DBTabList>
}`,...u.parameters?.docs?.source}}},d=[`Functional`,`DefaultRegular`,`Expressive`]}))();export{l as DefaultRegular,u as Expressive,c as Functional,d as __namedExportsOrder,s as default};