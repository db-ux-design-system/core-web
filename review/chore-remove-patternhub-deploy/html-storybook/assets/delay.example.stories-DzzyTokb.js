import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./button-KkPyUB9O.js";import{n as a,t as o}from"./popover-N5RKurzK.js";var s=t({DefaultNone:()=>d,Fast:()=>p,Slow:()=>f,__namedExportsOrder:()=>m,default:()=>u}),c,l,u,d,f,p,m;function h(){return(h=e((()=>{r(),a(),c=n(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBPopover/Delay`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},gap:{control:`boolean`},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},width:{control:`select`,options:[`auto`,`fixed`]},open:{control:`boolean`},autofocus:{control:`boolean`}}},d={args:{id:`popover-133`,delay:`none`,trigger:(0,c.jsx)(i,{children:`(Default) None`}),children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(`ul`,{className:`popover-list`,children:[(0,c.jsx)(`li`,{children:`Popover Custom Item 1`}),(0,c.jsx)(`li`,{children:`Popover Custom Item 2`})]}),(0,c.jsx)(i,{children:`Popover Custom Item 3`})]})},render:e=>(0,c.jsx)(o,{...e})},f={args:{delay:`slow`,id:`popover-14`,trigger:(0,c.jsx)(i,{children:`Slow`}),children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(`ul`,{className:`popover-list`,children:[(0,c.jsx)(`li`,{children:`Popover Custom Item 1`}),(0,c.jsx)(`li`,{children:`Popover Custom Item 2`})]}),(0,c.jsx)(i,{children:`Popover Custom Item 3`})]})},render:e=>(0,c.jsx)(o,{...e})},p={args:{delay:`fast`,id:`popover-15`,trigger:(0,c.jsx)(i,{children:`Fast`}),children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(`ul`,{className:`popover-list`,children:[(0,c.jsx)(`li`,{children:`Popover Custom Item 1`}),(0,c.jsx)(`li`,{children:`Popover Custom Item 2`})]}),(0,c.jsx)(i,{children:`Popover Custom Item 3`})]})},render:e=>(0,c.jsx)(o,{...e})},m=[`DefaultNone`,`Slow`,`Fast`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-133",
    "delay": "none",
    "trigger": <DBButton>(Default) None</DBButton>,
    "children": <><ul className="popover-list"><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul>
<DBButton>Popover Custom Item 3</DBButton></>
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "slow",
    "id": "popover-14",
    "trigger": <DBButton>Slow</DBButton>,
    "children": <><ul className="popover-list"><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul>
<DBButton>Popover Custom Item 3</DBButton></>
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "fast",
    "id": "popover-15",
    "trigger": <DBButton>Fast</DBButton>,
    "children": <><ul className="popover-list"><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul>
<DBButton>Popover Custom Item 3</DBButton></>
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...p.parameters?.docs?.source}}}})))()}export{h as a,s as i,p as n,f as r,d as t};