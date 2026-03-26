import{_ as t}from"./breadcrumb-DMs_ufmF.js";import"./iframe-xQULWYkP.js";import"./preload-helper-C1AwEw06.js";import"./index-3kHg9Wn3.js";import"./breadcrumb-item-D7oGpgnE.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBBreadcrumb/Separator",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium"]},separator:{control:"select",options:["chevron","slash"]},maxItems:{control:"number"},ellipsisAriaLabel:{control:"text"},items:{control:"object"},ariaLabel:{control:"text"},className:{control:"text"},id:{control:"text"}}},e={args:{id:"breadcrumb-separator-chevron",separator:"chevron",ariaLabel:"Breadcrumb separator chevron",items:[{href:"#",text:"Home"},{href:"#",text:"Category"},{text:"Current Page",ariaCurrent:"page",href:"#"}],default:""},render:r=>({components:{DBBreadcrumb:t},setup(){return{args:r}},template:`<div class="w-full"   ><DBBreadcrumb v-bind="args"   >${r.default}</DBBreadcrumb></div>`})},a={args:{id:"breadcrumb-separator-slash",separator:"slash",ariaLabel:"Breadcrumb separator slash",items:[{href:"#",text:"Home"},{href:"#",text:"Category"},{text:"Current Page",ariaCurrent:"page",href:"#"}],default:""},render:r=>({components:{DBBreadcrumb:t},setup(){return{args:r}},template:`<div class="w-full"   ><DBBreadcrumb v-bind="args"   >${r.default}</DBBreadcrumb></div>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const l=["Chevron","Slash"];export{e as Chevron,a as Slash,l as __namedExportsOrder,u as default};
