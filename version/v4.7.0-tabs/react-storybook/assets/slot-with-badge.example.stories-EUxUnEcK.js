import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-BpX3lQ6F.js";import{a as n,j as r,o as i,t as a}from"./src-CXJdFFf7.js";var o,s,c,l,u,d;e((()=>{a(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTabItem/Slot with Badge`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{label:{control:`text`},active:{control:`boolean`},disabled:{control:`boolean`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},noText:{control:`boolean`},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{children:(0,o.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[`Messages`,(0,o.jsx)(r,{semantic:`informational`,children:`134`})]})},render:e=>(0,o.jsx)(n,{children:(0,o.jsx)(i,{...e})})},u={args:{children:(0,o.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[`Notifications`,(0,o.jsx)(r,{semantic:`neutral`,children:`433`})]})},render:e=>(0,o.jsx)(n,{children:(0,o.jsx)(i,{...e})})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <span style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
                        Messages
                        <DBBadge semantic="informational">134</DBBadge></span>
  },
  render: (properties: any) => <DBTabList><DBTabItem {...properties} /></DBTabList>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <span style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
                        Notifications
                        <DBBadge semantic="neutral">433</DBBadge></span>
  },
  render: (properties: any) => <DBTabList><DBTabItem {...properties} /></DBTabList>
}`,...u.parameters?.docs?.source}}},d=[`MessageswithBadge`,`NotificationswithBadge`]}))();export{l as MessageswithBadge,u as NotificationswithBadge,d as __namedExportsOrder,c as default};