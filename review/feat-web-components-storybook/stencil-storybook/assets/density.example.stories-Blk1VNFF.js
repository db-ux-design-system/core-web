import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBDrawer/Density`,component:`db-drawer`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:o(),onCancel:o()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},c={args:{propOverrides:{id:`drawer-density-functional`}},render:({children:e,...n})=>t`<div data-density="functional"><db-button command="show-modal" commandfor="drawer-density-functional">Open: Functional</db-button><db-drawer ${i(n)}>${r(`Functional`)}</db-drawer></div>`},l={args:{propOverrides:{id:`drawer-density-regular`}},render:({children:e,...n})=>t`<div data-density="regular"><db-button command="show-modal" commandfor="drawer-density-regular">Open: (Default) Regular</db-button><db-drawer ${i(n)}>${r(`(Default) Regular`)}</db-drawer></div>`},u={args:{propOverrides:{id:`drawer-density-expressive`}},render:({children:e,...n})=>t`<div data-density="expressive"><db-button command="show-modal" commandfor="drawer-density-expressive">Open: Expressive</db-button><db-drawer ${i(n)}>${r(`Expressive`)}</db-drawer></div>`},d=[`Functional`,`DefaultRegular`,`Expressive`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'drawer-density-functional'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-density="functional"><db-button command="show-modal" commandfor="drawer-density-functional">Open: Functional</db-button><db-drawer \${spreadArgs(args)}>\${unsafeHTML(\`Functional\`)}</db-drawer></div>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'drawer-density-regular'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-density="regular"><db-button command="show-modal" commandfor="drawer-density-regular">Open: (Default) Regular</db-button><db-drawer \${spreadArgs(args)}>\${unsafeHTML(\`(Default) Regular\`)}</db-drawer></div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'drawer-density-expressive'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-density="expressive"><db-button command="show-modal" commandfor="drawer-density-expressive">Open: Expressive</db-button><db-drawer \${spreadArgs(args)}>\${unsafeHTML(\`Expressive\`)}</db-drawer></div>\`
}`,...u.parameters?.docs?.source}}}})))()}f();export{l as DefaultRegular,u as Expressive,c as Functional,d as __namedExportsOrder,s as default};