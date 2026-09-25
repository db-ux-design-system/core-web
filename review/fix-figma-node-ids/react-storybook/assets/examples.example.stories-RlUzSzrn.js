import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./badge-CEH48RYT.js";import{n as i,t as a}from"./button-9ZY0lmz6.js";import{n as o,t as s}from"./drawer-footer-CcYqDEHn.js";import{n as c,t as l}from"./drawer-header-tn6VohpG.js";import{n as u,t as d}from"./drawer-C8b8bmMR.js";import{n as f,t as p}from"./icon-DCIkeVlo.js";import{n as m,t as h}from"./link-CROamjXX.js";var g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{n(),i(),o(),c(),f(),m(),u(),g=t(),{fn:_}=__STORYBOOK_MODULE_TEST__,v={title:`Components/DBDrawer/Examples`,component:d,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:_(),onCancel:_()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},y={args:{variant:`modal`,propOverrides:{id:`drawer-example-modal`},header:(0,g.jsx)(l,{closeButtonText:`Close`,children:(0,g.jsx)(`h2`,{children:`(Default) As modal`})}),children:`(Default) As modal`},render:e=>(0,g.jsxs)(`div`,{children:[(0,g.jsx)(a,{command:`show-modal`,commandfor:`drawer-example-modal`,children:`Open: (Default) As modal`}),(0,g.jsx)(d,{...e})]})},b={args:{variant:`inside`,propOverrides:{id:`drawer-example-inside`},open:!1,onClose:_(),header:(0,g.jsx)(l,{closeButtonText:`Close`,children:(0,g.jsx)(`h2`,{children:`Inside`})}),children:`Inside`},render:e=>(0,g.jsxs)(`div`,{children:[(0,g.jsx)(a,{onClick:e=>setInsideOpen(!0),children:`Open: Inside`}),(0,g.jsx)(d,{...e})]})},x={args:{propOverrides:{id:`drawer-example-slots`},header:(0,g.jsx)(l,{closeButtonText:`Close`,endSlot:(0,g.jsx)(r,{children:`New`}),children:(0,g.jsx)(`h2`,{children:`With slots`})}),footer:(0,g.jsxs)(s,{children:[(0,g.jsx)(h,{href:`#`,children:`Link 1`}),(0,g.jsx)(h,{href:`#`,children:`Link 2`})]}),children:`With slots`},render:e=>(0,g.jsxs)(`div`,{children:[(0,g.jsx)(a,{command:`show-modal`,commandfor:`drawer-example-slots`,children:`Open: With slots`}),(0,g.jsx)(d,{...e})]})},S={args:{open:!1,onClose:_(),onCancel:_(),header:(0,g.jsx)(l,{closeButtonText:`Close`,children:`Events Test`}),children:`Press ESC or click backdrop to test events`},render:e=>(0,g.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,g.jsx)(d,{...e})]})},C={args:{propOverrides:{id:`drawer-areas-text`},header:(0,g.jsx)(l,{text:`With text prop`,closeButtonText:`Close`}),children:`Lorem ipsum dolor sit amet.`},render:e=>(0,g.jsxs)(`div`,{children:[(0,g.jsx)(a,{command:`show-modal`,commandfor:`drawer-areas-text`,children:`Open: With text prop`}),(0,g.jsx)(d,{...e})]})},w={args:{propOverrides:{id:`drawer-areas-start`},header:(0,g.jsx)(l,{closeButtonText:`Close`,startSlot:(0,g.jsx)(p,{icon:`person`}),children:(0,g.jsx)(`h2`,{children:`With header start slot`})}),children:`Lorem ipsum dolor sit amet.`},render:e=>(0,g.jsxs)(`div`,{children:[(0,g.jsx)(a,{command:`show-modal`,commandfor:`drawer-areas-start`,children:`Open: With header start slot`}),(0,g.jsx)(d,{...e})]})},T={args:{propOverrides:{id:`drawer-areas-end`},header:(0,g.jsx)(l,{closeButtonText:`Close`,endSlot:(0,g.jsx)(r,{children:`New`}),children:(0,g.jsx)(`h2`,{children:`With header end slot`})}),children:`Lorem ipsum dolor sit amet.`},render:e=>(0,g.jsxs)(`div`,{children:[(0,g.jsx)(a,{command:`show-modal`,commandfor:`drawer-areas-end`,children:`Open: With header end slot`}),(0,g.jsx)(d,{...e})]})},E={args:{propOverrides:{id:`drawer-areas-footer`},header:(0,g.jsx)(l,{closeButtonText:`Close`,children:(0,g.jsx)(`h2`,{children:`With footer`})}),footer:(0,g.jsxs)(s,{children:[(0,g.jsx)(h,{href:`#`,children:`Link 1`}),(0,g.jsx)(h,{href:`#`,children:`Link 2`})]}),children:`Lorem ipsum dolor sit amet.`},render:e=>(0,g.jsxs)(`div`,{children:[(0,g.jsx)(a,{command:`show-modal`,commandfor:`drawer-areas-footer`,children:`Open: With footer`}),(0,g.jsx)(d,{...e})]})},D=[`DefaultAsmodal`,`Inside`,`Withslots`,`CloseandCancel`,`Withtextprop`,`Withheaderstartslot`,`Withheaderendslot`,`Withfooter`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}}})))()}O();export{S as CloseandCancel,y as DefaultAsmodal,b as Inside,E as Withfooter,T as Withheaderendslot,w as Withheaderstartslot,x as Withslots,C as Withtextprop,D as __namedExportsOrder,v as default};