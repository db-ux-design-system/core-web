import{i as e}from"./preload-helper-DJNLoL5p.js";import{t}from"./jsx-runtime-B-LfKrac.js";import{X as n,et as r,t as i}from"./src-bgw7CSxb.js";var a,o,s,c,l,u,d,f;e((()=>{i(),a=t(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBDrawer/Direction`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:o()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},c={args:{open:!1,onClose:o(),header:(0,a.jsx)(n,{closeButtonText:`Close`,children:`(Default) To-Left`}),children:`(Default) To-Left`},render:e=>(0,a.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,a.jsx)(r,{...e})]})},l={args:{direction:`to-right`,open:!1,onClose:o(),header:(0,a.jsx)(n,{closeButtonText:`Close`,children:`To-Right`}),children:`To-Right`},render:e=>(0,a.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,a.jsx)(r,{...e})]})},u={args:{direction:`up`,open:!1,onClose:o(),header:(0,a.jsx)(n,{closeButtonText:`Close`,children:`Up`}),children:`Up`},render:e=>(0,a.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,a.jsx)(r,{...e})]})},d={args:{direction:`down`,open:!1,onClose:o(),header:(0,a.jsx)(n,{closeButtonText:`Close`,children:`Down`}),children:`Down`},render:e=>(0,a.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,a.jsx)(r,{...e})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader closeButtonText="Close">
                            (Default) To-Left
                        </DBDrawerHeader>,
    "children": "(Default) To-Left"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "direction": "to-right",
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader closeButtonText="Close">
                            To-Right
                        </DBDrawerHeader>,
    "children": "To-Right"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "direction": "up",
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader closeButtonText="Close">
                            Up
                        </DBDrawerHeader>,
    "children": "Up"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "direction": "down",
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader closeButtonText="Close">
                            Down
                        </DBDrawerHeader>,
    "children": "Down"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f=[`DefaultToLeft`,`ToRight`,`Up`,`Down`]}))();export{c as DefaultToLeft,d as Down,l as ToRight,u as Up,f as __namedExportsOrder,s as default};