import{i as e}from"./preload-helper-ejOWDisV.js";import{t}from"./jsx-runtime-D9-JR_cC.js";import{X as n,et as r,t as i}from"./src-DAmlqWn6.js";var a,o,s,c,l,u,d,f;e((()=>{i(),a=t(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBDrawer/Backdrop`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:o()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},c={args:{backdrop:`strong`,open:!1,onClose:o(),header:(0,a.jsx)(n,{closeButtonText:`Close`,children:`(Default) Strong`}),children:`(Default) Strong`},render:e=>(0,a.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,a.jsx)(r,{...e})]})},l={args:{backdrop:`weak`,open:!1,onClose:o(),header:(0,a.jsx)(n,{closeButtonText:`Close`,children:`Weak`}),children:`Weak`},render:e=>(0,a.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,a.jsx)(r,{...e})]})},u={args:{backdrop:`invisible`,open:!1,onClose:o(),header:(0,a.jsx)(n,{closeButtonText:`Close`,children:`Invisible`}),children:`Invisible`},render:e=>(0,a.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,a.jsx)(r,{...e})]})},d={args:{backdrop:`none`,open:!1,onClose:o(),header:(0,a.jsx)(n,{closeButtonText:`Close`,children:`No Backdrop`}),children:`No Backdrop`},render:e=>(0,a.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,a.jsx)(r,{...e})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "backdrop": "strong",
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader closeButtonText="Close">
                            (Default) Strong
                        </DBDrawerHeader>,
    "children": "(Default) Strong"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "backdrop": "weak",
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader closeButtonText="Close">
                            Weak
                        </DBDrawerHeader>,
    "children": "Weak"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "backdrop": "invisible",
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader closeButtonText="Close">
                            Invisible
                        </DBDrawerHeader>,
    "children": "Invisible"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "backdrop": "none",
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader closeButtonText="Close">
                            No Backdrop
                        </DBDrawerHeader>,
    "children": "No Backdrop"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f=[`DefaultStrong`,`Weak`,`Invisible`,`NoBackdrop`]}))();export{c as DefaultStrong,u as Invisible,d as NoBackdrop,l as Weak,f as __namedExportsOrder,s as default};