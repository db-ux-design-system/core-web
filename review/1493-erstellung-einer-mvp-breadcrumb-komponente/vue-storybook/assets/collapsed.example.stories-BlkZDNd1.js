import{_ as r}from"./breadcrumb-BSgRk4gF.js";import"./iframe-CpXYGnj_.js";import"./preload-helper-C1AwEw06.js";import"./index-C7U5b_Ao.js";import"./breadcrumb-item-DQaYALaM.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBBreadcrumb/Collapsed",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium"]},separator:{control:"select",options:["chevron","slash"]},maxItems:{control:"number"},ellipsisAriaLabel:{control:"text"},items:{control:"object"},ariaLabel:{control:"text"},className:{control:"text"},id:{control:"text"}}},e={args:{id:"breadcrumb-collapsed",ariaLabel:"Breadcrumb collapsed",ellipsisAriaLabel:"Expand to show all breadcrumb items",maxItems:3,items:[{href:"#",text:"Root"},{href:"#",text:"Path 1"},{href:"#",text:"Path 2"},{href:"#",text:"Path 3"},{text:"Current Page",ariaCurrent:"page",href:"#"}],default:""},render:t=>({components:{DBBreadcrumb:r},setup(){return{args:t}},template:`<DBBreadcrumb v-bind="args"   >${t.default}</DBBreadcrumb>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "breadcrumb-collapsed",
    "ariaLabel": "Breadcrumb collapsed",
    "ellipsisAriaLabel": "Expand to show all breadcrumb items",
    "maxItems": 3,
    "items": [{
      href: '#',
      text: 'Root'
    }, {
      href: '#',
      text: 'Path 1'
    }, {
      href: '#',
      text: 'Path 2'
    }, {
      href: '#',
      text: 'Path 3'
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
    template: \`<DBBreadcrumb v-bind="args"   >\${args.default}</DBBreadcrumb>\`
  })
}`,...e.parameters?.docs?.source}}};const n=["CollapsedmaxItems3"];export{e as CollapsedmaxItems3,n as __namedExportsOrder,d as default};
