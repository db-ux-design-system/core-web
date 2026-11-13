import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-B4vbRiLP.js";import{i,n as a,t as o}from"./apply-web-component-args-nLpIKx2m.js";var s=t({DefaultFalse:()=>u,True:()=>d,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f;function p(){return(p=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBNotification/Closeable`,component:`db-notification`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:c()},argTypes:{headline:{control:`text`},showIcon:{control:`boolean`},variant:{control:`select`,options:[`docked`,`standalone`,`overlay`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},closeable:{control:`boolean`},linkVariant:{control:`select`,options:[`block`,`inline`]},showHeadline:{control:`boolean`},showTimestamp:{control:`boolean`},timestamp:{control:`text`},ariaLive:{control:`select`,options:[`assertive`,`polite`,`off`]},text:{control:`text`},role:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},u={args:{closeable:!1},render:({children:e,...t})=>n`<div style="width: 300px"><db-notification ${a(t)}>${i(`(Default) False`)}</db-notification></div>`},d={args:{closeable:!0},render:({children:e,...t})=>n`<div style="width: 300px"><db-notification ${a(t)}>${i(`True`)}</db-notification></div>`},f=[`DefaultFalse`,`True`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "closeable": false
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`(Default) False\`)}</db-notification></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "closeable": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`True\`)}</db-notification></div>\`
}`,...d.parameters?.docs?.source}}}})))()}export{p as i,d as n,s as r,u as t};