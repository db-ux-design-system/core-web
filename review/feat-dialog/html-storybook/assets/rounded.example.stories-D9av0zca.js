import{n as e}from"./iframe-DqiEgONW.js";import{n as t,t as n}from"./button-rE7hsgve.js";import{n as r,t as i}from"./drawer-header-B7o26fdY.js";import{n as a,t as o}from"./drawer-BO490oN8.js";import{n as s}from"./rolldown-runtime-DkW27tQK.js";var c,l,u,d,f,p;function m(){return(m=s((()=>{t(),r(),a(),c=e(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBDrawer/Rounded`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:l()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},d={args:{id:`drawer-rounded-false`,rounded:!1,open:!1,onClose:l(),header:(0,c.jsx)(i,{closeButtonText:`Close`,children:(0,c.jsx)(`h2`,{children:`(Default) False`})}),children:`(Default) False`},render:e=>(0,c.jsxs)(`div`,{children:[(0,c.jsx)(n,{command:`show-modal`,commandfor:`drawer-rounded-false`,onClick:e=>setOpenIndex(0),children:`Open: (Default) False`}),(0,c.jsx)(o,{...e})]})},f={args:{id:`drawer-rounded-true`,rounded:!0,open:!1,onClose:l(),header:(0,c.jsx)(i,{closeButtonText:`Close`,children:(0,c.jsx)(`h2`,{children:`True`})}),children:`True`},render:e=>(0,c.jsxs)(`div`,{children:[(0,c.jsx)(n,{command:`show-modal`,commandfor:`drawer-rounded-true`,onClick:e=>setOpenIndex(1),children:`Open: True`}),(0,c.jsx)(o,{...e})]})},p=[`DefaultFalse`,`True`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "drawer-rounded-false",
    "rounded": false,
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader closeButtonText="Close">
                            <h2>(Default) False</h2>
                        </DBDrawerHeader>,
    "children": "(Default) False"
  },
  render: (properties: any) => <div><DBButton command="show-modal" commandfor="drawer-rounded-false" onClick={event => setOpenIndex(0)}>
                    Open: (Default) False
                </DBButton><DBDrawer {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "drawer-rounded-true",
    "rounded": true,
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader closeButtonText="Close">
                            <h2>True</h2>
                        </DBDrawerHeader>,
    "children": "True"
  },
  render: (properties: any) => <div><DBButton command="show-modal" commandfor="drawer-rounded-true" onClick={event => setOpenIndex(1)}>
                    Open: True
                </DBButton><DBDrawer {...properties} /></div>
}`,...f.parameters?.docs?.source}}}})))()}m();export{d as DefaultFalse,f as True,p as __namedExportsOrder,u as default};