import{n as e}from"./iframe-DqiEgONW.js";import{n as t,t as n}from"./badge-CLNTLWL5.js";import{n as r,t as i}from"./button-rE7hsgve.js";import{n as a,t as o}from"./drawer-footer-DfhwZxQP.js";import{n as s,t as c}from"./drawer-header-B7o26fdY.js";import{n as l,t as u}from"./drawer-BO490oN8.js";import{n as d,t as f}from"./icon-DtRX_YP6.js";import{n as p,t as m}from"./link-CFsg1--a.js";import{n as h}from"./rolldown-runtime-DkW27tQK.js";var g,_,v,y,b,x,S,C;function w(){return(w=h((()=>{t(),r(),a(),s(),d(),p(),l(),g=e(),{fn:_}=__STORYBOOK_MODULE_TEST__,v={title:`Components/DBDrawer/Areas`,component:u,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:_()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},y={args:{id:`drawer-areas-text`,open:!1,onClose:_(),header:(0,g.jsx)(c,{text:`With text prop`,closeButtonText:`Close`}),children:`Lorem ipsum dolor sit amet.`},render:e=>(0,g.jsxs)(`div`,{children:[(0,g.jsx)(i,{command:`show-modal`,commandfor:`drawer-areas-text`,onClick:e=>setOpenIndex(0),children:`Open: With text prop`}),(0,g.jsx)(u,{...e})]})},b={args:{id:`drawer-areas-start`,open:!1,onClose:_(),header:(0,g.jsx)(c,{closeButtonText:`Close`,startSlot:(0,g.jsx)(f,{icon:`person`}),children:(0,g.jsx)(`h2`,{children:`With start slot`})}),children:`Lorem ipsum dolor sit amet.`},render:e=>(0,g.jsxs)(`div`,{children:[(0,g.jsx)(i,{command:`show-modal`,commandfor:`drawer-areas-start`,onClick:e=>setOpenIndex(1),children:`Open: With start slot`}),(0,g.jsx)(u,{...e})]})},x={args:{id:`drawer-areas-end`,open:!1,onClose:_(),header:(0,g.jsx)(c,{closeButtonText:`Close`,endSlot:(0,g.jsx)(n,{children:`New`}),children:(0,g.jsx)(`h2`,{children:`With end slot`})}),children:`Lorem ipsum dolor sit amet.`},render:e=>(0,g.jsxs)(`div`,{children:[(0,g.jsx)(i,{command:`show-modal`,commandfor:`drawer-areas-end`,onClick:e=>setOpenIndex(2),children:`Open: With end slot`}),(0,g.jsx)(u,{...e})]})},S={args:{id:`drawer-areas-footer`,open:!1,onClose:_(),header:(0,g.jsx)(c,{closeButtonText:`Close`,children:(0,g.jsx)(`h2`,{children:`With footer`})}),footer:(0,g.jsxs)(o,{children:[(0,g.jsx)(m,{href:`#`,children:`Link 1`}),(0,g.jsx)(m,{href:`#`,children:`Link 2`})]}),children:`Lorem ipsum dolor sit amet.`},render:e=>(0,g.jsxs)(`div`,{children:[(0,g.jsx)(i,{command:`show-modal`,commandfor:`drawer-areas-footer`,onClick:e=>setOpenIndex(3),children:`Open: With footer`}),(0,g.jsx)(u,{...e})]})},C=[`Withtextprop`,`Withstartslot`,`Withendslot`,`Withfooter`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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