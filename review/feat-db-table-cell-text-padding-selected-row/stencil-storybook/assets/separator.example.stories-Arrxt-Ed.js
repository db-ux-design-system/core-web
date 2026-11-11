import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-6dzo3qU4.js";import{i,n as a,t as o}from"./apply-web-component-args-WLmUBxRd.js";var s=t({DefaultChevron:()=>u,Slash:()=>d,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f;function p(){return(p=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBBreadcrumb/Separator`,component:`db-breadcrumb`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`small`,`medium`]},separator:{control:`select`,options:[`chevron`,`slash`]},id:{control:`text`}}},u={args:{separator:`chevron`,"aria-label":`Breadcrumb (Chevron)`,expandText:`Show more`},render:({children:e,...t})=>n`<db-breadcrumb ${a(t)}>${i(`<db-breadcrumb-item><a href="/">Home</a></db-breadcrumb-item><db-breadcrumb-item><a href="/next">Next</a></db-breadcrumb-item><db-breadcrumb-item><a href="/next/current" aria-current="page">Current</a></db-breadcrumb-item>`)}</db-breadcrumb>`},d={args:{separator:`slash`,"aria-label":`Breadcrumb (Slash)`,expandText:`Show more`},render:({children:e,...t})=>n`<db-breadcrumb ${a(t)}>${i(`<db-breadcrumb-item><a href="/">Home</a></db-breadcrumb-item><db-breadcrumb-item><a href="/next">Next</a></db-breadcrumb-item><db-breadcrumb-item><a href="/next/current" aria-current="page">Current</a></db-breadcrumb-item>`)}</db-breadcrumb>`},f=[`DefaultChevron`,`Slash`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "separator": "chevron",
    "aria-label": "Breadcrumb (Chevron)",
    "expandText": "Show more"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-breadcrumb \${spreadArgs(args)}>\${unsafeHTML(\`<db-breadcrumb-item><a href="/">Home</a></db-breadcrumb-item><db-breadcrumb-item><a href="/next">Next</a></db-breadcrumb-item><db-breadcrumb-item><a href="/next/current" aria-current="page">Current</a></db-breadcrumb-item>\`)}</db-breadcrumb>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "separator": "slash",
    "aria-label": "Breadcrumb (Slash)",
    "expandText": "Show more"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-breadcrumb \${spreadArgs(args)}>\${unsafeHTML(\`<db-breadcrumb-item><a href="/">Home</a></db-breadcrumb-item><db-breadcrumb-item><a href="/next">Next</a></db-breadcrumb-item><db-breadcrumb-item><a href="/next/current" aria-current="page">Current</a></db-breadcrumb-item>\`)}</db-breadcrumb>\`
}`,...d.parameters?.docs?.source}}}})))()}export{s as i,d as n,p as r,u as t};