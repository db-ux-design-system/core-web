import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-DnaggZxp.js";import{f as n,k as r,t as i}from"./src-D3LY8vWO.js";var a,o,s,c,l,u;e((()=>{i(),a=t(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBPopover/Width`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},gap:{control:`boolean`},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},width:{control:`select`,options:[`auto`,`fixed`]},open:{control:`boolean`},autofocus:{control:`boolean`}}},c={args:{id:`popover-17`,trigger:(0,a.jsx)(r,{children:`(Default) Auto`}),children:`Max width, lorem ipsum dolor sit amet, consetetur sadipscing`},render:e=>(0,a.jsx)(n,{...e})},l={args:{width:`fixed`,id:`popover-18`,trigger:(0,a.jsx)(r,{children:`Fixed`}),children:`Max width, lorem ipsum dolor sit amet, consetetur sadipscing`},render:e=>(0,a.jsx)(n,{...e})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-17",
    "trigger": <DBButton>(Default) Auto</DBButton>,
    "children": "Max width, lorem ipsum dolor sit amet, consetetur sadipscing"
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "fixed",
    "id": "popover-18",
    "trigger": <DBButton>Fixed</DBButton>,
    "children": "Max width, lorem ipsum dolor sit amet, consetetur sadipscing"
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...l.parameters?.docs?.source}}},u=[`DefaultAuto`,`Fixed`]}))();export{c as DefaultAuto,l as Fixed,u as __namedExportsOrder,s as default};