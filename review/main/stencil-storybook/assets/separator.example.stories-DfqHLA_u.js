import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{l as t,o as n}from"./iframe-D9I7ybTg.js";import{i as r,n as i,t as a}from"./apply-web-component-args-Cl2b-DPL.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBBreadcrumb/Separator`,component:`db-breadcrumb`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`small`,`medium`]},separator:{control:`select`,options:[`chevron`,`slash`]},id:{control:`text`}}},c={args:{separator:`chevron`,"aria-label":`Breadcrumb (Chevron)`,expandText:`Show more`},render:({children:e,...n})=>t`<db-breadcrumb ${i(n)}>${r(`<db-breadcrumb-item><a href="/">Home</a></db-breadcrumb-item><db-breadcrumb-item><a href="/next">Next</a></db-breadcrumb-item><db-breadcrumb-item><a href="/next/current" aria-current="page">Current</a></db-breadcrumb-item>`)}</db-breadcrumb>`},l={args:{separator:`slash`,"aria-label":`Breadcrumb (Slash)`,expandText:`Show more`},render:({children:e,...n})=>t`<db-breadcrumb ${i(n)}>${r(`<db-breadcrumb-item><a href="/">Home</a></db-breadcrumb-item><db-breadcrumb-item><a href="/next">Next</a></db-breadcrumb-item><db-breadcrumb-item><a href="/next/current" aria-current="page">Current</a></db-breadcrumb-item>`)}</db-breadcrumb>`},u=[`DefaultChevron`,`Slash`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "separator": "chevron",
    "aria-label": "Breadcrumb (Chevron)",
    "expandText": "Show more"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-breadcrumb \${spreadArgs(args)}>\${unsafeHTML(\`<db-breadcrumb-item><a href="/">Home</a></db-breadcrumb-item><db-breadcrumb-item><a href="/next">Next</a></db-breadcrumb-item><db-breadcrumb-item><a href="/next/current" aria-current="page">Current</a></db-breadcrumb-item>\`)}</db-breadcrumb>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "separator": "slash",
    "aria-label": "Breadcrumb (Slash)",
    "expandText": "Show more"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-breadcrumb \${spreadArgs(args)}>\${unsafeHTML(\`<db-breadcrumb-item><a href="/">Home</a></db-breadcrumb-item><db-breadcrumb-item><a href="/next">Next</a></db-breadcrumb-item><db-breadcrumb-item><a href="/next/current" aria-current="page">Current</a></db-breadcrumb-item>\`)}</db-breadcrumb>\`
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as DefaultChevron,l as Slash,u as __namedExportsOrder,s as default};