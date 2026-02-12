import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./icon-rVozKz1H.js";import{D as i}from"./infotext-CZi0xQss.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBIcon/Density",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{icon:{control:"select",options:["arrow_down","arrow_left","arrow_right","arrow_up","arrow_up_right","brand","calendar","check-circle","check","check_circle","chevron_down","chevron_left","chevron_right","chevron_up","circle","circular_arrows","clock","cross","cross_circle","exclamation_mark_circle","exclamation_mark_triangle","information_circle","magnifying_glass","menu","minus","plus","resize_handle_corner","x_placeholder"]},variant:{control:"text"},weight:{control:"select",options:["16","20","24","32","48","64"]},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},r={args:{"data-density":"functional",icon:"x_placeholder",children:"Functional"},render:n=>e.jsxs("div",{"data-density":"functional",children:[e.jsx(i,{icon:"none",size:"small",semantic:"informational",children:"Functional"}),e.jsx(t,{...n})]})},a={args:{"data-density":"regular",icon:"x_placeholder",children:"(Default) Regular"},render:n=>e.jsxs("div",{"data-density":"regular",children:[e.jsx(i,{icon:"none",size:"small",semantic:"informational",children:"(Default) Regular"}),e.jsx(t,{...n})]})},o={args:{"data-density":"expressive",icon:"x_placeholder",children:"Expressive"},render:n=>e.jsxs("div",{"data-density":"expressive",children:[e.jsx(i,{icon:"none",size:"small",semantic:"informational",children:"Expressive"}),e.jsx(t,{...n})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "icon": "x_placeholder",
    "children": "Functional"
  },
  render: (properties: any) => <div data-density="functional"><DBInfotext icon="none" size="small" semantic="informational">
                    Functional
                </DBInfotext><DBIcon {...properties} /></div>
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "icon": "x_placeholder",
    "children": "(Default) Regular"
  },
  render: (properties: any) => <div data-density="regular"><DBInfotext icon="none" size="small" semantic="informational">
                    (Default) Regular
                </DBInfotext><DBIcon {...properties} /></div>
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "icon": "x_placeholder",
    "children": "Expressive"
  },
  render: (properties: any) => <div data-density="expressive"><DBInfotext icon="none" size="small" semantic="informational">
                    Expressive
                </DBInfotext><DBIcon {...properties} /></div>
}`,...o.parameters?.docs?.source}}};const _=["Functional","DefaultRegular","Expressive"];export{a as DefaultRegular,o as Expressive,r as Functional,_ as __namedExportsOrder,x as default};
