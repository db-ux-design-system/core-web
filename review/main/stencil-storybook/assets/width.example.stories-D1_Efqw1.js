import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-B4vbRiLP.js";import{i,n as a,t as o}from"./apply-web-component-args-nLpIKx2m.js";var s=t({Auto:()=>u,Full:()=>d,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f;function p(){return(p=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBButton/Width`,component:`db-button`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:c()},argTypes:{variant:{control:`select`,options:[`outlined`,`brand`,`ghost`,`filled`]},disabled:{control:`boolean`},form:{control:`text`},name:{control:`text`},noText:{control:`boolean`},wrap:{control:`boolean`},type:{control:`select`,options:[`button`,`reset`,`submit`]},value:{control:`text`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},size:{control:`select`,options:[`small`,`medium`]},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},u={args:{width:`auto`,onClick:c()},render:({children:e,...t})=>n`<db-button ${a(t)}>${i(`(Default) Auto`)}</db-button>`},d={args:{width:`full`,onClick:c()},render:({children:e,...t})=>n`<div style="width: 500px"><db-button ${a(t)}>${i(`Width`)}</db-button></div>`},f=[`Auto`,`Full`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "auto",
    "onClick": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-button \${spreadArgs(args)}>\${unsafeHTML(\`(Default) Auto\`)}</db-button>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "onClick": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 500px"><db-button \${spreadArgs(args)}>\${unsafeHTML(\`Width\`)}</db-button></div>\`
}`,...d.parameters?.docs?.source}}}})))()}export{s as i,d as n,p as r,u as t};