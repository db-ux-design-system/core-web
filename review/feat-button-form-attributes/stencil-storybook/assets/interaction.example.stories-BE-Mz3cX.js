import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{l as t,o as n}from"./iframe-DftKI8b_.js";import{i as r,n as i,t as a}from"./apply-web-component-args-CjMtaCie.js";var o,s,c,l;function u(){return(u=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBNotification/Interaction`,component:`db-notification`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:o()},argTypes:{headline:{control:`text`},showIcon:{control:`boolean`},variant:{control:`select`,options:[`docked`,`standalone`,`overlay`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},closeable:{control:`boolean`},linkVariant:{control:`select`,options:[`block`,`inline`]},showHeadline:{control:`boolean`},showTimestamp:{control:`boolean`},timestamp:{control:`text`},ariaLive:{control:`select`,options:[`assertive`,`polite`,`off`]},text:{control:`text`},role:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},c={args:{"data-testid":`notification`,closeable:!0,onClose:o()},render:({children:e,...n})=>t`<div style="width: 300px"><db-notification ${i(n)}>${r(`Test`)}</db-notification><div data-sb-ignore="true"><span data-testid="notification-closed">closed</span></div></div>`},l=[`Interaction`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "notification",
    "closeable": true,
    "onClose": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`Test\`)}</db-notification><div data-sb-ignore="true"><span data-testid="notification-closed">closed</span></div></div>\`
}`,...c.parameters?.docs?.source}}}})))()}u();export{c as Interaction,l as __namedExportsOrder,s as default};