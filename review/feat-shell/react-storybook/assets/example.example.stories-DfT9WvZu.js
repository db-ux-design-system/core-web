import{i as e}from"./preload-helper-DKtw6Osp.js";import{t}from"./jsx-runtime-CFNnYeT5.js";import{Ht as n,K as r,St as i,bt as a,t as o,vt as s}from"./src-DSVT3FO0.js";var c,l,u,d,f,p,m;e((()=>{o(),c=t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBDrawer/Example`,component:s,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:l()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`left`,`right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},d={args:{variant:`modal`,open:!1,onClose:l(),header:(0,c.jsx)(a,{children:`(Default) As modal`}),children:`(Default) As modal`},render:e=>(0,c.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,c.jsx)(s,{...e})]})},f={args:{variant:`inside`,open:!1,onClose:l(),header:(0,c.jsx)(a,{children:`Inside`}),children:`Inside`},render:e=>(0,c.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,c.jsx)(s,{...e})]})},p={args:{open:!1,onClose:l(),header:(0,c.jsx)(a,{endSlot:(0,c.jsx)(n,{children:`New`}),children:`With slots`}),footer:(0,c.jsxs)(i,{children:[(0,c.jsx)(r,{href:`#`,children:`Link 1`}),(0,c.jsx)(r,{href:`#`,children:`Link 2`})]}),children:`With slots`},render:e=>(0,c.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,c.jsx)(s,{...e})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "modal",
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader>(Default) As modal</DBDrawerHeader>,
    "children": "(Default) As modal"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "inside",
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader>Inside</DBDrawerHeader>,
    "children": "Inside"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader endSlot={<DBBadge>New</DBBadge>}>
                            With slots
                        </DBDrawerHeader>,
    "footer": <DBDrawerFooter>
                            <DBLink href="#">Link 1</DBLink>
                            <DBLink href="#">Link 2</DBLink>
                        </DBDrawerFooter>,
    "children": "With slots"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...p.parameters?.docs?.source}}},m=[`DefaultAsmodal`,`Inside`,`Withslots`]}))();export{d as DefaultAsmodal,f as Inside,p as Withslots,m as __namedExportsOrder,u as default};