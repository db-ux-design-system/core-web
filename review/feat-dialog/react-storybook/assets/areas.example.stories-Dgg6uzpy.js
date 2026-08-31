import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./badge-C6lA-U0S.js";import{i,n as a,r as o,t as s}from"./drawer-header-Dcu4MyQb.js";import{n as c,t as l}from"./drawer-footer-Bsx10sgG.js";import{n as u,t as d}from"./icon-DBpIMEQe.js";import{n as f,t as p}from"./link-CG-y7Yu2.js";var m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{n(),c(),a(),u(),f(),i(),m=t(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/DBDrawer/Areas`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:h()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},_={args:{open:!1,onClose:h(),header:(0,m.jsx)(s,{text:`With text prop`,closeButtonText:`Close`}),children:`Lorem ipsum dolor sit amet.`},render:e=>(0,m.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,m.jsx)(o,{...e})]})},v={args:{open:!1,onClose:h(),header:(0,m.jsx)(s,{closeButtonText:`Close`,startSlot:(0,m.jsx)(d,{icon:`person`}),children:`With start slot`}),children:`Lorem ipsum dolor sit amet.`},render:e=>(0,m.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,m.jsx)(o,{...e})]})},y={args:{open:!1,onClose:h(),header:(0,m.jsx)(s,{closeButtonText:`Close`,endSlot:(0,m.jsx)(r,{children:`New`}),children:`With end slot`}),children:`Lorem ipsum dolor sit amet.`},render:e=>(0,m.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,m.jsx)(o,{...e})]})},b={args:{open:!1,onClose:h(),header:(0,m.jsx)(s,{closeButtonText:`Close`,children:`With footer`}),footer:(0,m.jsxs)(l,{children:[(0,m.jsx)(p,{href:`#`,children:`Link 1`}),(0,m.jsx)(p,{href:`#`,children:`Link 2`})]}),children:`Lorem ipsum dolor sit amet.`},render:e=>(0,m.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,m.jsx)(o,{...e})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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