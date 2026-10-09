import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBBrand/Density`,component:`db-brand`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{hideLogo:{control:`boolean`},showIcon:{control:`boolean`},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{"data-density":`functional`},render:({children:e,...n})=>t`<db-brand ${i(n)}>${r(`Functional`)}</db-brand>`},l={args:{"data-density":`regular`},render:({children:e,...n})=>t`<db-brand ${i(n)}>${r(`(Default) Regular`)}</db-brand>`},u={args:{"data-density":`expressive`},render:({children:e,...n})=>t`<db-brand ${i(n)}>${r(`Expressive`)}</db-brand>`},d=[`Functional`,`DefaultRegular`,`Expressive`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-brand \${spreadArgs(args)}>\${unsafeHTML(\`Functional\`)}</db-brand>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-brand \${spreadArgs(args)}>\${unsafeHTML(\`(Default) Regular\`)}</db-brand>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-brand \${spreadArgs(args)}>\${unsafeHTML(\`Expressive\`)}</db-brand>\`
}`,...u.parameters?.docs?.source}}}})))()}f();export{l as DefaultRegular,u as Expressive,c as Functional,d as __namedExportsOrder,s as default};