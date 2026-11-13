import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-Bx5_R3ll.js";import{i,n as a,t as o}from"./apply-web-component-args-K6-38IKB.js";var s=t({DefaultTrueBar:()=>f,DefaultTrueCircularhorizontal:()=>u,DefaultTrueCircularvertical:()=>d,FalseBar:()=>h,FalseCircularhorizontal:()=>p,FalseCircularvertical:()=>m,__namedExportsOrder:()=>g,default:()=>l}),c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBLoadingIndicator/Show Label`,component:`db-loading-indicator`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onTimeout:c()},argTypes:{variant:{control:`select`,options:[`bar`,`circular`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},size:{control:`select`,options:[`small`,`medium`,`large`]},state:{control:`select`,options:[`inactive`,`active`,`successful`,`critical`]},indeterminate:{control:`boolean`},value:{control:`number`},max:{control:`number`},showLabel:{control:`boolean`},showProgressText:{control:`boolean`},overlay:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},onTimeout:{action:`onTimeout`}}},u={args:{variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`,showLabel:!0},render:({children:e,...t})=>n`<db-loading-indicator ${a(t)}>${i(`Circular horizontal`)}</db-loading-indicator>`},d={args:{variant:`circular`,orientation:`vertical`,progressText:`42%`,showLabel:!0},render:({children:e,...t})=>n`<db-loading-indicator ${a(t)}>${i(`Circular vertical`)}</db-loading-indicator>`},f={args:{variant:`bar`,progressText:`42 of 100`,showLabel:!0},render:({children:e,...t})=>n`<db-loading-indicator ${a(t)}>${i(`Bar`)}</db-loading-indicator>`},p={args:{variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`,showLabel:!1},render:({children:e,...t})=>n`<db-loading-indicator ${a(t)}>${i(`Circular horizontal`)}</db-loading-indicator>`},m={args:{variant:`circular`,orientation:`vertical`,progressText:`42%`,showLabel:!1},render:({children:e,...t})=>n`<db-loading-indicator ${a(t)}>${i(`Circular vertical`)}</db-loading-indicator>`},h={args:{variant:`bar`,progressText:`42 of 100`,showLabel:!1},render:({children:e,...t})=>n`<db-loading-indicator ${a(t)}>${i(`Bar`)}</db-loading-indicator>`},g=[`DefaultTrueCircularhorizontal`,`DefaultTrueCircularvertical`,`DefaultTrueBar`,`FalseCircularhorizontal`,`FalseCircularvertical`,`FalseBar`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100",
    "showLabel": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Circular horizontal\`)}</db-loading-indicator>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "circular",
    "orientation": "vertical",
    "progressText": "42%",
    "showLabel": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Circular vertical\`)}</db-loading-indicator>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "bar",
    "progressText": "42 of 100",
    "showLabel": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Bar\`)}</db-loading-indicator>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100",
    "showLabel": false
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Circular horizontal\`)}</db-loading-indicator>\`
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "circular",
    "orientation": "vertical",
    "progressText": "42%",
    "showLabel": false
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Circular vertical\`)}</db-loading-indicator>\`
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "bar",
    "progressText": "42 of 100",
    "showLabel": false
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Bar\`)}</db-loading-indicator>\`
}`,...h.parameters?.docs?.source}}}})))()}export{p as a,s as c,h as i,u as n,m as o,d as r,_ as s,f as t};