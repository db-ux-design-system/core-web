import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,n,r,t as i}from"./breadcrumb-P14sVts-.js";import{n as a,t as o}from"./breadcrumb-popover-item-eQ9e0Smx.js";var s,c,l,u,d;function f(){return(f=e((()=>{t(),a(),n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBBreadcrumb/Interaction`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`small`,`medium`]},separator:{control:`select`,options:[`chevron`,`slash`]},id:{control:`text`}}},l={args:{"aria-label":`Breadcrumb (auto collapse)`,default:`<DBBreadcrumbItem><a href="/">Home</a></DBBreadcrumbItem
><DBBreadcrumbItem><a href="/1">Level 1</a></DBBreadcrumbItem
><DBBreadcrumbItem><a href="/1/2">Level 2</a></DBBreadcrumbItem
><DBBreadcrumbItem><a href="/1/2/3">Level 3</a></DBBreadcrumbItem
><DBBreadcrumbItem><a href="/1/2/3/4">Level 4</a></DBBreadcrumbItem
><DBBreadcrumbItem
  ><a href="/1/2/3/4/current" aria-current="page">
    Current
  </a></DBBreadcrumbItem
>`},render:e=>({components:{DBBreadcrumb:i,DBBreadcrumbItem:r,DBBreadcrumbPopoverItem:o},setup(){return{args:e}},template:`<div data-testid="auto-collapse-breadcrumb"   ><DBBreadcrumb v-bind="args"   >${e.default}</DBBreadcrumb></div>`})},u={args:{"aria-label":`Breadcrumb (manual popover)`,default:`<DBBreadcrumbItem><a href="/">Home</a></DBBreadcrumbItem
><DBBreadcrumbPopoverItem label="Show more breadcrumbs"
  ><DBBreadcrumbItem><a href="/1">Level 1</a></DBBreadcrumbItem
  ><DBBreadcrumbItem
    ><a href="/1/2">Level 2</a></DBBreadcrumbItem
  ></DBBreadcrumbPopoverItem
><DBBreadcrumbItem
  ><a href="/1/2/current" aria-current="page"> Current </a></DBBreadcrumbItem
>`},render:e=>({components:{DBBreadcrumb:i,DBBreadcrumbItem:r,DBBreadcrumbPopoverItem:o},setup(){return{args:e}},template:`<div data-testid="popover-breadcrumb"   ><DBBreadcrumb v-bind="args"   >${e.default}</DBBreadcrumb></div>`})},d=[`Interaction`,`BreadcrumbInteraction1`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Breadcrumb (auto collapse)",
    "default": \`<DBBreadcrumbItem><a href="/">Home</a></DBBreadcrumbItem
><DBBreadcrumbItem><a href="/1">Level 1</a></DBBreadcrumbItem
><DBBreadcrumbItem><a href="/1/2">Level 2</a></DBBreadcrumbItem
><DBBreadcrumbItem><a href="/1/2/3">Level 3</a></DBBreadcrumbItem
><DBBreadcrumbItem><a href="/1/2/3/4">Level 4</a></DBBreadcrumbItem
><DBBreadcrumbItem
  ><a href="/1/2/3/4/current" aria-current="page">
    Current
  </a></DBBreadcrumbItem
>\`
  },
  render: (args: any) => ({
    components: {
      DBBreadcrumb,
      DBBreadcrumbItem,
      DBBreadcrumbPopoverItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div data-testid="auto-collapse-breadcrumb"   ><DBBreadcrumb v-bind="args"   >\${args.default}</DBBreadcrumb></div>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Breadcrumb (manual popover)",
    "default": \`<DBBreadcrumbItem><a href="/">Home</a></DBBreadcrumbItem
><DBBreadcrumbPopoverItem label="Show more breadcrumbs"
  ><DBBreadcrumbItem><a href="/1">Level 1</a></DBBreadcrumbItem
  ><DBBreadcrumbItem
    ><a href="/1/2">Level 2</a></DBBreadcrumbItem
  ></DBBreadcrumbPopoverItem
><DBBreadcrumbItem
  ><a href="/1/2/current" aria-current="page"> Current </a></DBBreadcrumbItem
>\`
  },
  render: (args: any) => ({
    components: {
      DBBreadcrumb,
      DBBreadcrumbItem,
      DBBreadcrumbPopoverItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div data-testid="popover-breadcrumb"   ><DBBreadcrumb v-bind="args"   >\${args.default}</DBBreadcrumb></div>\`
  })
}`,...u.parameters?.docs?.source}}}})))()}f();export{u as BreadcrumbInteraction1,l as Interaction,d as __namedExportsOrder,c as default};