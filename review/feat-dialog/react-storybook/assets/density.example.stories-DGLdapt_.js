import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./button-CmbTulbT.js";import{n as i,t as a}from"./drawer-header-BA1Z965s.js";import{n as o,t as s}from"./drawer-B9Fcmr-S.js";var c,l,u,d,f,p,m;function h(){return(h=e((()=>{n(),i(),o(),c=t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBDrawer/Density`,component:s,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:l()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},d={args:{id:`drawer-density-functional`,open:!1,onClose:l(),header:(0,c.jsx)(a,{closeButtonText:`Close`,children:(0,c.jsx)(`h2`,{children:`Functional`})}),children:`Functional`},render:e=>(0,c.jsxs)(`div`,{"data-density":`functional`,children:[(0,c.jsx)(r,{command:`show-modal`,commandfor:`drawer-density-functional`,onClick:e=>setOpenIndex(0),children:`Open: Functional`}),(0,c.jsx)(s,{...e})]})},f={args:{id:`drawer-density-regular`,open:!1,onClose:l(),header:(0,c.jsx)(a,{closeButtonText:`Close`,children:(0,c.jsx)(`h2`,{children:`(Default) Regular`})}),children:`(Default) Regular`},render:e=>(0,c.jsxs)(`div`,{"data-density":`regular`,children:[(0,c.jsx)(r,{command:`show-modal`,commandfor:`drawer-density-regular`,onClick:e=>setOpenIndex(1),children:`Open: (Default) Regular`}),(0,c.jsx)(s,{...e})]})},p={args:{id:`drawer-density-expressive`,open:!1,onClose:l(),header:(0,c.jsx)(a,{closeButtonText:`Close`,children:(0,c.jsx)(`h2`,{children:`Expressive`})}),children:`Expressive`},render:e=>(0,c.jsxs)(`div`,{"data-density":`expressive`,children:[(0,c.jsx)(r,{command:`show-modal`,commandfor:`drawer-density-expressive`,onClick:e=>setOpenIndex(2),children:`Open: Expressive`}),(0,c.jsx)(s,{...e})]})},m=[`Functional`,`DefaultRegular`,`Expressive`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "drawer-density-functional",
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader closeButtonText="Close">
                            <h2>Functional</h2>
                        </DBDrawerHeader>,
    "children": "Functional"
  },
  render: (properties: any) => <div data-density="functional"><DBButton command="show-modal" commandfor="drawer-density-functional" onClick={event => setOpenIndex(0)}>
                    Open: Functional
                </DBButton><DBDrawer {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "drawer-density-regular",
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader closeButtonText="Close">
                            <h2>(Default) Regular</h2>
                        </DBDrawerHeader>,
    "children": "(Default) Regular"
  },
  render: (properties: any) => <div data-density="regular"><DBButton command="show-modal" commandfor="drawer-density-regular" onClick={event => setOpenIndex(1)}>
                    Open: (Default) Regular
                </DBButton><DBDrawer {...properties} /></div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "drawer-density-expressive",
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader closeButtonText="Close">
                            <h2>Expressive</h2>
                        </DBDrawerHeader>,
    "children": "Expressive"
  },
  render: (properties: any) => <div data-density="expressive"><DBButton command="show-modal" commandfor="drawer-density-expressive" onClick={event => setOpenIndex(2)}>
                    Open: Expressive
                </DBButton><DBDrawer {...properties} /></div>
}`,...p.parameters?.docs?.source}}}})))()}h();export{f as DefaultRegular,p as Expressive,d as Functional,m as __namedExportsOrder,u as default};