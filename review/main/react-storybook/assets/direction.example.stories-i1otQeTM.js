import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-BpX3lQ6F.js";import{t as n,y as r}from"./src-FlJ3DuBk.js";var i,a,o,s,c,l,u,d;e((()=>{n(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBDrawer/Direction`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:a()},argTypes:{open:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},rounded:{control:`boolean`},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`left`,`right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},s={args:{open:!1,onClose:a(),children:`(Default) Right`},render:e=>(0,i.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,i.jsx)(r,{...e})]})},c={args:{direction:`left`,open:!1,onClose:a(),children:`Left`},render:e=>(0,i.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,i.jsx)(r,{...e})]})},l={args:{direction:`up`,open:!1,onClose:a(),children:`Up`},render:e=>(0,i.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,i.jsx)(r,{...e})]})},u={args:{direction:`down`,open:!1,onClose:a(),children:`Down`},render:e=>(0,i.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,i.jsx)(r,{...e})]})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "children": "(Default) Right"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "direction": "left",
    "open": false,
    "onClose": fn(),
    "children": "Left"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "direction": "up",
    "open": false,
    "onClose": fn(),
    "children": "Up"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "direction": "down",
    "open": false,
    "onClose": fn(),
    "children": "Down"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...u.parameters?.docs?.source}}},d=[`DefaultRight`,`Left`,`Up`,`Down`]}))();export{s as DefaultRight,u as Down,c as Left,l as Up,d as __namedExportsOrder,o as default};