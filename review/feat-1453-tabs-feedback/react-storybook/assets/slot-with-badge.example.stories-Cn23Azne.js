import{i as e}from"./preload-helper-BWahpnvW.js";import{t}from"./jsx-runtime-DB7_Oyf5.js";import{c as n,ot as r,t as i,u as a}from"./src-Cu4RGE21.js";var o,s,c,l,u,d;e((()=>{i(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTabItem/Slot with Badge`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{label:{control:`text`},active:{control:`boolean`},disabled:{control:`boolean`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{label:`Messages`,children:(0,o.jsx)(r,{semantic:`informational`,children:`134`})},render:e=>(0,o.jsx)(n,{children:(0,o.jsx)(a,{...e})})},u={args:{label:`Notifications`,children:(0,o.jsx)(r,{semantic:`neutral`,children:`433`})},render:e=>(0,o.jsx)(n,{children:(0,o.jsx)(a,{...e})})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Messages",
    "children": <DBBadge semantic="informational">134</DBBadge>
  },
  render: (properties: any) => <DBTabList><DBTabItem {...properties} /></DBTabList>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Notifications",
    "children": <DBBadge semantic="neutral">433</DBBadge>
  },
  render: (properties: any) => <DBTabList><DBTabItem {...properties} /></DBTabList>
}`,...u.parameters?.docs?.source}}},d=[`MessageswithBadge`,`NotificationswithBadge`]}))();export{l as MessageswithBadge,u as NotificationswithBadge,d as __namedExportsOrder,c as default};