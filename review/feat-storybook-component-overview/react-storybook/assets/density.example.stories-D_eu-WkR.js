import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./button-DdY7d8Fy.js";var a=t({Expressive:()=>d,Functional:()=>l,Regular:()=>u,__namedExportsOrder:()=>f,default:()=>c}),o,s,c,l,u,d,f;function p(){return(p=e((()=>{r(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBButton/Density`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:s()},argTypes:{variant:{control:`select`,options:[`outlined`,`brand`,`ghost`,`filled`]},disabled:{control:`boolean`},form:{control:`text`},name:{control:`text`},noText:{control:`boolean`},wrap:{control:`boolean`},type:{control:`select`,options:[`button`,`reset`,`submit`]},value:{control:`text`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},size:{control:`select`,options:[`small`,`medium`]},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},l={args:{"data-density":`functional`,onClick:s(),children:`Functional`},render:e=>(0,o.jsx)(i,{...e})},u={args:{"data-density":`regular`,onClick:s(),children:`(Default) Regular`},render:e=>(0,o.jsx)(i,{...e})},d={args:{"data-density":`expressive`,onClick:s(),children:`Expressive`},render:e=>(0,o.jsx)(i,{...e})},f=[`Functional`,`Regular`,`Expressive`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "onClick": fn(),
    "children": "Functional"
  },
  render: (properties: any) => <DBButton {...properties} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "onClick": fn(),
    "children": "(Default) Regular"
  },
  render: (properties: any) => <DBButton {...properties} />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "onClick": fn(),
    "children": "Expressive"
  },
  render: (properties: any) => <DBButton {...properties} />
}`,...d.parameters?.docs?.source}}}})))()}export{p as a,a as i,l as n,u as r,d as t};