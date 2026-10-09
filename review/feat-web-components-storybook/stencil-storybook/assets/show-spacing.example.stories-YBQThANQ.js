import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBDrawer/Show Spacing`,component:`db-drawer`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:o(),onCancel:o()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},c={args:{containerSize:`full`,propOverrides:{id:`drawer-spacing-with`},showSpacing:!0},render:({children:e,...n})=>t`<div><db-button command="show-modal" commandfor="drawer-spacing-with">Open: (Default) With Spacing</db-button><db-drawer ${i(n)}>${r(`(Default) With Spacing`)}</db-drawer></div>`},l={args:{containerSize:`full`,propOverrides:{id:`drawer-spacing-without`},showSpacing:!1},render:({children:e,...n})=>t`<div><db-button command="show-modal" commandfor="drawer-spacing-without">Open: Without Spacing</db-button><db-drawer ${i(n)}>${r(`Without Spacing`)}</db-drawer></div>`},u=[`DefaultWithSpacing`,`WithoutSpacing`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "containerSize": "full",
    "propOverrides": {
      id: 'drawer-spacing-with'
    },
    "showSpacing": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button command="show-modal" commandfor="drawer-spacing-with">Open: (Default) With Spacing</db-button><db-drawer \${spreadArgs(args)}>\${unsafeHTML(\`(Default) With Spacing\`)}</db-drawer></div>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "containerSize": "full",
    "propOverrides": {
      id: 'drawer-spacing-without'
    },
    "showSpacing": false
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button command="show-modal" commandfor="drawer-spacing-without">Open: Without Spacing</db-button><db-drawer \${spreadArgs(args)}>\${unsafeHTML(\`Without Spacing\`)}</db-drawer></div>\`
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as DefaultWithSpacing,l as WithoutSpacing,u as __namedExportsOrder,s as default};