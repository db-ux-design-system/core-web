import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-BQPE-Z7b.js";import{i,n as a,t as o}from"./apply-web-component-args-B09ukjNm.js";var s=t({AutomaticLineBreaks:()=>u,AutomaticLineBreaksandIcon:()=>d,SmallAutomaticLineBreaks:()=>f,__namedExportsOrder:()=>p,default:()=>l}),c,l,u,d,f,p;function m(){return(m=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBButton/Multi Line Text`,component:`db-button`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:c()},argTypes:{variant:{control:`select`,options:[`outlined`,`brand`,`ghost`,`filled`]},disabled:{control:`boolean`},form:{control:`text`},name:{control:`text`},noText:{control:`boolean`},wrap:{control:`boolean`},type:{control:`select`,options:[`button`,`reset`,`submit`]},value:{control:`text`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},size:{control:`select`,options:[`small`,`medium`]},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},u={args:{width:`full`,onClick:c()},render:({children:e,...t})=>n`<div style="width: 300px"><db-button ${a(t)}>${i(`Multi-line Text With Automatic Line Breaks`)}</db-button></div>`},d={args:{width:`full`,icon:`x_placeholder`,onClick:c()},render:({children:e,...t})=>n`<div style="width: 300px"><db-button ${a(t)}>${i(`Multi-line Text With Automatic Line Breaks and Icon`)}</db-button></div>`},f={args:{size:`small`,onClick:c()},render:({children:e,...t})=>n`<div style="width: 300px"><db-button ${a(t)}>${i(`Button Small Multi-line Text With Automatic Line Breaks`)}</db-button></div>`},p=[`AutomaticLineBreaks`,`AutomaticLineBreaksandIcon`,`SmallAutomaticLineBreaks`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "onClick": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-button \${spreadArgs(args)}>\${unsafeHTML(\`Multi-line Text With Automatic Line Breaks\`)}</db-button></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "icon": "x_placeholder",
    "onClick": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-button \${spreadArgs(args)}>\${unsafeHTML(\`Multi-line Text With Automatic Line Breaks and Icon\`)}</db-button></div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "onClick": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-button \${spreadArgs(args)}>\${unsafeHTML(\`Button Small Multi-line Text With Automatic Line Breaks\`)}</db-button></div>\`
}`,...f.parameters?.docs?.source}}}})))()}export{s as a,m as i,d as n,f as r,u as t};