import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./tooltip-Dn14px7s.js";import{n as i,t as a}from"./button-Db3rJr8M.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{i(),n(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTooltip/Width`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},showArrow:{control:`boolean`},emphasis:{control:`select`,options:[`weak`,`strong`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},width:{control:`select`,options:[`auto`,`fixed`]},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},variant:{control:`select`,options:[`description`,`label`]},autofocus:{control:`boolean`}}},l={args:{id:`tooltip-12`,children:`Max width, lorem ipsum dolor sit amet, consetetur sadipscing`},render:e=>(0,o.jsxs)(a,{children:[`(Default) Auto`,(0,o.jsx)(r,{...e})]})},u={args:{width:`fixed`,id:`tooltip-13`,children:`Max width, lorem ipsum dolor sit amet, consetetur sadipscing`},render:e=>(0,o.jsxs)(a,{children:[`Fixed`,(0,o.jsx)(r,{...e})]})},d=[`DefaultAuto`,`Fixed`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-12",
    "children": "Max width, lorem ipsum dolor sit amet, consetetur sadipscing"
  },
  render: (properties: any) => <DBButton>
                (Default) Auto
                <DBTooltip {...properties} /></DBButton>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "fixed",
    "id": "tooltip-13",
    "children": "Max width, lorem ipsum dolor sit amet, consetetur sadipscing"
  },
  render: (properties: any) => <DBButton>
                Fixed
                <DBTooltip {...properties} /></DBButton>
}`,...u.parameters?.docs?.source}}}})))()}f();export{l as DefaultAuto,u as Fixed,d as __namedExportsOrder,c as default};