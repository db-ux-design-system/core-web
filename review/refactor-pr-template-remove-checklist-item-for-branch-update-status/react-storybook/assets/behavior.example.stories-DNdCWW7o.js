import{i as e}from"./preload-helper-CmJlAE9N.js";import{t}from"./jsx-runtime-CHRAdzsB.js";import{c as n,t as r,u as i}from"./src-C-s-5e0x.js";var a,o,s,c,l,u;e((()=>{r(),a=t(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBTabItem/Behavior`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{label:{control:`text`},active:{control:`boolean`},disabled:{control:`boolean`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},noText:{control:`boolean`},checked:{control:`boolean`},name:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{label:`(Default) Auto Width`},render:e=>(0,a.jsx)(n,{children:(0,a.jsx)(i,{...e})})},l={args:{label:`Width full`},render:e=>(0,a.jsx)(n,{style:{blockSize:`100%`},children:(0,a.jsx)(i,{...e})})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) Auto Width"
  },
  render: (properties: any) => <DBTabList><DBTabItem {...properties} /></DBTabList>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Width full"
  },
  render: (properties: any) => <DBTabList style={{
    blockSize: '100%'
  }}><DBTabItem {...properties} /></DBTabList>
}`,...l.parameters?.docs?.source}}},u=[`DefaultAutoWidth`,`Widthfull`]}))();export{c as DefaultAutoWidth,l as Widthfull,u as __namedExportsOrder,s as default};