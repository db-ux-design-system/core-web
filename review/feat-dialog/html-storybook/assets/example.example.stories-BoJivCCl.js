import{n as e}from"./iframe-DqiEgONW.js";import{n as t,t as n}from"./badge-CLNTLWL5.js";import{n as r,t as i}from"./button-rE7hsgve.js";import{n as a,t as o}from"./drawer-footer-DfhwZxQP.js";import{n as s,t as c}from"./drawer-header-B7o26fdY.js";import{n as l,t as u}from"./drawer-BO490oN8.js";import{n as d,t as f}from"./link-CFsg1--a.js";import{n as p}from"./rolldown-runtime-DkW27tQK.js";var m,h,g,_,v,y,b;function x(){return(x=p((()=>{t(),r(),a(),s(),d(),l(),m=e(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/DBDrawer/Example`,component:u,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:h()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},_={args:{id:`drawer-example-modal`,variant:`modal`,open:!1,onClose:h(),header:(0,m.jsx)(c,{closeButtonText:`Close`,children:(0,m.jsx)(`h2`,{children:`(Default) As modal`})}),children:`(Default) As modal`},render:e=>(0,m.jsxs)(`div`,{children:[(0,m.jsx)(i,{command:`show-modal`,commandfor:`drawer-example-modal`,onClick:e=>setOpenIndex(0),children:`Open: (Default) As modal`}),(0,m.jsx)(u,{...e})]})},v={args:{id:`drawer-example-inside`,variant:`inside`,open:!1,onClose:h(),header:(0,m.jsx)(c,{closeButtonText:`Close`,children:(0,m.jsx)(`h2`,{children:`Inside`})}),children:`Inside`},render:e=>(0,m.jsxs)(`div`,{children:[(0,m.jsx)(i,{command:`show`,commandfor:`drawer-example-inside`,onClick:e=>setOpenIndex(1),children:`Open: Inside`}),(0,m.jsx)(u,{...e})]})},y={args:{id:`drawer-example-slots`,open:!1,onClose:h(),header:(0,m.jsx)(c,{closeButtonText:`Close`,endSlot:(0,m.jsx)(n,{children:`New`}),children:(0,m.jsx)(`h2`,{children:`With slots`})}),footer:(0,m.jsxs)(o,{children:[(0,m.jsx)(f,{href:`#`,children:`Link 1`}),(0,m.jsx)(f,{href:`#`,children:`Link 2`})]}),children:`With slots`},render:e=>(0,m.jsxs)(`div`,{children:[(0,m.jsx)(i,{command:`show-modal`,commandfor:`drawer-example-slots`,onClick:e=>setOpenIndex(2),children:`Open: With slots`}),(0,m.jsx)(u,{...e})]})},b=[`DefaultAsmodal`,`Inside`,`Withslots`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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