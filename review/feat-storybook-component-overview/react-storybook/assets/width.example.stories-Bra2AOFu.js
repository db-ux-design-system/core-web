import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./button-DdY7d8Fy.js";var a=t({Auto:()=>l,Full:()=>u,__namedExportsOrder:()=>d,default:()=>c}),o,s,c,l,u,d;function f(){return(f=e((()=>{r(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBButton/Width`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:s()},argTypes:{variant:{control:`select`,options:[`outlined`,`brand`,`ghost`,`filled`]},disabled:{control:`boolean`},form:{control:`text`},name:{control:`text`},noText:{control:`boolean`},wrap:{control:`boolean`},type:{control:`select`,options:[`button`,`reset`,`submit`]},value:{control:`text`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},size:{control:`select`,options:[`small`,`medium`]},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},l={args:{width:`auto`,onClick:s(),children:`(Default) Auto`},render:e=>(0,o.jsx)(i,{...e})},u={args:{width:`full`,onClick:s(),children:`Width`},render:e=>(0,o.jsx)(`div`,{style:{width:`500px`},children:(0,o.jsx)(i,{...e})})},d=[`Auto`,`Full`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "auto",
    "onClick": fn(),
    "children": "(Default) Auto"
  },
  render: (properties: any) => <DBButton {...properties} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "onClick": fn(),
    "children": "Width"
  },
  render: (properties: any) => <div style={{
    width: '500px'
  }}><DBButton {...properties} /></div>
}`,...u.parameters?.docs?.source}}}})))()}export{a as i,u as n,f as r,l as t};