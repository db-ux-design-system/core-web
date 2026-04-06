import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as r}from"./tag-G9ZbFgdW.js";import"./index-D2E5Z_bU.js";import"./iframe-BGst_xor.js";import"./preload-helper-Cj7qu-EO.js";import"./constants-C-ysBZRi.js";import"./tooltip-C2klpRtE.js";import"./document-scroll-listener-C9UMSkzw.js";import"./floating-components-DAXMbqch.js";const{fn:s}=__STORYBOOK_MODULE_TEST__,v={title:"Components/DBTag/Example Strong",component:r,parameters:{layout:"centered"},tags:["autodocs"],args:{onRemove:s()},argTypes:{emphasis:{control:"select",options:["weak","strong"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},behavior:{control:"select",options:["static","removable"]},showIcon:{control:"boolean"},noText:{control:"boolean"},content:{control:"text"},showCheckState:{control:"boolean"},overflow:{control:"boolean"},removeButton:{control:"text"},text:{control:"text"},value:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onRemove:{action:"onRemove"}}},n={args:{emphasis:"strong",icon:"x_placeholder",behavior:"removable",children:e.jsx("button",{children:"Interactive Strong Button with Icon"})},render:o=>e.jsx(r,{...o})},t={args:{emphasis:"strong",icon:"x_placeholder",children:e.jsx("a",{href:"#",children:"Interactive Strong Link with Icon"})},render:o=>e.jsx(r,{...o})},a={args:{emphasis:"strong",icon:"x_placeholder",children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox"}),"Interactive Strong Checkbox with Icon"]})},render:o=>e.jsx(r,{...o})},c={args:{emphasis:"strong",icon:"x_placeholder",children:e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"radio03"}),"Interactive Strong Radio 1 with Icon"]})},render:o=>e.jsx(r,{...o})},i={args:{emphasis:"strong",icon:"x_placeholder",children:e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"radio03"}),"Interactive Strong Radio 2 with Icon"]})},render:o=>e.jsx(r,{...o})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
