import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-BqvJLakp.js";import{i,n as a,t as o}from"./apply-web-component-args-BtUnDguQ.js";var s=t({Defaultstatus:()=>u,__namedExportsOrder:()=>p,default:()=>l,rolealert:()=>f,rolestatus:()=>d}),c,l,u,d,f,p;function m(){return(m=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBLoadingIndicator/Role`,component:`db-loading-indicator`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onTimeout:c()},argTypes:{variant:{control:`select`,options:[`bar`,`circular`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},size:{control:`select`,options:[`small`,`medium`,`large`]},state:{control:`select`,options:[`inactive`,`active`,`successful`,`critical`]},indeterminate:{control:`boolean`},value:{control:`number`},max:{control:`number`},showLabel:{control:`boolean`},showProgressText:{control:`boolean`},overlay:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},onTimeout:{action:`onTimeout`}}},u={args:{variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`},render:({children:e,...t})=>n`<db-loading-indicator ${a(t)}>${i(`Default`)}</db-loading-indicator>`},d={args:{role:`status`,variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`},render:({children:e,...t})=>n`<db-loading-indicator ${a(t)}>${i(`Status`)}</db-loading-indicator>`},f={args:{role:`alert`,variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`},render:({children:e,...t})=>n`<db-loading-indicator ${a(t)}>${i(`Alert`)}</db-loading-indicator>`},p=[`Defaultstatus`,`rolestatus`,`rolealert`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Default\`)}</db-loading-indicator>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "role": "status",
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Status\`)}</db-loading-indicator>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "role": "alert",
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Alert\`)}</db-loading-indicator>\`
}`,...f.parameters?.docs?.source}}}})))()}export{d as a,f as i,m as n,s as r,u as t};