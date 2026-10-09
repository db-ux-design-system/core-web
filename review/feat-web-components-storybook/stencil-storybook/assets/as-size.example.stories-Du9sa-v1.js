import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBHeading/Semantic and visual decoupling`,component:`db-heading-h-2`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`3xl`,`2xl`,`xl`,`lg`,`md`,`sm`,`xs`,`2xs`,`3xs`]},fontWeight:{control:`select`,options:[`black`,`light`]},alignment:{control:`select`,options:[`start`,`center`,`end`]},paragraphSpacing:{control:`boolean`},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},c={args:{size:`2xl`},render:({children:e,...n})=>t`<db-heading-h-6 ${i(n)}>${r(`Semantic h6, visual 2xl`)}</db-heading-h-6>`},l={args:{size:`3xs`},render:({children:e,...n})=>t`<db-heading-h-2 ${i(n)}>${r(`Semantic h2, visual 3xs`)}</db-heading-h-2>`},u=[`h6renderedat2xl`,`h2renderedat3xs`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "2xl"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-heading-h-6 \${spreadArgs(args)}>\${unsafeHTML(\`Semantic h6, visual 2xl\`)}</db-heading-h-6>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "3xs"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-heading-h-2 \${spreadArgs(args)}>\${unsafeHTML(\`Semantic h2, visual 3xs\`)}</db-heading-h-2>\`
}`,...l.parameters?.docs?.source}}}})))()}d();export{u as __namedExportsOrder,s as default,l as h2renderedat3xs,c as h6renderedat2xl};