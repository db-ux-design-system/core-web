import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-DC6t-S6Q.js";import{C as n,k as r,t as i}from"./src-Dg0IbgPT.js";var a,o,s,c,l,u;e((()=>{i(),a=t(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBTooltip/Emphasis`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},showArrow:{control:`boolean`},emphasis:{control:`select`,options:[`weak`,`strong`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},width:{control:`select`,options:[`auto`,`fixed`]},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},variant:{control:`select`,options:[`description`,`label`]},autofocus:{control:`boolean`}}},c={args:{id:`tooltip-06`,children:`Tooltip`},render:e=>(0,a.jsxs)(r,{children:[`(Default) Weak`,(0,a.jsx)(n,{...e})]})},l={args:{emphasis:`strong`,id:`tooltip-07`,children:`Tooltip`},render:e=>(0,a.jsxs)(r,{children:[`Strong`,(0,a.jsx)(n,{...e})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-06",
    "children": "Tooltip"
  },
  render: (properties: any) => <DBButton>
                (Default) Weak
                <DBTooltip {...properties} /></DBButton>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "emphasis": "strong",
    "id": "tooltip-07",
    "children": "Tooltip"
  },
  render: (properties: any) => <DBButton>
                Strong
                <DBTooltip {...properties} /></DBButton>
}`,...l.parameters?.docs?.source}}},u=[`DefaultWeak`,`Strong`]}))();export{c as DefaultWeak,l as Strong,u as __namedExportsOrder,s as default};