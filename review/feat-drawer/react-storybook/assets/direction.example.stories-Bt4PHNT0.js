import{i as e}from"./preload-helper-BNLvenJ4.js";import{t}from"./jsx-runtime-B_aoiWWo.js";import{X as n,et as r,t as i}from"./src-l1jAcLei.js";var a,o,s,c,l,u,d,f;e((()=>{i(),a=t(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBDrawer/Direction`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:o()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`left`,`right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},c={args:{open:!1,onClose:o(),header:(0,a.jsx)(n,{children:`(Default) Left`}),children:`(Default) Left`},render:e=>(0,a.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,a.jsx)(r,{...e})]})},l={args:{direction:`right`,open:!1,onClose:o(),header:(0,a.jsx)(n,{children:`Right`}),children:`Right`},render:e=>(0,a.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,a.jsx)(r,{...e})]})},u={args:{direction:`up`,open:!1,onClose:o(),header:(0,a.jsx)(n,{children:`Up`}),children:`Up`},render:e=>(0,a.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,a.jsx)(r,{...e})]})},d={args:{direction:`down`,open:!1,onClose:o(),header:(0,a.jsx)(n,{children:`Down`}),children:`Down`},render:e=>(0,a.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,a.jsx)(r,{...e})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader>(Default) Left</DBDrawerHeader>,
    "children": "(Default) Left"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "direction": "right",
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader>Right</DBDrawerHeader>,
    "children": "Right"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "direction": "up",
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader>Up</DBDrawerHeader>,
    "children": "Up"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "direction": "down",
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader>Down</DBDrawerHeader>,
    "children": "Down"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f=[`DefaultLeft`,`Right`,`Up`,`Down`]}))();export{c as DefaultLeft,d as Down,l as Right,u as Up,f as __namedExportsOrder,s as default};