import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBAccordionItem/Density`,component:`db-accordion-item`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{headlinePlain:{control:`text`},disabled:{control:`boolean`},defaultOpen:{control:`boolean`},text:{control:`text`},name:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{"data-density":`functional`,headlinePlain:`Functional`},render:({children:e,...n})=>t`<div><db-accordion-item ${i(n)}>${r(`Functional`)}</db-accordion-item></div>`},l={args:{"data-density":`regular`,headlinePlain:`(Default) Regular`},render:({children:e,...n})=>t`<div><db-accordion-item ${i(n)}>${r(`(Default) Regular`)}</db-accordion-item></div>`},u={args:{"data-density":`expressive`,headlinePlain:`Expressive`},render:({children:e,...n})=>t`<div><db-accordion-item ${i(n)}>${r(`Expressive`)}</db-accordion-item></div>`},d=[`Functional`,`DefaultRegular`,`Expressive`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "headlinePlain": "Functional"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-accordion-item \${spreadArgs(args)}>\${unsafeHTML(\`Functional\`)}</db-accordion-item></div>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "headlinePlain": "(Default) Regular"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-accordion-item \${spreadArgs(args)}>\${unsafeHTML(\`(Default) Regular\`)}</db-accordion-item></div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "headlinePlain": "Expressive"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-accordion-item \${spreadArgs(args)}>\${unsafeHTML(\`Expressive\`)}</db-accordion-item></div>\`
}`,...u.parameters?.docs?.source}}}})))()}f();export{l as DefaultRegular,u as Expressive,c as Functional,d as __namedExportsOrder,s as default};