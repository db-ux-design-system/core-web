import{j as r}from"./jsx-runtime-u17CrQMm.js";import{D as c}from"./breadcrumb-item-BzG-tgua.js";import"./index-B7He6KvY.js";import"./iframe-s2U8Z2TN.js";import"./preload-helper-B33QiPj0.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBBreadcrumbItem/With Icon",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{href:{control:"text"},text:{control:"text"},ariaCurrent:{control:"select",options:["page","step","location","date","time","true","false"]},disabled:{control:"boolean"},size:{control:"select",options:["small","medium"]},id:{control:"text"},className:{control:"text"},icon:{control:"select",options:["arrow_down","arrow_left","arrow_right","arrow_up","arrow_up_right","brand","calendar","check-circle","check","check_circle","chevron_down","chevron_left","chevron_right","chevron_up","circle","circular_arrows","clock","cross","cross_circle","exclamation_mark_circle","exclamation_mark_triangle","information_circle","magnifying_glass","menu","minus","plus","resize_handle_corner","x_placeholder"]}}},e={args:{href:"#",icon:"house",text:"Home"},render:a=>r.jsx("nav",{className:"db-breadcrumb","aria-label":"Breadcrumb",children:r.jsx("ol",{children:r.jsx(c,{...a})})})},o={args:{href:"#",icon:"folder",text:"Category"},render:a=>r.jsx("nav",{className:"db-breadcrumb","aria-label":"Breadcrumb",children:r.jsx("ol",{children:r.jsx(c,{...a})})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "href": "#",
    "icon": "house",
    "text": "Home"
  },
  render: (properties: any) => <nav className="db-breadcrumb" aria-label="Breadcrumb"><ol><DBBreadcrumbItem {...properties} /></ol></nav>
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "href": "#",
    "icon": "folder",
    "text": "Category"
  },
  render: (properties: any) => <nav className="db-breadcrumb" aria-label="Breadcrumb"><ol><DBBreadcrumbItem {...properties} /></ol></nav>
}`,...o.parameters?.docs?.source}}};const p=["HomeIcon","FolderIcon"];export{o as FolderIcon,e as HomeIcon,p as __namedExportsOrder,d as default};
