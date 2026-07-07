import{i as e}from"./preload-helper-DKtw6Osp.js";import{t}from"./jsx-runtime-CFNnYeT5.js";import{bt as n,t as r,vt as i}from"./src-DSVT3FO0.js";var a,o,s,c,l,u,d;e((()=>{r(),a=t(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBDrawer/Density`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:o()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`left`,`right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},c={args:{open:!1,onClose:o(),header:(0,a.jsx)(n,{children:`Functional`}),children:`Functional`},render:e=>(0,a.jsxs)(`div`,{"data-density":`functional`,children:[`Open DBDrawer by switching open property`,(0,a.jsx)(i,{...e})]})},l={args:{open:!1,onClose:o(),header:(0,a.jsx)(n,{children:`(Default) Regular`}),children:`(Default) Regular`},render:e=>(0,a.jsxs)(`div`,{"data-density":`regular`,children:[`Open DBDrawer by switching open property`,(0,a.jsx)(i,{...e})]})},u={args:{open:!1,onClose:o(),header:(0,a.jsx)(n,{children:`Expressive`}),children:`Expressive`},render:e=>(0,a.jsxs)(`div`,{"data-density":`expressive`,children:[`Open DBDrawer by switching open property`,(0,a.jsx)(i,{...e})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader>Functional</DBDrawerHeader>,
    "children": "Functional"
  },
  render: (properties: any) => <div data-density="functional">Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader>(Default) Regular</DBDrawerHeader>,
    "children": "(Default) Regular"
  },
  render: (properties: any) => <div data-density="regular">Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader>Expressive</DBDrawerHeader>,
    "children": "Expressive"
  },
  render: (properties: any) => <div data-density="expressive">Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...u.parameters?.docs?.source}}},d=[`Functional`,`DefaultRegular`,`Expressive`]}))();export{l as DefaultRegular,u as Expressive,c as Functional,d as __namedExportsOrder,s as default};