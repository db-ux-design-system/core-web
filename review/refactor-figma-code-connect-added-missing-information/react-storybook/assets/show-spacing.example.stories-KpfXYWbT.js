import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,n as r,r as i,t as a}from"./drawer-header-CTAQ_hBI.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{r(),n(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBDrawer/Show Spacing`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:s()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},l={args:{containerSize:`full`,open:!1,showSpacing:!0,onClose:s(),header:(0,o.jsx)(a,{closeButtonText:`Close`,children:`(Default) With Spacing`}),children:`(Default) With Spacing`},render:e=>(0,o.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,o.jsx)(i,{...e})]})},u={args:{containerSize:`full`,showSpacing:!1,open:!1,onClose:s(),header:(0,o.jsx)(a,{closeButtonText:`Close`,children:`Without Spacing`}),children:`Without Spacing`},render:e=>(0,o.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,o.jsx)(i,{...e})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "containerSize": "full",
    "open": false,
    "showSpacing": true,
    "onClose": fn(),
    "header": <DBDrawerHeader closeButtonText="Close">
                            (Default) With Spacing
                        </DBDrawerHeader>,
    "children": "(Default) With Spacing"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "containerSize": "full",
    "showSpacing": false,
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader closeButtonText="Close">
                            Without Spacing
                        </DBDrawerHeader>,
    "children": "Without Spacing"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...u.parameters?.docs?.source}}},d=[`DefaultWithSpacing`,`WithoutSpacing`]})))()}f();export{l as DefaultWithSpacing,u as WithoutSpacing,d as __namedExportsOrder,c as default};