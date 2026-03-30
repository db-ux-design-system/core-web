import{_ as n}from"./breadcrumb-item-DQaYALaM.js";import"./iframe-CpXYGnj_.js";import"./preload-helper-C1AwEw06.js";import"./index-C7U5b_Ao.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBBreadcrumbItem/With Icon",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{href:{control:"text"},text:{control:"text"},ariaCurrent:{control:"select",options:["page","step","location","date","time","true","false"]},disabled:{control:"boolean"},size:{control:"select",options:["small","medium"]},id:{control:"text"},className:{control:"text"},icon:{control:"select",options:["arrow_down","arrow_left","arrow_right","arrow_up","arrow_up_right","brand","calendar","check-circle","check","check_circle","chevron_down","chevron_left","chevron_right","chevron_up","circle","circular_arrows","clock","cross","cross_circle","exclamation_mark_circle","exclamation_mark_triangle","information_circle","magnifying_glass","menu","minus","plus","resize_handle_corner","x_placeholder"]}}},r={args:{href:"#",icon:"house",text:"Home",default:""},render:e=>({components:{DBBreadcrumbItem:n},setup(){return{args:e}},template:`<nav class="db-breadcrumb" aria-label="Breadcrumb"   ><ol    ><DBBreadcrumbItem v-bind="args"   >${e.default}</DBBreadcrumbItem></ol></nav>`})},a={args:{href:"#",icon:"folder",text:"Category",default:""},render:e=>({components:{DBBreadcrumbItem:n},setup(){return{args:e}},template:`<nav class="db-breadcrumb" aria-label="Breadcrumb"   ><ol    ><DBBreadcrumbItem v-bind="args"   >${e.default}</DBBreadcrumbItem></ol></nav>`})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "href": "#",
    "icon": "house",
    "text": "Home",
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBBreadcrumbItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`<nav class="db-breadcrumb" aria-label="Breadcrumb"   ><ol    ><DBBreadcrumbItem v-bind="args"   >\${args.default}</DBBreadcrumbItem></ol></nav>\`
  })
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "href": "#",
    "icon": "folder",
    "text": "Category",
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBBreadcrumbItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`<nav class="db-breadcrumb" aria-label="Breadcrumb"   ><ol    ><DBBreadcrumbItem v-bind="args"   >\${args.default}</DBBreadcrumbItem></ol></nav>\`
  })
}`,...a.parameters?.docs?.source}}};const d=["HomeIcon","FolderIcon"];export{a as FolderIcon,r as HomeIcon,d as __namedExportsOrder,m as default};
