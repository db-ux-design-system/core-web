import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-DesJQKM_.js";import{i,n as a,t as o}from"./apply-web-component-args-CMbNfqh7.js";var s=t({AdaptiveStrong:()=>g,Critical:()=>d,CriticalStrong:()=>_,DefaultAdaptive:()=>u,Informational:()=>f,InformationalStrong:()=>v,Neutral:()=>p,NeutralStrong:()=>y,Successful:()=>m,SuccessfulStrong:()=>b,Warning:()=>h,WarningStrong:()=>x,__namedExportsOrder:()=>S,default:()=>l}),c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBBadge/Semantic`,component:`db-badge`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{emphasis:{control:`select`,options:[`weak`,`strong`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},size:{control:`select`,options:[`small`,`medium`]},placement:{control:`select`,options:[`inline`,`corner-top-left`,`corner-top-right`,`corner-center-left`,`corner-center-right`,`corner-bottom-left`,`corner-bottom-right`]},label:{control:`text`},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},u={args:{},render:({children:e,...t})=>n`<db-badge ${a(t)}>${i(`(Default) Adaptive`)}</db-badge>`},d={args:{semantic:`critical`},render:({children:e,...t})=>n`<db-badge ${a(t)}>${i(`Critical`)}</db-badge>`},f={args:{semantic:`informational`},render:({children:e,...t})=>n`<db-badge ${a(t)}>${i(`Informational`)}</db-badge>`},p={args:{semantic:`neutral`},render:({children:e,...t})=>n`<db-badge ${a(t)}>${i(`Neutral`)}</db-badge>`},m={args:{semantic:`successful`},render:({children:e,...t})=>n`<db-badge ${a(t)}>${i(`Successful`)}</db-badge>`},h={args:{semantic:`warning`},render:({children:e,...t})=>n`<db-badge ${a(t)}>${i(`Warning`)}</db-badge>`},g={args:{emphasis:`strong`},render:({children:e,...t})=>n`<db-badge ${a(t)}>${i(`Adaptive Strong`)}</db-badge>`},_={args:{semantic:`critical`,emphasis:`strong`},render:({children:e,...t})=>n`<db-badge ${a(t)}>${i(`Critical Strong`)}</db-badge>`},v={args:{semantic:`informational`,emphasis:`strong`},render:({children:e,...t})=>n`<db-badge ${a(t)}>${i(`Informational Strong`)}</db-badge>`},y={args:{semantic:`neutral`,emphasis:`strong`},render:({children:e,...t})=>n`<db-badge ${a(t)}>${i(`Neutral Strong`)}</db-badge>`},b={args:{semantic:`successful`,emphasis:`strong`},render:({children:e,...t})=>n`<db-badge ${a(t)}>${i(`Successful Strong`)}</db-badge>`},x={args:{semantic:`warning`,emphasis:`strong`},render:({children:e,...t})=>n`<db-badge ${a(t)}>${i(`Warning Strong`)}</db-badge>`},S=[`DefaultAdaptive`,`Critical`,`Informational`,`Neutral`,`Successful`,`Warning`,`AdaptiveStrong`,`CriticalStrong`,`InformationalStrong`,`NeutralStrong`,`SuccessfulStrong`,`WarningStrong`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<db-badge \${spreadArgs(args)}>\${unsafeHTML(\`(Default) Adaptive\`)}</db-badge>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "critical"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-badge \${spreadArgs(args)}>\${unsafeHTML(\`Critical\`)}</db-badge>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "informational"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-badge \${spreadArgs(args)}>\${unsafeHTML(\`Informational\`)}</db-badge>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "neutral"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-badge \${spreadArgs(args)}>\${unsafeHTML(\`Neutral\`)}</db-badge>\`
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "successful"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-badge \${spreadArgs(args)}>\${unsafeHTML(\`Successful\`)}</db-badge>\`
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "warning"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-badge \${spreadArgs(args)}>\${unsafeHTML(\`Warning\`)}</db-badge>\`
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "emphasis": "strong"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-badge \${spreadArgs(args)}>\${unsafeHTML(\`Adaptive Strong\`)}</db-badge>\`
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "critical",
    "emphasis": "strong"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-badge \${spreadArgs(args)}>\${unsafeHTML(\`Critical Strong\`)}</db-badge>\`
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "informational",
    "emphasis": "strong"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-badge \${spreadArgs(args)}>\${unsafeHTML(\`Informational Strong\`)}</db-badge>\`
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "neutral",
    "emphasis": "strong"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-badge \${spreadArgs(args)}>\${unsafeHTML(\`Neutral Strong\`)}</db-badge>\`
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "successful",
    "emphasis": "strong"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-badge \${spreadArgs(args)}>\${unsafeHTML(\`Successful Strong\`)}</db-badge>\`
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "warning",
    "emphasis": "strong"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-badge \${spreadArgs(args)}>\${unsafeHTML(\`Warning Strong\`)}</db-badge>\`
}`,...x.parameters?.docs?.source}}}})))()}export{f as a,y as c,h as d,x as f,u as i,m as l,s as m,d as n,v as o,C as p,_ as r,p as s,g as t,b as u};