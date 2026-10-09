import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{n as r,t as i}from"./apply-web-component-args-B1PNRnpa.js";var a,o,s,c,l,u;function d(){return(d=e((()=>{n(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBTabItem/States`,component:`db-tab-item`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{label:{control:`text`},active:{control:`boolean`},disabled:{control:`boolean`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`}}},s={args:{label:`(Default) Enabled`},render:({children:e,...n})=>t`<db-tab-list><db-tab-item ${r(n)}></db-tab-item></db-tab-list>`},c={args:{label:`active`,active:!0},render:({children:e,...n})=>t`<db-tab-list><db-tab-item ${r(n)}></db-tab-item></db-tab-list>`},l={args:{label:`disabled`,disabled:!0},render:({children:e,...n})=>t`<db-tab-list><db-tab-item ${r(n)}></db-tab-item></db-tab-list>`},u=[`DefaultEnabled`,`active`,`disabled`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) Enabled"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-tab-list><db-tab-item \${spreadArgs(args)}></db-tab-item></db-tab-list>\`
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "active",
    "active": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-tab-list><db-tab-item \${spreadArgs(args)}></db-tab-item></db-tab-list>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "disabled",
    "disabled": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-tab-list><db-tab-item \${spreadArgs(args)}></db-tab-item></db-tab-list>\`
}`,...l.parameters?.docs?.source}}}})))()}d();export{s as DefaultEnabled,u as __namedExportsOrder,c as active,o as default,l as disabled};