import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-LYtL2xrD.js";import{i,n as a,t as o}from"./apply-web-component-args-QiJXFgM3.js";var s=t({CloseandCancel:()=>p,DefaultAsmodal:()=>u,Inside:()=>d,Withfooter:()=>_,Withheaderendslot:()=>g,Withheaderstartslot:()=>h,Withslots:()=>f,Withtextprop:()=>m,__namedExportsOrder:()=>v,default:()=>l}),c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBDrawer/Examples`,component:`db-drawer`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:c(),onCancel:c()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},u={args:{variant:`modal`,propOverrides:{id:`drawer-example-modal`}},render:({children:e,...t})=>n`<div><db-button command="show-modal" commandfor="drawer-example-modal">Open: (Default) As modal</db-button><db-drawer ${a(t)}>${i(`<db-drawer-header slot="header" close-button-text="Close"><h2>(Default) As modal</h2></db-drawer-header>(Default) As modal`)}</db-drawer></div>`},d={args:{variant:`inside`,propOverrides:{id:`drawer-example-inside`},open:!1,onClose:c()},render:({children:e,...t})=>n`<div><db-button>Open: Inside</db-button><db-drawer ${a(t)}>${i(`<db-drawer-header slot="header" close-button-text="Close"><h2>Inside</h2></db-drawer-header>Inside`)}</db-drawer></div>`},f={args:{propOverrides:{id:`drawer-example-slots`}},render:({children:e,...t})=>n`<div><db-button command="show-modal" commandfor="drawer-example-slots">Open: With slots</db-button><db-drawer ${a(t)}>${i(`<db-drawer-header slot="header" close-button-text="Close"><db-badge slot="endSlot">New</db-badge><h2>With slots</h2></db-drawer-header><db-drawer-footer slot="footer"><db-link href="#">Link 1</db-link><db-link href="#">Link 2</db-link></db-drawer-footer>With slots`)}</db-drawer></div>`},p={args:{open:!1,onClose:c(),onCancel:c()},render:({children:e,...t})=>n`<div><div>Open DBDrawer by switching open property</div><db-drawer ${a(t)}>${i(`<db-drawer-header slot="header" close-button-text="Close">Events Test</db-drawer-header>Press ESC or click backdrop to test events`)}</db-drawer></div>`},m={args:{propOverrides:{id:`drawer-areas-text`}},render:({children:e,...t})=>n`<div><db-button command="show-modal" commandfor="drawer-areas-text">Open: With text prop</db-button><db-drawer ${a(t)}>${i(`<db-drawer-header slot="header" text="With text prop" close-button-text="Close"></db-drawer-header>Lorem ipsum dolor sit amet.`)}</db-drawer></div>`},h={args:{propOverrides:{id:`drawer-areas-start`}},render:({children:e,...t})=>n`<div><db-button command="show-modal" commandfor="drawer-areas-start">Open: With header start slot</db-button><db-drawer ${a(t)}>${i(`<db-drawer-header slot="header" close-button-text="Close"><db-icon slot="startSlot" icon="person"></db-icon><h2>With header start slot</h2></db-drawer-header>Lorem ipsum dolor sit amet.`)}</db-drawer></div>`},g={args:{propOverrides:{id:`drawer-areas-end`}},render:({children:e,...t})=>n`<div><db-button command="show-modal" commandfor="drawer-areas-end">Open: With header end slot</db-button><db-drawer ${a(t)}>${i(`<db-drawer-header slot="header" close-button-text="Close"><db-badge slot="endSlot">New</db-badge><h2>With header end slot</h2></db-drawer-header>Lorem ipsum dolor sit amet.`)}</db-drawer></div>`},_={args:{propOverrides:{id:`drawer-areas-footer`}},render:({children:e,...t})=>n`<div><db-button command="show-modal" commandfor="drawer-areas-footer">Open: With footer</db-button><db-drawer ${a(t)}>${i(`<db-drawer-header slot="header" close-button-text="Close"><h2>With footer</h2></db-drawer-header><db-drawer-footer slot="footer"><db-link href="#">Link 1</db-link><db-link href="#">Link 2</db-link></db-drawer-footer>Lorem ipsum dolor sit amet.`)}</db-drawer></div>`},v=[`DefaultAsmodal`,`Inside`,`Withslots`,`CloseandCancel`,`Withtextprop`,`Withheaderstartslot`,`Withheaderendslot`,`Withfooter`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "modal",
    "propOverrides": {
      id: 'drawer-example-modal'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button command="show-modal" commandfor="drawer-example-modal">Open: (Default) As modal</db-button><db-drawer \${spreadArgs(args)}>\${unsafeHTML(\`<db-drawer-header slot="header" close-button-text="Close"><h2>(Default) As modal</h2></db-drawer-header>(Default) As modal\`)}</db-drawer></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "inside",
    "propOverrides": {
      id: 'drawer-example-inside'
    },
    "open": false,
    "onClose": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button>Open: Inside</db-button><db-drawer \${spreadArgs(args)}>\${unsafeHTML(\`<db-drawer-header slot="header" close-button-text="Close"><h2>Inside</h2></db-drawer-header>Inside\`)}</db-drawer></div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'drawer-example-slots'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button command="show-modal" commandfor="drawer-example-slots">Open: With slots</db-button><db-drawer \${spreadArgs(args)}>\${unsafeHTML(\`<db-drawer-header slot="header" close-button-text="Close"><db-badge slot="endSlot">New</db-badge><h2>With slots</h2></db-drawer-header><db-drawer-footer slot="footer"><db-link href="#">Link 1</db-link><db-link href="#">Link 2</db-link></db-drawer-footer>With slots\`)}</db-drawer></div>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "onCancel": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><div>Open DBDrawer by switching open property</div><db-drawer \${spreadArgs(args)}>\${unsafeHTML(\`<db-drawer-header slot="header" close-button-text="Close">Events Test</db-drawer-header>Press ESC or click backdrop to test events\`)}</db-drawer></div>\`
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'drawer-areas-text'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button command="show-modal" commandfor="drawer-areas-text">Open: With text prop</db-button><db-drawer \${spreadArgs(args)}>\${unsafeHTML(\`<db-drawer-header slot="header" text="With text prop" close-button-text="Close"></db-drawer-header>Lorem ipsum dolor sit amet.\`)}</db-drawer></div>\`
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'drawer-areas-start'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button command="show-modal" commandfor="drawer-areas-start">Open: With header start slot</db-button><db-drawer \${spreadArgs(args)}>\${unsafeHTML(\`<db-drawer-header slot="header" close-button-text="Close"><db-icon slot="startSlot" icon="person"></db-icon><h2>With header start slot</h2></db-drawer-header>Lorem ipsum dolor sit amet.\`)}</db-drawer></div>\`
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'drawer-areas-end'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button command="show-modal" commandfor="drawer-areas-end">Open: With header end slot</db-button><db-drawer \${spreadArgs(args)}>\${unsafeHTML(\`<db-drawer-header slot="header" close-button-text="Close"><db-badge slot="endSlot">New</db-badge><h2>With header end slot</h2></db-drawer-header>Lorem ipsum dolor sit amet.\`)}</db-drawer></div>\`
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'drawer-areas-footer'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button command="show-modal" commandfor="drawer-areas-footer">Open: With footer</db-button><db-drawer \${spreadArgs(args)}>\${unsafeHTML(\`<db-drawer-header slot="header" close-button-text="Close"><h2>With footer</h2></db-drawer-header><db-drawer-footer slot="footer"><db-link href="#">Link 1</db-link><db-link href="#">Link 2</db-link></db-drawer-footer>Lorem ipsum dolor sit amet.\`)}</db-drawer></div>\`
}`,..._.parameters?.docs?.source}}}})))()}export{g as a,m as c,_ as i,s as l,u as n,h as o,d as r,f as s,p as t,y as u};