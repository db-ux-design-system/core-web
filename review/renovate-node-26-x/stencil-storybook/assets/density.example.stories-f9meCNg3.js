import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-DcKsLlVE.js";import{i,n as a,t as o}from"./apply-web-component-args-CWgj8AIG.js";var s=t({DefaultRegular:()=>d,Expressive:()=>f,Functional:()=>u,__namedExportsOrder:()=>p,default:()=>l}),c,l,u,d,f,p;function m(){return(m=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBDrawer/Density`,component:`db-drawer`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:c(),onCancel:c()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},u={args:{propOverrides:{id:`drawer-density-functional`}},render:({children:e,...t})=>n`<div data-density="functional"><db-button command="show-modal" commandfor="drawer-density-functional">Open: Functional</db-button><db-drawer ${a(t)}>${i(`<db-drawer-header slot="header" close-button-text="Close"><h2>Functional</h2></db-drawer-header>Functional`)}</db-drawer></div>`},d={args:{propOverrides:{id:`drawer-density-regular`}},render:({children:e,...t})=>n`<div data-density="regular"><db-button command="show-modal" commandfor="drawer-density-regular">Open: (Default) Regular</db-button><db-drawer ${a(t)}>${i(`<db-drawer-header slot="header" close-button-text="Close"><h2>(Default) Regular</h2></db-drawer-header>(Default) Regular`)}</db-drawer></div>`},f={args:{propOverrides:{id:`drawer-density-expressive`}},render:({children:e,...t})=>n`<div data-density="expressive"><db-button command="show-modal" commandfor="drawer-density-expressive">Open: Expressive</db-button><db-drawer ${a(t)}>${i(`<db-drawer-header slot="header" close-button-text="Close"><h2>Expressive</h2></db-drawer-header>Expressive`)}</db-drawer></div>`},p=[`Functional`,`DefaultRegular`,`Expressive`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'drawer-density-functional'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-density="functional"><db-button command="show-modal" commandfor="drawer-density-functional">Open: Functional</db-button><db-drawer \${spreadArgs(args)}>\${unsafeHTML(\`<db-drawer-header slot="header" close-button-text="Close"><h2>Functional</h2></db-drawer-header>Functional\`)}</db-drawer></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'drawer-density-regular'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-density="regular"><db-button command="show-modal" commandfor="drawer-density-regular">Open: (Default) Regular</db-button><db-drawer \${spreadArgs(args)}>\${unsafeHTML(\`<db-drawer-header slot="header" close-button-text="Close"><h2>(Default) Regular</h2></db-drawer-header>(Default) Regular\`)}</db-drawer></div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'drawer-density-expressive'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-density="expressive"><db-button command="show-modal" commandfor="drawer-density-expressive">Open: Expressive</db-button><db-drawer \${spreadArgs(args)}>\${unsafeHTML(\`<db-drawer-header slot="header" close-button-text="Close"><h2>Expressive</h2></db-drawer-header>Expressive\`)}</db-drawer></div>\`
}`,...f.parameters?.docs?.source}}}})))()}export{m as a,s as i,f as n,u as r,d as t};