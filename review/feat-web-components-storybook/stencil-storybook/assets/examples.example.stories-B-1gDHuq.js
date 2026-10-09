import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBDrawer/Examples`,component:`db-drawer`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:o(),onCancel:o()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},c={args:{variant:`modal`,propOverrides:{id:`drawer-example-modal`}},render:({children:e,...n})=>t`<div><db-button command="show-modal" commandfor="drawer-example-modal">Open: (Default) As modal</db-button><db-drawer ${i(n)}>${r(`(Default) As modal`)}</db-drawer></div>`},l={args:{variant:`inside`,propOverrides:{id:`drawer-example-inside`},open:!1,onClose:o()},render:({children:e,...n})=>t`<div><db-button>Open: Inside</db-button><db-drawer ${i(n)}>${r(`Inside`)}</db-drawer></div>`},u={args:{propOverrides:{id:`drawer-example-slots`}},render:({children:e,...n})=>t`<div><db-button command="show-modal" commandfor="drawer-example-slots">Open: With slots</db-button><db-drawer ${i(n)}>${r(`With slots`)}</db-drawer></div>`},d={args:{open:!1,onClose:o(),onCancel:o()},render:({children:e,...n})=>t`<div>Open DBDrawer by switching open property<db-drawer ${i(n)}>${r(`Press ESC or click backdrop to test events`)}</db-drawer></div>`},f={args:{propOverrides:{id:`drawer-areas-text`}},render:({children:e,...n})=>t`<div><db-button command="show-modal" commandfor="drawer-areas-text">Open: With text prop</db-button><db-drawer ${i(n)}>${r(`Lorem ipsum dolor sit amet.`)}</db-drawer></div>`},p={args:{propOverrides:{id:`drawer-areas-start`}},render:({children:e,...n})=>t`<div><db-button command="show-modal" commandfor="drawer-areas-start">Open: With header start slot</db-button><db-drawer ${i(n)}>${r(`Lorem ipsum dolor sit amet.`)}</db-drawer></div>`},m={args:{propOverrides:{id:`drawer-areas-end`}},render:({children:e,...n})=>t`<div><db-button command="show-modal" commandfor="drawer-areas-end">Open: With header end slot</db-button><db-drawer ${i(n)}>${r(`Lorem ipsum dolor sit amet.`)}</db-drawer></div>`},h={args:{propOverrides:{id:`drawer-areas-footer`}},render:({children:e,...n})=>t`<div><db-button command="show-modal" commandfor="drawer-areas-footer">Open: With footer</db-button><db-drawer ${i(n)}>${r(`Lorem ipsum dolor sit amet.`)}</db-drawer></div>`},g=[`DefaultAsmodal`,`Inside`,`Withslots`,`CloseandCancel`,`Withtextprop`,`Withheaderstartslot`,`Withheaderendslot`,`Withfooter`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "modal",
    "propOverrides": {
      id: 'drawer-example-modal'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button command="show-modal" commandfor="drawer-example-modal">Open: (Default) As modal</db-button><db-drawer \${spreadArgs(args)}>\${unsafeHTML(\`(Default) As modal\`)}</db-drawer></div>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
  }: any) => html\`<div><db-button>Open: Inside</db-button><db-drawer \${spreadArgs(args)}>\${unsafeHTML(\`Inside\`)}</db-drawer></div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'drawer-example-slots'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button command="show-modal" commandfor="drawer-example-slots">Open: With slots</db-button><db-drawer \${spreadArgs(args)}>\${unsafeHTML(\`With slots\`)}</db-drawer></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "onCancel": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div>Open DBDrawer by switching open property<db-drawer \${spreadArgs(args)}>\${unsafeHTML(\`Press ESC or click backdrop to test events\`)}</db-drawer></div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'drawer-areas-text'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button command="show-modal" commandfor="drawer-areas-text">Open: With text prop</db-button><db-drawer \${spreadArgs(args)}>\${unsafeHTML(\`Lorem ipsum dolor sit amet.\`)}</db-drawer></div>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'drawer-areas-start'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button command="show-modal" commandfor="drawer-areas-start">Open: With header start slot</db-button><db-drawer \${spreadArgs(args)}>\${unsafeHTML(\`Lorem ipsum dolor sit amet.\`)}</db-drawer></div>\`
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'drawer-areas-end'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button command="show-modal" commandfor="drawer-areas-end">Open: With header end slot</db-button><db-drawer \${spreadArgs(args)}>\${unsafeHTML(\`Lorem ipsum dolor sit amet.\`)}</db-drawer></div>\`
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'drawer-areas-footer'
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-button command="show-modal" commandfor="drawer-areas-footer">Open: With footer</db-button><db-drawer \${spreadArgs(args)}>\${unsafeHTML(\`Lorem ipsum dolor sit amet.\`)}</db-drawer></div>\`
}`,...h.parameters?.docs?.source}}}})))()}_();export{d as CloseandCancel,c as DefaultAsmodal,l as Inside,h as Withfooter,m as Withheaderendslot,p as Withheaderstartslot,u as Withslots,f as Withtextprop,g as __namedExportsOrder,s as default};