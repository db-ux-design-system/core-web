import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-BqvJLakp.js";import{i,n as a,t as o}from"./apply-web-component-args-BtUnDguQ.js";var s=t({DefaultRegularBar:()=>h,DefaultRegularCircularhorizontal:()=>p,DefaultRegularCircularvertical:()=>m,ExpressiveBar:()=>v,ExpressiveCircularhorizontal:()=>g,ExpressiveCircularvertical:()=>_,FunctionalBar:()=>f,FunctionalCircularhorizontal:()=>u,FunctionalCircularvertical:()=>d,__namedExportsOrder:()=>y,default:()=>l}),c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBLoadingIndicator/Density`,component:`db-loading-indicator`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onTimeout:c()},argTypes:{variant:{control:`select`,options:[`bar`,`circular`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},size:{control:`select`,options:[`small`,`medium`,`large`]},state:{control:`select`,options:[`inactive`,`active`,`successful`,`critical`]},indeterminate:{control:`boolean`},value:{control:`number`},max:{control:`number`},showLabel:{control:`boolean`},showProgressText:{control:`boolean`},overlay:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},onTimeout:{action:`onTimeout`}}},u={args:{"data-density":`functional`,variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`},render:({children:e,...t})=>n`<db-loading-indicator ${a(t)}>${i(`Circular horizontal`)}</db-loading-indicator>`},d={args:{"data-density":`functional`,variant:`circular`,orientation:`vertical`,progressText:`42%`},render:({children:e,...t})=>n`<db-loading-indicator ${a(t)}>${i(`Circular vertical`)}</db-loading-indicator>`},f={args:{"data-density":`functional`,variant:`bar`,progressText:`42 of 100`},render:({children:e,...t})=>n`<db-loading-indicator ${a(t)}>${i(`Bar`)}</db-loading-indicator>`},p={args:{"data-density":`regular`,variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`},render:({children:e,...t})=>n`<db-loading-indicator ${a(t)}>${i(`Circular horizontal`)}</db-loading-indicator>`},m={args:{"data-density":`regular`,variant:`circular`,orientation:`vertical`,progressText:`42%`},render:({children:e,...t})=>n`<db-loading-indicator ${a(t)}>${i(`Circular vertical`)}</db-loading-indicator>`},h={args:{"data-density":`regular`,variant:`bar`,progressText:`42 of 100`},render:({children:e,...t})=>n`<db-loading-indicator ${a(t)}>${i(`Bar`)}</db-loading-indicator>`},g={args:{"data-density":`expressive`,variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`},render:({children:e,...t})=>n`<db-loading-indicator ${a(t)}>${i(`Circular horizontal`)}</db-loading-indicator>`},_={args:{"data-density":`expressive`,variant:`circular`,orientation:`vertical`,progressText:`42%`},render:({children:e,...t})=>n`<db-loading-indicator ${a(t)}>${i(`Circular vertical`)}</db-loading-indicator>`},v={args:{"data-density":`expressive`,variant:`bar`,progressText:`42 of 100`},render:({children:e,...t})=>n`<db-loading-indicator ${a(t)}>${i(`Bar`)}</db-loading-indicator>`},y=[`FunctionalCircularhorizontal`,`FunctionalCircularvertical`,`FunctionalBar`,`DefaultRegularCircularhorizontal`,`DefaultRegularCircularvertical`,`DefaultRegularBar`,`ExpressiveCircularhorizontal`,`ExpressiveCircularvertical`,`ExpressiveBar`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
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
    "data-density": "functional",
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
    "data-density": "functional",
    "variant": "bar",
    "progressText": "42 of 100"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Bar\`)}</db-loading-indicator>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
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
    "data-density": "regular",
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
    "data-density": "regular",
    "variant": "bar",
    "progressText": "42 of 100"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Bar\`)}</db-loading-indicator>\`
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
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
    "data-density": "expressive",
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
    "data-density": "expressive",
    "variant": "bar",
    "progressText": "42 of 100"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Bar\`)}</db-loading-indicator>\`
}`,...v.parameters?.docs?.source}}}})))()}export{g as a,u as c,b as d,v as i,d as l,p as n,_ as o,m as r,f as s,h as t,s as u};