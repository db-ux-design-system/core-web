import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./tooltip-pKQjXXfZ.js";import{n as a,t as o}from"./button-HiccZljf.js";var s=t({DefaultNone:()=>d,Fast:()=>p,Slow:()=>f,__namedExportsOrder:()=>m,default:()=>u}),c,l,u,d,f,p,m;function h(){return(h=e((()=>{a(),r(),c=n(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBTooltip/Delay`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},showArrow:{control:`boolean`},emphasis:{control:`select`,options:[`weak`,`strong`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},width:{control:`select`,options:[`auto`,`fixed`]},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},variant:{control:`select`,options:[`description`,`label`]},autofocus:{control:`boolean`}}},d={args:{id:`tooltip-144`,delay:`none`,children:`Tooltip`},render:e=>(0,c.jsxs)(o,{children:[`(Default) None`,(0,c.jsx)(i,{...e})]})},f={args:{delay:`slow`,id:`tooltip-15`,children:`Tooltip`},render:e=>(0,c.jsxs)(o,{children:[`Slow`,(0,c.jsx)(i,{...e})]})},p={args:{delay:`fast`,id:`tooltip-16`,children:`Tooltip`},render:e=>(0,c.jsxs)(o,{children:[`Fast`,(0,c.jsx)(i,{...e})]})},m=[`DefaultNone`,`Slow`,`Fast`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-144",
    "delay": "none",
    "children": "Tooltip"
  },
  render: (properties: any) => <DBButton>
                (Default) None
                <DBTooltip {...properties} /></DBButton>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "slow",
    "id": "tooltip-15",
    "children": "Tooltip"
  },
  render: (properties: any) => <DBButton>
                Slow
                <DBTooltip {...properties} /></DBButton>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "fast",
    "id": "tooltip-16",
    "children": "Tooltip"
  },
  render: (properties: any) => <DBButton>
                Fast
                <DBTooltip {...properties} /></DBButton>
}`,...p.parameters?.docs?.source}}}})))()}export{h as a,s as i,p as n,f as r,d as t};