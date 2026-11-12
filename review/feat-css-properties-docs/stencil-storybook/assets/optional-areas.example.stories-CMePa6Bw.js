import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-DZJrNnmE.js";import{i,n as a,t as o}from"./apply-web-component-args-C7MBtvk6.js";var s=t({Contentonly:()=>u,Metaonly:()=>d,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f;function p(){return(p=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBFooter/Optional Areas`,component:`db-footer`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`large`,`medium`,`small`]},id:{control:`text`}}},u={args:{},render:({children:e,...t})=>n`<db-footer ${a(t)}>${i(`<db-footer-content><nav aria-label="Content-only footer navigation"><ul><li><db-link href="#services" wrap>Services</db-link></li></ul></nav></db-footer-content>`)}</db-footer>`},d={args:{},render:({children:e,...t})=>n`<db-footer ${a(t)}>${i(`<db-footer-meta><p style="font: var(--db-type-body-sm); margin: 0; display: flex; flex-wrap: wrap; gap: 0.5ch"><span>Customer service:</span><db-link variant="inline" size="small" href="#contact">Contact us</db-link></p></db-footer-meta>`)}</db-footer>`},f=[`Contentonly`,`Metaonly`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<db-footer \${spreadArgs(args)}>\${unsafeHTML(\`<db-footer-content><nav aria-label="Content-only footer navigation"><ul><li><db-link href="#services" wrap>Services</db-link></li></ul></nav></db-footer-content>\`)}</db-footer>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<db-footer \${spreadArgs(args)}>\${unsafeHTML(\`<db-footer-meta><p style="font: var(--db-type-body-sm); margin: 0; display: flex; flex-wrap: wrap; gap: 0.5ch"><span>Customer service:</span><db-link variant="inline" size="small" href="#contact">Contact us</db-link></p></db-footer-meta>\`)}</db-footer>\`
}`,...d.parameters?.docs?.source}}}})))()}export{s as i,d as n,p as r,u as t};