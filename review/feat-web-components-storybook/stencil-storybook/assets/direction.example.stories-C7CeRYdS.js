import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBDrawer/Direction`,component:`db-drawer`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:o(),onCancel:o()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},c={args:{propOverrides:{id:`drawer-direction-to-left`}},render:({children:e,...n})=>t`<div><db-button command="show-modal" commandfor="drawer-direction-to-left">Open: (Default) To-Left</db-button><db-drawer ${i(n)}>${r(`(Default) To-Left`)}</db-drawer></div>`},l={args:{direction:`to-right`,propOverrides:{id:`drawer-direction-to-right`}},render:({children:e,...n})=>t`<div><db-button command="show-modal" commandfor="drawer-direction-to-right">Open: To-Right</db-button><db-drawer ${i(n)}>${r(`To-Right`)}</db-drawer></div>`},u={args:{direction:`up`,propOverrides:{id:`drawer-direction-up`}},render:({children:e,...n})=>t`<div><db-button command="show-modal" commandfor="drawer-direction-up">Open: Up</db-button><db-drawer ${i(n)}>${r(`Up`)}</db-drawer></div>`},d={args:{direction:`down`,propOverrides:{id:`drawer-direction-down`}},render:({children:e,...n})=>t`<div><db-button command="show-modal" commandfor="drawer-direction-down">Open: Down</db-button><db-drawer ${i(n)}>${r(`Down`)}</db-drawer></div>`},f={args:{direction:`up`,containerSize:`full`,propOverrides:{id:`drawer-direction-up-full`}},render:({children:e,...n})=>t`<div><db-button command="show-modal" commandfor="drawer-direction-up-full">Open: Up (Full)</db-button><db-drawer ${i(n)}>${r(`Up (Full)`)}</db-drawer></div>`},p={args:{direction:`down`,containerSize:`full`,propOverrides:{id:`drawer-direction-down-full`}},render:({children:e,...n})=>t`<div><db-button command="show-modal" commandfor="drawer-direction-down-full">Open: Down (Full)</db-button><db-drawer ${i(n)}>${r(`Down (Full)`)}</db-drawer></div>`},m=[`DefaultToLeft`,`ToRight`,`Up`,`Down`,`UpFull`,`DownFull`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'drawer-direction-to-left'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button command="show-modal" commandfor="drawer-direction-to-left">Open: (Default) To-Left</db-button><db-drawer \${spreadArgs(args)}>\${unsafeHTML(\`(Default) To-Left\`)}</db-drawer></div>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "direction": "to-right",
    "propOverrides": {
      id: 'drawer-direction-to-right'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button command="show-modal" commandfor="drawer-direction-to-right">Open: To-Right</db-button><db-drawer \${spreadArgs(args)}>\${unsafeHTML(\`To-Right\`)}</db-drawer></div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "direction": "up",
    "propOverrides": {
      id: 'drawer-direction-up'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button command="show-modal" commandfor="drawer-direction-up">Open: Up</db-button><db-drawer \${spreadArgs(args)}>\${unsafeHTML(\`Up\`)}</db-drawer></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "direction": "down",
    "propOverrides": {
      id: 'drawer-direction-down'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button command="show-modal" commandfor="drawer-direction-down">Open: Down</db-button><db-drawer \${spreadArgs(args)}>\${unsafeHTML(\`Down\`)}</db-drawer></div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
  }: any) => html\`<div><db-button command="show-modal" commandfor="drawer-direction-up-full">Open: Up (Full)</db-button><db-drawer \${spreadArgs(args)}>\${unsafeHTML(\`Up (Full)\`)}</db-drawer></div>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
  }: any) => html\`<div><db-button command="show-modal" commandfor="drawer-direction-down-full">Open: Down (Full)</db-button><db-drawer \${spreadArgs(args)}>\${unsafeHTML(\`Down (Full)\`)}</db-drawer></div>\`
}`,...p.parameters?.docs?.source}}}})))()}h();export{c as DefaultToLeft,d as Down,p as DownFull,l as ToRight,u as Up,f as UpFull,m as __namedExportsOrder,s as default};