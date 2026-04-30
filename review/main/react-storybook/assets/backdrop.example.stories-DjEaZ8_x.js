import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-BpX3lQ6F.js";import{t as n,y as r}from"./src-FlJ3DuBk.js";var i,a,o,s,c,l,u,d;e((()=>{n(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBDrawer/Backdrop`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:a()},argTypes:{open:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},rounded:{control:`boolean`},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`left`,`right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},s={args:{backdrop:`strong`,open:!1,onClose:a(),children:`(Default) Strong`},render:e=>(0,i.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,i.jsx)(r,{...e})]})},c={args:{backdrop:`weak`,open:!1,onClose:a(),children:`Weak`},render:e=>(0,i.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,i.jsx)(r,{...e})]})},l={args:{backdrop:`invisible`,open:!1,onClose:a(),children:`Invisible`},render:e=>(0,i.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,i.jsx)(r,{...e})]})},u={args:{backdrop:`none`,open:!1,onClose:a(),children:`No Backdrop`},render:e=>(0,i.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,i.jsx)(r,{...e})]})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "backdrop": "strong",
    "open": false,
    "onClose": fn(),
    "children": "(Default) Strong"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "backdrop": "weak",
    "open": false,
    "onClose": fn(),
    "children": "Weak"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "backdrop": "invisible",
    "open": false,
    "onClose": fn(),
    "children": "Invisible"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "backdrop": "none",
    "open": false,
    "onClose": fn(),
    "children": "No Backdrop"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...u.parameters?.docs?.source}}},d=[`DefaultStrong`,`Weak`,`Invisible`,`NoBackdrop`]}))();export{s as DefaultStrong,l as Invisible,u as NoBackdrop,c as Weak,d as __namedExportsOrder,o as default};