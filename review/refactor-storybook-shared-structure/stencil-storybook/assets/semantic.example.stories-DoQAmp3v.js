import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-CEgE4mfw.js";import{i,n as a,t as o}from"./apply-web-component-args-CzDfGoSP.js";var s=t({AdaptiveStrong:()=>g,Critical:()=>d,CriticalStrong:()=>_,DefaultAdaptive:()=>u,Informational:()=>f,InformationalStrong:()=>v,Neutral:()=>p,NeutralStrong:()=>y,Successful:()=>m,SuccessfulStrong:()=>b,Warning:()=>h,WarningStrong:()=>x,__namedExportsOrder:()=>S,default:()=>l}),c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBTag/Semantic`,component:`db-tag`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onRemove:c()},argTypes:{emphasis:{control:`select`,options:[`weak`,`strong`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},behavior:{control:`select`,options:[`static`,`removable`]},showIcon:{control:`boolean`},noText:{control:`boolean`},content:{control:`text`},showCheckState:{control:`boolean`},overflow:{control:`boolean`},removeButton:{control:`text`},text:{control:`text`},value:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onRemove:{action:`onRemove`}}},u={args:{},render:({children:e,...t})=>n`<db-tag ${a(t)}>${i(`(Default) Adaptive`)}</db-tag>`},d={args:{semantic:`critical`},render:({children:e,...t})=>n`<db-tag ${a(t)}>${i(`Critical`)}</db-tag>`},f={args:{semantic:`informational`},render:({children:e,...t})=>n`<db-tag ${a(t)}>${i(`Informational`)}</db-tag>`},p={args:{semantic:`neutral`},render:({children:e,...t})=>n`<db-tag ${a(t)}>${i(`Neutral`)}</db-tag>`},m={args:{semantic:`successful`},render:({children:e,...t})=>n`<db-tag ${a(t)}>${i(`Successful`)}</db-tag>`},h={args:{semantic:`warning`},render:({children:e,...t})=>n`<db-tag ${a(t)}>${i(`Warning`)}</db-tag>`},g={args:{emphasis:`strong`},render:({children:e,...t})=>n`<db-tag ${a(t)}>${i(`Adaptive Strong`)}</db-tag>`},_={args:{semantic:`critical`,emphasis:`strong`},render:({children:e,...t})=>n`<db-tag ${a(t)}>${i(`Critical Strong`)}</db-tag>`},v={args:{semantic:`informational`,emphasis:`strong`},render:({children:e,...t})=>n`<db-tag ${a(t)}>${i(`Informational Strong`)}</db-tag>`},y={args:{semantic:`neutral`,emphasis:`strong`},render:({children:e,...t})=>n`<db-tag ${a(t)}>${i(`Neutral Strong`)}</db-tag>`},b={args:{semantic:`successful`,emphasis:`strong`},render:({children:e,...t})=>n`<db-tag ${a(t)}>${i(`Successful Strong`)}</db-tag>`},x={args:{semantic:`warning`,emphasis:`strong`},render:({children:e,...t})=>n`<db-tag ${a(t)}>${i(`Warning Strong`)}</db-tag>`},S=[`DefaultAdaptive`,`Critical`,`Informational`,`Neutral`,`Successful`,`Warning`,`AdaptiveStrong`,`CriticalStrong`,`InformationalStrong`,`NeutralStrong`,`SuccessfulStrong`,`WarningStrong`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<db-tag \${spreadArgs(args)}>\${unsafeHTML(\`(Default) Adaptive\`)}</db-tag>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "critical"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-tag \${spreadArgs(args)}>\${unsafeHTML(\`Critical\`)}</db-tag>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "informational"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-tag \${spreadArgs(args)}>\${unsafeHTML(\`Informational\`)}</db-tag>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "neutral"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-tag \${spreadArgs(args)}>\${unsafeHTML(\`Neutral\`)}</db-tag>\`
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "successful"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-tag \${spreadArgs(args)}>\${unsafeHTML(\`Successful\`)}</db-tag>\`
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "warning"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-tag \${spreadArgs(args)}>\${unsafeHTML(\`Warning\`)}</db-tag>\`
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "emphasis": "strong"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-tag \${spreadArgs(args)}>\${unsafeHTML(\`Adaptive Strong\`)}</db-tag>\`
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "critical",
    "emphasis": "strong"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-tag \${spreadArgs(args)}>\${unsafeHTML(\`Critical Strong\`)}</db-tag>\`
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "informational",
    "emphasis": "strong"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-tag \${spreadArgs(args)}>\${unsafeHTML(\`Informational Strong\`)}</db-tag>\`
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "neutral",
    "emphasis": "strong"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-tag \${spreadArgs(args)}>\${unsafeHTML(\`Neutral Strong\`)}</db-tag>\`
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "successful",
    "emphasis": "strong"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-tag \${spreadArgs(args)}>\${unsafeHTML(\`Successful Strong\`)}</db-tag>\`
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "warning",
    "emphasis": "strong"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-tag \${spreadArgs(args)}>\${unsafeHTML(\`Warning Strong\`)}</db-tag>\`
}`,...x.parameters?.docs?.source}}}})))()}export{f as a,y as c,h as d,x as f,u as i,m as l,s as m,d as n,v as o,C as p,_ as r,p as s,g as t,b as u};