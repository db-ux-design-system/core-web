import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./button-KkPyUB9O.js";import{n as a,t as o}from"./popover-DW_M8qiw.js";var s=t({DefaultRegular:()=>f,Expressive:()=>p,Functional:()=>d,__namedExportsOrder:()=>m,default:()=>u}),c,l,u,d,f,p,m;function h(){return(h=e((()=>{r(),a(),c=n(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBPopover/Density`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},gap:{control:`boolean`},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},width:{control:`select`,options:[`auto`,`fixed`]},open:{control:`boolean`},autofocus:{control:`boolean`}}},d={args:{"data-density":`functional`,id:`popover-01`,trigger:(0,c.jsx)(i,{children:`Functional`}),children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(`ul`,{className:`popover-list`,children:[(0,c.jsx)(`li`,{children:`Popover Custom Item 1`}),(0,c.jsx)(`li`,{children:`Popover Custom Item 2`})]}),(0,c.jsx)(i,{children:`Popover Custom Item 3`})]})},render:e=>(0,c.jsx)(o,{...e})},f={args:{"data-density":`regular`,id:`popover-02`,trigger:(0,c.jsx)(i,{children:`(Default) Regular`}),children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(`ul`,{className:`popover-list`,children:[(0,c.jsx)(`li`,{children:`Popover Custom Item 1`}),(0,c.jsx)(`li`,{children:`Popover Custom Item 2`})]}),(0,c.jsx)(i,{children:`Popover Custom Item 3`})]})},render:e=>(0,c.jsx)(o,{...e})},p={args:{"data-density":`expressive`,id:`popover-03`,trigger:(0,c.jsx)(i,{children:`Expressive`}),children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(`ul`,{className:`popover-list`,children:[(0,c.jsx)(`li`,{children:`Popover Custom Item 1`}),(0,c.jsx)(`li`,{children:`Popover Custom Item 2`})]}),(0,c.jsx)(i,{children:`Popover Custom Item 3`})]})},render:e=>(0,c.jsx)(o,{...e})},m=[`Functional`,`DefaultRegular`,`Expressive`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "id": "popover-01",
    "trigger": <DBButton>Functional</DBButton>,
    "children": <><ul className="popover-list"><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul>
<DBButton>Popover Custom Item 3</DBButton></>
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "id": "popover-02",
    "trigger": <DBButton>(Default) Regular</DBButton>,
    "children": <><ul className="popover-list"><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul>
<DBButton>Popover Custom Item 3</DBButton></>
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "id": "popover-03",
    "trigger": <DBButton>Expressive</DBButton>,
    "children": <><ul className="popover-list"><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul>
<DBButton>Popover Custom Item 3</DBButton></>
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...p.parameters?.docs?.source}}}})))()}export{h as a,s as i,p as n,d as r,f as t};