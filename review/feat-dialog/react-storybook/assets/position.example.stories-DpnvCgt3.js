import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./button-CmbTulbT.js";import{n as i,t as a}from"./drawer-header-BA1Z965s.js";import{n as o,t as s}from"./drawer-B9Fcmr-S.js";var c,l,u,d,f;function p(){return(p=e((()=>{n(),i(),o(),c=t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBDrawer/Position`,component:s,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:l()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},d={args:{id:`drawer-position-absolute`,position:`absolute`,open:!1,onClose:l(),header:(0,c.jsx)(a,{closeButtonText:`Close`,children:(0,c.jsx)(`h2`,{children:`Absolute`})}),children:`Absolute`},render:e=>(0,c.jsxs)(`div`,{style:{position:`relative`,height:`500px`,width:`100%`,border:`2px dashed currentColor`,overflow:`hidden`},children:[(0,c.jsx)(r,{command:`show`,commandfor:`drawer-position-absolute`,onClick:e=>setOpenIndex(1),children:`Open: Absolute`}),(0,c.jsx)(s,{...e})]})},f=[`DefaultFixed`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "drawer-position-absolute",
    "position": "absolute",
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader closeButtonText="Close">
                            <h2>Absolute</h2>
                        </DBDrawerHeader>,
    "children": "Absolute"
  },
  render: (properties: any) => <div style={{
    position: 'relative',
    height: '500px',
    width: '100%',
    border: '2px dashed currentColor',
    overflow: 'hidden'
  }}><DBButton command="show" commandfor="drawer-position-absolute" onClick={event => setOpenIndex(1)}>
                    Open: Absolute
                </DBButton><DBDrawer {...properties} /></div>
}`,...d.parameters?.docs?.source}}}})))()}p();export{d as DefaultFixed,f as __namedExportsOrder,u as default};