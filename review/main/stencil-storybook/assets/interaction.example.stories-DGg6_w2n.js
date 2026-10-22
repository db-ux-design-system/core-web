import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-BUxwpRaD.js";import{i as r,n as i,t as a}from"./apply-web-component-args-DnmYEmgR.js";var o,s,c,l;function u(){return(u=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBHeader/Interaction`,component:`db-header`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`medium`,`large`,`small`]},forceMobile:{control:`boolean`},drawerOpen:{control:`boolean`},burgerMenuLabel:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{forceMobile:`true`,drawerHeaderText:`Menu`,closeButtonText:`Close drawer`,burgerMenuLabel:`Open menu`,drawerOpen:!1,onToggle:o()},render:({children:e,...n})=>t`<db-header ${i(n)}>${r(`<db-brand slot="brand">DBHeader</db-brand><db-navigation aria-label="Interaction"><db-navigation-item><a href="#">Start</a></db-navigation-item></db-navigation>`)}</db-header>`},l=[`Interaction`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}}})))()}u();export{c as Interaction,l as __namedExportsOrder,s as default};