import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-BpX3lQ6F.js";import{C as n,k as r,t as i}from"./src-CXJdFFf7.js";var a,o,s,c,l,u,d;e((()=>{i(),a=t(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBTooltip/Density`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},showArrow:{control:`boolean`},emphasis:{control:`select`,options:[`weak`,`strong`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},width:{control:`select`,options:[`auto`,`fixed`]},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},variant:{control:`select`,options:[`description`,`label`]},autofocus:{control:`boolean`}}},c={args:{id:`tooltip-01`,children:`Tooltip`},render:e=>(0,a.jsxs)(r,{"data-density":`functional`,children:[`Functional`,(0,a.jsx)(n,{...e})]})},l={args:{id:`tooltip-02`,children:`Tooltip`},render:e=>(0,a.jsxs)(r,{"data-density":`regular`,children:[`(Default) Regular`,(0,a.jsx)(n,{...e})]})},u={args:{id:`tooltip-03`,children:`Tooltip`},render:e=>(0,a.jsxs)(r,{"data-density":`expressive`,children:[`Expressive`,(0,a.jsx)(n,{...e})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-01",
    "children": "Tooltip"
  },
  render: (properties: any) => <DBButton data-density="functional">
                Functional
                <DBTooltip {...properties} /></DBButton>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-02",
    "children": "Tooltip"
  },
  render: (properties: any) => <DBButton data-density="regular">
                (Default) Regular
                <DBTooltip {...properties} /></DBButton>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-03",
    "children": "Tooltip"
  },
  render: (properties: any) => <DBButton data-density="expressive">
                Expressive
                <DBTooltip {...properties} /></DBButton>
}`,...u.parameters?.docs?.source}}},d=[`Functional`,`DefaultRegular`,`Expressive`]}))();export{l as DefaultRegular,u as Expressive,c as Functional,d as __namedExportsOrder,s as default};