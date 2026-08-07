import{n as e}from"./iframe-BvYYCb-a.js";import{n as t,t as n}from"./button-BccTB38S.js";import{n as r,t as i}from"./tooltip-jLHbDP4a.js";import{n as a}from"./rolldown-runtime-DkW27tQK.js";var o,s,c,l,u,d,f;function p(){return(p=a((()=>{t(),r(),o=e(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTooltip/Delay`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},showArrow:{control:`boolean`},emphasis:{control:`select`,options:[`weak`,`strong`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},width:{control:`select`,options:[`auto`,`fixed`]},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},variant:{control:`select`,options:[`description`,`label`]},autofocus:{control:`boolean`}}},l={args:{id:`tooltip-144`,delay:`none`,children:`Tooltip`},render:e=>(0,o.jsxs)(n,{children:[`(Default) None`,(0,o.jsx)(i,{...e})]})},u={args:{delay:`slow`,id:`tooltip-15`,children:`Tooltip`},render:e=>(0,o.jsxs)(n,{children:[`Slow`,(0,o.jsx)(i,{...e})]})},d={args:{delay:`fast`,id:`tooltip-16`,children:`Tooltip`},render:e=>(0,o.jsxs)(n,{children:[`Fast`,(0,o.jsx)(i,{...e})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-144",
    "delay": "none",
    "children": "Tooltip"
  },
  render: (properties: any) => <DBButton>
                (Default) None
                <DBTooltip {...properties} /></DBButton>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "slow",
    "id": "tooltip-15",
    "children": "Tooltip"
  },
  render: (properties: any) => <DBButton>
                Slow
                <DBTooltip {...properties} /></DBButton>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "fast",
    "id": "tooltip-16",
    "children": "Tooltip"
  },
  render: (properties: any) => <DBButton>
                Fast
                <DBTooltip {...properties} /></DBButton>
}`,...d.parameters?.docs?.source}}},f=[`DefaultNone`,`Slow`,`Fast`]})))()}p();export{l as DefaultNone,d as Fast,u as Slow,f as __namedExportsOrder,c as default};