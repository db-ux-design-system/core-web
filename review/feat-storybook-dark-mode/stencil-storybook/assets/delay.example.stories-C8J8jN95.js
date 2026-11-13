import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-CR0u9Pnn.js";import{i,n as a,t as o}from"./apply-web-component-args-eq_daaBH.js";var s=t({DefaultNoneBar:()=>f,DefaultNoneCircularhorizontal:()=>u,DefaultNoneCircularvertical:()=>d,FastBar:()=>v,FastCircularhorizontal:()=>g,FastCircularvertical:()=>_,SlowBar:()=>h,SlowCircularhorizontal:()=>p,SlowCircularvertical:()=>m,__namedExportsOrder:()=>y,default:()=>l}),c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBLoadingIndicator/Delay`,component:`db-loading-indicator`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onTimeout:c()},argTypes:{variant:{control:`select`,options:[`bar`,`circular`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},size:{control:`select`,options:[`small`,`medium`,`large`]},state:{control:`select`,options:[`inactive`,`active`,`successful`,`critical`]},indeterminate:{control:`boolean`},value:{control:`number`},max:{control:`number`},showLabel:{control:`boolean`},showProgressText:{control:`boolean`},overlay:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},onTimeout:{action:`onTimeout`}}},u={args:{delay:`none`,variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`},render:({children:e,...t})=>n`<db-loading-indicator ${a(t)}>${i(`Circular horizontal`)}</db-loading-indicator>`},d={args:{delay:`none`,variant:`circular`,orientation:`vertical`,progressText:`42%`},render:({children:e,...t})=>n`<db-loading-indicator ${a(t)}>${i(`Circular vertical`)}</db-loading-indicator>`},f={args:{delay:`none`,variant:`bar`,progressText:`42 of 100`},render:({children:e,...t})=>n`<db-loading-indicator ${a(t)}>${i(`Bar`)}</db-loading-indicator>`},p={args:{delay:`slow`,variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`},render:({children:e,...t})=>n`<db-loading-indicator ${a(t)}>${i(`Circular horizontal`)}</db-loading-indicator>`},m={args:{delay:`slow`,variant:`circular`,orientation:`vertical`,progressText:`42%`},render:({children:e,...t})=>n`<db-loading-indicator ${a(t)}>${i(`Circular vertical`)}</db-loading-indicator>`},h={args:{delay:`slow`,variant:`bar`,progressText:`42 of 100`},render:({children:e,...t})=>n`<db-loading-indicator ${a(t)}>${i(`Bar`)}</db-loading-indicator>`},g={args:{delay:`fast`,variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`},render:({children:e,...t})=>n`<db-loading-indicator ${a(t)}>${i(`Circular horizontal`)}</db-loading-indicator>`},_={args:{delay:`fast`,variant:`circular`,orientation:`vertical`,progressText:`42%`},render:({children:e,...t})=>n`<db-loading-indicator ${a(t)}>${i(`Circular vertical`)}</db-loading-indicator>`},v={args:{delay:`fast`,variant:`bar`,progressText:`42 of 100`},render:({children:e,...t})=>n`<db-loading-indicator ${a(t)}>${i(`Bar`)}</db-loading-indicator>`},y=[`DefaultNoneCircularhorizontal`,`DefaultNoneCircularvertical`,`DefaultNoneBar`,`SlowCircularhorizontal`,`SlowCircularvertical`,`SlowBar`,`FastCircularhorizontal`,`FastCircularvertical`,`FastBar`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "none",
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Circular horizontal\`)}</db-loading-indicator>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "none",
    "variant": "circular",
    "orientation": "vertical",
    "progressText": "42%"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Circular vertical\`)}</db-loading-indicator>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "none",
    "variant": "bar",
    "progressText": "42 of 100"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Bar\`)}</db-loading-indicator>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "slow",
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Circular horizontal\`)}</db-loading-indicator>\`
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "slow",
    "variant": "circular",
    "orientation": "vertical",
    "progressText": "42%"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Circular vertical\`)}</db-loading-indicator>\`
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "slow",
    "variant": "bar",
    "progressText": "42 of 100"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Bar\`)}</db-loading-indicator>\`
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "fast",
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Circular horizontal\`)}</db-loading-indicator>\`
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "fast",
    "variant": "circular",
    "orientation": "vertical",
    "progressText": "42%"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Circular vertical\`)}</db-loading-indicator>\`
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "fast",
    "variant": "bar",
    "progressText": "42 of 100"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Bar\`)}</db-loading-indicator>\`
}`,...v.parameters?.docs?.source}}}})))()}export{g as a,p as c,b as d,v as i,m as l,u as n,_ as o,d as r,h as s,f as t,s as u};