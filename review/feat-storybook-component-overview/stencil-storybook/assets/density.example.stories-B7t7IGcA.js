import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-BEdmdqT_.js";import{i,n as a,t as o}from"./apply-web-component-args-CDzlxrdt.js";var s=t({DefaultRegular:()=>d,Expressive:()=>f,Functional:()=>u,__namedExportsOrder:()=>p,default:()=>l}),c,l,u,d,f,p;function m(){return(m=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBAccordionItem/Density`,component:`db-accordion-item`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{headlinePlain:{control:`text`},disabled:{control:`boolean`},defaultOpen:{control:`boolean`},text:{control:`text`},name:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},u={args:{"data-density":`functional`,headlinePlain:`Functional`},render:({children:e,...t})=>n`<div><db-accordion-item ${a(t)}>${i(`Functional`)}</db-accordion-item></div>`},d={args:{"data-density":`regular`,headlinePlain:`(Default) Regular`},render:({children:e,...t})=>n`<div><db-accordion-item ${a(t)}>${i(`(Default) Regular`)}</db-accordion-item></div>`},f={args:{"data-density":`expressive`,headlinePlain:`Expressive`},render:({children:e,...t})=>n`<div><db-accordion-item ${a(t)}>${i(`Expressive`)}</db-accordion-item></div>`},p=[`Functional`,`DefaultRegular`,`Expressive`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "headlinePlain": "Functional"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-accordion-item \${spreadArgs(args)}>\${unsafeHTML(\`Functional\`)}</db-accordion-item></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "headlinePlain": "(Default) Regular"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-accordion-item \${spreadArgs(args)}>\${unsafeHTML(\`(Default) Regular\`)}</db-accordion-item></div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "headlinePlain": "Expressive"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-accordion-item \${spreadArgs(args)}>\${unsafeHTML(\`Expressive\`)}</db-accordion-item></div>\`
}`,...f.parameters?.docs?.source}}}})))()}export{m as a,s as i,f as n,u as r,d as t};