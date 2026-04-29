import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-BpX3lQ6F.js";import{a as n,o as r,t as i}from"./src-CXJdFFf7.js";var a,o,s,c,l,u;e((()=>{i(),a=t(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBTabItem/Behavior`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{label:{control:`text`},active:{control:`boolean`},disabled:{control:`boolean`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},noText:{control:`boolean`},id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{label:`(Default) Auto Width`},render:e=>(0,a.jsx)(n,{children:(0,a.jsx)(r,{...e})})},l={args:{label:`Width full`},render:e=>(0,a.jsx)(n,{style:{blockSize:`100%`},children:(0,a.jsx)(r,{...e})})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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