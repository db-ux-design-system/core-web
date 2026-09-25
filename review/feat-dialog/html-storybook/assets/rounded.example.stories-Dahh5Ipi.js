import{n as e}from"./iframe-Cw2NOfp5.js";import{n as t,t as n}from"./button-aKlNM3Sj.js";import{n as r,t as i}from"./drawer-header-DIdLcgpN.js";import{n as a,t as o}from"./drawer-nHC0Czoo.js";import{n as s}from"./rolldown-runtime-DkW27tQK.js";var c,l,u,d,f,p;function m(){return(m=s((()=>{t(),r(),a(),c=e(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBDrawer/Rounded`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:l(),onCancel:l()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},d={args:{propOverrides:{id:`drawer-rounded-false`},rounded:!1,header:(0,c.jsx)(i,{closeButtonText:`Close`,children:(0,c.jsx)(`h2`,{children:`(Default) False`})}),children:`(Default) False`},render:e=>(0,c.jsxs)(`div`,{children:[(0,c.jsx)(n,{command:`show-modal`,commandfor:`drawer-rounded-false`,children:`Open: (Default) False`}),(0,c.jsx)(o,{...e})]})},f={args:{propOverrides:{id:`drawer-rounded-true`},rounded:!0,header:(0,c.jsx)(i,{closeButtonText:`Close`,children:(0,c.jsx)(`h2`,{children:`True`})}),children:`True`},render:e=>(0,c.jsxs)(`div`,{children:[(0,c.jsx)(n,{command:`show-modal`,commandfor:`drawer-rounded-true`,children:`Open: True`}),(0,c.jsx)(o,{...e})]})},p=[`DefaultFalse`,`True`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'drawer-rounded-false'
    },
    "rounded": false,
    "header": <DBDrawerHeader closeButtonText="Close">
                            <h2>(Default) False</h2>
                        </DBDrawerHeader>,
    "children": "(Default) False"
  },
  render: (properties: any) => <div><DBButton command="show-modal" commandfor="drawer-rounded-false">
                    Open: (Default) False
                </DBButton><DBDrawer {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'drawer-rounded-true'
    },
    "rounded": true,
    "header": <DBDrawerHeader closeButtonText="Close">
                            <h2>True</h2>
                        </DBDrawerHeader>,
    "children": "True"
  },
  render: (properties: any) => <div><DBButton command="show-modal" commandfor="drawer-rounded-true">
                    Open: True
                </DBButton><DBDrawer {...properties} /></div>
}`,...f.parameters?.docs?.source}}}})))()}m();export{d as DefaultFalse,f as True,p as __namedExportsOrder,u as default};