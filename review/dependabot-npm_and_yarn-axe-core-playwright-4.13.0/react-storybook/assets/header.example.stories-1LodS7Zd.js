import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./badge-tg2RiaCi.js";import{i,n as a,r as o,t as s}from"./drawer-header-C8ka5CRN.js";import{n as c,t as l}from"./icon-CQGM7Znq.js";var u,d,f,p,m,h,g;function _(){return(_=e((()=>{n(),a(),c(),i(),u=t(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBDrawer/Header`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:d()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},p={args:{open:!1,onClose:d(),header:(0,u.jsx)(s,{text:`With text prop`,closeButtonText:`Close`}),children:`Content`},render:e=>(0,u.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,u.jsx)(o,{...e})]})},m={args:{open:!1,onClose:d(),header:(0,u.jsx)(s,{closeButtonText:`Close`,startSlot:(0,u.jsx)(l,{icon:`account`}),children:`With start slot`}),children:`Content`},render:e=>(0,u.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,u.jsx)(o,{...e})]})},h={args:{open:!1,onClose:d(),header:(0,u.jsx)(s,{closeButtonText:`Close`,endSlot:(0,u.jsx)(r,{children:`New`}),children:`With end slot`}),children:`Content`},render:e=>(0,u.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,u.jsx)(o,{...e})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader text="With text prop" closeButtonText="Close" />,
    "children": "Content"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader closeButtonText="Close" startSlot={<DBIcon icon="account" />}>
                            With start slot
                        </DBDrawerHeader>,
    "children": "Content"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader closeButtonText="Close" endSlot={<DBBadge>New</DBBadge>}>
                            With end slot
                        </DBDrawerHeader>,
    "children": "Content"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...h.parameters?.docs?.source}}},g=[`Withtextprop`,`Withstartslot`,`Withendslot`]})))()}_();export{h as Withendslot,m as Withstartslot,p as Withtextprop,g as __namedExportsOrder,f as default};