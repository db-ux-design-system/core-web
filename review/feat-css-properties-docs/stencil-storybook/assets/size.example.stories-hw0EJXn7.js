import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-CG73KG2K.js";import{i,n as a,t as o}from"./apply-web-component-args-e6TUK5Dk.js";var s=t({DefaultSmall:()=>u,Medium:()=>d,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f;function p(){return(p=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBBreadcrumb/Size`,component:`db-breadcrumb`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`small`,`medium`]},separator:{control:`select`,options:[`chevron`,`slash`]},id:{control:`text`}}},u={args:{size:`small`,"aria-label":`Breadcrumb (Small)`,expandText:`Show more`},render:({children:e,...t})=>n`<db-breadcrumb ${a(t)}>${i(`<db-breadcrumb-item><a href="/">Home</a></db-breadcrumb-item><db-breadcrumb-item><a href="/next">Next</a></db-breadcrumb-item><db-breadcrumb-item><a href="/next/current" aria-current="page">Current</a></db-breadcrumb-item>`)}</db-breadcrumb>`},d={args:{size:`medium`,"aria-label":`Breadcrumb (Medium)`,expandText:`Show more`},render:({children:e,...t})=>n`<db-breadcrumb ${a(t)}>${i(`<db-breadcrumb-item><a href="/">Home</a></db-breadcrumb-item><db-breadcrumb-item><a href="/next">Next</a></db-breadcrumb-item><db-breadcrumb-item><a href="/next/current" aria-current="page">Current</a></db-breadcrumb-item>`)}</db-breadcrumb>`},f=[`DefaultSmall`,`Medium`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "aria-label": "Breadcrumb (Small)",
    "expandText": "Show more"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-breadcrumb \${spreadArgs(args)}>\${unsafeHTML(\`<db-breadcrumb-item><a href="/">Home</a></db-breadcrumb-item><db-breadcrumb-item><a href="/next">Next</a></db-breadcrumb-item><db-breadcrumb-item><a href="/next/current" aria-current="page">Current</a></db-breadcrumb-item>\`)}</db-breadcrumb>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "medium",
    "aria-label": "Breadcrumb (Medium)",
    "expandText": "Show more"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-breadcrumb \${spreadArgs(args)}>\${unsafeHTML(\`<db-breadcrumb-item><a href="/">Home</a></db-breadcrumb-item><db-breadcrumb-item><a href="/next">Next</a></db-breadcrumb-item><db-breadcrumb-item><a href="/next/current" aria-current="page">Current</a></db-breadcrumb-item>\`)}</db-breadcrumb>\`
}`,...d.parameters?.docs?.source}}}})))()}export{s as i,d as n,p as r,u as t};