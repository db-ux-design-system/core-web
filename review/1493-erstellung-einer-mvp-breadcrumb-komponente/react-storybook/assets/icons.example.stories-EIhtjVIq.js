import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as s}from"./breadcrumb-DXWAXB0V.js";import"./index-B7He6KvY.js";import"./iframe-Dz5uaCij.js";import"./preload-helper-B33QiPj0.js";import"./breadcrumb-item-BkNPxWa1.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBBreadcrumb/Icons",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium"]},separator:{control:"select",options:["chevron","slash"]},maxItems:{control:"number"},ellipsisAriaLabel:{control:"text"},items:{control:"object"},ariaLabel:{control:"text"},className:{control:"text"},id:{control:"text"}}},e={args:{id:"breadcrumb-icons-small",ariaLabel:"Breadcrumb icons small",items:[{href:"#",text:"Root",icon:"house"},{href:"#",text:"Settings",icon:"gear_wheel"},{href:"#",text:"Profile",icon:"person"},{href:"#",text:"Notifications",icon:"bell"}]},render:o=>t.jsx("div",{className:"w-full",children:t.jsx(s,{...o})})},r={args:{id:"breadcrumb-icons-medium",size:"medium",ariaLabel:"Breadcrumb icons medium",items:[{href:"#",text:"Root",icon:"house"},{href:"#",text:"Settings",icon:"gear_wheel"},{href:"#",text:"Profile",icon:"person"},{href:"#",text:"Notifications",icon:"bell"}]},render:o=>t.jsx("div",{className:"w-full",children:t.jsx(s,{...o})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "breadcrumb-icons-small",
    "ariaLabel": "Breadcrumb icons small",
    "items": [{
      href: '#',
      text: 'Root',
      icon: 'house'
    }, {
      href: '#',
      text: 'Settings',
      icon: 'gear_wheel'
    }, {
      href: '#',
      text: 'Profile',
      icon: 'person'
    }, {
      href: '#',
      text: 'Notifications',
      icon: 'bell'
    }]
  },
  render: (properties: any) => <div className="w-full"><DBBreadcrumb {...properties} /></div>
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "breadcrumb-icons-medium",
    "size": "medium",
    "ariaLabel": "Breadcrumb icons medium",
    "items": [{
      href: '#',
      text: 'Root',
      icon: 'house'
    }, {
      href: '#',
      text: 'Settings',
      icon: 'gear_wheel'
    }, {
      href: '#',
      text: 'Profile',
      icon: 'person'
    }, {
      href: '#',
      text: 'Notifications',
      icon: 'bell'
    }]
  },
  render: (properties: any) => <div className="w-full"><DBBreadcrumb {...properties} /></div>
}`,...r.parameters?.docs?.source}}};const p=["WithIconsSmall","WithIconsMedium"];export{r as WithIconsMedium,e as WithIconsSmall,p as __namedExportsOrder,u as default};
