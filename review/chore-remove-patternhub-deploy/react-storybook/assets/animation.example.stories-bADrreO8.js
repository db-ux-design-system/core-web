import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./tooltip-w7zRrU-p.js";import{n as a,t as o}from"./button-KkPyUB9O.js";var s=t({DefaultTrue:()=>d,False:()=>f,__namedExportsOrder:()=>p,default:()=>u}),c,l,u,d,f,p;function m(){return(m=e((()=>{a(),r(),c=n(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBTooltip/Animation`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},showArrow:{control:`boolean`},emphasis:{control:`select`,options:[`weak`,`strong`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},width:{control:`select`,options:[`auto`,`fixed`]},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},variant:{control:`select`,options:[`description`,`label`]},autofocus:{control:`boolean`}}},d={args:{id:`tooltip-14`,animation:!0,children:`Tooltip`},render:e=>(0,c.jsxs)(o,{children:[`(Default) True`,(0,c.jsx)(i,{...e})]})},f={args:{id:`tooltip-17`,animation:!1,children:`Tooltip`},render:e=>(0,c.jsxs)(o,{children:[`False`,(0,c.jsx)(i,{...e})]})},p=[`DefaultTrue`,`False`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-14",
    "animation": true,
    "children": "Tooltip"
  },
  render: (properties: any) => <DBButton>
                (Default) True
                <DBTooltip {...properties} /></DBButton>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-17",
    "animation": false,
    "children": "Tooltip"
  },
  render: (properties: any) => <DBButton>
                False
                <DBTooltip {...properties} /></DBButton>
}`,...f.parameters?.docs?.source}}}})))()}export{u as a,m as i,f as n,s as r,d as t};