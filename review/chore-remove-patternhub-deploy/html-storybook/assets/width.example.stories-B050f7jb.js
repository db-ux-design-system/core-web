import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./tooltip-BBe2G6H7.js";import{n as a,t as o}from"./button-KkPyUB9O.js";var s=t({DefaultAuto:()=>d,Fixed:()=>f,__namedExportsOrder:()=>p,default:()=>u}),c,l,u,d,f,p;function m(){return(m=e((()=>{a(),r(),c=n(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBTooltip/Width`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},showArrow:{control:`boolean`},emphasis:{control:`select`,options:[`weak`,`strong`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},width:{control:`select`,options:[`auto`,`fixed`]},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},variant:{control:`select`,options:[`description`,`label`]},autofocus:{control:`boolean`}}},d={args:{id:`tooltip-12`,children:`Max width, lorem ipsum dolor sit amet, consetetur sadipscing`},render:e=>(0,c.jsxs)(o,{children:[`(Default) Auto`,(0,c.jsx)(i,{...e})]})},f={args:{width:`fixed`,id:`tooltip-13`,children:`Max width, lorem ipsum dolor sit amet, consetetur sadipscing`},render:e=>(0,c.jsxs)(o,{children:[`Fixed`,(0,c.jsx)(i,{...e})]})},p=[`DefaultAuto`,`Fixed`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-12",
    "children": "Max width, lorem ipsum dolor sit amet, consetetur sadipscing"
  },
  render: (properties: any) => <DBButton>
                (Default) Auto
                <DBTooltip {...properties} /></DBButton>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "fixed",
    "id": "tooltip-13",
    "children": "Max width, lorem ipsum dolor sit amet, consetetur sadipscing"
  },
  render: (properties: any) => <DBButton>
                Fixed
                <DBTooltip {...properties} /></DBButton>
}`,...f.parameters?.docs?.source}}}})))()}export{s as i,f as n,m as r,d as t};