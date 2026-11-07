import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-CSduPcDp.js";import{i,n as a,t as o}from"./apply-web-component-args-D-8sNeLN.js";var s=t({Interaction:()=>u,__namedExportsOrder:()=>d,default:()=>l}),c,l,u,d;function f(){return(f=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBDrawer/Interaction`,component:`db-drawer`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:c(),onCancel:c()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},u={args:{open:!1,rounded:!0,onClose:c()},render:({children:e,...t})=>n`<db-drawer ${a(t)}>${i(`<db-drawer-header slot="header" close-button-text="Close">Title</db-drawer-header><span data-testid="drawer-content">Test</span>`)}</db-drawer>`},d=[`Interaction`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "rounded": true,
    "onClose": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-drawer \${spreadArgs(args)}>\${unsafeHTML(\`<db-drawer-header slot="header" close-button-text="Close">Title</db-drawer-header><span data-testid="drawer-content">Test</span>\`)}</db-drawer>\`
}`,...u.parameters?.docs?.source}}}})))()}export{f as n,s as r,u as t};