import{_ as t}from"./breadcrumb-item-BoMkZ2YG.js";import"./iframe-yx3xrKke.js";import"./preload-helper-C1AwEw06.js";import"./index-3kHg9Wn3.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,l={title:"Components/DBBreadcrumbItem/Basic",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{href:{control:"text"},text:{control:"text"},ariaCurrent:{control:"select",options:["page","step","location","date","time","true","false"]},disabled:{control:"boolean"},size:{control:"select",options:["small","medium"]},id:{control:"text"},className:{control:"text"},icon:{control:"select",options:["arrow_down","arrow_left","arrow_right","arrow_up","arrow_up_right","brand","calendar","check-circle","check","check_circle","chevron_down","chevron_left","chevron_right","chevron_up","circle","circular_arrows","clock","cross","cross_circle","exclamation_mark_circle","exclamation_mark_triangle","information_circle","magnifying_glass","menu","minus","plus","resize_handle_corner","x_placeholder"]}}},r={args:{href:"#",text:"Home",default:""},render:e=>({components:{DBBreadcrumbItem:t},setup(){return{args:e}},template:`<nav class="db-breadcrumb" aria-label="Breadcrumb"   ><ol    ><DBBreadcrumbItem v-bind="args"   >${e.default}</DBBreadcrumbItem></ol></nav>`})},a={args:{ariaCurrent:"page",text:"Current Page",default:""},render:e=>({components:{DBBreadcrumbItem:t},setup(){return{args:e}},template:`<nav class="db-breadcrumb" aria-label="Breadcrumb"   ><ol    ><DBBreadcrumbItem v-bind="args"   >${e.default}</DBBreadcrumbItem></ol></nav>`})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "href": "#",
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
    "ariaCurrent": "page",
    "text": "Current Page",
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
}`,...a.parameters?.docs?.source}}};const d=["Link","CurrentPage"];export{a as CurrentPage,r as Link,d as __namedExportsOrder,l as default};
