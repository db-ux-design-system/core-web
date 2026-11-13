import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-D7ZhsNxW.js";import{i,n as a,t as o}from"./apply-web-component-args-DqcWTDo5.js";var s=t({__namedExportsOrder:()=>f,default:()=>l,h2renderedash6:()=>d,h6renderedash1:()=>u}),c,l,u,d,f;function p(){return(p=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBHeading/Semantic and visual decoupling`,component:`db-heading-h-2`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{visualSize:{control:`select`,options:[`h1`,`h2`,`h3`,`h4`,`h5`,`h6`,`p-small`,`p-medium`,`p-large`]},fontWeight:{control:`select`,options:[`black`,`light`]},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},u={args:{visualSize:`h1`},render:({children:e,...t})=>n`<db-heading-h-6 ${a(t)}>${i(`Semantic h6, visual h1`)}</db-heading-h-6>`},d={args:{visualSize:`h6`},render:({children:e,...t})=>n`<db-heading-h-2 ${a(t)}>${i(`Semantic h2, visual h6`)}</db-heading-h-2>`},f=[`h6renderedash1`,`h2renderedash6`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "visualSize": "h1"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-heading-h-6 \${spreadArgs(args)}>\${unsafeHTML(\`Semantic h6, visual h1\`)}</db-heading-h-6>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "visualSize": "h6"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-heading-h-2 \${spreadArgs(args)}>\${unsafeHTML(\`Semantic h2, visual h6\`)}</db-heading-h-2>\`
}`,...d.parameters?.docs?.source}}}})))()}export{p as i,d as n,u as r,s as t};