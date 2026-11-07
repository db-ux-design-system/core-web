import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-CSduPcDp.js";import{i,n as a,t as o}from"./apply-web-component-args-D-8sNeLN.js";var s=t({AsLink:()=>f,DefaultWithLogo:()=>u,LogoVariant:()=>d,__namedExportsOrder:()=>p,default:()=>l}),c,l,u,d,f,p;function m(){return(m=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBControlPanelBrand/Variants`,component:`db-control-panel-brand`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},autofocus:{control:`boolean`}}},u={args:{},render:({children:e,...t})=>n`<div><db-infotext semantic="informational" size="small" icon="none">(Default) With Logo</db-infotext><db-control-panel-brand ${a(t)}>${i(`Functional`)}</db-control-panel-brand></div>`},d={args:{"data-logo":`db-systel`},render:({children:e,...t})=>n`<div><db-control-panel-brand ${a(t)}></db-control-panel-brand></div>`},f={args:{},render:({children:e,...t})=>n`<div><a href="#"><db-control-panel-brand ${a(t)}>${i(`As Link`)}</db-control-panel-brand></a></div>`},p=[`DefaultWithLogo`,`LogoVariant`,`AsLink`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext semantic="informational" size="small" icon="none">(Default) With Logo</db-infotext><db-control-panel-brand \${spreadArgs(args)}>\${unsafeHTML(\`Functional\`)}</db-control-panel-brand></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "data-logo": "db-systel"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-control-panel-brand \${spreadArgs(args)}></db-control-panel-brand></div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<div><a href="#"><db-control-panel-brand \${spreadArgs(args)}>\${unsafeHTML(\`As Link\`)}</db-control-panel-brand></a></div>\`
}`,...f.parameters?.docs?.source}}}})))()}export{s as a,m as i,u as n,d as r,f as t};