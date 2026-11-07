import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./button-Cd7Pz-Ib.js";import{n as a,t as o}from"./popover-BkNr-ce0.js";var s=t({DefaultFalse:()=>d,True:()=>f,__namedExportsOrder:()=>p,default:()=>u}),c,l,u,d,f,p;function m(){return(m=e((()=>{r(),a(),c=n(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBPopover/Gap`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},gap:{control:`boolean`},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},width:{control:`select`,options:[`auto`,`fixed`]},open:{control:`boolean`},autofocus:{control:`boolean`}}},d={args:{id:`popover-11`,gap:!1,trigger:(0,c.jsx)(i,{children:`(Default) False`}),children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(`ul`,{className:`popover-list`,children:[(0,c.jsx)(`li`,{children:`Popover Custom Item 1`}),(0,c.jsx)(`li`,{children:`Popover Custom Item 2`})]}),(0,c.jsx)(i,{children:`Popover Custom Item 3`})]})},render:e=>(0,c.jsx)(o,{...e})},f={args:{id:`popover-12`,gap:!0,trigger:(0,c.jsx)(i,{children:`True`}),children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(`ul`,{className:`popover-list`,children:[(0,c.jsx)(`li`,{children:`Popover Custom Item 1`}),(0,c.jsx)(`li`,{children:`Popover Custom Item 2`})]}),(0,c.jsx)(i,{children:`Popover Custom Item 3`})]})},render:e=>(0,c.jsx)(o,{...e})},p=[`DefaultFalse`,`True`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-11",
    "gap": false,
    "trigger": <DBButton>(Default) False</DBButton>,
    "children": <><ul className="popover-list"><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul>
<DBButton>Popover Custom Item 3</DBButton></>
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-12",
    "gap": true,
    "trigger": <DBButton>True</DBButton>,
    "children": <><ul className="popover-list"><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul>
<DBButton>Popover Custom Item 3</DBButton></>
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...f.parameters?.docs?.source}}}})))()}export{m as i,f as n,s as r,d as t};