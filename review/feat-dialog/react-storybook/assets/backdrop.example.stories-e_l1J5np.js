import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./button-CB6wgE3z.js";import{n as i,t as a}from"./drawer-header-B8tpk-Ru.js";import{n as o,t as s}from"./drawer-Cx7ugc9Z.js";var c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{n(),i(),o(),c=t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBDrawer/Backdrop`,component:s,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:l(),onCancel:l()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},d={args:{backdrop:`strong`,propOverrides:{id:`drawer-backdrop-strong`},header:(0,c.jsx)(a,{closeButtonText:`Close`,children:(0,c.jsx)(`h2`,{children:`(Default) Strong`})}),children:`(Default) Strong`},render:e=>(0,c.jsxs)(`div`,{children:[(0,c.jsx)(r,{command:`show-modal`,commandfor:`drawer-backdrop-strong`,children:`Open: (Default) Strong`}),(0,c.jsx)(s,{...e})]})},f={args:{backdrop:`weak`,propOverrides:{id:`drawer-backdrop-weak`},header:(0,c.jsx)(a,{closeButtonText:`Close`,children:(0,c.jsx)(`h2`,{children:`Weak`})}),children:`Weak`},render:e=>(0,c.jsxs)(`div`,{children:[(0,c.jsx)(r,{command:`show-modal`,commandfor:`drawer-backdrop-weak`,children:`Open: Weak`}),(0,c.jsx)(s,{...e})]})},p={args:{backdrop:`invisible`,propOverrides:{id:`drawer-backdrop-invisible`},header:(0,c.jsx)(a,{closeButtonText:`Close`,children:(0,c.jsx)(`h2`,{children:`Invisible`})}),children:`Invisible`},render:e=>(0,c.jsxs)(`div`,{children:[(0,c.jsx)(r,{command:`show-modal`,commandfor:`drawer-backdrop-invisible`,children:`Open: Invisible`}),(0,c.jsx)(s,{...e})]})},m={args:{backdrop:`none`,propOverrides:{id:`drawer-backdrop-none`},open:!1,onClose:l(),header:(0,c.jsx)(a,{closeButtonText:`Close`,children:(0,c.jsx)(`h2`,{children:`No Backdrop`})}),children:`No Backdrop`},render:e=>(0,c.jsxs)(`div`,{children:[(0,c.jsx)(r,{onClick:e=>setNoBackdropOpen(!0),children:`Open: No Backdrop`}),(0,c.jsx)(s,{...e})]})},h=[`DefaultStrong`,`Weak`,`Invisible`,`NoBackdrop`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}}})))()}g();export{d as DefaultStrong,p as Invisible,m as NoBackdrop,f as Weak,h as __namedExportsOrder,u as default};