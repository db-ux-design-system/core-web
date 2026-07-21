import{i as e}from"./preload-helper-BaWVq5H0.js";import{t}from"./jsx-runtime-BAPDP3Bo.js";import{Q as n,W as r,X as i,et as a,t as o,wt as s}from"./src-CVJgj3Qs.js";var c,l,u,d,f,p,m;e((()=>{o(),c=t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBDrawer/Example`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:l()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},d={args:{variant:`modal`,open:!1,onClose:l(),header:(0,c.jsx)(i,{closeButtonText:`Close`,children:`(Default) As modal`}),children:`(Default) As modal`},render:e=>(0,c.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,c.jsx)(a,{...e})]})},f={args:{variant:`inside`,open:!1,onClose:l(),header:(0,c.jsx)(i,{closeButtonText:`Close`,children:`Inside`}),children:`Inside`},render:e=>(0,c.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,c.jsx)(a,{...e})]})},p={args:{open:!1,onClose:l(),header:(0,c.jsx)(i,{closeButtonText:`Close`,endSlot:(0,c.jsx)(s,{children:`New`}),children:`With slots`}),footer:(0,c.jsxs)(n,{children:[(0,c.jsx)(r,{href:`#`,children:`Link 1`}),(0,c.jsx)(r,{href:`#`,children:`Link 2`})]}),children:`With slots`},render:e=>(0,c.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,c.jsx)(a,{...e})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "modal",
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader closeButtonText="Close">
                            (Default) As modal
                        </DBDrawerHeader>,
    "children": "(Default) As modal"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "inside",
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader closeButtonText="Close">
                            Inside
                        </DBDrawerHeader>,
    "children": "Inside"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader closeButtonText="Close" endSlot={<DBBadge>New</DBBadge>}>
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