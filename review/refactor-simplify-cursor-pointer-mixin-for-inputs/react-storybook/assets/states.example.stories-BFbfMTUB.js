import{i as e}from"./preload-helper-BSzaZS-_.js";import{t}from"./jsx-runtime--uJ-ZnFk.js";import{c as n,t as r,u as i}from"./src-Bw1MgdFx.js";var a,o,s,c,l,u,d;e((()=>{r(),a=t(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBTabItem/States`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{label:{control:`text`},active:{control:`boolean`},disabled:{control:`boolean`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},noText:{control:`boolean`},checked:{control:`boolean`},name:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{label:`(Default) Enabled`},render:e=>(0,a.jsx)(n,{children:(0,a.jsx)(i,{...e})})},l={args:{label:`active`,active:!0},render:e=>(0,a.jsx)(n,{children:(0,a.jsx)(i,{...e})})},u={args:{label:`disabled`,disabled:!0},render:e=>(0,a.jsx)(n,{children:(0,a.jsx)(i,{...e})})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) Enabled"
  },
  render: (properties: any) => <DBTabList><DBTabItem {...properties} /></DBTabList>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "active",
    "active": true
  },
  render: (properties: any) => <DBTabList><DBTabItem {...properties} /></DBTabList>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "disabled",
    "disabled": true
  },
  render: (properties: any) => <DBTabList><DBTabItem {...properties} /></DBTabList>
}`,...u.parameters?.docs?.source}}},d=[`DefaultEnabled`,`active`,`disabled`]}))();export{c as DefaultEnabled,d as __namedExportsOrder,l as active,s as default,u as disabled};