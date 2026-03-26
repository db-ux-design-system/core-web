import{j as a}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./breadcrumb-DXWAXB0V.js";import"./index-B7He6KvY.js";import"./iframe-Dz5uaCij.js";import"./preload-helper-B33QiPj0.js";import"./breadcrumb-item-BkNPxWa1.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,n={title:"Components/DBBreadcrumb/Collapsed",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium"]},separator:{control:"select",options:["chevron","slash"]},maxItems:{control:"number"},ellipsisAriaLabel:{control:"text"},items:{control:"object"},ariaLabel:{control:"text"},className:{control:"text"},id:{control:"text"}}},e={args:{id:"breadcrumb-collapsed",ariaLabel:"Breadcrumb collapsed",ellipsisAriaLabel:"Expand to show all breadcrumb items",maxItems:3,items:[{href:"#",text:"Root"},{href:"#",text:"Path 1"},{href:"#",text:"Path 2"},{href:"#",text:"Path 3"},{text:"Current Page",ariaCurrent:"page",href:"#"}]},render:r=>a.jsx(t,{...r})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "breadcrumb-collapsed",
    "ariaLabel": "Breadcrumb collapsed",
    "ellipsisAriaLabel": "Expand to show all breadcrumb items",
    "maxItems": 3,
    "items": [{
      href: '#',
      text: 'Root'
    }, {
      href: '#',
      text: 'Path 1'
    }, {
      href: '#',
      text: 'Path 2'
    }, {
      href: '#',
      text: 'Path 3'
    }, {
      text: 'Current Page',
      ariaCurrent: 'page',
      href: '#'
    }]
  },
  render: (properties: any) => <DBBreadcrumb {...properties} />
}`,...e.parameters?.docs?.source}}};const d=["CollapsedmaxItems3"];export{e as CollapsedmaxItems3,d as __namedExportsOrder,n as default};
