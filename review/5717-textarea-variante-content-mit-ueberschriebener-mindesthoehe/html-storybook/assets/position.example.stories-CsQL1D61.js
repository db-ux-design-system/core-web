import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./button-HiccZljf.js";import{n as a,t as o}from"./drawer-header-D7zEO4ZG.js";import{n as s,t as c}from"./drawer-CRaPBI2t.js";var l=t({DefaultFixed:()=>p,__namedExportsOrder:()=>m,default:()=>f}),u,d,f,p,m;function h(){return(h=e((()=>{r(),a(),s(),u=n(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBDrawer/Position`,component:c,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:d(),onCancel:d()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},p={args:{position:`absolute`,propOverrides:{id:`drawer-position-absolute`},open:!1,onClose:d(),header:(0,u.jsx)(o,{closeButtonText:`Close`,children:(0,u.jsx)(`h2`,{children:`Absolute`})}),children:`Absolute`},render:e=>(0,u.jsxs)(`div`,{style:{position:`relative`,height:`500px`,width:`100%`,border:`2px dashed currentColor`,overflow:`hidden`},children:[(0,u.jsx)(i,{onClick:e=>setAbsoluteOpen(!0),children:`Open: Absolute`}),(0,u.jsx)(c,{...e})]})},m=[`DefaultFixed`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "position": "absolute",
    "propOverrides": {
      id: 'drawer-position-absolute'
    },
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
  }}><DBButton onClick={event => setAbsoluteOpen(true)}>
                    Open: Absolute
                </DBButton><DBDrawer {...properties} /></div>
}`,...p.parameters?.docs?.source}}}})))()}export{h as n,l as r,p as t};