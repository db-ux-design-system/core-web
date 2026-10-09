import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l;function u(){return(u=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBDrawer/Position`,component:`db-drawer`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:o(),onCancel:o()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},c={args:{position:`absolute`,propOverrides:{id:`drawer-position-absolute`},open:!1,onClose:o()},render:({children:e,...n})=>t`<div><db-button>Open: Absolute</db-button><db-drawer ${i(n)}>${r(`Absolute`)}</db-drawer></div>`},l=[`DefaultFixed`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "position": "absolute",
    "propOverrides": {
      id: 'drawer-position-absolute'
    },
    "open": false,
    "onClose": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button>Open: Absolute</db-button><db-drawer \${spreadArgs(args)}>\${unsafeHTML(\`Absolute\`)}</db-drawer></div>\`
}`,...c.parameters?.docs?.source}}}})))()}u();export{c as DefaultFixed,l as __namedExportsOrder,s as default};