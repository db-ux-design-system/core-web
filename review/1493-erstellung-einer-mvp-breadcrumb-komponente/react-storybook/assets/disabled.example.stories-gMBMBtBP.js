import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as o}from"./breadcrumb-item-BzG-tgua.js";import"./index-B7He6KvY.js";import"./iframe-s2U8Z2TN.js";import"./preload-helper-B33QiPj0.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBBreadcrumbItem/Disabled",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{href:{control:"text"},text:{control:"text"},ariaCurrent:{control:"select",options:["page","step","location","date","time","true","false"]},disabled:{control:"boolean"},size:{control:"select",options:["small","medium"]},id:{control:"text"},className:{control:"text"},icon:{control:"select",options:["arrow_down","arrow_left","arrow_right","arrow_up","arrow_up_right","brand","calendar","check-circle","check","check_circle","chevron_down","chevron_left","chevron_right","chevron_up","circle","circular_arrows","clock","cross","cross_circle","exclamation_mark_circle","exclamation_mark_triangle","information_circle","magnifying_glass","menu","minus","plus","resize_handle_corner","x_placeholder"]}}},r={args:{href:"#",text:"Enabled Item",disabled:!1},render:t=>e.jsx("nav",{className:"db-breadcrumb","aria-label":"Breadcrumb",children:e.jsx("ol",{children:e.jsx(o,{...t})})})},a={args:{href:"#",text:"Disabled Item",disabled:!0},render:t=>e.jsx("nav",{className:"db-breadcrumb","aria-label":"Breadcrumb",children:e.jsx("ol",{children:e.jsx(o,{...t})})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "href": "#",
    "text": "Enabled Item",
    "disabled": false
  },
  render: (properties: any) => <nav className="db-breadcrumb" aria-label="Breadcrumb"><ol><DBBreadcrumbItem {...properties} /></ol></nav>
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "href": "#",
    "text": "Disabled Item",
    "disabled": true
  },
  render: (properties: any) => <nav className="db-breadcrumb" aria-label="Breadcrumb"><ol><DBBreadcrumbItem {...properties} /></ol></nav>
}`,...a.parameters?.docs?.source}}};const p=["DefaultFalse","True"];export{r as DefaultFalse,a as True,p as __namedExportsOrder,m as default};
