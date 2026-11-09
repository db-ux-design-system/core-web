import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-LYtL2xrD.js";import{i,n as a,t as o}from"./apply-web-component-args-QiJXFgM3.js";var s=t({Interaction:()=>u,__namedExportsOrder:()=>d,default:()=>l}),c,l,u,d;function f(){return(f=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBHeader/Interaction`,component:`db-header`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`medium`,`large`,`small`]},forceMobile:{control:`boolean`},drawerOpen:{control:`boolean`},burgerMenuLabel:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},u={args:{forceMobile:`true`,drawerHeaderText:`Menu`,closeButtonText:`Close drawer`,burgerMenuLabel:`Open menu`,drawerOpen:!1,onToggle:c()},render:({children:e,...t})=>n`<db-header ${a(t)}>${i(`<db-brand slot="brand">DBHeader</db-brand><db-navigation aria-label="Interaction"><db-navigation-item><a href="#">Start</a></db-navigation-item></db-navigation>`)}</db-header>`},d=[`Interaction`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "forceMobile": "true",
    "drawerHeaderText": "Menu",
    "closeButtonText": "Close drawer",
    "burgerMenuLabel": "Open menu",
    "drawerOpen": false,
    "onToggle": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-header \${spreadArgs(args)}>\${unsafeHTML(\`<db-brand slot="brand">DBHeader</db-brand><db-navigation aria-label="Interaction"><db-navigation-item><a href="#">Start</a></db-navigation-item></db-navigation>\`)}</db-header>\`
}`,...u.parameters?.docs?.source}}}})))()}export{f as n,s as r,u as t};