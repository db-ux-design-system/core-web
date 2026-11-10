import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-DBAghmrJ.js";import{i,n as a,t as o}from"./apply-web-component-args-BFw0IsXG.js";var s=t({DefaultDocked:()=>u,Overlay:()=>f,Standalone:()=>d,__namedExportsOrder:()=>p,default:()=>l}),c,l,u,d,f,p;function m(){return(m=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBNotification/Variant`,component:`db-notification`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:c()},argTypes:{headline:{control:`text`},showIcon:{control:`boolean`},variant:{control:`select`,options:[`docked`,`standalone`,`overlay`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},closeable:{control:`boolean`},linkVariant:{control:`select`,options:[`block`,`inline`]},showHeadline:{control:`boolean`},showTimestamp:{control:`boolean`},timestamp:{control:`text`},ariaLive:{control:`select`,options:[`assertive`,`polite`,`off`]},text:{control:`text`},role:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},u={args:{variant:`docked`,headline:`Headline`,icon:`information_circle`},render:({children:e,...t})=>n`<div style="width: 300px"><db-notification ${a(t)}>${i(`(Default) Docked`)}</db-notification></div>`},d={args:{variant:`standalone`,headline:`Headline`,icon:`information_circle`},render:({children:e,...t})=>n`<div style="width: 300px"><db-notification ${a(t)}>${i(`Standalone`)}</db-notification></div>`},f={args:{variant:`overlay`,headline:`Headline`,icon:`information_circle`},render:({children:e,...t})=>n`<div style="width: 300px"><db-notification ${a(t)}>${i(`Overlay`)}</db-notification></div>`},p=[`DefaultDocked`,`Standalone`,`Overlay`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "docked",
    "headline": "Headline",
    "icon": "information_circle"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`(Default) Docked\`)}</db-notification></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "standalone",
    "headline": "Headline",
    "icon": "information_circle"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`Standalone\`)}</db-notification></div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay",
    "headline": "Headline",
    "icon": "information_circle"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`Overlay\`)}</db-notification></div>\`
}`,...f.parameters?.docs?.source}}}})))()}export{s as a,m as i,f as n,d as r,u as t};