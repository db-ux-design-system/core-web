import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-6dzo3qU4.js";import{i,n as a,t as o}from"./apply-web-component-args-WLmUBxRd.js";var s=t({WithApplicationNameNavigation:()=>u,WithoutApplicationName:()=>f,WithoutApplicationNameNavigation:()=>p,WithoutNavigation:()=>d,__namedExportsOrder:()=>m,default:()=>l}),c,l,u,d,f,p,m;function h(){return(h=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBHeader/Examples`,component:`db-header`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`medium`,`large`,`small`]},forceMobile:{control:`boolean`},drawerOpen:{control:`boolean`},burgerMenuLabel:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},u={args:{},render:({children:e,...t})=>n`<div style="width: 100%; display: block"><db-header ${a(t)}>${i(`<db-brand slot="brand">DBHeader</db-brand><db-navigation aria-label="With Application Name + Navigation"><db-navigation-item icon="x_placeholder"><a href="#">With Application Name + Navigation</a></db-navigation-item><db-navigation-item disabled><a href="#">With Application Name + Navigation disabled</a></db-navigation-item></db-navigation>`)}</db-header></div>`},d={args:{},render:({children:e,...t})=>n`<div style="width: 100%; display: block"><db-header ${a(t)}>${i(`<db-brand slot="brand">DBHeader</db-brand>`)}</db-header></div>`},f={args:{},render:({children:e,...t})=>n`<div style="width: 100%; display: block"><db-header ${a(t)}>${i(`<db-brand slot="brand"></db-brand><db-navigation aria-label="Without Application Name"><db-navigation-item icon="x_placeholder"><a href="#">Without Application Name</a></db-navigation-item><db-navigation-item disabled><a href="#">Without Application Name disabled</a></db-navigation-item></db-navigation>`)}</db-header></div>`},p={args:{},render:({children:e,...t})=>n`<div style="width: 100%; display: block"><db-header ${a(t)}>${i(`<db-brand slot="brand"></db-brand>`)}</db-header></div>`},m=[`WithApplicationNameNavigation`,`WithoutNavigation`,`WithoutApplicationName`,`WithoutApplicationNameNavigation`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 100%; display: block"><db-header \${spreadArgs(args)}>\${unsafeHTML(\`<db-brand slot="brand">DBHeader</db-brand><db-navigation aria-label="With Application Name + Navigation"><db-navigation-item icon="x_placeholder"><a href="#">With Application Name + Navigation</a></db-navigation-item><db-navigation-item disabled><a href="#">With Application Name + Navigation disabled</a></db-navigation-item></db-navigation>\`)}</db-header></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 100%; display: block"><db-header \${spreadArgs(args)}>\${unsafeHTML(\`<db-brand slot="brand">DBHeader</db-brand>\`)}</db-header></div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 100%; display: block"><db-header \${spreadArgs(args)}>\${unsafeHTML(\`<db-brand slot="brand"></db-brand><db-navigation aria-label="Without Application Name"><db-navigation-item icon="x_placeholder"><a href="#">Without Application Name</a></db-navigation-item><db-navigation-item disabled><a href="#">Without Application Name disabled</a></db-navigation-item></db-navigation>\`)}</db-header></div>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 100%; display: block"><db-header \${spreadArgs(args)}>\${unsafeHTML(\`<db-brand slot="brand"></db-brand>\`)}</db-header></div>\`
}`,...p.parameters?.docs?.source}}}})))()}export{s as a,d as i,f as n,h as o,p as r,u as t};