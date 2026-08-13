import{n as e}from"./iframe-DjiuEpJP.js";import{n as t,t as n}from"./badge-B8v3xjGD.js";import{i as r,n as i,r as a,t as o}from"./drawer-header-ogtNWtMS.js";import{n as s,t as c}from"./drawer-footer-BogZw3up.js";import{n as l,t as u}from"./link-BrMux5cz.js";import{n as d}from"./rolldown-runtime-DkW27tQK.js";var f,p,m,h,g,_,v;function y(){return(y=d((()=>{t(),s(),i(),l(),r(),f=e(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/DBDrawer/Example`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:p()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},h={args:{variant:`modal`,open:!1,onClose:p(),header:(0,f.jsx)(o,{closeButtonText:`Close`,children:`(Default) As modal`}),children:`(Default) As modal`},render:e=>(0,f.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,f.jsx)(a,{...e})]})},g={args:{variant:`inside`,open:!1,onClose:p(),header:(0,f.jsx)(o,{closeButtonText:`Close`,children:`Inside`}),children:`Inside`},render:e=>(0,f.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,f.jsx)(a,{...e})]})},_={args:{open:!1,onClose:p(),header:(0,f.jsx)(o,{closeButtonText:`Close`,endSlot:(0,f.jsx)(n,{children:`New`}),children:`With slots`}),footer:(0,f.jsxs)(c,{children:[(0,f.jsx)(u,{href:`#`,children:`Link 1`}),(0,f.jsx)(u,{href:`#`,children:`Link 2`})]}),children:`With slots`},render:e=>(0,f.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,f.jsx)(a,{...e})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`DefaultAsmodal`,`Inside`,`Withslots`]})))()}y();export{h as DefaultAsmodal,g as Inside,_ as Withslots,v as __namedExportsOrder,m as default};