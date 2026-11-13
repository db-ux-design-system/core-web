import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-DdTBnHTV.js";import{i,n as a,t as o}from"./apply-web-component-args-v7OxqSTB.js";var s=t({Critical:()=>f,DefaultAdaptive:()=>u,Informational:()=>p,Neutral:()=>d,Successful:()=>m,Warning:()=>h,__namedExportsOrder:()=>g,default:()=>l}),c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBNotification/Semantic`,component:`db-notification`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:c()},argTypes:{headline:{control:`text`},showIcon:{control:`boolean`},variant:{control:`select`,options:[`docked`,`standalone`,`overlay`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},closeable:{control:`boolean`},linkVariant:{control:`select`,options:[`block`,`inline`]},showHeadline:{control:`boolean`},showTimestamp:{control:`boolean`},timestamp:{control:`text`},ariaLive:{control:`select`,options:[`assertive`,`polite`,`off`]},text:{control:`text`},role:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},u={args:{headline:`Headline`},render:({children:e,...t})=>n`<div style="width: 300px"><db-notification ${a(t)}>${i(`(Default) Adaptive`)}</db-notification></div>`},d={args:{semantic:`neutral`,headline:`Headline`},render:({children:e,...t})=>n`<div style="width: 300px"><db-notification ${a(t)}>${i(`Neutral`)}</db-notification></div>`},f={args:{semantic:`critical`,headline:`Headline`},render:({children:e,...t})=>n`<div style="width: 300px"><db-notification ${a(t)}>${i(`Critical`)}</db-notification></div>`},p={args:{semantic:`informational`,headline:`Headline`},render:({children:e,...t})=>n`<div style="width: 300px"><db-notification ${a(t)}>${i(`Informational`)}</db-notification></div>`},m={args:{semantic:`successful`,headline:`Headline`},render:({children:e,...t})=>n`<div style="width: 300px"><db-notification ${a(t)}>${i(`Successful`)}</db-notification></div>`},h={args:{semantic:`warning`,headline:`Headline`},render:({children:e,...t})=>n`<div style="width: 300px"><db-notification ${a(t)}>${i(`Warning`)}</db-notification></div>`},g=[`DefaultAdaptive`,`Neutral`,`Critical`,`Informational`,`Successful`,`Warning`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "headline": "Headline"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`(Default) Adaptive\`)}</db-notification></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "neutral",
    "headline": "Headline"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`Neutral\`)}</db-notification></div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "critical",
    "headline": "Headline"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`Critical\`)}</db-notification></div>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "informational",
    "headline": "Headline"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`Informational\`)}</db-notification></div>\`
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "successful",
    "headline": "Headline"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`Successful\`)}</db-notification></div>\`
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "warning",
    "headline": "Headline"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`Warning\`)}</db-notification></div>\`
}`,...h.parameters?.docs?.source}}}})))()}export{m as a,s as c,d as i,u as n,h as o,p as r,_ as s,f as t};