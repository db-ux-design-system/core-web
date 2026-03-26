import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./tag-BscQ1Rmc.js";import"./index-B7He6KvY.js";import"./iframe-BrALMU0h.js";import"./preload-helper-B33QiPj0.js";import"./constants-C-ysBZRi.js";import"./tooltip-CWXMtt6D.js";import"./document-scroll-listener-tWgnathf.js";import"./floating-components-DAXMbqch.js";const{fn:a}=__STORYBOOK_MODULE_TEST__,b={title:"Components/DBTag/Disabled",component:n,parameters:{layout:"centered"},tags:["autodocs"],args:{onRemove:a()},argTypes:{emphasis:{control:"select",options:["weak","strong"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},behavior:{control:"select",options:["static","removable"]},showIcon:{control:"boolean"},noText:{control:"boolean"},content:{control:"text"},showCheckState:{control:"boolean"},overflow:{control:"boolean"},removeButton:{control:"text"},text:{control:"text"},value:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onRemove:{action:"onRemove"}}},o={args:{children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox"}),"(Default) False"]})},render:r=>e.jsx(n,{...r})},t={args:{children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",disabled:!0}),"True"]})},render:r=>e.jsx(n,{...r})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <label><input type="checkbox" />
                    (Default) False
                </label>
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <label><input type="checkbox" disabled />
                    True
                </label>
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...t.parameters?.docs?.source}}};const g=["DefaultFalse","True"];export{o as DefaultFalse,t as True,g as __namedExportsOrder,b as default};
