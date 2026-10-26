import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{l as t,o as n}from"./iframe-rsGk8Mdi.js";import{i as r,n as i,t as a}from"./apply-web-component-args-D90-SoBk.js";var o,s,c,l;function u(){return(u=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBDrawer/Position`,component:`db-drawer`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:o(),onCancel:o()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},c={args:{position:`absolute`,propOverrides:{id:`drawer-position-absolute`},open:!1,onClose:o()},render:({children:e,...n})=>t`<div style="position: relative; height: 500px; width: 100%; border: 2px dashed currentColor; overflow: hidden"><db-button>Open: Absolute</db-button><db-drawer ${i(n)}>${r(`<db-drawer-header slot="header" close-button-text="Close"><h2>Absolute</h2></db-drawer-header>Absolute`)}</db-drawer></div>`},l=[`DefaultFixed`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
  }: any) => html\`<div style="position: relative; height: 500px; width: 100%; border: 2px dashed currentColor; overflow: hidden"><db-button>Open: Absolute</db-button><db-drawer \${spreadArgs(args)}>\${unsafeHTML(\`<db-drawer-header slot="header" close-button-text="Close"><h2>Absolute</h2></db-drawer-header>Absolute\`)}</db-drawer></div>\`
}`,...c.parameters?.docs?.source}}}})))()}u();export{c as DefaultFixed,l as __namedExportsOrder,s as default};