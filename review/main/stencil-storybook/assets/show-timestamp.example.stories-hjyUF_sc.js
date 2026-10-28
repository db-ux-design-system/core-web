import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{l as t,o as n}from"./iframe-C5KeZ1jB.js";import{i as r,n as i,t as a}from"./apply-web-component-args-YZAtuaXo.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBNotification/Show Timestamp`,component:`db-notification`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:o()},argTypes:{headline:{control:`text`},showIcon:{control:`boolean`},variant:{control:`select`,options:[`docked`,`standalone`,`overlay`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},closeable:{control:`boolean`},linkVariant:{control:`select`,options:[`block`,`inline`]},showHeadline:{control:`boolean`},showTimestamp:{control:`boolean`},timestamp:{control:`text`},ariaLive:{control:`select`,options:[`assertive`,`polite`,`off`]},text:{control:`text`},role:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},c={args:{variant:`overlay`,timestamp:`10 min ago`,showTimestamp:!1},render:({children:e,...n})=>t`<div style="width: 300px"><db-notification ${i(n)}>${r(`(Default) False`)}</db-notification></div>`},l={args:{variant:`overlay`,timestamp:`10 min ago`,showTimestamp:!0},render:({children:e,...n})=>t`<div style="width: 300px"><db-notification ${i(n)}>${r(`True`)}</db-notification></div>`},u=[`DefaultFalse`,`True`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay",
    "timestamp": "10 min ago",
    "showTimestamp": false
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`(Default) False\`)}</db-notification></div>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay",
    "timestamp": "10 min ago",
    "showTimestamp": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`True\`)}</db-notification></div>\`
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as DefaultFalse,l as True,u as __namedExportsOrder,s as default};