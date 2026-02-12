import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as o}from"./tag-Bwjb1ZJJ.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./tooltip-COrPM-Vv.js";import"./document-scroll-listener-BixpNV2P.js";import"./floating-components-BNmGdAgy.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,v={title:"Components/DBTag/Example Strong",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{emphasis:{control:"select",options:["weak","strong"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},behavior:{control:"select",options:["static","removable"]},showIcon:{control:"boolean"},noText:{control:"boolean"},content:{control:"text"},showCheckState:{control:"boolean"},overflow:{control:"boolean"},removeButton:{control:"text"},text:{control:"text"},value:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onRemove:{action:"onRemove"}}},n={args:{emphasis:"strong",icon:"x_placeholder",behavior:"removable",children:e.jsx("button",{children:"Interactive Strong Button with Icon"})},render:r=>e.jsx(o,{...r})},t={args:{emphasis:"strong",icon:"x_placeholder",children:e.jsx("a",{href:"#",children:"Interactive Strong Link with Icon"})},render:r=>e.jsx(o,{...r})},a={args:{emphasis:"strong",icon:"x_placeholder",children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox"}),"Interactive Strong Checkbox with Icon"]})},render:r=>e.jsx(o,{...r})},c={args:{emphasis:"strong",icon:"x_placeholder",children:e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"radio03"}),"Interactive Strong Radio 1 with Icon"]})},render:r=>e.jsx(o,{...r})},i={args:{emphasis:"strong",icon:"x_placeholder",children:e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"radio03"}),"Interactive Strong Radio 2 with Icon"]})},render:r=>e.jsx(o,{...r})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "emphasis": "strong",
    "icon": "x_placeholder",
    "behavior": "removable",
    "children": <button>Interactive Strong Button with Icon</button>
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "emphasis": "strong",
    "icon": "x_placeholder",
    "children": <a href="#">Interactive Strong Link with Icon</a>
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "emphasis": "strong",
    "icon": "x_placeholder",
    "children": <label><input type="checkbox" />
                    Interactive Strong Checkbox with Icon
                </label>
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "emphasis": "strong",
    "icon": "x_placeholder",
    "children": <label><input type="radio" name="radio03" />
                    Interactive Strong Radio 1 with Icon
                </label>
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "emphasis": "strong",
    "icon": "x_placeholder",
    "children": <label><input type="radio" name="radio03" />
                    Interactive Strong Radio 2 with Icon
                </label>
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...i.parameters?.docs?.source}}};const b=["InteractiveStrongButtonwithIcon","InteractiveStrongLinkwithIcon","InteractiveStrongCheckboxwithIcon","InteractiveStrongRadio1withIcon","InteractiveStrongRadio2withIcon"];export{n as InteractiveStrongButtonwithIcon,a as InteractiveStrongCheckboxwithIcon,t as InteractiveStrongLinkwithIcon,c as InteractiveStrongRadio1withIcon,i as InteractiveStrongRadio2withIcon,b as __namedExportsOrder,v as default};
