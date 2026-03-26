import{_ as o}from"./breadcrumb-DqiZ_DEC.js";import"./iframe-yx3xrKke.js";import"./preload-helper-C1AwEw06.js";import"./index-3kHg9Wn3.js";import"./breadcrumb-item-BoMkZ2YG.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,l={title:"Components/DBBreadcrumb/Icons",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium"]},separator:{control:"select",options:["chevron","slash"]},maxItems:{control:"number"},ellipsisAriaLabel:{control:"text"},items:{control:"object"},ariaLabel:{control:"text"},className:{control:"text"},id:{control:"text"}}},r={args:{id:"breadcrumb-icons-small",ariaLabel:"Breadcrumb icons small",items:[{href:"#",text:"Root",icon:"house"},{href:"#",text:"Settings",icon:"gear_wheel"},{href:"#",text:"Profile",icon:"person"},{href:"#",text:"Notifications",icon:"bell"}],default:""},render:e=>({components:{DBBreadcrumb:o},setup(){return{args:e}},template:`<div class="w-full"   ><DBBreadcrumb v-bind="args"   >${e.default}</DBBreadcrumb></div>`})},t={args:{id:"breadcrumb-icons-medium",size:"medium",ariaLabel:"Breadcrumb icons medium",items:[{href:"#",text:"Root",icon:"house"},{href:"#",text:"Settings",icon:"gear_wheel"},{href:"#",text:"Profile",icon:"person"},{href:"#",text:"Notifications",icon:"bell"}],default:""},render:e=>({components:{DBBreadcrumb:o},setup(){return{args:e}},template:`<div class="w-full"   ><DBBreadcrumb v-bind="args"   >${e.default}</DBBreadcrumb></div>`})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
    }],
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBBreadcrumb
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div class="w-full"   ><DBBreadcrumb v-bind="args"   >\${args.default}</DBBreadcrumb></div>\`
  })
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
    }],
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBBreadcrumb
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div class="w-full"   ><DBBreadcrumb v-bind="args"   >\${args.default}</DBBreadcrumb></div>\`
  })
}`,...t.parameters?.docs?.source}}};const d=["WithIconsSmall","WithIconsMedium"];export{t as WithIconsMedium,r as WithIconsSmall,d as __namedExportsOrder,l as default};
