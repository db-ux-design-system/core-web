import{i as e}from"./preload-helper-BEM2D_Sk.js";import{t}from"./jsx-runtime-Cni2l4fD.js";import{S as n,t as r,w as i}from"./src-D8n6O-aQ.js";var a,o,s,c,l,u;e((()=>{r(),a=t(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBTabItem/Show Icon Trailing`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{label:{control:`text`},active:{control:`boolean`},disabled:{control:`boolean`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},autofocus:{control:`boolean`}}},c={args:{label:`(Default) False`,iconTrailing:`x_placeholder`,showIconTrailing:!1},render:e=>(0,a.jsx)(n,{children:(0,a.jsx)(i,{...e})})},l={args:{label:`True`,iconTrailing:`x_placeholder`,showIconTrailing:!0},render:e=>(0,a.jsx)(n,{children:(0,a.jsx)(i,{...e})})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) False",
    "iconTrailing": "x_placeholder",
    "showIconTrailing": false
  },
  render: (properties: any) => <DBTabList><DBTabItem {...properties} /></DBTabList>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "True",
    "iconTrailing": "x_placeholder",
    "showIconTrailing": true
  },
  render: (properties: any) => <DBTabList><DBTabItem {...properties} /></DBTabList>
}`,...l.parameters?.docs?.source}}},u=[`DefaultFalse`,`True`]}))();export{c as DefaultFalse,l as True,u as __namedExportsOrder,s as default};