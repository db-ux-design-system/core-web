import{_ as t}from"./breadcrumb-BSgRk4gF.js";import"./iframe-CpXYGnj_.js";import"./preload-helper-C1AwEw06.js";import"./index-C7U5b_Ao.js";import"./breadcrumb-item-DQaYALaM.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,l={title:"Components/DBBreadcrumb/Size",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium"]},separator:{control:"select",options:["chevron","slash"]},maxItems:{control:"number"},ellipsisAriaLabel:{control:"text"},items:{control:"object"},ariaLabel:{control:"text"},className:{control:"text"},id:{control:"text"}}},r={args:{id:"breadcrumb-size-small",ariaLabel:"Breadcrumb size small",items:[{href:"#",text:"Home"},{href:"#",text:"Category"},{text:"Current Page",ariaCurrent:"page",href:"#"}],default:""},render:e=>({components:{DBBreadcrumb:t},setup(){return{args:e}},template:`<div class="w-full"   ><DBBreadcrumb v-bind="args"   >${e.default}</DBBreadcrumb></div>`})},a={args:{id:"breadcrumb-size-medium",size:"medium",ariaLabel:"Breadcrumb size medium",items:[{href:"#",text:"Home"},{href:"#",text:"Category"},{text:"Current Page",ariaCurrent:"page",href:"#"}],default:""},render:e=>({components:{DBBreadcrumb:t},setup(){return{args:e}},template:`<div class="w-full"   ><DBBreadcrumb v-bind="args"   >${e.default}</DBBreadcrumb></div>`})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const c=["DefaultSmall","Medium"];export{r as DefaultSmall,a as Medium,c as __namedExportsOrder,l as default};
