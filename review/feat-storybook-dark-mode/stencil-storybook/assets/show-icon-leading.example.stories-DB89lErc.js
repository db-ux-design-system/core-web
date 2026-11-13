import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-CR0u9Pnn.js";import{i,n as a,t as o}from"./apply-web-component-args-eq_daaBH.js";var s=t({False:()=>u,True:()=>d,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f;function p(){return(p=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBButton/Show Icon Leading`,component:`db-button`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:c()},argTypes:{variant:{control:`select`,options:[`outlined`,`brand`,`ghost`,`filled`]},disabled:{control:`boolean`},form:{control:`text`},name:{control:`text`},noText:{control:`boolean`},wrap:{control:`boolean`},type:{control:`select`,options:[`button`,`reset`,`submit`]},value:{control:`text`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},size:{control:`select`,options:[`small`,`medium`]},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},u={args:{icon:`x_placeholder`,onClick:c(),showIcon:!1},render:({children:e,...t})=>n`<db-button ${a(t)}>${i(`(Default) False`)}</db-button>`},d={args:{icon:`x_placeholder`,onClick:c(),showIcon:!0},render:({children:e,...t})=>n`<db-button ${a(t)}>${i(`True`)}</db-button>`},f=[`False`,`True`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "onClick": fn(),
    "showIcon": false
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-button \${spreadArgs(args)}>\${unsafeHTML(\`(Default) False\`)}</db-button>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "onClick": fn(),
    "showIcon": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-button \${spreadArgs(args)}>\${unsafeHTML(\`True\`)}</db-button>\`
}`,...d.parameters?.docs?.source}}}})))()}export{s as i,d as n,p as r,u as t};