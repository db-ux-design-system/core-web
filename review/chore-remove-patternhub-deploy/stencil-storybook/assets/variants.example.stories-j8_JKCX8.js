import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-CSduPcDp.js";import{i,n as a,t as o}from"./apply-web-component-args-D-8sNeLN.js";var s=t({CustomLogo:()=>f,DefaultWithLogo:()=>u,NoLogo:()=>d,__namedExportsOrder:()=>p,default:()=>l}),c,l,u,d,f,p;function m(){return(m=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBBrand/Variants`,component:`db-brand`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{hideLogo:{control:`boolean`},showIcon:{control:`boolean`},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},u={args:{},render:({children:e,...t})=>n`<db-brand ${a(t)}>${i(`(Default) With Logo`)}</db-brand>`},d={args:{hideLogo:!0},render:({children:e,...t})=>n`<db-brand ${a(t)}>${i(`No Logo`)}</db-brand>`},f={args:{hideLogo:!0},render:({children:e,...t})=>n`<db-brand ${a(t)}>${i(`<img alt="this is a fancy placeholder logo" src="/assets/images/placeholder.jpg" />Custom Logo`)}</db-brand>`},p=[`DefaultWithLogo`,`NoLogo`,`CustomLogo`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<db-brand \${spreadArgs(args)}>\${unsafeHTML(\`(Default) With Logo\`)}</db-brand>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "hideLogo": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-brand \${spreadArgs(args)}>\${unsafeHTML(\`No Logo\`)}</db-brand>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "hideLogo": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-brand \${spreadArgs(args)}>\${unsafeHTML(\`<img alt="this is a fancy placeholder logo" src="/assets/images/placeholder.jpg" />Custom Logo\`)}</db-brand>\`
}`,...f.parameters?.docs?.source}}}})))()}export{s as a,m as i,u as n,d as r,f as t};