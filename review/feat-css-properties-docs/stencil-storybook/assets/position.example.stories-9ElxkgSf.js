import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-DZJrNnmE.js";import{i,n as a,t as o}from"./apply-web-component-args-C7MBtvk6.js";var s=t({DefaultFixed:()=>u,__namedExportsOrder:()=>d,default:()=>l}),c,l,u,d;function f(){return(f=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBDrawer/Position`,component:`db-drawer`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:c(),onCancel:c()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},u={args:{position:`absolute`,propOverrides:{id:`drawer-position-absolute`},open:!1,onClose:c()},render:({children:e,...t})=>n`<div style="position: relative; height: 500px; width: 100%; border: 2px dashed currentColor; overflow: hidden"><db-button>Open: Absolute</db-button><db-drawer ${a(t)}>${i(`<db-drawer-header slot="header" close-button-text="Close"><h2>Absolute</h2></db-drawer-header>Absolute`)}</db-drawer></div>`},d=[`DefaultFixed`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}}})))()}export{f as n,s as r,u as t};