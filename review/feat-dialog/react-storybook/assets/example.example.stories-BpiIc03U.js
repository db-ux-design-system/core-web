import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./badge-R5sfz9B9.js";import{n as i,t as a}from"./button-CmbTulbT.js";import{n as o,t as s}from"./drawer-footer-L2hzXpKN.js";import{n as c,t as l}from"./drawer-header-BA1Z965s.js";import{n as u,t as d}from"./drawer-B9Fcmr-S.js";import{n as f,t as p}from"./link-CO0O5v_0.js";var m,h,g,_,v,y,b;function x(){return(x=e((()=>{n(),i(),o(),c(),f(),u(),m=t(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/DBDrawer/Example`,component:d,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:h()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},_={args:{id:`drawer-example-modal`,variant:`modal`,open:!1,onClose:h(),header:(0,m.jsx)(l,{closeButtonText:`Close`,children:(0,m.jsx)(`h2`,{children:`(Default) As modal`})}),children:`(Default) As modal`},render:e=>(0,m.jsxs)(`div`,{children:[(0,m.jsx)(a,{command:`show-modal`,commandfor:`drawer-example-modal`,onClick:e=>setOpenIndex(0),children:`Open: (Default) As modal`}),(0,m.jsx)(d,{...e})]})},v={args:{id:`drawer-example-inside`,variant:`inside`,open:!1,onClose:h(),header:(0,m.jsx)(l,{closeButtonText:`Close`,children:(0,m.jsx)(`h2`,{children:`Inside`})}),children:`Inside`},render:e=>(0,m.jsxs)(`div`,{children:[(0,m.jsx)(a,{command:`show`,commandfor:`drawer-example-inside`,onClick:e=>setOpenIndex(1),children:`Open: Inside`}),(0,m.jsx)(d,{...e})]})},y={args:{id:`drawer-example-slots`,open:!1,onClose:h(),header:(0,m.jsx)(l,{closeButtonText:`Close`,endSlot:(0,m.jsx)(r,{children:`New`}),children:(0,m.jsx)(`h2`,{children:`With slots`})}),footer:(0,m.jsxs)(s,{children:[(0,m.jsx)(p,{href:`#`,children:`Link 1`}),(0,m.jsx)(p,{href:`#`,children:`Link 2`})]}),children:`With slots`},render:e=>(0,m.jsxs)(`div`,{children:[(0,m.jsx)(a,{command:`show-modal`,commandfor:`drawer-example-slots`,onClick:e=>setOpenIndex(2),children:`Open: With slots`}),(0,m.jsx)(d,{...e})]})},b=[`DefaultAsmodal`,`Inside`,`Withslots`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
  render: (properties: any) => <div><DBButton command="show" commandfor="drawer-example-inside" onClick={event => setOpenIndex(1)}>
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
}`,...y.parameters?.docs?.source}}}})))()}x();export{_ as DefaultAsmodal,v as Inside,y as Withslots,b as __namedExportsOrder,g as default};