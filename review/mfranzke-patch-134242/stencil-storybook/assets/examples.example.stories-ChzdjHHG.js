import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-CmBxBCoS.js";import{i as r,n as i,t as a}from"./apply-web-component-args-BPr23LsK.js";var o,s,c,l,u,d,f;function p(){return(p=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBHeader/Examples`,component:`db-header`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`medium`,`large`,`small`]},forceMobile:{control:`boolean`},drawerOpen:{control:`boolean`},burgerMenuLabel:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{},render:({children:e,...n})=>t`<div><db-header ${i(n)}>${r(`<db-brand slot="brand">DBHeader</db-brand><db-navigation aria-label="With Application Name + Navigation"><db-navigation-item icon="x_placeholder"><a href="#">With Application Name + Navigation</a></db-navigation-item><db-navigation-item disabled><a href="#">With Application Name + Navigation disabled</a></db-navigation-item></db-navigation>`)}</db-header></div>`},l={args:{},render:({children:e,...n})=>t`<div><db-header ${i(n)}>${r(`<db-brand slot="brand">DBHeader</db-brand>`)}</db-header></div>`},u={args:{},render:({children:e,...n})=>t`<div><db-header ${i(n)}>${r(`<db-brand slot="brand"></db-brand><db-navigation aria-label="Without Application Name"><db-navigation-item icon="x_placeholder"><a href="#">Without Application Name</a></db-navigation-item><db-navigation-item disabled><a href="#">Without Application Name disabled</a></db-navigation-item></db-navigation>`)}</db-header></div>`},d={args:{},render:({children:e,...n})=>t`<div><db-header ${i(n)}>${r(`<db-brand slot="brand"></db-brand>`)}</db-header></div>`},f=[`WithApplicationNameNavigation`,`WithoutNavigation`,`WithoutApplicationName`,`WithoutApplicationNameNavigation`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-header \${spreadArgs(args)}>\${unsafeHTML(\`<db-brand slot="brand">DBHeader</db-brand><db-navigation aria-label="With Application Name + Navigation"><db-navigation-item icon="x_placeholder"><a href="#">With Application Name + Navigation</a></db-navigation-item><db-navigation-item disabled><a href="#">With Application Name + Navigation disabled</a></db-navigation-item></db-navigation>\`)}</db-header></div>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-header \${spreadArgs(args)}>\${unsafeHTML(\`<db-brand slot="brand">DBHeader</db-brand>\`)}</db-header></div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-header \${spreadArgs(args)}>\${unsafeHTML(\`<db-brand slot="brand"></db-brand><db-navigation aria-label="Without Application Name"><db-navigation-item icon="x_placeholder"><a href="#">Without Application Name</a></db-navigation-item><db-navigation-item disabled><a href="#">Without Application Name disabled</a></db-navigation-item></db-navigation>\`)}</db-header></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-header \${spreadArgs(args)}>\${unsafeHTML(\`<db-brand slot="brand"></db-brand>\`)}</db-header></div>\`
}`,...d.parameters?.docs?.source}}}})))()}p();export{c as WithApplicationNameNavigation,u as WithoutApplicationName,d as WithoutApplicationNameNavigation,l as WithoutNavigation,f as __namedExportsOrder,s as default};