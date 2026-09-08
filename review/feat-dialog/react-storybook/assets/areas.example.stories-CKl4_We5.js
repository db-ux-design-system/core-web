import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./badge-R5sfz9B9.js";import{n as i,t as a}from"./button-CmbTulbT.js";import{n as o,t as s}from"./drawer-footer-L2hzXpKN.js";import{n as c,t as l}from"./drawer-header-BA1Z965s.js";import{n as u,t as d}from"./drawer-B9Fcmr-S.js";import{n as f,t as p}from"./icon-nSIoV0-Z.js";import{n as m,t as h}from"./link-CO0O5v_0.js";var g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{n(),i(),o(),c(),f(),m(),u(),g=t(),{fn:_}=__STORYBOOK_MODULE_TEST__,v={title:`Components/DBDrawer/Areas`,component:d,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:_()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},y={args:{id:`drawer-areas-text`,open:!1,onClose:_(),header:(0,g.jsx)(l,{text:`With text prop`,closeButtonText:`Close`}),children:`Lorem ipsum dolor sit amet.`},render:e=>(0,g.jsxs)(`div`,{children:[(0,g.jsx)(a,{command:`show-modal`,commandfor:`drawer-areas-text`,onClick:e=>setOpenIndex(0),children:`Open: With text prop`}),(0,g.jsx)(d,{...e})]})},b={args:{id:`drawer-areas-start`,open:!1,onClose:_(),header:(0,g.jsx)(l,{closeButtonText:`Close`,startSlot:(0,g.jsx)(p,{icon:`person`}),children:(0,g.jsx)(`h2`,{children:`With start slot`})}),children:`Lorem ipsum dolor sit amet.`},render:e=>(0,g.jsxs)(`div`,{children:[(0,g.jsx)(a,{command:`show-modal`,commandfor:`drawer-areas-start`,onClick:e=>setOpenIndex(1),children:`Open: With start slot`}),(0,g.jsx)(d,{...e})]})},x={args:{id:`drawer-areas-end`,open:!1,onClose:_(),header:(0,g.jsx)(l,{closeButtonText:`Close`,endSlot:(0,g.jsx)(r,{children:`New`}),children:(0,g.jsx)(`h2`,{children:`With end slot`})}),children:`Lorem ipsum dolor sit amet.`},render:e=>(0,g.jsxs)(`div`,{children:[(0,g.jsx)(a,{command:`show-modal`,commandfor:`drawer-areas-end`,onClick:e=>setOpenIndex(2),children:`Open: With end slot`}),(0,g.jsx)(d,{...e})]})},S={args:{id:`drawer-areas-footer`,open:!1,onClose:_(),header:(0,g.jsx)(l,{closeButtonText:`Close`,children:(0,g.jsx)(`h2`,{children:`With footer`})}),footer:(0,g.jsxs)(s,{children:[(0,g.jsx)(h,{href:`#`,children:`Link 1`}),(0,g.jsx)(h,{href:`#`,children:`Link 2`})]}),children:`Lorem ipsum dolor sit amet.`},render:e=>(0,g.jsxs)(`div`,{children:[(0,g.jsx)(a,{command:`show-modal`,commandfor:`drawer-areas-footer`,onClick:e=>setOpenIndex(3),children:`Open: With footer`}),(0,g.jsx)(d,{...e})]})},C=[`Withtextprop`,`Withstartslot`,`Withendslot`,`Withfooter`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "drawer-areas-text",
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader text="With text prop" closeButtonText="Close" />,
    "children": "Lorem ipsum dolor sit amet."
  },
  render: (properties: any) => <div><DBButton command="show-modal" commandfor="drawer-areas-text" onClick={event => setOpenIndex(0)}>
                    Open: With text prop
                </DBButton><DBDrawer {...properties} /></div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "drawer-areas-start",
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader closeButtonText="Close" startSlot={<DBIcon icon="person" />}>
                            <h2>With start slot</h2>
                        </DBDrawerHeader>,
    "children": "Lorem ipsum dolor sit amet."
  },
  render: (properties: any) => <div><DBButton command="show-modal" commandfor="drawer-areas-start" onClick={event => setOpenIndex(1)}>
                    Open: With start slot
                </DBButton><DBDrawer {...properties} /></div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "drawer-areas-end",
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader closeButtonText="Close" endSlot={<DBBadge>New</DBBadge>}>
                            <h2>With end slot</h2>
                        </DBDrawerHeader>,
    "children": "Lorem ipsum dolor sit amet."
  },
  render: (properties: any) => <div><DBButton command="show-modal" commandfor="drawer-areas-end" onClick={event => setOpenIndex(2)}>
                    Open: With end slot
                </DBButton><DBDrawer {...properties} /></div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "drawer-areas-footer",
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader closeButtonText="Close">
                            <h2>With footer</h2>
                        </DBDrawerHeader>,
    "footer": <DBDrawerFooter>
                            <DBLink href="#">Link 1</DBLink>
                            <DBLink href="#">Link 2</DBLink>
                        </DBDrawerFooter>,
    "children": "Lorem ipsum dolor sit amet."
  },
  render: (properties: any) => <div><DBButton command="show-modal" commandfor="drawer-areas-footer" onClick={event => setOpenIndex(3)}>
                    Open: With footer
                </DBButton><DBDrawer {...properties} /></div>
}`,...S.parameters?.docs?.source}}}})))()}w();export{x as Withendslot,S as Withfooter,b as Withstartslot,y as Withtextprop,C as __namedExportsOrder,v as default};