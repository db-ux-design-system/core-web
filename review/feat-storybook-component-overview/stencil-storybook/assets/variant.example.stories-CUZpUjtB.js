import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-LYtL2xrD.js";import{i,n as a,t as o}from"./apply-web-component-args-QiJXFgM3.js";var s=t({Card:()=>d,Divider:()=>u,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f;function p(){return(p=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBAccordion/Variant`,component:`db-accordion`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{behavior:{control:`select`,options:[`multiple`,`single`]},variant:{control:`select`,options:[`divider`,`card`]},initOpenIndex:{control:`object`},items:{control:`object`},name:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},u={args:{variant:`divider`},render:({children:e,...t})=>n`<div><db-infotext size="small" semantic="informational" icon="none">(Default) Divider</db-infotext><db-accordion ${a(t)}>${i(`<db-accordion-item headline-plain="Item 1">Content 1</db-accordion-item><db-accordion-item headline-plain="Item 2">Content 2</db-accordion-item><db-accordion-item headline-plain="Item 3">Content 3</db-accordion-item>`)}</db-accordion></div>`},d={args:{variant:`card`},render:({children:e,...t})=>n`<div><db-infotext size="small" semantic="informational" icon="none">Card</db-infotext><db-accordion ${a(t)}>${i(`<db-accordion-item headline-plain="Item 1">Content 1</db-accordion-item><db-accordion-item headline-plain="Item 2">Content 2</db-accordion-item><db-accordion-item headline-plain="Item 3">Content 3</db-accordion-item>`)}</db-accordion></div>`},f=[`Divider`,`Card`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "divider"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext size="small" semantic="informational" icon="none">(Default) Divider</db-infotext><db-accordion \${spreadArgs(args)}>\${unsafeHTML(\`<db-accordion-item headline-plain="Item 1">Content 1</db-accordion-item><db-accordion-item headline-plain="Item 2">Content 2</db-accordion-item><db-accordion-item headline-plain="Item 3">Content 3</db-accordion-item>\`)}</db-accordion></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "card"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext size="small" semantic="informational" icon="none">Card</db-infotext><db-accordion \${spreadArgs(args)}>\${unsafeHTML(\`<db-accordion-item headline-plain="Item 1">Content 1</db-accordion-item><db-accordion-item headline-plain="Item 2">Content 2</db-accordion-item><db-accordion-item headline-plain="Item 3">Content 3</db-accordion-item>\`)}</db-accordion></div>\`
}`,...d.parameters?.docs?.source}}}})))()}export{s as i,u as n,p as r,d as t};