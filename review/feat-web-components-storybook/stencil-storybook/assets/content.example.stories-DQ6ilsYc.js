import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBControlPanelBrand/Content`,component:`db-control-panel-brand`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{},render:({children:e,...n})=>t`<div><db-control-panel-brand ${i(n)}>${r(`Single Line`)}</db-control-panel-brand></div>`},l={args:{secondLine:`Second Line`},render:({children:e,...n})=>t`<div><db-control-panel-brand ${i(n)}>${r(`With Second Line`)}</db-control-panel-brand></div>`},u={args:{},render:({children:e,...n})=>t`<div><db-control-panel-brand ${i(n)}>${r(`<strong>Strong Single Line</strong>`)}</db-control-panel-brand></div>`},d={args:{secondLine:`Second Line`},render:({children:e,...n})=>t`<div><db-control-panel-brand ${i(n)}>${r(`<strong>Strong With Second Line</strong>`)}</db-control-panel-brand></div>`},f={args:{},render:({children:e,...n})=>t`<div><db-control-panel-brand ${i(n)}>${r(`With Badge`)}</db-control-panel-brand></div>`},p=[`SingleLine`,`WithSecondLine`,`StrongSingleLine`,`StrongWithSecondLine`,`WithBadge`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-control-panel-brand \${spreadArgs(args)}>\${unsafeHTML(\`Single Line\`)}</db-control-panel-brand></div>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "secondLine": "Second Line"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-control-panel-brand \${spreadArgs(args)}>\${unsafeHTML(\`With Second Line\`)}</db-control-panel-brand></div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-control-panel-brand \${spreadArgs(args)}>\${unsafeHTML(\`<strong>Strong Single Line</strong>\`)}</db-control-panel-brand></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "secondLine": "Second Line"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-control-panel-brand \${spreadArgs(args)}>\${unsafeHTML(\`<strong>Strong With Second Line</strong>\`)}</db-control-panel-brand></div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-control-panel-brand \${spreadArgs(args)}>\${unsafeHTML(\`With Badge\`)}</db-control-panel-brand></div>\`
}`,...f.parameters?.docs?.source}}}})))()}m();export{c as SingleLine,u as StrongSingleLine,d as StrongWithSecondLine,f as WithBadge,l as WithSecondLine,p as __namedExportsOrder,s as default};