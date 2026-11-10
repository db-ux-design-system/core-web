import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-DBAghmrJ.js";import{i,n as a,t as o}from"./apply-web-component-args-BFw0IsXG.js";var s=t({Brand:()=>p,Filled:()=>d,Ghost:()=>f,Outlined:()=>u,__namedExportsOrder:()=>m,default:()=>l}),c,l,u,d,f,p,m;function h(){return(h=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBButton/Variant`,component:`db-button`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:c()},argTypes:{variant:{control:`select`,options:[`outlined`,`brand`,`ghost`,`filled`]},disabled:{control:`boolean`},form:{control:`text`},name:{control:`text`},noText:{control:`boolean`},wrap:{control:`boolean`},type:{control:`select`,options:[`button`,`reset`,`submit`]},value:{control:`text`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},size:{control:`select`,options:[`small`,`medium`]},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},u={args:{variant:`outlined`,onClick:c()},render:({children:e,...t})=>n`<db-button ${a(t)}>${i(`(Default) Outlined - Adaptive`)}</db-button>`},d={args:{variant:`filled`,onClick:c()},render:({children:e,...t})=>n`<db-button ${a(t)}>${i(`Filled - Adaptive`)}</db-button>`},f={args:{variant:`ghost`,onClick:c()},render:({children:e,...t})=>n`<db-button ${a(t)}>${i(`Ghost - Adaptive`)}</db-button>`},p={args:{variant:`brand`,onClick:c()},render:({children:e,...t})=>n`<db-button ${a(t)}>${i(`Brand`)}</db-button>`},m=[`Outlined`,`Filled`,`Ghost`,`Brand`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "outlined",
    "onClick": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-button \${spreadArgs(args)}>\${unsafeHTML(\`(Default) Outlined - Adaptive\`)}</db-button>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "filled",
    "onClick": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-button \${spreadArgs(args)}>\${unsafeHTML(\`Filled - Adaptive\`)}</db-button>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "ghost",
    "onClick": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-button \${spreadArgs(args)}>\${unsafeHTML(\`Ghost - Adaptive\`)}</db-button>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "brand",
    "onClick": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-button \${spreadArgs(args)}>\${unsafeHTML(\`Brand\`)}</db-button>\`
}`,...p.parameters?.docs?.source}}}})))()}export{h as a,u as i,d as n,s as o,f as r,p as t};