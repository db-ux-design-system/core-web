import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as a}from"./tag-176s1pVZ.js";import"./index-D2E5Z_bU.js";import"./iframe-CiUFPK1z.js";import"./preload-helper-BVVqbGQe.js";import"./constants-C-ysBZRi.js";import"./tooltip-D8nNOj6C.js";import"./document-scroll-listener-C9UMSkzw.js";import"./floating-components-DAXMbqch.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBTag/Show Check State",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{emphasis:{control:"select",options:["weak","strong"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},behavior:{control:"select",options:["static","removable"]},showIcon:{control:"boolean"},noText:{control:"boolean"},content:{control:"text"},showCheckState:{control:"boolean"},overflow:{control:"boolean"},removeButton:{control:"text"},text:{control:"text"},value:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onRemove:{action:"onRemove"}}},o={args:{showCheckState:!0,children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox"}),"(Default) True"]})},render:r=>e.jsx(a,{...r})},t={args:{showCheckState:!1,children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox"}),"False"]})},render:r=>e.jsx(a,{...r})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "showCheckState": true,
    "children": <label><input type="checkbox" />
                    (Default) True
                </label>
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "showCheckState": false,
    "children": <label><input type="checkbox" />
                    False
                </label>
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...t.parameters?.docs?.source}}};const b=["DefaultTrue","False"];export{o as DefaultTrue,t as False,b as __namedExportsOrder,x as default};
