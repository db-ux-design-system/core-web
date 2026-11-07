import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./badge-DjgFuiB1.js";import{n as a,t as o}from"./button-Cd7Pz-Ib.js";import{n as s,t as c}from"./drawer-footer-7f-fwJjL.js";import{n as l,t as u}from"./drawer-header-DZ6mtlhY.js";import{n as d,t as f}from"./drawer-0Jg33BAA.js";import{n as p,t as m}from"./icon-BWd-fVpI.js";import{n as h,t as g}from"./link-I3nqCvO0.js";var _=t({CloseandCancel:()=>w,DefaultAsmodal:()=>x,Inside:()=>S,Withfooter:()=>O,Withheaderendslot:()=>D,Withheaderstartslot:()=>E,Withslots:()=>C,Withtextprop:()=>T,__namedExportsOrder:()=>k,default:()=>b}),v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{r(),a(),s(),l(),p(),h(),d(),v=n(),{fn:y}=__STORYBOOK_MODULE_TEST__,b={title:`Components/DBDrawer/Examples`,component:f,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:y(),onCancel:y()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},x={args:{variant:`modal`,propOverrides:{id:`drawer-example-modal`},header:(0,v.jsx)(u,{closeButtonText:`Close`,children:(0,v.jsx)(`h2`,{children:`(Default) As modal`})}),children:`(Default) As modal`},render:e=>(0,v.jsxs)(`div`,{children:[(0,v.jsx)(o,{command:`show-modal`,commandfor:`drawer-example-modal`,children:`Open: (Default) As modal`}),(0,v.jsx)(f,{...e})]})},S={args:{variant:`inside`,propOverrides:{id:`drawer-example-inside`},open:!1,onClose:y(),header:(0,v.jsx)(u,{closeButtonText:`Close`,children:(0,v.jsx)(`h2`,{children:`Inside`})}),children:`Inside`},render:e=>(0,v.jsxs)(`div`,{children:[(0,v.jsx)(o,{onClick:e=>setInsideOpen(!0),children:`Open: Inside`}),(0,v.jsx)(f,{...e})]})},C={args:{propOverrides:{id:`drawer-example-slots`},header:(0,v.jsx)(u,{closeButtonText:`Close`,endSlot:(0,v.jsx)(i,{children:`New`}),children:(0,v.jsx)(`h2`,{children:`With slots`})}),footer:(0,v.jsxs)(c,{children:[(0,v.jsx)(g,{href:`#`,children:`Link 1`}),(0,v.jsx)(g,{href:`#`,children:`Link 2`})]}),children:`With slots`},render:e=>(0,v.jsxs)(`div`,{children:[(0,v.jsx)(o,{command:`show-modal`,commandfor:`drawer-example-slots`,children:`Open: With slots`}),(0,v.jsx)(f,{...e})]})},w={args:{open:!1,onClose:y(),onCancel:y(),header:(0,v.jsx)(u,{closeButtonText:`Close`,children:`Events Test`}),children:`Press ESC or click backdrop to test events`},render:e=>(0,v.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,v.jsx)(f,{...e})]})},T={args:{propOverrides:{id:`drawer-areas-text`},header:(0,v.jsx)(u,{text:`With text prop`,closeButtonText:`Close`}),children:`Lorem ipsum dolor sit amet.`},render:e=>(0,v.jsxs)(`div`,{children:[(0,v.jsx)(o,{command:`show-modal`,commandfor:`drawer-areas-text`,children:`Open: With text prop`}),(0,v.jsx)(f,{...e})]})},E={args:{propOverrides:{id:`drawer-areas-start`},header:(0,v.jsx)(u,{closeButtonText:`Close`,startSlot:(0,v.jsx)(m,{icon:`person`}),children:(0,v.jsx)(`h2`,{children:`With header start slot`})}),children:`Lorem ipsum dolor sit amet.`},render:e=>(0,v.jsxs)(`div`,{children:[(0,v.jsx)(o,{command:`show-modal`,commandfor:`drawer-areas-start`,children:`Open: With header start slot`}),(0,v.jsx)(f,{...e})]})},D={args:{propOverrides:{id:`drawer-areas-end`},header:(0,v.jsx)(u,{closeButtonText:`Close`,endSlot:(0,v.jsx)(i,{children:`New`}),children:(0,v.jsx)(`h2`,{children:`With header end slot`})}),children:`Lorem ipsum dolor sit amet.`},render:e=>(0,v.jsxs)(`div`,{children:[(0,v.jsx)(o,{command:`show-modal`,commandfor:`drawer-areas-end`,children:`Open: With header end slot`}),(0,v.jsx)(f,{...e})]})},O={args:{propOverrides:{id:`drawer-areas-footer`},header:(0,v.jsx)(u,{closeButtonText:`Close`,children:(0,v.jsx)(`h2`,{children:`With footer`})}),footer:(0,v.jsxs)(c,{children:[(0,v.jsx)(g,{href:`#`,children:`Link 1`}),(0,v.jsx)(g,{href:`#`,children:`Link 2`})]}),children:`Lorem ipsum dolor sit amet.`},render:e=>(0,v.jsxs)(`div`,{children:[(0,v.jsx)(o,{command:`show-modal`,commandfor:`drawer-areas-footer`,children:`Open: With footer`}),(0,v.jsx)(f,{...e})]})},k=[`DefaultAsmodal`,`Inside`,`Withslots`,`CloseandCancel`,`Withtextprop`,`Withheaderstartslot`,`Withheaderendslot`,`Withfooter`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "modal",
    "propOverrides": {
      id: 'drawer-example-modal'
    },
    "header": <DBDrawerHeader closeButtonText="Close">
                            <h2>(Default) As modal</h2>
                        </DBDrawerHeader>,
    "children": "(Default) As modal"
  },
  render: (properties: any) => <div><DBButton command="show-modal" commandfor="drawer-example-modal">
                    Open: (Default) As modal
                </DBButton><DBDrawer {...properties} /></div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "inside",
    "propOverrides": {
      id: 'drawer-example-inside'
    },
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader closeButtonText="Close">
                            <h2>Inside</h2>
                        </DBDrawerHeader>,
    "children": "Inside"
  },
  render: (properties: any) => <div><DBButton onClick={event => setInsideOpen(true)}>
                    Open: Inside
                </DBButton><DBDrawer {...properties} /></div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'drawer-example-slots'
    },
    "header": <DBDrawerHeader closeButtonText="Close" endSlot={<DBBadge>New</DBBadge>}>
                            <h2>With slots</h2>
                        </DBDrawerHeader>,
    "footer": <DBDrawerFooter>
                            <DBLink href="#">Link 1</DBLink>
                            <DBLink href="#">Link 2</DBLink>
                        </DBDrawerFooter>,
    "children": "With slots"
  },
  render: (properties: any) => <div><DBButton command="show-modal" commandfor="drawer-example-slots">
                    Open: With slots
                </DBButton><DBDrawer {...properties} /></div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'drawer-areas-text'
    },
    "header": <DBDrawerHeader text="With text prop" closeButtonText="Close" />,
    "children": "Lorem ipsum dolor sit amet."
  },
  render: (properties: any) => <div><DBButton command="show-modal" commandfor="drawer-areas-text">
                    Open: With text prop
                </DBButton><DBDrawer {...properties} /></div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'drawer-areas-start'
    },
    "header": <DBDrawerHeader closeButtonText="Close" startSlot={<DBIcon icon="person" />}>
                            <h2>With header start slot</h2>
                        </DBDrawerHeader>,
    "children": "Lorem ipsum dolor sit amet."
  },
  render: (properties: any) => <div><DBButton command="show-modal" commandfor="drawer-areas-start">
                    Open: With header start slot
                </DBButton><DBDrawer {...properties} /></div>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'drawer-areas-end'
    },
    "header": <DBDrawerHeader closeButtonText="Close" endSlot={<DBBadge>New</DBBadge>}>
                            <h2>With header end slot</h2>
                        </DBDrawerHeader>,
    "children": "Lorem ipsum dolor sit amet."
  },
  render: (properties: any) => <div><DBButton command="show-modal" commandfor="drawer-areas-end">
                    Open: With header end slot
                </DBButton><DBDrawer {...properties} /></div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'drawer-areas-footer'
    },
    "header": <DBDrawerHeader closeButtonText="Close">
                            <h2>With footer</h2>
                        </DBDrawerHeader>,
    "footer": <DBDrawerFooter>
                            <DBLink href="#">Link 1</DBLink>
                            <DBLink href="#">Link 2</DBLink>
                        </DBDrawerFooter>,
    "children": "Lorem ipsum dolor sit amet."
  },
  render: (properties: any) => <div><DBButton command="show-modal" commandfor="drawer-areas-footer">
                    Open: With footer
                </DBButton><DBDrawer {...properties} /></div>
}`,...O.parameters?.docs?.source}}}})))()}export{D as a,T as c,O as i,_ as l,x as n,E as o,S as r,C as s,w as t,A as u};