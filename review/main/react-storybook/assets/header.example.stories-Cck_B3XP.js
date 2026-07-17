import{i as e}from"./preload-helper-BsSOtF0W.js";import{t}from"./jsx-runtime-C5VDaNxI.js";import{K as n,X as r,et as i,t as a,wt as o}from"./src-BURtmvc0.js";var s,c,l,u,d,f,p;e((()=>{a(),s=t(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBDrawer/Header`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:c()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},u={args:{open:!1,onClose:c(),header:(0,s.jsx)(r,{text:`With text prop`,closeButtonText:`Close`}),children:`Content`},render:e=>(0,s.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,s.jsx)(i,{...e})]})},d={args:{open:!1,onClose:c(),header:(0,s.jsx)(r,{closeButtonText:`Close`,startSlot:(0,s.jsx)(n,{icon:`account`}),children:`With start slot`}),children:`Content`},render:e=>(0,s.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,s.jsx)(i,{...e})]})},f={args:{open:!1,onClose:c(),header:(0,s.jsx)(r,{closeButtonText:`Close`,endSlot:(0,s.jsx)(o,{children:`New`}),children:`With end slot`}),children:`Content`},render:e=>(0,s.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,s.jsx)(i,{...e})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader text="With text prop" closeButtonText="Close" />,
    "children": "Content"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader closeButtonText="Close" startSlot={<DBIcon icon="account" />}>
                            With start slot
                        </DBDrawerHeader>,
    "children": "Content"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader closeButtonText="Close" endSlot={<DBBadge>New</DBBadge>}>
                            With end slot
                        </DBDrawerHeader>,
    "children": "Content"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...f.parameters?.docs?.source}}},p=[`Withtextprop`,`Withstartslot`,`Withendslot`]}))();export{f as Withendslot,d as Withstartslot,u as Withtextprop,p as __namedExportsOrder,l as default};