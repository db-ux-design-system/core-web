import{j as o}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./popover-DNl23aon.js";import{D as r}from"./button-DnZnbJNC.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./document-scroll-listener-BixpNV2P.js";import"./floating-components-BNmGdAgy.js";const{fn:g}=__STORYBOOK_MODULE_TEST__,v={title:"Components/DBPopover/Animation",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},spacing:{control:"select",options:["medium","small","large","none"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end","left","right","left-start","left-end","right-start","right-end"]},gap:{control:"boolean"},animation:{control:"boolean"},delay:{control:"select",options:["none","slow","fast"]},width:{control:"select",options:["auto","fixed"]},open:{control:"boolean"},autofocus:{control:"boolean"}}},e={args:{id:"popover-13",animation:!0,trigger:o.jsx(r,{children:"(Default) True"}),children:o.jsxs(o.Fragment,{children:[o.jsxs("ul",{className:"popover-list",children:[o.jsx("li",{children:"Popover Custom Item 1"}),o.jsx("li",{children:"Popover Custom Item 2"})]}),o.jsx(r,{children:"Popover Custom Item 3"})]})},render:s=>o.jsx(n,{...s})},t={args:{id:"popover-16",animation:!1,trigger:o.jsx(r,{children:"False"}),children:o.jsxs(o.Fragment,{children:[o.jsxs("ul",{className:"popover-list",children:[o.jsx("li",{children:"Popover Custom Item 1"}),o.jsx("li",{children:"Popover Custom Item 2"})]}),o.jsx(r,{children:"Popover Custom Item 3"})]})},render:s=>o.jsx(n,{...s})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-13",
    "animation": true,
    "trigger": <DBButton>(Default) True</DBButton>,
    "children": <><ul className="popover-list"><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul>
      <DBButton>Popover Custom Item 3</DBButton></>
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-16",
    "animation": false,
    "trigger": <DBButton>False</DBButton>,
    "children": <><ul className="popover-list"><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul>
      <DBButton>Popover Custom Item 3</DBButton></>
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...t.parameters?.docs?.source}}};const B=["DefaultTrue","False"];export{e as DefaultTrue,t as False,B as __namedExportsOrder,v as default};
