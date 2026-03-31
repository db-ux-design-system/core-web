import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./navigation-item-DC_qTG24.js";import"./index-D2E5Z_bU.js";import"./iframe-COlR4DG9.js";import"./preload-helper-DBseQLlf.js";import"./constants-C-ysBZRi.js";import"./floating-components-DAXMbqch.js";import"./button-X8B1aIga.js";const{fn:s}=__STORYBOOK_MODULE_TEST__,g={title:"Components/DBNavigationItem/Density",component:n,parameters:{layout:"centered"},tags:["autodocs"],args:{onClick:s()},argTypes:{disabled:{control:"boolean"},active:{control:"boolean"},showIcon:{control:"boolean"},width:{control:"select",options:["full","auto"]},wrap:{control:"boolean"},text:{control:"text"},subNavigationExpanded:{control:"boolean"},backButtonId:{control:"text"},backButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},t={args:{"data-density":"functional",children:e.jsx("a",{href:"#",children:"Functional"})},render:r=>e.jsx("ul",{children:e.jsx(n,{...r})})},a={args:{"data-density":"regular",children:e.jsx("a",{href:"#",children:"(Default) Regular"})},render:r=>e.jsx("ul",{children:e.jsx(n,{...r})})},o={args:{"data-density":"expressive",children:e.jsx("a",{href:"#",children:"Expressive"})},render:r=>e.jsx("ul",{children:e.jsx(n,{...r})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "children": <a href="#">Functional</a>
  },
  render: (properties: any) => <ul><DBNavigationItem {...properties} /></ul>
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "children": <a href="#">(Default) Regular</a>
  },
  render: (properties: any) => <ul><DBNavigationItem {...properties} /></ul>
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "children": <a href="#">Expressive</a>
  },
  render: (properties: any) => <ul><DBNavigationItem {...properties} /></ul>
}`,...o.parameters?.docs?.source}}};const h=["Functional","DefaultRegular","Expressive"];export{a as DefaultRegular,o as Expressive,t as Functional,h as __namedExportsOrder,g as default};
