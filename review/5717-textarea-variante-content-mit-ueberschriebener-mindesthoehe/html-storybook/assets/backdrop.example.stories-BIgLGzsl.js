import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./button-HiccZljf.js";import{n as a,t as o}from"./drawer-header-D7zEO4ZG.js";import{n as s,t as c}from"./drawer-CRaPBI2t.js";var l=t({DefaultStrong:()=>p,Invisible:()=>h,NoBackdrop:()=>g,Weak:()=>m,__namedExportsOrder:()=>_,default:()=>f}),u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{r(),a(),s(),u=n(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBDrawer/Backdrop`,component:c,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:d(),onCancel:d()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},p={args:{backdrop:`strong`,propOverrides:{id:`drawer-backdrop-strong`},header:(0,u.jsx)(o,{closeButtonText:`Close`,children:(0,u.jsx)(`h2`,{children:`(Default) Strong`})}),children:`(Default) Strong`},render:e=>(0,u.jsxs)(`div`,{children:[(0,u.jsx)(i,{command:`show-modal`,commandfor:`drawer-backdrop-strong`,children:`Open: (Default) Strong`}),(0,u.jsx)(c,{...e})]})},m={args:{backdrop:`weak`,propOverrides:{id:`drawer-backdrop-weak`},header:(0,u.jsx)(o,{closeButtonText:`Close`,children:(0,u.jsx)(`h2`,{children:`Weak`})}),children:`Weak`},render:e=>(0,u.jsxs)(`div`,{children:[(0,u.jsx)(i,{command:`show-modal`,commandfor:`drawer-backdrop-weak`,children:`Open: Weak`}),(0,u.jsx)(c,{...e})]})},h={args:{backdrop:`invisible`,propOverrides:{id:`drawer-backdrop-invisible`},header:(0,u.jsx)(o,{closeButtonText:`Close`,children:(0,u.jsx)(`h2`,{children:`Invisible`})}),children:`Invisible`},render:e=>(0,u.jsxs)(`div`,{children:[(0,u.jsx)(i,{command:`show-modal`,commandfor:`drawer-backdrop-invisible`,children:`Open: Invisible`}),(0,u.jsx)(c,{...e})]})},g={args:{backdrop:`none`,propOverrides:{id:`drawer-backdrop-none`},open:!1,onClose:d(),header:(0,u.jsx)(o,{closeButtonText:`Close`,children:(0,u.jsx)(`h2`,{children:`No Backdrop`})}),children:`No Backdrop`},render:e=>(0,u.jsxs)(`div`,{children:[(0,u.jsx)(i,{onClick:e=>setNoBackdropOpen(!0),children:`Open: No Backdrop`}),(0,u.jsx)(c,{...e})]})},_=[`DefaultStrong`,`Weak`,`Invisible`,`NoBackdrop`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "backdrop": "strong",
    "propOverrides": {
      id: 'drawer-backdrop-strong'
    },
    "header": <DBDrawerHeader closeButtonText="Close">
                            <h2>(Default) Strong</h2>
                        </DBDrawerHeader>,
    "children": "(Default) Strong"
  },
  render: (properties: any) => <div><DBButton command="show-modal" commandfor="drawer-backdrop-strong">
                    Open: (Default) Strong
                </DBButton><DBDrawer {...properties} /></div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "backdrop": "weak",
    "propOverrides": {
      id: 'drawer-backdrop-weak'
    },
    "header": <DBDrawerHeader closeButtonText="Close">
                            <h2>Weak</h2>
                        </DBDrawerHeader>,
    "children": "Weak"
  },
  render: (properties: any) => <div><DBButton command="show-modal" commandfor="drawer-backdrop-weak">
                    Open: Weak
                </DBButton><DBDrawer {...properties} /></div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "backdrop": "invisible",
    "propOverrides": {
      id: 'drawer-backdrop-invisible'
    },
    "header": <DBDrawerHeader closeButtonText="Close">
                            <h2>Invisible</h2>
                        </DBDrawerHeader>,
    "children": "Invisible"
  },
  render: (properties: any) => <div><DBButton command="show-modal" commandfor="drawer-backdrop-invisible">
                    Open: Invisible
                </DBButton><DBDrawer {...properties} /></div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "backdrop": "none",
    "propOverrides": {
      id: 'drawer-backdrop-none'
    },
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader closeButtonText="Close">
                            <h2>No Backdrop</h2>
                        </DBDrawerHeader>,
    "children": "No Backdrop"
  },
  render: (properties: any) => <div><DBButton onClick={event => setNoBackdropOpen(true)}>
                    Open: No Backdrop
                </DBButton><DBDrawer {...properties} /></div>
}`,...g.parameters?.docs?.source}}}})))()}export{l as a,m as i,h as n,v as o,g as r,p as t};