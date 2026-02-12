import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as i}from"./popover-DNl23aon.js";import{D as o}from"./button-DnZnbJNC.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./document-scroll-listener-BixpNV2P.js";import"./floating-components-BNmGdAgy.js";const{fn:g}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBPopover/Density",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},spacing:{control:"select",options:["medium","small","large","none"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end","left","right","left-start","left-end","right-start","right-end"]},gap:{control:"boolean"},animation:{control:"boolean"},delay:{control:"select",options:["none","slow","fast"]},width:{control:"select",options:["auto","fixed"]},open:{control:"boolean"},autofocus:{control:"boolean"}}},r={args:{"data-density":"functional",id:"popover-01",trigger:e.jsx(o,{children:"Functional"}),children:e.jsxs(e.Fragment,{children:[e.jsxs("ul",{className:"popover-list",children:[e.jsx("li",{children:"Popover Custom Item 1"}),e.jsx("li",{children:"Popover Custom Item 2"})]}),e.jsx(o,{children:"Popover Custom Item 3"})]})},render:t=>e.jsx(i,{...t})},s={args:{"data-density":"regular",id:"popover-02",trigger:e.jsx(o,{children:"(Default) Regular"}),children:e.jsxs(e.Fragment,{children:[e.jsxs("ul",{className:"popover-list",children:[e.jsx("li",{children:"Popover Custom Item 1"}),e.jsx("li",{children:"Popover Custom Item 2"})]}),e.jsx(o,{children:"Popover Custom Item 3"})]})},render:t=>e.jsx(i,{...t})},n={args:{"data-density":"expressive",id:"popover-03",trigger:e.jsx(o,{children:"Expressive"}),children:e.jsxs(e.Fragment,{children:[e.jsxs("ul",{className:"popover-list",children:[e.jsx("li",{children:"Popover Custom Item 1"}),e.jsx("li",{children:"Popover Custom Item 2"})]}),e.jsx(o,{children:"Popover Custom Item 3"})]})},render:t=>e.jsx(i,{...t})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "id": "popover-01",
    "trigger": <DBButton>Functional</DBButton>,
    "children": <><ul className="popover-list"><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul>
      <DBButton>Popover Custom Item 3</DBButton></>
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "id": "popover-02",
    "trigger": <DBButton>(Default) Regular</DBButton>,
    "children": <><ul className="popover-list"><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul>
      <DBButton>Popover Custom Item 3</DBButton></>
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "id": "popover-03",
    "trigger": <DBButton>Expressive</DBButton>,
    "children": <><ul className="popover-list"><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul>
      <DBButton>Popover Custom Item 3</DBButton></>
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...n.parameters?.docs?.source}}};const B=["Functional","DefaultRegular","Expressive"];export{s as DefaultRegular,n as Expressive,r as Functional,B as __namedExportsOrder,x as default};
