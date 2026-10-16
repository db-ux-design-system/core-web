import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-DdFqzS0m.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1p_kTyp.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBHeading/Semantic and visual decoupling`,component:`db-heading-h-2`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{visualSize:{control:`select`,options:[`h1`,`h2`,`h3`,`h4`,`h5`,`h6`,`p-small`,`p-medium`,`p-large`]},fontWeight:{control:`select`,options:[`black`,`light`]},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},c={args:{visualSize:`h1`},render:({children:e,...n})=>t`<db-heading-h-6 ${i(n)}>${r(`Semantic h6, visual h1`)}</db-heading-h-6>`},l={args:{visualSize:`h6`},render:({children:e,...n})=>t`<db-heading-h-2 ${i(n)}>${r(`Semantic h2, visual h6`)}</db-heading-h-2>`},u=[`h6renderedash1`,`h2renderedash6`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "visualSize": "h1"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-heading-h-6 \${spreadArgs(args)}>\${unsafeHTML(\`Semantic h6, visual h1\`)}</db-heading-h-6>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "visualSize": "h6"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-heading-h-2 \${spreadArgs(args)}>\${unsafeHTML(\`Semantic h2, visual h6\`)}</db-heading-h-2>\`
}`,...l.parameters?.docs?.source}}}})))()}d();export{u as __namedExportsOrder,s as default,l as h2renderedash6,c as h6renderedash1};