import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./tooltip-DS3eeR6_.js";import{n as a,t as o}from"./button-Cd7Pz-Ib.js";var s=t({DefaultRegular:()=>f,Expressive:()=>p,Functional:()=>d,__namedExportsOrder:()=>m,default:()=>u}),c,l,u,d,f,p,m;function h(){return(h=e((()=>{a(),r(),c=n(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBTooltip/Density`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},showArrow:{control:`boolean`},emphasis:{control:`select`,options:[`weak`,`strong`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},width:{control:`select`,options:[`auto`,`fixed`]},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},variant:{control:`select`,options:[`description`,`label`]},autofocus:{control:`boolean`}}},d={args:{id:`tooltip-01`,children:`Tooltip`},render:e=>(0,c.jsxs)(o,{"data-density":`functional`,children:[`Functional`,(0,c.jsx)(i,{...e})]})},f={args:{id:`tooltip-02`,children:`Tooltip`},render:e=>(0,c.jsxs)(o,{"data-density":`regular`,children:[`(Default) Regular`,(0,c.jsx)(i,{...e})]})},p={args:{id:`tooltip-03`,children:`Tooltip`},render:e=>(0,c.jsxs)(o,{"data-density":`expressive`,children:[`Expressive`,(0,c.jsx)(i,{...e})]})},m=[`Functional`,`DefaultRegular`,`Expressive`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-01",
    "children": "Tooltip"
  },
  render: (properties: any) => <DBButton data-density="functional">
                Functional
                <DBTooltip {...properties} /></DBButton>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-02",
    "children": "Tooltip"
  },
  render: (properties: any) => <DBButton data-density="regular">
                (Default) Regular
                <DBTooltip {...properties} /></DBButton>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-03",
    "children": "Tooltip"
  },
  render: (properties: any) => <DBButton data-density="expressive">
                Expressive
                <DBTooltip {...properties} /></DBButton>
}`,...p.parameters?.docs?.source}}}})))()}export{h as a,s as i,p as n,d as r,f as t};