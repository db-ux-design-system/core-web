import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-B4vbRiLP.js";import{i,n as a,t as o}from"./apply-web-component-args-nLpIKx2m.js";var s=t({DefaultFalseBar:()=>f,DefaultFalseCircularhorizontal:()=>u,DefaultFalseCircularvertical:()=>d,TrueCircularvertical:()=>p,__namedExportsOrder:()=>m,default:()=>l}),c,l,u,d,f,p,m;function h(){return(h=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBLoadingIndicator/Overlay`,component:`db-loading-indicator`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onTimeout:c()},argTypes:{variant:{control:`select`,options:[`bar`,`circular`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},size:{control:`select`,options:[`small`,`medium`,`large`]},state:{control:`select`,options:[`inactive`,`active`,`successful`,`critical`]},indeterminate:{control:`boolean`},value:{control:`number`},max:{control:`number`},showLabel:{control:`boolean`},showProgressText:{control:`boolean`},overlay:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},onTimeout:{action:`onTimeout`}}},u={args:{variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`,overlay:!1},render:({children:e,...t})=>n`<db-loading-indicator ${a(t)}>${i(`Circular horizontal`)}</db-loading-indicator>`},d={args:{variant:`circular`,orientation:`vertical`,progressText:`42%`,overlay:!1},render:({children:e,...t})=>n`<db-loading-indicator ${a(t)}>${i(`Circular vertical`)}</db-loading-indicator>`},f={args:{variant:`bar`,progressText:`42 of 100`,overlay:!1},render:({children:e,...t})=>n`<db-loading-indicator ${a(t)}>${i(`Bar`)}</db-loading-indicator>`},p={args:{variant:`circular`,orientation:`vertical`,progressText:`42%`,overlay:!0},render:({children:e,...t})=>n`<db-card><db-loading-indicator ${a(t)}>${i(`Circular vertical`)}</db-loading-indicator><p>Content 1</p><p>Content 2</p><p>Content 3</p></db-card>`},m=[`DefaultFalseCircularhorizontal`,`DefaultFalseCircularvertical`,`DefaultFalseBar`,`TrueCircularvertical`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100",
    "overlay": false
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
    "overlay": false
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Circular vertical\`)}</db-loading-indicator>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "bar",
    "progressText": "42 of 100",
    "overlay": false
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Bar\`)}</db-loading-indicator>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "circular",
    "orientation": "vertical",
    "progressText": "42%",
    "overlay": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-card><db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Circular vertical\`)}</db-loading-indicator><p>Content 1</p><p>Content 2</p><p>Content 3</p></db-card>\`
}`,...p.parameters?.docs?.source}}}})))()}export{h as a,p as i,u as n,s as o,d as r,f as t};