import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBAccordion/Variant`,component:`db-accordion`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{behavior:{control:`select`,options:[`multiple`,`single`]},variant:{control:`select`,options:[`divider`,`card`]},initOpenIndex:{control:`object`},items:{control:`object`},name:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{variant:`divider`},render:({children:e,...n})=>t`<div><db-infotext size="small" semantic="informational" icon="none">(Default) Divider</db-infotext><db-accordion ${i(n)}>${r(`<db-accordion-item headline-plain="Item 1">Content 1</db-accordion-item><db-accordion-item headline-plain="Item 2">Content 2</db-accordion-item><db-accordion-item headline-plain="Item 3">Content 3</db-accordion-item>`)}</db-accordion></div>`},l={args:{variant:`card`},render:({children:e,...n})=>t`<div><db-infotext size="small" semantic="informational" icon="none">Card</db-infotext><db-accordion ${i(n)}>${r(`<db-accordion-item headline-plain="Item 1">Content 1</db-accordion-item><db-accordion-item headline-plain="Item 2">Content 2</db-accordion-item><db-accordion-item headline-plain="Item 3">Content 3</db-accordion-item>`)}</db-accordion></div>`},u=[`Divider`,`Card`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "divider"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext size="small" semantic="informational" icon="none">(Default) Divider</db-infotext><db-accordion \${spreadArgs(args)}>\${unsafeHTML(\`<db-accordion-item headline-plain="Item 1">Content 1</db-accordion-item><db-accordion-item headline-plain="Item 2">Content 2</db-accordion-item><db-accordion-item headline-plain="Item 3">Content 3</db-accordion-item>\`)}</db-accordion></div>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "card"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext size="small" semantic="informational" icon="none">Card</db-infotext><db-accordion \${spreadArgs(args)}>\${unsafeHTML(\`<db-accordion-item headline-plain="Item 1">Content 1</db-accordion-item><db-accordion-item headline-plain="Item 2">Content 2</db-accordion-item><db-accordion-item headline-plain="Item 3">Content 3</db-accordion-item>\`)}</db-accordion></div>\`
}`,...l.parameters?.docs?.source}}}})))()}d();export{l as Card,c as Divider,u as __namedExportsOrder,s as default};