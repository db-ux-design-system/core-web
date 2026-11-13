import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-D7ZhsNxW.js";import{i,n as a,t as o}from"./apply-web-component-args-DqcWTDo5.js";var s=t({DefaultRegular:()=>d,Expressive:()=>f,Functional:()=>u,__namedExportsOrder:()=>p,default:()=>l}),c,l,u,d,f,p;function m(){return(m=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBBrand/Density`,component:`db-brand`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{hideLogo:{control:`boolean`},showIcon:{control:`boolean`},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},u={args:{"data-density":`functional`},render:({children:e,...t})=>n`<db-brand ${a(t)}>${i(`Functional`)}</db-brand>`},d={args:{"data-density":`regular`},render:({children:e,...t})=>n`<db-brand ${a(t)}>${i(`(Default) Regular`)}</db-brand>`},f={args:{"data-density":`expressive`},render:({children:e,...t})=>n`<db-brand ${a(t)}>${i(`Expressive`)}</db-brand>`},p=[`Functional`,`DefaultRegular`,`Expressive`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-brand \${spreadArgs(args)}>\${unsafeHTML(\`Functional\`)}</db-brand>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-brand \${spreadArgs(args)}>\${unsafeHTML(\`(Default) Regular\`)}</db-brand>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-brand \${spreadArgs(args)}>\${unsafeHTML(\`Expressive\`)}</db-brand>\`
}`,...f.parameters?.docs?.source}}}})))()}export{m as a,s as i,f as n,u as r,d as t};