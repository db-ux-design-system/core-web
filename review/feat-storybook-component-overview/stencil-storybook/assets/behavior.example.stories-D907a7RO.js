import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-DBUpr5OO.js";import{i,n as a,t as o}from"./apply-web-component-args-OHuaz6RS.js";var s=t({Multiple:()=>u,Single:()=>d,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f;function p(){return(p=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBAccordion/Behavior`,component:`db-accordion`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{behavior:{control:`select`,options:[`multiple`,`single`]},variant:{control:`select`,options:[`divider`,`card`]},initOpenIndex:{control:`object`},items:{control:`object`},name:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},u={args:{behavior:`multiple`},render:({children:e,...t})=>n`<div><db-infotext size="small" semantic="informational" icon="none">(Default) Multiple</db-infotext><db-accordion ${a(t)}>${i(`<db-accordion-item headline-plain="Item 1">Content 1</db-accordion-item><db-accordion-item headline-plain="Item 2">Content 2</db-accordion-item><db-accordion-item headline-plain="Item 3">Content 3</db-accordion-item>`)}</db-accordion></div>`},d={args:{behavior:`single`},render:({children:e,...t})=>n`<div><db-infotext size="small" semantic="informational" icon="none">Single</db-infotext><db-accordion ${a(t)}>${i(`<db-accordion-item headline-plain="Item 1">Content 1</db-accordion-item><db-accordion-item headline-plain="Item 2">Content 2</db-accordion-item><db-accordion-item headline-plain="Item 3">Content 3</db-accordion-item>`)}</db-accordion></div>`},f=[`Multiple`,`Single`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "behavior": "multiple"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext size="small" semantic="informational" icon="none">(Default) Multiple</db-infotext><db-accordion \${spreadArgs(args)}>\${unsafeHTML(\`<db-accordion-item headline-plain="Item 1">Content 1</db-accordion-item><db-accordion-item headline-plain="Item 2">Content 2</db-accordion-item><db-accordion-item headline-plain="Item 3">Content 3</db-accordion-item>\`)}</db-accordion></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "behavior": "single"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext size="small" semantic="informational" icon="none">Single</db-infotext><db-accordion \${spreadArgs(args)}>\${unsafeHTML(\`<db-accordion-item headline-plain="Item 1">Content 1</db-accordion-item><db-accordion-item headline-plain="Item 2">Content 2</db-accordion-item><db-accordion-item headline-plain="Item 3">Content 3</db-accordion-item>\`)}</db-accordion></div>\`
}`,...d.parameters?.docs?.source}}}})))()}export{p as i,d as n,s as r,u as t};