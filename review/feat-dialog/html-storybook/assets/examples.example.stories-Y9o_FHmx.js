import{n as e}from"./iframe-D3nJdy8m.js";import{n as t,t as n}from"./badge-DBoh-jmq.js";import{n as r,t as i}from"./button-DmUQwh0i.js";import{n as a,t as o}from"./drawer-footer-CDZu2Bne.js";import{n as s,t as c}from"./drawer-header-DNwAm4Et.js";import{n as l,t as u}from"./drawer-DIChAn5h.js";import{n as d,t as f}from"./link-BACls2fD.js";import{n as p}from"./rolldown-runtime-DkW27tQK.js";var m,h,g,_,v,y,b,x;function S(){return(S=p((()=>{t(),r(),a(),s(),d(),l(),m=e(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/DBDrawer/Examples`,component:u,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:h(),onCancel:h()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},_={args:{id:`drawer-example-modal`,variant:`modal`,open:!1,onClose:h(),header:(0,m.jsx)(c,{closeButtonText:`Close`,children:(0,m.jsx)(`h2`,{children:`(Default) As modal`})}),children:`(Default) As modal`},render:e=>(0,m.jsxs)(`div`,{children:[(0,m.jsx)(i,{command:`show-modal`,commandfor:`drawer-example-modal`,onClick:e=>setOpenIndex(0),children:`Open: (Default) As modal`}),(0,m.jsx)(u,{...e})]})},v={args:{id:`drawer-example-inside`,variant:`inside`,open:!1,onClose:h(),header:(0,m.jsx)(c,{closeButtonText:`Close`,children:(0,m.jsx)(`h2`,{children:`Inside`})}),children:`Inside`},render:e=>(0,m.jsxs)(`div`,{children:[(0,m.jsx)(i,{onClick:e=>setOpenIndex(1),children:`Open: Inside`}),(0,m.jsx)(u,{...e})]})},y={args:{id:`drawer-example-slots`,open:!1,onClose:h(),header:(0,m.jsx)(c,{closeButtonText:`Close`,endSlot:(0,m.jsx)(n,{children:`New`}),children:(0,m.jsx)(`h2`,{children:`With slots`})}),footer:(0,m.jsxs)(o,{children:[(0,m.jsx)(f,{href:`#`,children:`Link 1`}),(0,m.jsx)(f,{href:`#`,children:`Link 2`})]}),children:`With slots`},render:e=>(0,m.jsxs)(`div`,{children:[(0,m.jsx)(i,{command:`show-modal`,commandfor:`drawer-example-slots`,onClick:e=>setOpenIndex(2),children:`Open: With slots`}),(0,m.jsx)(u,{...e})]})},b={args:{open:!1,onClose:h(),onCancel:h(),header:(0,m.jsx)(c,{closeButtonText:`Close`,children:`Events Test`}),children:`Press ESC or click backdrop to test events`},render:e=>(0,m.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,m.jsx)(u,{...e})]})},x=[`DefaultAsmodal`,`Inside`,`Withslots`,`CloseandCancel`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "drawer-example-modal",
    "variant": "modal",
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader closeButtonText="Close">
                            <h2>(Default) As modal</h2>
                        </DBDrawerHeader>,
    "children": "(Default) As modal"
  },
  render: (properties: any) => <div><DBButton command="show-modal" commandfor="drawer-example-modal" onClick={event => setOpenIndex(0)}>
                    Open: (Default) As modal
                </DBButton><DBDrawer {...properties} /></div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "drawer-example-inside",
    "variant": "inside",
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader closeButtonText="Close">
                            <h2>Inside</h2>
                        </DBDrawerHeader>,
    "children": "Inside"
  },
  render: (properties: any) => <div><DBButton onClick={event => setOpenIndex(1)}>
                    Open: Inside
                </DBButton><DBDrawer {...properties} /></div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "drawer-example-slots",
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader closeButtonText="Close" endSlot={<DBBadge>New</DBBadge>}>
                            <h2>With slots</h2>
                        </DBDrawerHeader>,
    "footer": <DBDrawerFooter>
                            <DBLink href="#">Link 1</DBLink>
                            <DBLink href="#">Link 2</DBLink>
                        </DBDrawerFooter>,
    "children": "With slots"
  },
  render: (properties: any) => <div><DBButton command="show-modal" commandfor="drawer-example-slots" onClick={event => setOpenIndex(2)}>
                    Open: With slots
                </DBButton><DBDrawer {...properties} /></div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "onCancel": fn(),
    "header": <DBDrawerHeader closeButtonText="Close">
                            Events Test
                        </DBDrawerHeader>,
    "children": "Press ESC or click backdrop to test events"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...b.parameters?.docs?.source}}}})))()}S();export{b as CloseandCancel,_ as DefaultAsmodal,v as Inside,y as Withslots,x as __namedExportsOrder,g as default};