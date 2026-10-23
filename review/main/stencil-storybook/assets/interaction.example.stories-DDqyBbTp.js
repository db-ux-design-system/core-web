import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-CFp9oyOy.js";import{i as r,n as i,t as a}from"./apply-web-component-args-QlIS0gU8.js";var o,s,c,l;function u(){return(u=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBDrawer/Interaction`,component:`db-drawer`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:o(),onCancel:o()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},c={args:{open:!1,rounded:!0,onClose:o()},render:({children:e,...n})=>t`<db-drawer ${i(n)}>${r(`<db-drawer-header slot="header" close-button-text="Close">Title</db-drawer-header><span data-testid="drawer-content">Test</span>`)}</db-drawer>`},l=[`Interaction`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "rounded": true,
    "onClose": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-drawer \${spreadArgs(args)}>\${unsafeHTML(\`<db-drawer-header slot="header" close-button-text="Close">Title</db-drawer-header><span data-testid="drawer-content">Test</span>\`)}</db-drawer>\`
}`,...c.parameters?.docs?.source}}}})))()}u();export{c as Interaction,l as __namedExportsOrder,s as default};