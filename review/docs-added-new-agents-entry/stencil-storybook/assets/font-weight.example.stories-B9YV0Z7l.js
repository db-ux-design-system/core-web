import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-BRH7Wt-0.js";import{i as r,n as i,t as a}from"./apply-web-component-args-CUUmKCyJ.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBHeading/Font weight`,component:`db-heading-h-2`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{visualSize:{control:`select`,options:[`h1`,`h2`,`h3`,`h4`,`h5`,`h6`,`p-small`,`p-medium`,`p-large`]},fontWeight:{control:`select`,options:[`black`,`light`]},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},c={args:{fontWeight:`black`},render:({children:e,...n})=>t`<db-heading-h-2 ${i(n)}>${r(`(Default) Black`)}</db-heading-h-2>`},l={args:{fontWeight:`light`},render:({children:e,...n})=>t`<db-heading-h-2 ${i(n)}>${r(`Light`)}</db-heading-h-2>`},u=[`DefaultBlack`,`Light`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "fontWeight": "black"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-heading-h-2 \${spreadArgs(args)}>\${unsafeHTML(\`(Default) Black\`)}</db-heading-h-2>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "fontWeight": "light"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-heading-h-2 \${spreadArgs(args)}>\${unsafeHTML(\`Light\`)}</db-heading-h-2>\`
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as DefaultBlack,l as Light,u as __namedExportsOrder,s as default};