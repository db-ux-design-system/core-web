import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-BePC_G2C.js";import{i,n as a,t as o}from"./apply-web-component-args-DxCeR4in.js";var s=t({DefaultToLeft:()=>u,Down:()=>p,DownFull:()=>h,ToRight:()=>d,Up:()=>f,UpFull:()=>m,__namedExportsOrder:()=>g,default:()=>l}),c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBDrawer/Direction`,component:`db-drawer`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:c(),onCancel:c()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},u={args:{propOverrides:{id:`drawer-direction-to-left`}},render:({children:e,...t})=>n`<div><db-button command="show-modal" commandfor="drawer-direction-to-left">Open: (Default) To-Left</db-button><db-drawer ${a(t)}>${i(`<db-drawer-header slot="header" close-button-text="Close"><h2>(Default) To-Left</h2></db-drawer-header>(Default) To-Left`)}</db-drawer></div>`},d={args:{direction:`to-right`,propOverrides:{id:`drawer-direction-to-right`}},render:({children:e,...t})=>n`<div><db-button command="show-modal" commandfor="drawer-direction-to-right">Open: To-Right</db-button><db-drawer ${a(t)}>${i(`<db-drawer-header slot="header" close-button-text="Close"><h2>To-Right</h2></db-drawer-header>To-Right`)}</db-drawer></div>`},f={args:{direction:`up`,propOverrides:{id:`drawer-direction-up`}},render:({children:e,...t})=>n`<div><db-button command="show-modal" commandfor="drawer-direction-up">Open: Up</db-button><db-drawer ${a(t)}>${i(`<db-drawer-header slot="header" close-button-text="Close"><h2>Up</h2></db-drawer-header>Up`)}</db-drawer></div>`},p={args:{direction:`down`,propOverrides:{id:`drawer-direction-down`}},render:({children:e,...t})=>n`<div><db-button command="show-modal" commandfor="drawer-direction-down">Open: Down</db-button><db-drawer ${a(t)}>${i(`<db-drawer-header slot="header" close-button-text="Close"><h2>Down</h2></db-drawer-header>Down`)}</db-drawer></div>`},m={args:{direction:`up`,containerSize:`full`,propOverrides:{id:`drawer-direction-up-full`}},render:({children:e,...t})=>n`<div><db-button command="show-modal" commandfor="drawer-direction-up-full">Open: Up (Full)</db-button><db-drawer ${a(t)}>${i(`<db-drawer-header slot="header" close-button-text="Close"><h2>Up (Full)</h2></db-drawer-header>Up (Full)`)}</db-drawer></div>`},h={args:{direction:`down`,containerSize:`full`,propOverrides:{id:`drawer-direction-down-full`}},render:({children:e,...t})=>n`<div><db-button command="show-modal" commandfor="drawer-direction-down-full">Open: Down (Full)</db-button><db-drawer ${a(t)}>${i(`<db-drawer-header slot="header" close-button-text="Close"><h2>Down (Full)</h2></db-drawer-header>Down (Full)`)}</db-drawer></div>`},g=[`DefaultToLeft`,`ToRight`,`Up`,`Down`,`UpFull`,`DownFull`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'drawer-direction-to-left'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button command="show-modal" commandfor="drawer-direction-to-left">Open: (Default) To-Left</db-button><db-drawer \${spreadArgs(args)}>\${unsafeHTML(\`<db-drawer-header slot="header" close-button-text="Close"><h2>(Default) To-Left</h2></db-drawer-header>(Default) To-Left\`)}</db-drawer></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "direction": "to-right",
    "propOverrides": {
      id: 'drawer-direction-to-right'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button command="show-modal" commandfor="drawer-direction-to-right">Open: To-Right</db-button><db-drawer \${spreadArgs(args)}>\${unsafeHTML(\`<db-drawer-header slot="header" close-button-text="Close"><h2>To-Right</h2></db-drawer-header>To-Right\`)}</db-drawer></div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "direction": "up",
    "propOverrides": {
      id: 'drawer-direction-up'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button command="show-modal" commandfor="drawer-direction-up">Open: Up</db-button><db-drawer \${spreadArgs(args)}>\${unsafeHTML(\`<db-drawer-header slot="header" close-button-text="Close"><h2>Up</h2></db-drawer-header>Up\`)}</db-drawer></div>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "direction": "down",
    "propOverrides": {
      id: 'drawer-direction-down'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button command="show-modal" commandfor="drawer-direction-down">Open: Down</db-button><db-drawer \${spreadArgs(args)}>\${unsafeHTML(\`<db-drawer-header slot="header" close-button-text="Close"><h2>Down</h2></db-drawer-header>Down\`)}</db-drawer></div>\`
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "direction": "up",
    "containerSize": "full",
    "propOverrides": {
      id: 'drawer-direction-up-full'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button command="show-modal" commandfor="drawer-direction-up-full">Open: Up (Full)</db-button><db-drawer \${spreadArgs(args)}>\${unsafeHTML(\`<db-drawer-header slot="header" close-button-text="Close"><h2>Up (Full)</h2></db-drawer-header>Up (Full)\`)}</db-drawer></div>\`
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "direction": "down",
    "containerSize": "full",
    "propOverrides": {
      id: 'drawer-direction-down-full'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button command="show-modal" commandfor="drawer-direction-down-full">Open: Down (Full)</db-button><db-drawer \${spreadArgs(args)}>\${unsafeHTML(\`<db-drawer-header slot="header" close-button-text="Close"><h2>Down (Full)</h2></db-drawer-header>Down (Full)\`)}</db-drawer></div>\`
}`,...h.parameters?.docs?.source}}}})))()}export{f as a,_ as c,d as i,p as n,m as o,h as r,s,u as t};