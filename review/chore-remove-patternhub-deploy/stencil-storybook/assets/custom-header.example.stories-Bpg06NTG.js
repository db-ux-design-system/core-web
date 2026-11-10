import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-BqvJLakp.js";import{i,n as a,t as o}from"./apply-web-component-args-BtUnDguQ.js";var s=t({Withactionelementindrawerheader:()=>u,__namedExportsOrder:()=>d,default:()=>l}),c,l,u,d;function f(){return(f=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBHeader/Custom Header`,component:`db-header`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`medium`,`large`,`small`]},forceMobile:{control:`boolean`},drawerOpen:{control:`boolean`},burgerMenuLabel:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},u={args:{forceMobile:`true`,burgerMenuLabel:`Open menu`,showDrawerHeaderSlot:!0,drawerOpen:!1,onToggle:c()},render:({children:e,...t})=>n`<db-header ${a(t)}>${i(`<db-brand slot="brand">DBHeader</db-brand><db-drawer-header slot="header" text="Menu" close-button-text="Close"><db-button slot="endSlot" icon="moon" variant="ghost" type="button" no-text>Dark mode</db-button></db-drawer-header><db-navigation aria-label="With action element in drawer header"><db-navigation-item><a href="#">With action element in drawer header</a></db-navigation-item></db-navigation>`)}</db-header>`},d=[`Withactionelementindrawerheader`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "forceMobile": "true",
    "burgerMenuLabel": "Open menu",
    "showDrawerHeaderSlot": true,
    "drawerOpen": false,
    "onToggle": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-header \${spreadArgs(args)}>\${unsafeHTML(\`<db-brand slot="brand">DBHeader</db-brand><db-drawer-header slot="header" text="Menu" close-button-text="Close"><db-button slot="endSlot" icon="moon" variant="ghost" type="button" no-text>Dark mode</db-button></db-drawer-header><db-navigation aria-label="With action element in drawer header"><db-navigation-item><a href="#">With action element in drawer header</a></db-navigation-item></db-navigation>\`)}</db-header>\`
}`,...u.parameters?.docs?.source}}}})))()}export{s as n,f as r,u as t};