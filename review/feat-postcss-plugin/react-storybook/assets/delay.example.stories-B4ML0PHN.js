import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-DnaggZxp.js";import{C as n,k as r,t as i}from"./src-D3LY8vWO.js";var a,o,s,c,l,u,d;e((()=>{i(),a=t(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBTooltip/Delay`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},showArrow:{control:`boolean`},emphasis:{control:`select`,options:[`weak`,`strong`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},width:{control:`select`,options:[`auto`,`fixed`]},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},variant:{control:`select`,options:[`description`,`label`]},autofocus:{control:`boolean`}}},c={args:{id:`tooltip-144`,delay:`none`,children:`Tooltip`},render:e=>(0,a.jsxs)(r,{children:[`(Default) None`,(0,a.jsx)(n,{...e})]})},l={args:{delay:`slow`,id:`tooltip-15`,children:`Tooltip`},render:e=>(0,a.jsxs)(r,{children:[`Slow`,(0,a.jsx)(n,{...e})]})},u={args:{delay:`fast`,id:`tooltip-16`,children:`Tooltip`},render:e=>(0,a.jsxs)(r,{children:[`Fast`,(0,a.jsx)(n,{...e})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-144",
    "delay": "none",
    "children": "Tooltip"
  },
  render: (properties: any) => <DBButton>
                (Default) None
                <DBTooltip {...properties} /></DBButton>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "slow",
    "id": "tooltip-15",
    "children": "Tooltip"
  },
  render: (properties: any) => <DBButton>
                Slow
                <DBTooltip {...properties} /></DBButton>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "fast",
    "id": "tooltip-16",
    "children": "Tooltip"
  },
  render: (properties: any) => <DBButton>
                Fast
                <DBTooltip {...properties} /></DBButton>
}`,...u.parameters?.docs?.source}}},d=[`DefaultNone`,`Slow`,`Fast`]}))();export{c as DefaultNone,u as Fast,l as Slow,d as __namedExportsOrder,s as default};