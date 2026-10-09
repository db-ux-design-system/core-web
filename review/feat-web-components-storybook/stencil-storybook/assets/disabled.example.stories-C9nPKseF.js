import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBAccordionItem/Disabled`,component:`db-accordion-item`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{headlinePlain:{control:`text`},disabled:{control:`boolean`},defaultOpen:{control:`boolean`},text:{control:`text`},name:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{headlinePlain:`(Default) False`,disabled:!1},render:({children:e,...n})=>t`<div><db-accordion-item ${i(n)}>${r(`(Default) False`)}</db-accordion-item></div>`},l={args:{headlinePlain:`True`,disabled:!0},render:({children:e,...n})=>t`<div><db-accordion-item ${i(n)}>${r(`True`)}</db-accordion-item></div>`},u=[`DefaultFalse`,`True`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "headlinePlain": "(Default) False",
    "disabled": false
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-accordion-item \${spreadArgs(args)}>\${unsafeHTML(\`(Default) False\`)}</db-accordion-item></div>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "headlinePlain": "True",
    "disabled": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-accordion-item \${spreadArgs(args)}>\${unsafeHTML(\`True\`)}</db-accordion-item></div>\`
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as DefaultFalse,l as True,u as __namedExportsOrder,s as default};