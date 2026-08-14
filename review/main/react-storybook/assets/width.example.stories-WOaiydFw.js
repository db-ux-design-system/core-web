import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./button-D-Lmbt00.js";import{n as i,t as a}from"./popover-BFr_g5mh.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),i(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBPopover/Width`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},gap:{control:`boolean`},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},width:{control:`select`,options:[`auto`,`fixed`]},open:{control:`boolean`},autofocus:{control:`boolean`}}},l={args:{id:`popover-17`,trigger:(0,o.jsx)(r,{children:`(Default) Auto`}),children:`Max width, lorem ipsum dolor sit amet, consetetur sadipscing`},render:e=>(0,o.jsx)(a,{...e})},u={args:{width:`fixed`,id:`popover-18`,trigger:(0,o.jsx)(r,{children:`Fixed`}),children:`Max width, lorem ipsum dolor sit amet, consetetur sadipscing`},render:e=>(0,o.jsx)(a,{...e})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-17",
    "trigger": <DBButton>(Default) Auto</DBButton>,
    "children": "Max width, lorem ipsum dolor sit amet, consetetur sadipscing"
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "fixed",
    "id": "popover-18",
    "trigger": <DBButton>Fixed</DBButton>,
    "children": "Max width, lorem ipsum dolor sit amet, consetetur sadipscing"
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...u.parameters?.docs?.source}}},d=[`DefaultAuto`,`Fixed`]})))()}f();export{l as DefaultAuto,u as Fixed,d as __namedExportsOrder,c as default};