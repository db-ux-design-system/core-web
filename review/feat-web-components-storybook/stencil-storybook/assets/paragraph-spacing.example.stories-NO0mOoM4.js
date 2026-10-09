import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBHeading/Paragraph spacing`,component:`db-heading-h-2`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`3xl`,`2xl`,`xl`,`lg`,`md`,`sm`,`xs`,`2xs`,`3xs`]},fontWeight:{control:`select`,options:[`black`,`light`]},alignment:{control:`select`,options:[`start`,`center`,`end`]},paragraphSpacing:{control:`boolean`},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},c={args:{},render:({children:e,...n})=>t`<db-heading-h-2 ${i(n)}>${r(`Omitted: no margin`)}</db-heading-h-2>`},l={args:{paragraphSpacing:!0},render:({children:e,...n})=>t`<db-heading-h-2 ${i(n)}>${r(`True: 1lh block-end`)}</db-heading-h-2>`},u={args:{paragraphSpacing:!1},render:({children:e,...n})=>t`<db-heading-h-2 ${i(n)}>${r(`False: no margin`)}</db-heading-h-2>`},d=[`Omitted`,`True1lhblockend`,`False`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<db-heading-h-2 \${spreadArgs(args)}>\${unsafeHTML(\`Omitted: no margin\`)}</db-heading-h-2>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "paragraphSpacing": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-heading-h-2 \${spreadArgs(args)}>\${unsafeHTML(\`True: 1lh block-end\`)}</db-heading-h-2>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "paragraphSpacing": false
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-heading-h-2 \${spreadArgs(args)}>\${unsafeHTML(\`False: no margin\`)}</db-heading-h-2>\`
}`,...u.parameters?.docs?.source}}}})))()}f();export{u as False,c as Omitted,l as True1lhblockend,d as __namedExportsOrder,s as default};