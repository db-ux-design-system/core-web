import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./tag-Bwjb1ZJJ.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./tooltip-COrPM-Vv.js";import"./document-scroll-listener-BixpNV2P.js";import"./floating-components-BNmGdAgy.js";const{fn:I}=__STORYBOOK_MODULE_TEST__,j={title:"Components/DBTag/Behavior",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{emphasis:{control:"select",options:["weak","strong"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},behavior:{control:"select",options:["static","removable"]},showIcon:{control:"boolean"},noText:{control:"boolean"},content:{control:"text"},showCheckState:{control:"boolean"},overflow:{control:"boolean"},removeButton:{control:"text"},text:{control:"text"},value:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onRemove:{action:"onRemove"}}},a={args:{children:"(Default) Static"},render:r=>e.jsx(t,{...r})},o={args:{behavior:"removable",children:"Removable"},render:r=>e.jsx(t,{...r})},n={args:{children:e.jsx("button",{children:"Interactive (Button)"})},render:r=>e.jsx(t,{...r})},s={args:{children:e.jsx("a",{href:"#",children:"Interactive (Link)"})},render:r=>e.jsx(t,{...r})},c={args:{children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox"}),"Interactive (Checkbox)"]})},render:r=>e.jsx(t,{...r})},i={args:{children:e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"radio01"}),"Interactive (Radio)"]})},render:r=>e.jsx(t,{...r})},p={args:{children:e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"radio01"}),"Interactive Radio 2"]})},render:r=>e.jsx(t,{...r})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "children": "(Default) Static"
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "behavior": "removable",
    "children": "Removable"
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <button>Interactive (Button)</button>
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <a href="#">Interactive (Link)</a>
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <label><input type="checkbox" />
                    Interactive (Checkbox)
                </label>
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <label><input type="radio" name="radio01" />
                    Interactive (Radio)
                </label>
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <label><input type="radio" name="radio01" />
                    Interactive Radio 2
                </label>
  },
  render: (properties: any) => <DBTag {...properties} />
}`,...p.parameters?.docs?.source}}};const B=["DefaultStatic","Removable","InteractiveButton","InteractiveLink","InteractiveCheckbox","InteractiveRadio","InteractiveRadio2"];export{a as DefaultStatic,n as InteractiveButton,c as InteractiveCheckbox,s as InteractiveLink,i as InteractiveRadio,p as InteractiveRadio2,o as Removable,B as __namedExportsOrder,j as default};
