import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{i as n,n as r,r as i,t as a}from"./breadcrumb-D9i1FGWj.js";import{n as o,t as s}from"./breadcrumb-popover-item-B_v27Ai1.js";var c=t({Popover:()=>d,__namedExportsOrder:()=>f,default:()=>u}),l,u,d,f;function p(){return(p=e((()=>{n(),o(),r(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBBreadcrumb/Popover`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`small`,`medium`]},separator:{control:`select`,options:[`chevron`,`slash`]},id:{control:`text`}}},d={args:{"aria-label":`Breadcrumb`,expandText:`Show more`,default:`<DBBreadcrumbItem><a href="/">Home</a></DBBreadcrumbItem
><DBBreadcrumbPopoverItem label="Show more breadcrumbs"
  ><DBBreadcrumbItem><a href="/1">Level 1</a></DBBreadcrumbItem
  ><DBBreadcrumbItem><a href="/1/2">Level 2</a></DBBreadcrumbItem
  ><DBBreadcrumbItem
    ><a href="/1/2/3">Level 3</a></DBBreadcrumbItem
  ></DBBreadcrumbPopoverItem
><DBBreadcrumbItem><a href="/1/2/3/4">Level 4</a></DBBreadcrumbItem
><DBBreadcrumbItem
  ><a href="/1/2/3/4/current" aria-current="page">
    Current
  </a></DBBreadcrumbItem
>`},render:e=>({components:{DBBreadcrumb:a,DBBreadcrumbItem:i,DBBreadcrumbPopoverItem:s},setup(){return{args:e}},template:`<DBBreadcrumb v-bind="args"   >${e.default}</DBBreadcrumb>`})},f=[`Popover`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Breadcrumb",
    "expandText": "Show more",
    "default": \`<DBBreadcrumbItem><a href="/">Home</a></DBBreadcrumbItem
><DBBreadcrumbPopoverItem label="Show more breadcrumbs"
  ><DBBreadcrumbItem><a href="/1">Level 1</a></DBBreadcrumbItem
  ><DBBreadcrumbItem><a href="/1/2">Level 2</a></DBBreadcrumbItem
  ><DBBreadcrumbItem
    ><a href="/1/2/3">Level 3</a></DBBreadcrumbItem
  ></DBBreadcrumbPopoverItem
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
    template: \`<DBBreadcrumb v-bind="args"   >\${args.default}</DBBreadcrumb>\`
  })
}`,...d.parameters?.docs?.source}}}})))()}export{p as n,c as r,d as t};