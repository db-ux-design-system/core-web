import{n as e}from"./iframe-DgMPl3qj.js";import{n as t,t as n}from"./tooltip-vvs4VQYW.js";import{n as r,t as i}from"./button-BgHf0kga.js";import{n as a}from"./rolldown-runtime-DkW27tQK.js";var o,s,c,l,u,d;function f(){return(f=a((()=>{r(),t(),o=e(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTooltip/Animation`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},showArrow:{control:`boolean`},emphasis:{control:`select`,options:[`weak`,`strong`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},width:{control:`select`,options:[`auto`,`fixed`]},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},variant:{control:`select`,options:[`description`,`label`]},autofocus:{control:`boolean`}}},l={args:{id:`tooltip-14`,animation:!0,children:`Tooltip`},render:e=>(0,o.jsxs)(i,{children:[`(Default) True`,(0,o.jsx)(n,{...e})]})},u={args:{id:`tooltip-17`,animation:!1,children:`Tooltip`},render:e=>(0,o.jsxs)(i,{children:[`False`,(0,o.jsx)(n,{...e})]})},d=[`DefaultTrue`,`False`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-14",
    "animation": true,
    "children": "Tooltip"
  },
  render: (properties: any) => <DBButton>
                (Default) True
                <DBTooltip {...properties} /></DBButton>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-17",
    "animation": false,
    "children": "Tooltip"
  },
  render: (properties: any) => <DBButton>
                False
                <DBTooltip {...properties} /></DBButton>
}`,...u.parameters?.docs?.source}}}})))()}f();export{l as DefaultTrue,u as False,d as __namedExportsOrder,c as default};