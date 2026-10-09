import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBHeader/Behavior`,component:`db-header`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`medium`,`large`,`small`]},forceMobile:{control:`boolean`},drawerOpen:{control:`boolean`},burgerMenuLabel:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{},render:({children:e,...n})=>t`<div><db-header ${i(n)}>${r(`<db-navigation aria-label="Desktop (full width)"><db-navigation-item icon="x_placeholder"><a href="#">Desktop (full width)</a></db-navigation-item><db-navigation-item disabled><a href="#">Desktop (full width) disabled</a></db-navigation-item></db-navigation>`)}</db-header></div>`},l={args:{forceMobile:`true`},render:({children:e,...n})=>t`<div><db-header ${i(n)}>${r(`<db-navigation aria-label="Mobile"><db-navigation-item icon="x_placeholder"><a href="#">Mobile</a></db-navigation-item><db-navigation-item disabled><a href="#">Mobile disabled</a></db-navigation-item></db-navigation>`)}</db-header></div>`},u=[`Desktopfullwidth`,`Mobile`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-header \${spreadArgs(args)}>\${unsafeHTML(\`<db-navigation aria-label="Desktop (full width)"><db-navigation-item icon="x_placeholder"><a href="#">Desktop (full width)</a></db-navigation-item><db-navigation-item disabled><a href="#">Desktop (full width) disabled</a></db-navigation-item></db-navigation>\`)}</db-header></div>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "forceMobile": "true"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-header \${spreadArgs(args)}>\${unsafeHTML(\`<db-navigation aria-label="Mobile"><db-navigation-item icon="x_placeholder"><a href="#">Mobile</a></db-navigation-item><db-navigation-item disabled><a href="#">Mobile disabled</a></db-navigation-item></db-navigation>\`)}</db-header></div>\`
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as Desktopfullwidth,l as Mobile,u as __namedExportsOrder,s as default};