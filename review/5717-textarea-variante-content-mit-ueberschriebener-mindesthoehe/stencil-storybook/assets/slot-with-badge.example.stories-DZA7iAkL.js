import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-DesJQKM_.js";import{i,n as a,t as o}from"./apply-web-component-args-CMbNfqh7.js";var s=t({MessageswithBadge:()=>u,NotificationswithBadge:()=>d,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f;function p(){return(p=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBTabItem/Slot with Badge`,component:`db-tab-item`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{label:{control:`text`},active:{control:`boolean`},disabled:{control:`boolean`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`}}},u={args:{label:`Messages`},render:({children:e,...t})=>n`<db-tab-list><db-tab-item ${a(t)}>${i(`<db-badge semantic="informational">134</db-badge>`)}</db-tab-item></db-tab-list>`},d={args:{label:`Notifications`},render:({children:e,...t})=>n`<db-tab-list><db-tab-item ${a(t)}>${i(`<db-badge semantic="neutral">433</db-badge>`)}</db-tab-item></db-tab-list>`},f=[`MessageswithBadge`,`NotificationswithBadge`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Messages"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-tab-list><db-tab-item \${spreadArgs(args)}>\${unsafeHTML(\`<db-badge semantic="informational">134</db-badge>\`)}</db-tab-item></db-tab-list>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Notifications"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-tab-list><db-tab-item \${spreadArgs(args)}>\${unsafeHTML(\`<db-badge semantic="neutral">433</db-badge>\`)}</db-tab-item></db-tab-list>\`
}`,...d.parameters?.docs?.source}}}})))()}export{s as i,d as n,p as r,u as t};