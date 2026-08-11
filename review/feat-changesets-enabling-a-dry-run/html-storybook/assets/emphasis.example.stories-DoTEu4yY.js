import{n as e}from"./iframe-BK-yX1Uu.js";import{n as t,t as n}from"./button-BYxugxPc.js";import{n as r,t as i}from"./tooltip-hraTwgGn.js";import{n as a}from"./rolldown-runtime-DkW27tQK.js";var o,s,c,l,u,d;function f(){return(f=a((()=>{t(),r(),o=e(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTooltip/Emphasis`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},showArrow:{control:`boolean`},emphasis:{control:`select`,options:[`weak`,`strong`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},width:{control:`select`,options:[`auto`,`fixed`]},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},variant:{control:`select`,options:[`description`,`label`]},autofocus:{control:`boolean`}}},l={args:{id:`tooltip-06`,children:`Tooltip`},render:e=>(0,o.jsxs)(n,{children:[`(Default) Weak`,(0,o.jsx)(i,{...e})]})},u={args:{emphasis:`strong`,id:`tooltip-07`,children:`Tooltip`},render:e=>(0,o.jsxs)(n,{children:[`Strong`,(0,o.jsx)(i,{...e})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-06",
    "children": "Tooltip"
  },
  render: (properties: any) => <DBButton>
                (Default) Weak
                <DBTooltip {...properties} /></DBButton>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "emphasis": "strong",
    "id": "tooltip-07",
    "children": "Tooltip"
  },
  render: (properties: any) => <DBButton>
                Strong
                <DBTooltip {...properties} /></DBButton>
}`,...u.parameters?.docs?.source}}},d=[`DefaultWeak`,`Strong`]})))()}f();export{l as DefaultWeak,u as Strong,d as __namedExportsOrder,c as default};