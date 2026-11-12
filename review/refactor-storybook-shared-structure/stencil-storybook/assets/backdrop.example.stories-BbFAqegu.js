import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-BnQ4OuDo.js";import{i,n as a,t as o}from"./apply-web-component-args-Df_OrMHU.js";var s=t({DefaultStrong:()=>u,Invisible:()=>f,NoBackdrop:()=>p,Weak:()=>d,__namedExportsOrder:()=>m,default:()=>l}),c,l,u,d,f,p,m;function h(){return(h=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBDrawer/Backdrop`,component:`db-drawer`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:c(),onCancel:c()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},u={args:{backdrop:`strong`,propOverrides:{id:`drawer-backdrop-strong`}},render:({children:e,...t})=>n`<div><db-button command="show-modal" commandfor="drawer-backdrop-strong">Open: (Default) Strong</db-button><db-drawer ${a(t)}>${i(`<db-drawer-header slot="header" close-button-text="Close"><h2>(Default) Strong</h2></db-drawer-header>(Default) Strong`)}</db-drawer></div>`},d={args:{backdrop:`weak`,propOverrides:{id:`drawer-backdrop-weak`}},render:({children:e,...t})=>n`<div><db-button command="show-modal" commandfor="drawer-backdrop-weak">Open: Weak</db-button><db-drawer ${a(t)}>${i(`<db-drawer-header slot="header" close-button-text="Close"><h2>Weak</h2></db-drawer-header>Weak`)}</db-drawer></div>`},f={args:{backdrop:`invisible`,propOverrides:{id:`drawer-backdrop-invisible`}},render:({children:e,...t})=>n`<div><db-button command="show-modal" commandfor="drawer-backdrop-invisible">Open: Invisible</db-button><db-drawer ${a(t)}>${i(`<db-drawer-header slot="header" close-button-text="Close"><h2>Invisible</h2></db-drawer-header>Invisible`)}</db-drawer></div>`},p={args:{backdrop:`none`,propOverrides:{id:`drawer-backdrop-none`},open:!1,onClose:c()},render:({children:e,...t})=>n`<div><db-button>Open: No Backdrop</db-button><db-drawer ${a(t)}>${i(`<db-drawer-header slot="header" close-button-text="Close"><h2>No Backdrop</h2></db-drawer-header>No Backdrop`)}</db-drawer></div>`},m=[`DefaultStrong`,`Weak`,`Invisible`,`NoBackdrop`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "backdrop": "strong",
    "propOverrides": {
      id: 'drawer-backdrop-strong'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button command="show-modal" commandfor="drawer-backdrop-strong">Open: (Default) Strong</db-button><db-drawer \${spreadArgs(args)}>\${unsafeHTML(\`<db-drawer-header slot="header" close-button-text="Close"><h2>(Default) Strong</h2></db-drawer-header>(Default) Strong\`)}</db-drawer></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "backdrop": "weak",
    "propOverrides": {
      id: 'drawer-backdrop-weak'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button command="show-modal" commandfor="drawer-backdrop-weak">Open: Weak</db-button><db-drawer \${spreadArgs(args)}>\${unsafeHTML(\`<db-drawer-header slot="header" close-button-text="Close"><h2>Weak</h2></db-drawer-header>Weak\`)}</db-drawer></div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "backdrop": "invisible",
    "propOverrides": {
      id: 'drawer-backdrop-invisible'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button command="show-modal" commandfor="drawer-backdrop-invisible">Open: Invisible</db-button><db-drawer \${spreadArgs(args)}>\${unsafeHTML(\`<db-drawer-header slot="header" close-button-text="Close"><h2>Invisible</h2></db-drawer-header>Invisible\`)}</db-drawer></div>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "backdrop": "none",
    "propOverrides": {
      id: 'drawer-backdrop-none'
    },
    "open": false,
    "onClose": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button>Open: No Backdrop</db-button><db-drawer \${spreadArgs(args)}>\${unsafeHTML(\`<db-drawer-header slot="header" close-button-text="Close"><h2>No Backdrop</h2></db-drawer-header>No Backdrop\`)}</db-drawer></div>\`
}`,...p.parameters?.docs?.source}}}})))()}export{s as a,d as i,f as n,h as o,p as r,u as t};