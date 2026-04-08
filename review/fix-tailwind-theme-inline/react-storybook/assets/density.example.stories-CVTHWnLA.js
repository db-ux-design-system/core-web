import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-DnaggZxp.js";import{k as n,t as r}from"./src-D3LY8vWO.js";var i,a,o,s,c,l,u;e((()=>{r(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBButton/Density`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:a()},argTypes:{variant:{control:`select`,options:[`outlined`,`brand`,`ghost`,`filled`]},disabled:{control:`boolean`},form:{control:`text`},name:{control:`text`},noText:{control:`boolean`},wrap:{control:`boolean`},type:{control:`select`,options:[`button`,`reset`,`submit`]},value:{control:`text`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},size:{control:`select`,options:[`small`,`medium`]},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},s={args:{"data-density":`functional`,onClick:a(),children:`Functional`},render:e=>(0,i.jsx)(n,{...e})},c={args:{"data-density":`regular`,onClick:a(),children:`(Default) Regular`},render:e=>(0,i.jsx)(n,{...e})},l={args:{"data-density":`expressive`,onClick:a(),children:`Expressive`},render:e=>(0,i.jsx)(n,{...e})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "onClick": fn(),
    "children": "Functional"
  },
  render: (properties: any) => <DBButton {...properties} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "onClick": fn(),
    "children": "(Default) Regular"
  },
  render: (properties: any) => <DBButton {...properties} />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "onClick": fn(),
    "children": "Expressive"
  },
  render: (properties: any) => <DBButton {...properties} />
}`,...l.parameters?.docs?.source}}},u=[`Functional`,`Regular`,`Expressive`]}))();export{l as Expressive,s as Functional,c as Regular,u as __namedExportsOrder,o as default};