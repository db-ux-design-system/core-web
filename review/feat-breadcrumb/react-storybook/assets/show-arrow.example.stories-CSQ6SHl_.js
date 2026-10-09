import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./tooltip-DtmNVbdp.js";import{n as i,t as a}from"./button-u3MFf1pj.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{i(),n(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTooltip/Show Arrow`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},showArrow:{control:`boolean`},emphasis:{control:`select`,options:[`weak`,`strong`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},width:{control:`select`,options:[`auto`,`fixed`]},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},variant:{control:`select`,options:[`description`,`label`]},autofocus:{control:`boolean`}}},l={args:{id:`tooltip-04`,showArrow:!0,children:`Tooltip`},render:e=>(0,o.jsxs)(a,{children:[`(Default) True`,(0,o.jsx)(r,{...e})]})},u={args:{id:`tooltip-05`,showArrow:!1,children:`Tooltip`},render:e=>(0,o.jsxs)(a,{children:[`False`,(0,o.jsx)(r,{...e})]})},d=[`DefaultTrue`,`False`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-04",
    "showArrow": true,
    "children": "Tooltip"
  },
  render: (properties: any) => <DBButton>
                (Default) True
                <DBTooltip {...properties} /></DBButton>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-05",
    "showArrow": false,
    "children": "Tooltip"
  },
  render: (properties: any) => <DBButton>
                False
                <DBTooltip {...properties} /></DBButton>
}`,...u.parameters?.docs?.source}}}})))()}f();export{l as DefaultTrue,u as False,d as __namedExportsOrder,c as default};