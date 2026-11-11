import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-DcKsLlVE.js";import{i,n as a,t as o}from"./apply-web-component-args-CWgj8AIG.js";var s=t({__namedExportsOrder:()=>p,default:()=>l,expressive:()=>f,functional:()=>u,regularDefault:()=>d}),c,l,u,d,f,p;function m(){return(m=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBNotification/Density`,component:`db-notification`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:c()},argTypes:{headline:{control:`text`},showIcon:{control:`boolean`},variant:{control:`select`,options:[`docked`,`standalone`,`overlay`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},closeable:{control:`boolean`},linkVariant:{control:`select`,options:[`block`,`inline`]},showHeadline:{control:`boolean`},showTimestamp:{control:`boolean`},timestamp:{control:`text`},ariaLive:{control:`select`,options:[`assertive`,`polite`,`off`]},text:{control:`text`},role:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},u={args:{"data-density":`functional`,headline:`Headline`,icon:`information_circle`},render:({children:e,...t})=>n`<div style="width: 300px"><db-notification ${a(t)}>${i(`functional`)}</db-notification></div>`},d={args:{"data-density":`regular`,headline:`Headline`,icon:`information_circle`},render:({children:e,...t})=>n`<div style="width: 300px"><db-notification ${a(t)}>${i(`regular (Default)`)}</db-notification></div>`},f={args:{"data-density":`expressive`,headline:`Headline`,icon:`information_circle`},render:({children:e,...t})=>n`<div style="width: 300px"><db-notification ${a(t)}>${i(`expressive`)}</db-notification></div>`},p=[`functional`,`regularDefault`,`expressive`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "headline": "Headline",
    "icon": "information_circle"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`functional\`)}</db-notification></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "headline": "Headline",
    "icon": "information_circle"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`regular (Default)\`)}</db-notification></div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "headline": "Headline",
    "icon": "information_circle"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`expressive\`)}</db-notification></div>\`
}`,...f.parameters?.docs?.source}}}})))()}export{d as a,m as i,f as n,u as r,s as t};