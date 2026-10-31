import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{l as t,o as n}from"./iframe-KnJqMb5W.js";import{i as r,n as i,t as a}from"./apply-web-component-args-CjR4yiF2.js";var o,s,c,l;function u(){return(u=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBHeader/Custom Header`,component:`db-header`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`medium`,`large`,`small`]},forceMobile:{control:`boolean`},drawerOpen:{control:`boolean`},burgerMenuLabel:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{forceMobile:`true`,burgerMenuLabel:`Open menu`,showDrawerHeaderSlot:!0,drawerOpen:!1,onToggle:o()},render:({children:e,...n})=>t`<db-header ${i(n)}>${r(`<db-brand slot="brand">DBHeader</db-brand><db-drawer-header slot="header" text="Menu" close-button-text="Close"><db-button slot="endSlot" icon="moon" variant="ghost" type="button" no-text>Dark mode</db-button></db-drawer-header><db-navigation aria-label="With action element in drawer header"><db-navigation-item><a href="#">With action element in drawer header</a></db-navigation-item></db-navigation>`)}</db-header>`},l=[`Withactionelementindrawerheader`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}}})))()}u();export{c as Withactionelementindrawerheader,l as __namedExportsOrder,s as default};