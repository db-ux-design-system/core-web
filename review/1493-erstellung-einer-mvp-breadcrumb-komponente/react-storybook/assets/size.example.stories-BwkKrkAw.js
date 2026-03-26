import{j as a}from"./jsx-runtime-u17CrQMm.js";import{D as s}from"./breadcrumb-sCEVQ__o.js";import"./index-B7He6KvY.js";import"./iframe-BrALMU0h.js";import"./preload-helper-B33QiPj0.js";import"./breadcrumb-item-DF8SMHyp.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,n={title:"Components/DBBreadcrumb/Size",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium"]},separator:{control:"select",options:["chevron","slash"]},maxItems:{control:"number"},ellipsisAriaLabel:{control:"text"},items:{control:"object"},ariaLabel:{control:"text"},className:{control:"text"},id:{control:"text"}}},e={args:{id:"breadcrumb-size-small",ariaLabel:"Breadcrumb size small",items:[{href:"#",text:"Home"},{href:"#",text:"Category"},{text:"Current Page",ariaCurrent:"page",href:"#"}]},render:t=>a.jsx("div",{className:"w-full",children:a.jsx(s,{...t})})},r={args:{id:"breadcrumb-size-medium",size:"medium",ariaLabel:"Breadcrumb size medium",items:[{href:"#",text:"Home"},{href:"#",text:"Category"},{text:"Current Page",ariaCurrent:"page",href:"#"}]},render:t=>a.jsx("div",{className:"w-full",children:a.jsx(s,{...t})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "breadcrumb-size-small",
    "ariaLabel": "Breadcrumb size small",
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
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "breadcrumb-size-medium",
    "size": "medium",
    "ariaLabel": "Breadcrumb size medium",
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
}`,...r.parameters?.docs?.source}}};const p=["DefaultSmall","Medium"];export{e as DefaultSmall,r as Medium,p as __namedExportsOrder,n as default};
