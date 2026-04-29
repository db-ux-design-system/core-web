import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-BpX3lQ6F.js";import{a as n,o as r,t as i}from"./src-CXJdFFf7.js";var a,o,s,c,l,u,d;e((()=>{i(),a=t(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBTabItem/Density`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{label:{control:`text`},active:{control:`boolean`},disabled:{control:`boolean`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},noText:{control:`boolean`},id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{label:`Functional`},render:e=>(0,a.jsx)(n,{"data-density":`functional`,children:(0,a.jsx)(r,{...e})})},l={args:{label:`(Default) Regular`},render:e=>(0,a.jsx)(n,{children:(0,a.jsx)(r,{...e})})},u={args:{label:`Expressive`},render:e=>(0,a.jsx)(n,{"data-density":`expressive`,children:(0,a.jsx)(r,{...e})})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Functional"
  },
  render: (properties: any) => <DBTabList data-density="functional"><DBTabItem {...properties} /></DBTabList>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) Regular"
  },
  render: (properties: any) => <DBTabList><DBTabItem {...properties} /></DBTabList>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Expressive"
  },
  render: (properties: any) => <DBTabList data-density="expressive"><DBTabItem {...properties} /></DBTabList>
}`,...u.parameters?.docs?.source}}},d=[`Functional`,`DefaultRegular`,`Expressive`]}))();export{l as DefaultRegular,u as Expressive,c as Functional,d as __namedExportsOrder,s as default};