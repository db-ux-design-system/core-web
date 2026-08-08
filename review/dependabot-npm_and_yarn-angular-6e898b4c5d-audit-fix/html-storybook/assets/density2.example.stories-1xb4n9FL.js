import{n as e}from"./iframe-DON8Zm2O.js";import{n as t,t as n}from"./button-KR6HT1Cw.js";import{n as r,t as i}from"./tooltip-DlM4pX48.js";import{n as a}from"./rolldown-runtime-DkW27tQK.js";var o,s,c,l,u,d,f;function p(){return(p=a((()=>{t(),r(),o=e(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTooltip/Density`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},showArrow:{control:`boolean`},emphasis:{control:`select`,options:[`weak`,`strong`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},width:{control:`select`,options:[`auto`,`fixed`]},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},variant:{control:`select`,options:[`description`,`label`]},autofocus:{control:`boolean`}}},l={args:{id:`tooltip-01`,children:`Tooltip`},render:e=>(0,o.jsxs)(n,{"data-density":`functional`,children:[`Functional`,(0,o.jsx)(i,{...e})]})},u={args:{id:`tooltip-02`,children:`Tooltip`},render:e=>(0,o.jsxs)(n,{"data-density":`regular`,children:[`(Default) Regular`,(0,o.jsx)(i,{...e})]})},d={args:{id:`tooltip-03`,children:`Tooltip`},render:e=>(0,o.jsxs)(n,{"data-density":`expressive`,children:[`Expressive`,(0,o.jsx)(i,{...e})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-01",
    "children": "Tooltip"
  },
  render: (properties: any) => <DBButton data-density="functional">
                Functional
                <DBTooltip {...properties} /></DBButton>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-02",
    "children": "Tooltip"
  },
  render: (properties: any) => <DBButton data-density="regular">
                (Default) Regular
                <DBTooltip {...properties} /></DBButton>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-03",
    "children": "Tooltip"
  },
  render: (properties: any) => <DBButton data-density="expressive">
                Expressive
                <DBTooltip {...properties} /></DBButton>
}`,...d.parameters?.docs?.source}}},f=[`Functional`,`DefaultRegular`,`Expressive`]})))()}p();export{u as DefaultRegular,d as Expressive,l as Functional,f as __namedExportsOrder,c as default};