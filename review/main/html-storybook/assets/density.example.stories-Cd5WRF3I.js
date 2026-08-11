import{n as e}from"./iframe-BgoeBBSX.js";import{i as t,n,r,t as i}from"./drawer-header-CYqKAdCm.js";import{n as a}from"./rolldown-runtime-DkW27tQK.js";var o,s,c,l,u,d,f;function p(){return(p=a((()=>{n(),t(),o=e(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBDrawer/Density`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:s()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},l={args:{open:!1,onClose:s(),header:(0,o.jsx)(i,{closeButtonText:`Close`,children:`Functional`}),children:`Functional`},render:e=>(0,o.jsxs)(`div`,{"data-density":`functional`,children:[`Open DBDrawer by switching open property`,(0,o.jsx)(r,{...e})]})},u={args:{open:!1,onClose:s(),header:(0,o.jsx)(i,{closeButtonText:`Close`,children:`(Default) Regular`}),children:`(Default) Regular`},render:e=>(0,o.jsxs)(`div`,{"data-density":`regular`,children:[`Open DBDrawer by switching open property`,(0,o.jsx)(r,{...e})]})},d={args:{open:!1,onClose:s(),header:(0,o.jsx)(i,{closeButtonText:`Close`,children:`Expressive`}),children:`Expressive`},render:e=>(0,o.jsxs)(`div`,{"data-density":`expressive`,children:[`Open DBDrawer by switching open property`,(0,o.jsx)(r,{...e})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader closeButtonText="Close">
                            Functional
                        </DBDrawerHeader>,
    "children": "Functional"
  },
  render: (properties: any) => <div data-density="functional">Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader closeButtonText="Close">
                            (Default) Regular
                        </DBDrawerHeader>,
    "children": "(Default) Regular"
  },
  render: (properties: any) => <div data-density="regular">Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader closeButtonText="Close">
                            Expressive
                        </DBDrawerHeader>,
    "children": "Expressive"
  },
  render: (properties: any) => <div data-density="expressive">Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f=[`Functional`,`DefaultRegular`,`Expressive`]})))()}p();export{u as DefaultRegular,d as Expressive,l as Functional,f as __namedExportsOrder,c as default};