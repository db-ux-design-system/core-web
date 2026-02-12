import{j as o}from"./jsx-runtime-u17CrQMm.js";import{D as l}from"./popover-DNl23aon.js";import{D as e}from"./button-DnZnbJNC.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./document-scroll-listener-BixpNV2P.js";import"./floating-components-BNmGdAgy.js";const{fn:g}=__STORYBOOK_MODULE_TEST__,B={title:"Components/DBPopover/Delay",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},spacing:{control:"select",options:["medium","small","large","none"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end","left","right","left-start","left-end","right-start","right-end"]},gap:{control:"boolean"},animation:{control:"boolean"},delay:{control:"select",options:["none","slow","fast"]},width:{control:"select",options:["auto","fixed"]},open:{control:"boolean"},autofocus:{control:"boolean"}}},r={args:{id:"popover-133",delay:"none",trigger:o.jsx(e,{children:"(Default) None"}),children:o.jsxs(o.Fragment,{children:[o.jsxs("ul",{className:"popover-list",children:[o.jsx("li",{children:"Popover Custom Item 1"}),o.jsx("li",{children:"Popover Custom Item 2"})]}),o.jsx(e,{children:"Popover Custom Item 3"})]})},render:t=>o.jsx(l,{...t})},s={args:{delay:"slow",id:"popover-14",trigger:o.jsx(e,{children:"Slow"}),children:o.jsxs(o.Fragment,{children:[o.jsxs("ul",{className:"popover-list",children:[o.jsx("li",{children:"Popover Custom Item 1"}),o.jsx("li",{children:"Popover Custom Item 2"})]}),o.jsx(e,{children:"Popover Custom Item 3"})]})},render:t=>o.jsx(l,{...t})},n={args:{delay:"fast",id:"popover-15",trigger:o.jsx(e,{children:"Fast"}),children:o.jsxs(o.Fragment,{children:[o.jsxs("ul",{className:"popover-list",children:[o.jsx("li",{children:"Popover Custom Item 1"}),o.jsx("li",{children:"Popover Custom Item 2"})]}),o.jsx(e,{children:"Popover Custom Item 3"})]})},render:t=>o.jsx(l,{...t})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-133",
    "delay": "none",
    "trigger": <DBButton>(Default) None</DBButton>,
    "children": <><ul className="popover-list"><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul>
      <DBButton>Popover Custom Item 3</DBButton></>
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "slow",
    "id": "popover-14",
    "trigger": <DBButton>Slow</DBButton>,
    "children": <><ul className="popover-list"><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul>
      <DBButton>Popover Custom Item 3</DBButton></>
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "fast",
    "id": "popover-15",
    "trigger": <DBButton>Fast</DBButton>,
    "children": <><ul className="popover-list"><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul>
      <DBButton>Popover Custom Item 3</DBButton></>
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...n.parameters?.docs?.source}}};const h=["DefaultNone","Slow","Fast"];export{r as DefaultNone,n as Fast,s as Slow,h as __namedExportsOrder,B as default};
