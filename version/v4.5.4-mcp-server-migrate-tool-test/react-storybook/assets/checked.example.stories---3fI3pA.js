import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./tag-sjyn8Pdo.js";import"./index-D2E5Z_bU.js";import"./iframe-COlR4DG9.js";import"./preload-helper-DBseQLlf.js";import"./constants-C-ysBZRi.js";import"./tooltip-BMIfe66k.js";import"./document-scroll-listener-C9UMSkzw.js";import"./floating-components-DAXMbqch.js";const{fn:a}=__STORYBOOK_MODULE_TEST__,h={title:"Components/DBTag/Checked",component:n,parameters:{layout:"centered"},tags:["autodocs"],args:{onRemove:a()},argTypes:{emphasis:{control:"select",options:["weak","strong"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},behavior:{control:"select",options:["static","removable"]},showIcon:{control:"boolean"},noText:{control:"boolean"},content:{control:"text"},showCheckState:{control:"boolean"},overflow:{control:"boolean"},removeButton:{control:"text"},text:{control:"text"},value:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onRemove:{action:"onRemove"}}},o={args:{children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox"}),"(Default) False"]})},render:r=>e.jsx(n,{...r})},t={args:{children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:!0}),"True"]})},render:r=>e.jsx(n,{...r})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <label><input type="checkbox" />
                    (Default) False
                </label>
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <label><input type="checkbox" checked />
                    True
                </label>
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...t.parameters?.docs?.source}}};const b=["DefaultFalse","True"];export{o as DefaultFalse,t as True,b as __namedExportsOrder,h as default};
