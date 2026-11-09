import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-LYtL2xrD.js";import{i,n as a,t as o}from"./apply-web-component-args-QiJXFgM3.js";var s=t({Interaction:()=>u,LoadingIndicatorInteraction1:()=>d,LoadingIndicatorInteraction2:()=>f,LoadingIndicatorInteraction3:()=>p,LoadingIndicatorInteraction4:()=>m,LoadingIndicatorInteraction5:()=>h,LoadingIndicatorInteraction6:()=>g,__namedExportsOrder:()=>_,default:()=>l}),c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBLoadingIndicator/Interaction`,component:`db-loading-indicator`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`bar`,`circular`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},size:{control:`select`,options:[`small`,`medium`,`large`]},state:{control:`select`,options:[`inactive`,`active`,`successful`,`critical`]},indeterminate:{control:`boolean`},value:{control:`number`},max:{control:`number`},showLabel:{control:`boolean`},showProgressText:{control:`boolean`},overlay:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]}}},u={args:{},render:({children:e,...t})=>n`<div data-testid="default-loading"><db-loading-indicator ${a(t)}>${i(`Test`)}</db-loading-indicator></div>`},d={args:{state:`critical`},render:({children:e,...t})=>n`<div data-testid="critical-loading"><db-loading-indicator ${a(t)}>${i(`Test`)}</db-loading-indicator></div>`},f={args:{role:`alert`},render:({children:e,...t})=>n`<div data-testid="role-override-loading"><db-loading-indicator ${a(t)}>${i(`Test`)}</db-loading-indicator></div>`},p={args:{id:`my-loading`},render:({children:e,...t})=>n`<div data-testid="id-loading"><db-loading-indicator ${a(t)}>${i(`Test`)}</db-loading-indicator></div>`},m={args:{progressText:`42 of 100`,indeterminate:!1,value:42,max:100},render:({children:e,...t})=>n`<div data-testid="determinate-loading"><db-loading-indicator ${a(t)}>${i(`Test`)}</db-loading-indicator></div>`},h={args:{variant:`bar`,indeterminate:!1,value:200,max:100},render:({children:e,...t})=>n`<div data-testid="clamp-loading"><db-loading-indicator ${a(t)}>${i(`Test`)}</db-loading-indicator></div>`},g={args:{indeterminate:`false`,value:42,max:100},render:({children:e,...t})=>n`<div data-testid="string-false-loading"><db-loading-indicator ${a(t)}>${i(`Test`)}</db-loading-indicator></div>`},_=[`Interaction`,`LoadingIndicatorInteraction1`,`LoadingIndicatorInteraction2`,`LoadingIndicatorInteraction3`,`LoadingIndicatorInteraction4`,`LoadingIndicatorInteraction5`,`LoadingIndicatorInteraction6`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<div data-testid="default-loading"><db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Test\`)}</db-loading-indicator></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "critical"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-testid="critical-loading"><db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Test\`)}</db-loading-indicator></div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "role": "alert"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-testid="role-override-loading"><db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Test\`)}</db-loading-indicator></div>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "my-loading"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-testid="id-loading"><db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Test\`)}</db-loading-indicator></div>\`
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "progressText": "42 of 100",
    "indeterminate": false,
    "value": 42,
    "max": 100
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-testid="determinate-loading"><db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Test\`)}</db-loading-indicator></div>\`
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "bar",
    "indeterminate": false,
    "value": 200,
    "max": 100
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-testid="clamp-loading"><db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Test\`)}</db-loading-indicator></div>\`
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "indeterminate": "false",
    "value": 42,
    "max": 100
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-testid="string-false-loading"><db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Test\`)}</db-loading-indicator></div>\`
}`,...g.parameters?.docs?.source}}}})))()}export{m as a,v as c,p as i,s as l,d as n,h as o,f as r,g as s,u as t};