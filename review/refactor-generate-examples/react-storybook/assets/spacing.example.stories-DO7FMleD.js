import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./popover-DNl23aon.js";import{D as o}from"./button-DnZnbJNC.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./document-scroll-listener-BixpNV2P.js";import"./floating-components-BNmGdAgy.js";const{fn:B}=__STORYBOOK_MODULE_TEST__,h={title:"Components/DBPopover/Spacing",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},spacing:{control:"select",options:["medium","small","large","none"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end","left","right","left-start","left-end","right-start","right-end"]},gap:{control:"boolean"},animation:{control:"boolean"},delay:{control:"select",options:["none","slow","fast"]},width:{control:"select",options:["auto","fixed"]},open:{control:"boolean"},autofocus:{control:"boolean"}}},s={args:{spacing:"small",id:"popover-04",trigger:e.jsx(o,{children:"(Default) Small"}),children:e.jsxs(e.Fragment,{children:[e.jsxs("ul",{className:"popover-list",children:[e.jsx("li",{children:"Popover Custom Item 1"}),e.jsx("li",{children:"Popover Custom Item 2"})]}),e.jsx(o,{children:"Popover Custom Item 3"})]})},render:r=>e.jsx(t,{...r})},n={args:{spacing:"medium",id:"popover-05",trigger:e.jsx(o,{children:"Medium"}),children:e.jsxs(e.Fragment,{children:[e.jsxs("ul",{className:"popover-list",children:[e.jsx("li",{children:"Popover Custom Item 1"}),e.jsx("li",{children:"Popover Custom Item 2"})]}),e.jsx(o,{children:"Popover Custom Item 3"})]})},render:r=>e.jsx(t,{...r})},i={args:{spacing:"large",id:"popover-055",trigger:e.jsx(o,{children:"Large"}),children:e.jsxs(e.Fragment,{children:[e.jsxs("ul",{className:"popover-list",children:[e.jsx("li",{children:"Popover Custom Item 1"}),e.jsx("li",{children:"Popover Custom Item 2"})]}),e.jsx(o,{children:"Popover Custom Item 3"})]})},render:r=>e.jsx(t,{...r})},l={args:{spacing:"none",id:"popover-06",trigger:e.jsx(o,{children:"None"}),children:e.jsxs(e.Fragment,{children:[e.jsxs("ul",{className:"popover-list",children:[e.jsx("li",{children:"Popover Custom Item 1"}),e.jsx("li",{children:"Popover Custom Item 2"})]}),e.jsx(o,{children:"Popover Custom Item 3"})]})},render:r=>e.jsx(t,{...r})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "small",
    "id": "popover-04",
    "trigger": <DBButton>(Default) Small</DBButton>,
    "children": <><ul className="popover-list"><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul>
      <DBButton>Popover Custom Item 3</DBButton></>
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "medium",
    "id": "popover-05",
    "trigger": <DBButton>Medium</DBButton>,
    "children": <><ul className="popover-list"><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul>
      <DBButton>Popover Custom Item 3</DBButton></>
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "large",
    "id": "popover-055",
    "trigger": <DBButton>Large</DBButton>,
    "children": <><ul className="popover-list"><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul>
      <DBButton>Popover Custom Item 3</DBButton></>
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "none",
    "id": "popover-06",
    "trigger": <DBButton>None</DBButton>,
    "children": <><ul className="popover-list"><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul>
      <DBButton>Popover Custom Item 3</DBButton></>
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...l.parameters?.docs?.source}}};const x=["DefaultSmall","Medium","Large","None"];export{s as DefaultSmall,i as Large,n as Medium,l as None,x as __namedExportsOrder,h as default};
