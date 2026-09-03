import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./button-uFNhw9Y4.js";import{n as i,t as a}from"./checkbox-CCvUUCHv.js";import{n as o,t as s}from"./input-BS4wFODv.js";import{n as c,t as l}from"./popover-D13Md5bp.js";import{n as u,t as d}from"./switch-DxAnGT1r.js";import{n as f,t as p}from"./textarea-J7H3up8e.js";var m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{n(),i(),o(),u(),f(),c(),m=t(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/DBPopover/Closed Popover Visibility`,component:l,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},gap:{control:`boolean`},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},width:{control:`select`,options:[`auto`,`fixed`]},open:{control:`boolean`},autofocus:{control:`boolean`}}},_={args:{id:`popover-closed-visibility-switch`,trigger:(0,m.jsx)(r,{children:`Switch`}),children:(0,m.jsx)(d,{children:`Switch me`})},render:e=>(0,m.jsx)(l,{...e})},v={args:{id:`popover-closed-visibility-switch-visual-aid`,trigger:(0,m.jsx)(r,{children:`Switch Visual Aid`}),children:(0,m.jsx)(d,{visualAid:!0,children:`Switch me`})},render:e=>(0,m.jsx)(l,{...e})},y={args:{id:`popover-closed-visibility-switch-visual-aid-closed`,open:!1,trigger:(0,m.jsx)(r,{children:`Switch Visual Aid Closed`}),children:(0,m.jsx)(d,{visualAid:!0,children:`Switch me`})},render:e=>(0,m.jsx)(l,{...e})},b={args:{id:`popover-closed-visibility-input`,trigger:(0,m.jsx)(r,{children:`Input`}),children:(0,m.jsx)(s,{label:`Input`,icon:`search`})},render:e=>(0,m.jsx)(l,{...e})},x={args:{id:`popover-closed-visibility-checkbox`,trigger:(0,m.jsx)(r,{children:`Checkbox`}),children:(0,m.jsx)(a,{children:`Check me`})},render:e=>(0,m.jsx)(l,{...e})},S={args:{id:`popover-closed-visibility-textarea`,trigger:(0,m.jsx)(r,{children:`Textarea`}),children:(0,m.jsx)(p,{label:`Textarea`})},render:e=>(0,m.jsx)(l,{...e})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-closed-visibility-switch",
    "trigger": <DBButton>Switch</DBButton>,
    "children": <DBSwitch>Switch me</DBSwitch>
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-closed-visibility-switch-visual-aid",
    "trigger": <DBButton>Switch Visual Aid</DBButton>,
    "children": <DBSwitch visualAid>Switch me</DBSwitch>
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-closed-visibility-switch-visual-aid-closed",
    "open": false,
    "trigger": <DBButton>Switch Visual Aid Closed</DBButton>,
    "children": <DBSwitch visualAid>Switch me</DBSwitch>
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-closed-visibility-input",
    "trigger": <DBButton>Input</DBButton>,
    "children": <DBInput label="Input" icon="search" />
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-closed-visibility-checkbox",
    "trigger": <DBButton>Checkbox</DBButton>,
    "children": <DBCheckbox>Check me</DBCheckbox>
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-closed-visibility-textarea",
    "trigger": <DBButton>Textarea</DBButton>,
    "children": <DBTextarea label="Textarea" />
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...S.parameters?.docs?.source}}},C=[`Switch`,`SwitchVisualAid`,`SwitchVisualAidClosed`,`Input`,`Checkbox`,`Textarea`]})))()}w();export{x as Checkbox,b as Input,_ as Switch,v as SwitchVisualAid,y as SwitchVisualAidClosed,S as Textarea,C as __namedExportsOrder,g as default};