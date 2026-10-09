import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBBrand/Variants`,component:`db-brand`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{hideLogo:{control:`boolean`},showIcon:{control:`boolean`},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{},render:({children:e,...n})=>t`<db-brand ${i(n)}>${r(`(Default) With Logo`)}</db-brand>`},l={args:{hideLogo:!0},render:({children:e,...n})=>t`<db-brand ${i(n)}>${r(`No Logo`)}</db-brand>`},u={args:{hideLogo:!0},render:({children:e,...n})=>t`<db-brand ${i(n)}>${r(`<img alt="this is a fancy placeholder logo" />Custom Logo`)}</db-brand>`},d=[`DefaultWithLogo`,`NoLogo`,`CustomLogo`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<db-brand \${spreadArgs(args)}>\${unsafeHTML(\`(Default) With Logo\`)}</db-brand>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "hideLogo": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-brand \${spreadArgs(args)}>\${unsafeHTML(\`No Logo\`)}</db-brand>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "hideLogo": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-brand \${spreadArgs(args)}>\${unsafeHTML(\`<img alt="this is a fancy placeholder logo" />Custom Logo\`)}</db-brand>\`
}`,...u.parameters?.docs?.source}}}})))()}f();export{u as CustomLogo,c as DefaultWithLogo,l as NoLogo,d as __namedExportsOrder,s as default};