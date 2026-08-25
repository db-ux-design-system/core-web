import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,n as r,r as i,t as a}from"./drawer-header-BPzSVIlM.js";var o,s,c,l,u;function d(){return(d=e((()=>{r(),n(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBDrawer/Events`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:s(),onCancel:s()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},l={args:{open:!1,onClose:s(),onCancel:s(),header:(0,o.jsx)(a,{closeButtonText:`Close`,children:`Events Test`}),children:`Press ESC or click backdrop to test events`},render:e=>(0,o.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,o.jsx)(i,{...e})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "onCancel": fn(),
    "header": <DBDrawerHeader closeButtonText="Close">
                            Events Test
                        </DBDrawerHeader>,
    "children": "Press ESC or click backdrop to test events"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...l.parameters?.docs?.source}}},u=[`CloseandCancel`]})))()}d();export{l as CloseandCancel,u as __namedExportsOrder,c as default};