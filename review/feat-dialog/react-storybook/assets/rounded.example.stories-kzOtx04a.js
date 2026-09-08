import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./button-CmbTulbT.js";import{n as i,t as a}from"./drawer-header-BA1Z965s.js";import{n as o,t as s}from"./drawer-B9Fcmr-S.js";var c,l,u,d,f,p;function m(){return(m=e((()=>{n(),i(),o(),c=t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBDrawer/Rounded`,component:s,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:l()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},d={args:{id:`drawer-rounded-false`,rounded:!1,open:!1,onClose:l(),header:(0,c.jsx)(a,{closeButtonText:`Close`,children:(0,c.jsx)(`h2`,{children:`(Default) False`})}),children:`(Default) False`},render:e=>(0,c.jsxs)(`div`,{children:[(0,c.jsx)(r,{command:`show-modal`,commandfor:`drawer-rounded-false`,onClick:e=>setOpenIndex(0),children:`Open: (Default) False`}),(0,c.jsx)(s,{...e})]})},f={args:{id:`drawer-rounded-true`,rounded:!0,open:!1,onClose:l(),header:(0,c.jsx)(a,{closeButtonText:`Close`,children:(0,c.jsx)(`h2`,{children:`True`})}),children:`True`},render:e=>(0,c.jsxs)(`div`,{children:[(0,c.jsx)(r,{command:`show-modal`,commandfor:`drawer-rounded-true`,onClick:e=>setOpenIndex(1),children:`Open: True`}),(0,c.jsx)(s,{...e})]})},p=[`DefaultFalse`,`True`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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