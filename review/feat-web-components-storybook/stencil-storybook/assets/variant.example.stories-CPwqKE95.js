import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBControlPanelBrand/Variants`,component:`db-control-panel-brand`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{},render:({children:e,...n})=>t`<div><db-infotext semantic="informational" size="small" icon="none">(Default) With Logo</db-infotext><db-control-panel-brand ${i(n)}>${r(`Functional`)}</db-control-panel-brand></div>`},l={args:{"data-logo":`db-systel`},render:({children:e,...n})=>t`<div><db-control-panel-brand ${i(n)}></db-control-panel-brand></div>`},u={args:{},render:({children:e,...n})=>t`<div><a href="#"><db-control-panel-brand ${i(n)}>${r(`As Link`)}</db-control-panel-brand></a></div>`},d=[`DefaultWithLogo`,`LogoVariant`,`AsLink`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext semantic="informational" size="small" icon="none">(Default) With Logo</db-infotext><db-control-panel-brand \${spreadArgs(args)}>\${unsafeHTML(\`Functional\`)}</db-control-panel-brand></div>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-logo": "db-systel"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-control-panel-brand \${spreadArgs(args)}></db-control-panel-brand></div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<div><a href="#"><db-control-panel-brand \${spreadArgs(args)}>\${unsafeHTML(\`As Link\`)}</db-control-panel-brand></a></div>\`
}`,...u.parameters?.docs?.source}}}})))()}f();export{u as AsLink,c as DefaultWithLogo,l as LogoVariant,d as __namedExportsOrder,s as default};