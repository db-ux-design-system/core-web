import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBNotification/Show Headline`,component:`db-notification`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:o()},argTypes:{headline:{control:`text`},showIcon:{control:`boolean`},variant:{control:`select`,options:[`docked`,`standalone`,`overlay`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},closeable:{control:`boolean`},linkVariant:{control:`select`,options:[`block`,`inline`]},showHeadline:{control:`boolean`},showTimestamp:{control:`boolean`},timestamp:{control:`text`},ariaLive:{control:`select`,options:[`assertive`,`polite`,`off`]},text:{control:`text`},role:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},c={args:{headline:`Headline`,showHeadline:!0},render:({children:e,...n})=>t`<div><db-notification ${i(n)}>${r(`(Default) True`)}</db-notification></div>`},l={args:{headline:`Headline`,showHeadline:!1},render:({children:e,...n})=>t`<div><db-notification ${i(n)}>${r(`False`)}</db-notification></div>`},u=[`DefaultTrue`,`False`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "headline": "Headline",
    "showHeadline": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`(Default) True\`)}</db-notification></div>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "headline": "Headline",
    "showHeadline": false
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`False\`)}</db-notification></div>\`
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as DefaultTrue,l as False,u as __namedExportsOrder,s as default};