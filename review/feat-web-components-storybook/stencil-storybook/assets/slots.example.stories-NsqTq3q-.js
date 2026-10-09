import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBDrawerHeader/Slots`,component:`db-drawer-header`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{text:{control:`text`},closeButtonText:{control:`text`},closeButtonId:{control:`text`},id:{control:`text`}}},c={args:{},render:({children:e,...n})=>t`<div><db-drawer-header ${i(n)}>${r(`<h2>With end slot</h2>`)}</db-drawer-header></div>`},l={args:{},render:({children:e,...n})=>t`<div><db-drawer-header ${i(n)}>${r(`<h2>With start slot</h2>`)}</db-drawer-header></div>`},u=[`Withendslot`,`Withstartslot`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-drawer-header \${spreadArgs(args)}>\${unsafeHTML(\`<h2>With end slot</h2>\`)}</db-drawer-header></div>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-drawer-header \${spreadArgs(args)}>\${unsafeHTML(\`<h2>With start slot</h2>\`)}</db-drawer-header></div>\`
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as Withendslot,l as Withstartslot,u as __namedExportsOrder,s as default};