import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-DXihdujG.js";import{i as r,n as i,t as a}from"./apply-web-component-args-Db7kBgvq.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBBreadcrumb/API`,component:`db-breadcrumb`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`small`,`medium`]},separator:{control:`select`,options:[`chevron`,`slash`]},id:{control:`text`}}},c={args:{"aria-label":`Breadcrumb API (Composition)`,expandText:`Show more`},render:({children:e,...n})=>t`<db-breadcrumb ${i(n)}>${r(`<db-breadcrumb-item><a href="/">Home</a></db-breadcrumb-item><db-breadcrumb-item><a href="/next">Next</a></db-breadcrumb-item><db-breadcrumb-item><a href="/next/next">NextNext</a></db-breadcrumb-item><db-breadcrumb-item><a href="/next/next/current" aria-current="page">Current</a></db-breadcrumb-item>`)}</db-breadcrumb>`},l={args:{"aria-label":`Breadcrumb API (Options API)`,expandText:`Show more`,items:[{text:`Home`,href:`/`},{text:`Next`,href:`/next`},{text:`NextNext`,href:`/next/next`},{text:`Current`,href:`/next/next/current`}]},render:({children:e,...n})=>t`<db-breadcrumb ${i(n)}></db-breadcrumb>`},u=[`Composition`,`OptionsAPI`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Breadcrumb API (Composition)",
    "expandText": "Show more"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-breadcrumb \${spreadArgs(args)}>\${unsafeHTML(\`<db-breadcrumb-item><a href="/">Home</a></db-breadcrumb-item><db-breadcrumb-item><a href="/next">Next</a></db-breadcrumb-item><db-breadcrumb-item><a href="/next/next">NextNext</a></db-breadcrumb-item><db-breadcrumb-item><a href="/next/next/current" aria-current="page">Current</a></db-breadcrumb-item>\`)}</db-breadcrumb>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as Composition,l as OptionsAPI,u as __namedExportsOrder,s as default};