import{n as e}from"./iframe-MUgIjCJT.js";import{n as t,t as n}from"./badge-DydFkwI7.js";import{n as r,t as i}from"./drawer-footer-RXvLqKwY.js";import{n as a,t as o}from"./drawer-header-Dn8yTYYV.js";import{n as s,t as c}from"./drawer-CLhPx9t6.js";import{n as l,t as u}from"./icon-BluQj3rz.js";import{n as d,t as f}from"./link-BGtKXec8.js";import{n as p}from"./rolldown-runtime-DkW27tQK.js";var m,h,g,_,v,y,b,x;function S(){return(S=p((()=>{t(),r(),a(),l(),d(),s(),m=e(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/DBDrawer/Areas`,component:c,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:h(),onCancel:h()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},_={args:{open:!1,onClose:h(),header:(0,m.jsx)(o,{text:`With text prop`,closeButtonText:`Close`}),children:`Lorem ipsum dolor sit amet.`},render:e=>(0,m.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,m.jsx)(c,{...e})]})},v={args:{open:!1,onClose:h(),header:(0,m.jsx)(o,{closeButtonText:`Close`,startSlot:(0,m.jsx)(u,{icon:`person`}),children:`With start slot`}),children:`Lorem ipsum dolor sit amet.`},render:e=>(0,m.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,m.jsx)(c,{...e})]})},y={args:{open:!1,onClose:h(),header:(0,m.jsx)(o,{closeButtonText:`Close`,endSlot:(0,m.jsx)(n,{children:`New`}),children:`With end slot`}),children:`Lorem ipsum dolor sit amet.`},render:e=>(0,m.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,m.jsx)(c,{...e})]})},b={args:{open:!1,onClose:h(),header:(0,m.jsx)(o,{closeButtonText:`Close`,children:`With footer`}),footer:(0,m.jsxs)(i,{children:[(0,m.jsx)(f,{href:`#`,children:`Link 1`}),(0,m.jsx)(f,{href:`#`,children:`Link 2`})]}),children:`Lorem ipsum dolor sit amet.`},render:e=>(0,m.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,m.jsx)(c,{...e})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader text="With text prop" closeButtonText="Close" />,
    "children": "Lorem ipsum dolor sit amet."
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader closeButtonText="Close" startSlot={<DBIcon icon="person" />}>
                            With start slot
                        </DBDrawerHeader>,
    "children": "Lorem ipsum dolor sit amet."
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader closeButtonText="Close" endSlot={<DBBadge>New</DBBadge>}>
                            With end slot
                        </DBDrawerHeader>,
    "children": "Lorem ipsum dolor sit amet."
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader closeButtonText="Close">
                            With footer
                        </DBDrawerHeader>,
    "footer": <DBDrawerFooter>
                            <DBLink href="#">Link 1</DBLink>
                            <DBLink href="#">Link 2</DBLink>
                        </DBDrawerFooter>,
    "children": "Lorem ipsum dolor sit amet."
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...b.parameters?.docs?.source}}},x=[`Withtextprop`,`Withstartslot`,`Withendslot`,`Withfooter`]})))()}S();export{y as Withendslot,b as Withfooter,v as Withstartslot,_ as Withtextprop,x as __namedExportsOrder,g as default};