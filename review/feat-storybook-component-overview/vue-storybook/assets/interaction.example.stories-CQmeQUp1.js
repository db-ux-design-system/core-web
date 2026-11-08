import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{i as n,n as r,r as i,t as a}from"./breadcrumb-Dh_HqXLu.js";import{n as o,t as s}from"./breadcrumb-popover-item-DKNQK0Gl.js";var c=t({BreadcrumbInteraction1:()=>f,Interaction:()=>d,__namedExportsOrder:()=>p,default:()=>u}),l,u,d,f,p;function m(){return(m=e((()=>{n(),o(),r(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBBreadcrumb/Interaction`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`small`,`medium`]},separator:{control:`select`,options:[`chevron`,`slash`]},id:{control:`text`}}},d={args:{"aria-label":`Breadcrumb (auto collapse)`,default:`<DBBreadcrumbItem><a href="/">Home</a></DBBreadcrumbItem
><DBBreadcrumbItem><a href="/1">Level 1</a></DBBreadcrumbItem
><DBBreadcrumbItem><a href="/1/2">Level 2</a></DBBreadcrumbItem
><DBBreadcrumbItem><a href="/1/2/3">Level 3</a></DBBreadcrumbItem
><DBBreadcrumbItem><a href="/1/2/3/4">Level 4</a></DBBreadcrumbItem
><DBBreadcrumbItem
  ><a href="/1/2/3/4/current" aria-current="page">
    Current
  </a></DBBreadcrumbItem
>`},render:e=>({components:{DBBreadcrumb:a,DBBreadcrumbItem:i,DBBreadcrumbPopoverItem:s},setup(){return{args:e}},template:`<div data-testid="auto-collapse-breadcrumb"   ><DBBreadcrumb v-bind="args"   >${e.default}</DBBreadcrumb></div>`})},f={args:{"aria-label":`Breadcrumb (manual popover)`,default:`<DBBreadcrumbItem><a href="/">Home</a></DBBreadcrumbItem
><DBBreadcrumbPopoverItem label="Show more breadcrumbs"
  ><DBBreadcrumbItem><a href="/1">Level 1</a></DBBreadcrumbItem
  ><DBBreadcrumbItem
    ><a href="/1/2">Level 2</a></DBBreadcrumbItem
  ></DBBreadcrumbPopoverItem
><DBBreadcrumbItem
  ><a href="/1/2/current" aria-current="page"> Current </a></DBBreadcrumbItem
>`},render:e=>({components:{DBBreadcrumb:a,DBBreadcrumbItem:i,DBBreadcrumbPopoverItem:s},setup(){return{args:e}},template:`<div data-testid="popover-breadcrumb"   ><DBBreadcrumb v-bind="args"   >${e.default}</DBBreadcrumb></div>`})},p=[`Interaction`,`BreadcrumbInteraction1`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}}})))()}export{c as i,d as n,m as r,f as t};