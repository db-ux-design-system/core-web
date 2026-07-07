import{i as e}from"./preload-helper-DtImKteI.js";import{t}from"./iframe-gRBfVmX9.js";import{bt as n,t as r,vt as i}from"./src-1VNY2xT3.js";var a,o,s,c,l,u,d,f;e((()=>{r(),a=t(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBDrawer/Backdrop`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:o()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`left`,`right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},c={args:{backdrop:`strong`,open:!1,onClose:o(),header:(0,a.jsx)(n,{children:`(Default) Strong`}),children:`(Default) Strong`},render:e=>(0,a.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,a.jsx)(i,{...e})]})},l={args:{backdrop:`weak`,open:!1,onClose:o(),header:(0,a.jsx)(n,{children:`Weak`}),children:`Weak`},render:e=>(0,a.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,a.jsx)(i,{...e})]})},u={args:{backdrop:`invisible`,open:!1,onClose:o(),header:(0,a.jsx)(n,{children:`Invisible`}),children:`Invisible`},render:e=>(0,a.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,a.jsx)(i,{...e})]})},d={args:{backdrop:`none`,open:!1,onClose:o(),header:(0,a.jsx)(n,{children:`No Backdrop`}),children:`No Backdrop`},render:e=>(0,a.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,a.jsx)(i,{...e})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "backdrop": "strong",
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader>(Default) Strong</DBDrawerHeader>,
    "children": "(Default) Strong"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "backdrop": "weak",
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader>Weak</DBDrawerHeader>,
    "children": "Weak"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "backdrop": "invisible",
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader>Invisible</DBDrawerHeader>,
    "children": "Invisible"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "backdrop": "none",
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader>No Backdrop</DBDrawerHeader>,
    "children": "No Backdrop"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f=[`DefaultStrong`,`Weak`,`Invisible`,`NoBackdrop`]}))();export{c as DefaultStrong,u as Invisible,d as NoBackdrop,l as Weak,f as __namedExportsOrder,s as default};