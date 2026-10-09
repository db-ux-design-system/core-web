import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBTabItem/Slot with Badge`,component:`db-tab-item`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{label:{control:`text`},active:{control:`boolean`},disabled:{control:`boolean`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`}}},c={args:{label:`Messages`},render:({children:e,...n})=>t`<db-tab-list><db-tab-item ${i(n)}>${r(`<db-badge semantic="informational">134</db-badge>`)}</db-tab-item></db-tab-list>`},l={args:{label:`Notifications`},render:({children:e,...n})=>t`<db-tab-list><db-tab-item ${i(n)}>${r(`<db-badge semantic="neutral">433</db-badge>`)}</db-tab-item></db-tab-list>`},u=[`MessageswithBadge`,`NotificationswithBadge`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Messages"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-tab-list><db-tab-item \${spreadArgs(args)}>\${unsafeHTML(\`<db-badge semantic="informational">134</db-badge>\`)}</db-tab-item></db-tab-list>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Notifications"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-tab-list><db-tab-item \${spreadArgs(args)}>\${unsafeHTML(\`<db-badge semantic="neutral">433</db-badge>\`)}</db-tab-item></db-tab-list>\`
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as MessageswithBadge,l as NotificationswithBadge,u as __namedExportsOrder,s as default};