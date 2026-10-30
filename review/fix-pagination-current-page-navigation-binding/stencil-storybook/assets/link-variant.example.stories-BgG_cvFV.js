import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{l as t,o as n}from"./iframe-BQ22DlPQ.js";import{i as r,n as i,t as a}from"./apply-web-component-args-DgrL1IQb.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBNotification/Link Variant`,component:`db-notification`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:o()},argTypes:{headline:{control:`text`},showIcon:{control:`boolean`},variant:{control:`select`,options:[`docked`,`standalone`,`overlay`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},closeable:{control:`boolean`},linkVariant:{control:`select`,options:[`block`,`inline`]},showHeadline:{control:`boolean`},showTimestamp:{control:`boolean`},timestamp:{control:`text`},ariaLive:{control:`select`,options:[`assertive`,`polite`,`off`]},text:{control:`text`},role:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},c={args:{linkVariant:`block`},render:({children:e,...n})=>t`<div style="width: 300px"><db-notification ${i(n)}>${r(`<db-link slot="link" href="#">Textlink</db-link>(Default) Block`)}</db-notification></div>`},l={args:{linkVariant:`inline`},render:({children:e,...n})=>t`<div style="width: 300px"><db-notification ${i(n)}>${r(`<db-link slot="link" href="#">Textlink</db-link>Inline`)}</db-notification></div>`},u=[`DefaultBlock`,`Inline`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "linkVariant": "block"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`<db-link slot="link" href="#">Textlink</db-link>(Default) Block\`)}</db-notification></div>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "linkVariant": "inline"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`<db-link slot="link" href="#">Textlink</db-link>Inline\`)}</db-notification></div>\`
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as DefaultBlock,l as Inline,u as __namedExportsOrder,s as default};