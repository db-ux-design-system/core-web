import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-dqn2cA9M.js";import{i,n as a,t as o}from"./apply-web-component-args-ARfb8F4v.js";var s=t({Composition:()=>u,OptionsAPI:()=>d,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f;function p(){return(p=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBBreadcrumb/API`,component:`db-breadcrumb`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`small`,`medium`]},separator:{control:`select`,options:[`chevron`,`slash`]},id:{control:`text`}}},u={args:{"aria-label":`Breadcrumb API (Composition)`,expandText:`Show more`},render:({children:e,...t})=>n`<db-breadcrumb ${a(t)}>${i(`<db-breadcrumb-item><a href="/">Home</a></db-breadcrumb-item><db-breadcrumb-item><a href="/next">Next</a></db-breadcrumb-item><db-breadcrumb-item><a href="/next/next">NextNext</a></db-breadcrumb-item><db-breadcrumb-item><a href="/next/next/current" aria-current="page">Current</a></db-breadcrumb-item>`)}</db-breadcrumb>`},d={args:{"aria-label":`Breadcrumb API (Options API)`,expandText:`Show more`,items:[{text:`Home`,href:`/`},{text:`Next`,href:`/next`},{text:`NextNext`,href:`/next/next`},{text:`Current`,href:`/next/next/current`}]},render:({children:e,...t})=>n`<db-breadcrumb ${a(t)}></db-breadcrumb>`},f=[`Composition`,`OptionsAPI`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Breadcrumb API (Composition)",
    "expandText": "Show more"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-breadcrumb \${spreadArgs(args)}>\${unsafeHTML(\`<db-breadcrumb-item><a href="/">Home</a></db-breadcrumb-item><db-breadcrumb-item><a href="/next">Next</a></db-breadcrumb-item><db-breadcrumb-item><a href="/next/next">NextNext</a></db-breadcrumb-item><db-breadcrumb-item><a href="/next/next/current" aria-current="page">Current</a></db-breadcrumb-item>\`)}</db-breadcrumb>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Breadcrumb API (Options API)",
    "expandText": "Show more",
    "items": [{
      text: 'Home',
      href: '/'
    }, {
      text: 'Next',
      href: '/next'
    }, {
      text: 'NextNext',
      href: '/next/next'
    }, {
      text: 'Current',
      href: '/next/next/current'
    }]
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-breadcrumb \${spreadArgs(args)}></db-breadcrumb>\`
}`,...d.parameters?.docs?.source}}}})))()}export{p as i,d as n,s as r,u as t};