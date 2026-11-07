import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./button-KkPyUB9O.js";import{n as a,t as o}from"./drawer-header-BbCCsN_-.js";import{n as s,t as c}from"./drawer-CReGuFIm.js";var l=t({DefaultWithSpacing:()=>p,WithoutSpacing:()=>m,__namedExportsOrder:()=>h,default:()=>f}),u,d,f,p,m,h;function g(){return(g=e((()=>{r(),a(),s(),u=n(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBDrawer/Show Spacing`,component:c,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:d(),onCancel:d()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},p={args:{containerSize:`full`,propOverrides:{id:`drawer-spacing-with`},showSpacing:!0,header:(0,u.jsx)(o,{closeButtonText:`Close`,children:(0,u.jsx)(`h2`,{children:`(Default) With Spacing`})}),children:`(Default) With Spacing`},render:e=>(0,u.jsxs)(`div`,{children:[(0,u.jsx)(i,{command:`show-modal`,commandfor:`drawer-spacing-with`,children:`Open: (Default) With Spacing`}),(0,u.jsx)(c,{...e})]})},m={args:{containerSize:`full`,propOverrides:{id:`drawer-spacing-without`},showSpacing:!1,header:(0,u.jsx)(o,{closeButtonText:`Close`,children:(0,u.jsx)(`h2`,{children:`Without Spacing`})}),children:`Without Spacing`},render:e=>(0,u.jsxs)(`div`,{children:[(0,u.jsx)(i,{command:`show-modal`,commandfor:`drawer-spacing-without`,children:`Open: Without Spacing`}),(0,u.jsx)(c,{...e})]})},h=[`DefaultWithSpacing`,`WithoutSpacing`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}}})))()}export{l as i,m as n,g as r,p as t};