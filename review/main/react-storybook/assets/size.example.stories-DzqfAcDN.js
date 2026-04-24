import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-DC6t-S6Q.js";import{t as n,y as r}from"./src-BRpYBxIs.js";var i,a,o,s,c,l;e((()=>{n(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBDrawer/Size`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:a()},argTypes:{open:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},rounded:{control:`boolean`},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`left`,`right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},s={args:{open:!1,onClose:a(),children:`(Default) Medium`},render:e=>(0,i.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,i.jsx)(r,{...e})]})},c={args:{width:`full`,open:!1,onClose:a(),children:`Full`},render:e=>(0,i.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,i.jsx)(r,{...e})]})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "children": "(Default) Medium"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "open": false,
    "onClose": fn(),
    "children": "Full"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...c.parameters?.docs?.source}}},l=[`DefaultMedium`,`Full`]}))();export{s as DefaultMedium,c as Full,l as __namedExportsOrder,o as default};