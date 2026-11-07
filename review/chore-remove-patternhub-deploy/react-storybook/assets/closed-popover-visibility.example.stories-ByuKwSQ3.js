import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./button-KkPyUB9O.js";import{n as a,t as o}from"./checkbox-BP5SgGEE.js";import{n as s,t as c}from"./input-BY9e40gT.js";import{n as l,t as u}from"./popover-DW_M8qiw.js";import{n as d,t as f}from"./switch-D2E7Lzey.js";import{n as p,t as m}from"./textarea-C6LrZ4Aj.js";var h=t({Checkbox:()=>C,Input:()=>S,Switch:()=>y,SwitchVisualAid:()=>b,SwitchVisualAidClosed:()=>x,Textarea:()=>w,__namedExportsOrder:()=>T,default:()=>v}),g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{r(),a(),s(),d(),p(),l(),g=n(),{fn:_}=__STORYBOOK_MODULE_TEST__,v={title:`Components/DBPopover/Closed Popover Visibility`,component:u,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},gap:{control:`boolean`},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},width:{control:`select`,options:[`auto`,`fixed`]},open:{control:`boolean`},autofocus:{control:`boolean`}}},y={args:{id:`popover-closed-visibility-switch`,trigger:(0,g.jsx)(i,{children:`Switch`}),children:(0,g.jsx)(f,{children:`Switch me`})},render:e=>(0,g.jsx)(u,{...e})},b={args:{id:`popover-closed-visibility-switch-visual-aid`,trigger:(0,g.jsx)(i,{children:`Switch Visual Aid`}),children:(0,g.jsx)(f,{visualAid:!0,children:`Switch me`})},render:e=>(0,g.jsx)(u,{...e})},x={args:{id:`popover-closed-visibility-switch-visual-aid-closed`,open:!1,trigger:(0,g.jsx)(i,{children:`Switch Visual Aid Closed`}),children:(0,g.jsx)(f,{visualAid:!0,children:`Switch me`})},render:e=>(0,g.jsx)(u,{...e})},S={args:{id:`popover-closed-visibility-input`,trigger:(0,g.jsx)(i,{children:`Input`}),children:(0,g.jsx)(c,{label:`Input`,icon:`search`})},render:e=>(0,g.jsx)(u,{...e})},C={args:{id:`popover-closed-visibility-checkbox`,trigger:(0,g.jsx)(i,{children:`Checkbox`}),children:(0,g.jsx)(o,{children:`Check me`})},render:e=>(0,g.jsx)(u,{...e})},w={args:{id:`popover-closed-visibility-textarea`,trigger:(0,g.jsx)(i,{children:`Textarea`}),children:(0,g.jsx)(m,{label:`Textarea`})},render:e=>(0,g.jsx)(u,{...e})},T=[`Switch`,`SwitchVisualAid`,`SwitchVisualAidClosed`,`Input`,`Checkbox`,`Textarea`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-closed-visibility-switch",
    "trigger": <DBButton>Switch</DBButton>,
    "children": <DBSwitch>Switch me</DBSwitch>
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-closed-visibility-switch-visual-aid",
    "trigger": <DBButton>Switch Visual Aid</DBButton>,
    "children": <DBSwitch visualAid>Switch me</DBSwitch>
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-closed-visibility-switch-visual-aid-closed",
    "open": false,
    "trigger": <DBButton>Switch Visual Aid Closed</DBButton>,
    "children": <DBSwitch visualAid>Switch me</DBSwitch>
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-closed-visibility-input",
    "trigger": <DBButton>Input</DBButton>,
    "children": <DBInput label="Input" icon="search" />
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-closed-visibility-checkbox",
    "trigger": <DBButton>Checkbox</DBButton>,
    "children": <DBCheckbox>Check me</DBCheckbox>
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-closed-visibility-textarea",
    "trigger": <DBButton>Textarea</DBButton>,
    "children": <DBTextarea label="Textarea" />
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...w.parameters?.docs?.source}}}})))()}export{x as a,E as c,b as i,S as n,w as o,y as r,h as s,C as t};