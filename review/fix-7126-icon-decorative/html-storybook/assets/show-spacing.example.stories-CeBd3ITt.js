import{n as e}from"./iframe-DVHDYAyP.js";import{n as t,t as n}from"./button-BMKJAR6z.js";import{n as r,t as i}from"./drawer-header-C27H_Knd.js";import{n as a,t as o}from"./drawer-CudO4SyJ.js";import{n as s}from"./rolldown-runtime-DkW27tQK.js";var c,l,u,d,f,p;function m(){return(m=s((()=>{t(),r(),a(),c=e(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBDrawer/Show Spacing`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:l(),onCancel:l()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},d={args:{containerSize:`full`,propOverrides:{id:`drawer-spacing-with`},showSpacing:!0,header:(0,c.jsx)(i,{closeButtonText:`Close`,children:(0,c.jsx)(`h2`,{children:`(Default) With Spacing`})}),children:`(Default) With Spacing`},render:e=>(0,c.jsxs)(`div`,{children:[(0,c.jsx)(n,{command:`show-modal`,commandfor:`drawer-spacing-with`,children:`Open: (Default) With Spacing`}),(0,c.jsx)(o,{...e})]})},f={args:{containerSize:`full`,propOverrides:{id:`drawer-spacing-without`},showSpacing:!1,header:(0,c.jsx)(i,{closeButtonText:`Close`,children:(0,c.jsx)(`h2`,{children:`Without Spacing`})}),children:`Without Spacing`},render:e=>(0,c.jsxs)(`div`,{children:[(0,c.jsx)(n,{command:`show-modal`,commandfor:`drawer-spacing-without`,children:`Open: Without Spacing`}),(0,c.jsx)(o,{...e})]})},p=[`DefaultWithSpacing`,`WithoutSpacing`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "containerSize": "full",
    "propOverrides": {
      id: 'drawer-spacing-with'
    },
    "showSpacing": true,
    "header": <DBDrawerHeader closeButtonText="Close">
                            <h2>(Default) With Spacing</h2>
                        </DBDrawerHeader>,
    "children": "(Default) With Spacing"
  },
  render: (properties: any) => <div><DBButton command="show-modal" commandfor="drawer-spacing-with">
                    Open: (Default) With Spacing
                </DBButton><DBDrawer {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "containerSize": "full",
    "propOverrides": {
      id: 'drawer-spacing-without'
    },
    "showSpacing": false,
    "header": <DBDrawerHeader closeButtonText="Close">
                            <h2>Without Spacing</h2>
                        </DBDrawerHeader>,
    "children": "Without Spacing"
  },
  render: (properties: any) => <div><DBButton command="show-modal" commandfor="drawer-spacing-without">
                    Open: Without Spacing
                </DBButton><DBDrawer {...properties} /></div>
}`,...f.parameters?.docs?.source}}}})))()}m();export{d as DefaultWithSpacing,f as WithoutSpacing,p as __namedExportsOrder,u as default};