import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-CR0u9Pnn.js";import{i,n as a,t as o}from"./apply-web-component-args-eq_daaBH.js";var s=t({DefaultRegular:()=>d,Expressive:()=>f,Functional:()=>u,__namedExportsOrder:()=>p,default:()=>l}),c,l,u,d,f,p;function m(){return(m=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBHeading/Density`,component:`db-heading-h-2`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{visualSize:{control:`select`,options:[`h1`,`h2`,`h3`,`h4`,`h5`,`h6`,`p-small`,`p-medium`,`p-large`]},fontWeight:{control:`select`,options:[`black`,`light`]},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},u={args:{"data-density":`functional`},render:({children:e,...t})=>n`<db-heading-h-2 ${a(t)}>${i(`Functional`)}</db-heading-h-2>`},d={args:{"data-density":`regular`},render:({children:e,...t})=>n`<db-heading-h-2 ${a(t)}>${i(`(Default) Regular`)}</db-heading-h-2>`},f={args:{"data-density":`expressive`},render:({children:e,...t})=>n`<db-heading-h-2 ${a(t)}>${i(`Expressive`)}</db-heading-h-2>`},p=[`Functional`,`DefaultRegular`,`Expressive`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-heading-h-2 \${spreadArgs(args)}>\${unsafeHTML(\`Functional\`)}</db-heading-h-2>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-heading-h-2 \${spreadArgs(args)}>\${unsafeHTML(\`(Default) Regular\`)}</db-heading-h-2>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-heading-h-2 \${spreadArgs(args)}>\${unsafeHTML(\`Expressive\`)}</db-heading-h-2>\`
}`,...f.parameters?.docs?.source}}}})))()}export{m as a,s as i,f as n,u as r,d as t};