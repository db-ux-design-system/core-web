import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-LYtL2xrD.js";import{i,n as a,t as o}from"./apply-web-component-args-QiJXFgM3.js";var s=t({DefaultWithSpacing:()=>u,WithoutSpacing:()=>d,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f;function p(){return(p=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBDrawer/Show Spacing`,component:`db-drawer`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:c(),onCancel:c()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},u={args:{containerSize:`full`,propOverrides:{id:`drawer-spacing-with`},showSpacing:!0},render:({children:e,...t})=>n`<div><db-button command="show-modal" commandfor="drawer-spacing-with">Open: (Default) With Spacing</db-button><db-drawer ${a(t)}>${i(`<db-drawer-header slot="header" close-button-text="Close"><h2>(Default) With Spacing</h2></db-drawer-header>(Default) With Spacing`)}</db-drawer></div>`},d={args:{containerSize:`full`,propOverrides:{id:`drawer-spacing-without`},showSpacing:!1},render:({children:e,...t})=>n`<div><db-button command="show-modal" commandfor="drawer-spacing-without">Open: Without Spacing</db-button><db-drawer ${a(t)}>${i(`<db-drawer-header slot="header" close-button-text="Close"><h2>Without Spacing</h2></db-drawer-header>Without Spacing`)}</db-drawer></div>`},f=[`DefaultWithSpacing`,`WithoutSpacing`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
  }: any) => html\`<div><db-button command="show-modal" commandfor="drawer-spacing-with">Open: (Default) With Spacing</db-button><db-drawer \${spreadArgs(args)}>\${unsafeHTML(\`<db-drawer-header slot="header" close-button-text="Close"><h2>(Default) With Spacing</h2></db-drawer-header>(Default) With Spacing\`)}</db-drawer></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
  }: any) => html\`<div><db-button command="show-modal" commandfor="drawer-spacing-without">Open: Without Spacing</db-button><db-drawer \${spreadArgs(args)}>\${unsafeHTML(\`<db-drawer-header slot="header" close-button-text="Close"><h2>Without Spacing</h2></db-drawer-header>Without Spacing\`)}</db-drawer></div>\`
}`,...d.parameters?.docs?.source}}}})))()}export{s as i,d as n,p as r,u as t};