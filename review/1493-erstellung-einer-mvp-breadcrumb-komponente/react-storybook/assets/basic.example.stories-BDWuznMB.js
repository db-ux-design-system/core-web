import{j as r}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./breadcrumb-item-BkNPxWa1.js";import"./index-B7He6KvY.js";import"./iframe-Dz5uaCij.js";import"./preload-helper-B33QiPj0.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBBreadcrumbItem/Basic",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{href:{control:"text"},text:{control:"text"},ariaCurrent:{control:"select",options:["page","step","location","date","time","true","false"]},disabled:{control:"boolean"},size:{control:"select",options:["small","medium"]},id:{control:"text"},className:{control:"text"},icon:{control:"select",options:["arrow_down","arrow_left","arrow_right","arrow_up","arrow_up_right","brand","calendar","check-circle","check","check_circle","chevron_down","chevron_left","chevron_right","chevron_up","circle","circular_arrows","clock","cross","cross_circle","exclamation_mark_circle","exclamation_mark_triangle","information_circle","magnifying_glass","menu","minus","plus","resize_handle_corner","x_placeholder"]}}},e={args:{href:"#",text:"Home"},render:o=>r.jsx("nav",{className:"db-breadcrumb","aria-label":"Breadcrumb",children:r.jsx("ol",{children:r.jsx(t,{...o})})})},a={args:{ariaCurrent:"page",text:"Current Page"},render:o=>r.jsx("nav",{className:"db-breadcrumb","aria-label":"Breadcrumb",children:r.jsx("ol",{children:r.jsx(t,{...o})})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "href": "#",
    "text": "Home"
  },
  render: (properties: any) => <nav className="db-breadcrumb" aria-label="Breadcrumb"><ol><DBBreadcrumbItem {...properties} /></ol></nav>
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "ariaCurrent": "page",
    "text": "Current Page"
  },
  render: (properties: any) => <nav className="db-breadcrumb" aria-label="Breadcrumb"><ol><DBBreadcrumbItem {...properties} /></ol></nav>
}`,...a.parameters?.docs?.source}}};const p=["Link","CurrentPage"];export{a as CurrentPage,e as Link,p as __namedExportsOrder,d as default};
