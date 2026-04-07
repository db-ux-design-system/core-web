import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-Bn1Ys6_W.js";import{k as n,t as r}from"./src-BxDCfhU2.js";var i,a,o,s,c,l,u,d;e((()=>{r(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBButton/Variant`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:a()},argTypes:{variant:{control:`select`,options:[`outlined`,`brand`,`ghost`,`filled`]},disabled:{control:`boolean`},form:{control:`text`},name:{control:`text`},noText:{control:`boolean`},wrap:{control:`boolean`},type:{control:`select`,options:[`button`,`reset`,`submit`]},value:{control:`text`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},size:{control:`select`,options:[`small`,`medium`]},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},s={args:{variant:`outlined`,onClick:a(),children:`(Default) Outlined - Adaptive`},render:e=>(0,i.jsx)(n,{...e})},c={args:{variant:`filled`,onClick:a(),children:`Filled - Adaptive`},render:e=>(0,i.jsx)(n,{...e})},l={args:{variant:`ghost`,onClick:a(),children:`Ghost - Adaptive`},render:e=>(0,i.jsx)(n,{...e})},u={args:{variant:`brand`,onClick:a(),children:`Brand`},render:e=>(0,i.jsx)(n,{...e})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "outlined",
    "onClick": fn(),
    "children": "(Default) Outlined - Adaptive"
  },
  render: (properties: any) => <DBButton {...properties} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "filled",
    "onClick": fn(),
    "children": "Filled - Adaptive"
  },
  render: (properties: any) => <DBButton {...properties} />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "ghost",
    "onClick": fn(),
    "children": "Ghost - Adaptive"
  },
  render: (properties: any) => <DBButton {...properties} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "brand",
    "onClick": fn(),
    "children": "Brand"
  },
  render: (properties: any) => <DBButton {...properties} />
}`,...u.parameters?.docs?.source}}},d=[`Outlined`,`Filled`,`Ghost`,`Brand`]}))();export{u as Brand,c as Filled,l as Ghost,s as Outlined,d as __namedExportsOrder,o as default};