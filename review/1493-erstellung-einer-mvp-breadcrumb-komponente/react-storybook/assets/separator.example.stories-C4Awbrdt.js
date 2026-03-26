import{j as a}from"./jsx-runtime-u17CrQMm.js";import{D as s}from"./breadcrumb-DXWAXB0V.js";import"./index-B7He6KvY.js";import"./iframe-Dz5uaCij.js";import"./preload-helper-B33QiPj0.js";import"./breadcrumb-item-BkNPxWa1.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBBreadcrumb/Separator",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium"]},separator:{control:"select",options:["chevron","slash"]},maxItems:{control:"number"},ellipsisAriaLabel:{control:"text"},items:{control:"object"},ariaLabel:{control:"text"},className:{control:"text"},id:{control:"text"}}},r={args:{id:"breadcrumb-separator-chevron",separator:"chevron",ariaLabel:"Breadcrumb separator chevron",items:[{href:"#",text:"Home"},{href:"#",text:"Category"},{text:"Current Page",ariaCurrent:"page",href:"#"}]},render:t=>a.jsx("div",{className:"w-full",children:a.jsx(s,{...t})})},e={args:{id:"breadcrumb-separator-slash",separator:"slash",ariaLabel:"Breadcrumb separator slash",items:[{href:"#",text:"Home"},{href:"#",text:"Category"},{text:"Current Page",ariaCurrent:"page",href:"#"}]},render:t=>a.jsx("div",{className:"w-full",children:a.jsx(s,{...t})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "breadcrumb-separator-chevron",
    "separator": "chevron",
    "ariaLabel": "Breadcrumb separator chevron",
    "items": [{
      href: '#',
      text: 'Home'
    }, {
      href: '#',
      text: 'Category'
    }, {
      text: 'Current Page',
      ariaCurrent: 'page',
      href: '#'
    }]
  },
  render: (properties: any) => <div className="w-full"><DBBreadcrumb {...properties} /></div>
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "breadcrumb-separator-slash",
    "separator": "slash",
    "ariaLabel": "Breadcrumb separator slash",
    "items": [{
      href: '#',
      text: 'Home'
    }, {
      href: '#',
      text: 'Category'
    }, {
      text: 'Current Page',
      ariaCurrent: 'page',
      href: '#'
    }]
  },
  render: (properties: any) => <div className="w-full"><DBBreadcrumb {...properties} /></div>
}`,...e.parameters?.docs?.source}}};const u=["Chevron","Slash"];export{r as Chevron,e as Slash,u as __namedExportsOrder,d as default};
