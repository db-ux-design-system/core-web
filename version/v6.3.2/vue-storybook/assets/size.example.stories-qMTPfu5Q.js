import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{i as n,n as r,r as i,t as a}from"./breadcrumb-Bitum6CK.js";import{n as o,t as s}from"./infotext-DNBAwHgm.js";var c=t({DefaultSmall:()=>d,Medium:()=>f,__namedExportsOrder:()=>p,default:()=>u}),l,u,d,f,p;function m(){return(m=e((()=>{n(),o(),r(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBBreadcrumb/Size`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`small`,`medium`]},separator:{control:`select`,options:[`chevron`,`slash`]},id:{control:`text`}}},d={args:{size:`small`,"aria-label":`Breadcrumb (Small)`,expandText:`Show more`,default:`<DBBreadcrumbItem><a href="/">Home</a></DBBreadcrumbItem
><DBBreadcrumbItem><a href="/next">Next</a></DBBreadcrumbItem
><DBBreadcrumbItem
  ><a href="/next/current" aria-current="page"> Current </a></DBBreadcrumbItem
>`},render:e=>({components:{DBBreadcrumb:a,DBBreadcrumbItem:i,DBInfotext:s},setup(){return{args:e}},template:`<DBBreadcrumb v-bind="args"   >${e.default}</DBBreadcrumb>`})},f={args:{size:`medium`,"aria-label":`Breadcrumb (Medium)`,expandText:`Show more`,default:`<DBBreadcrumbItem><a href="/">Home</a></DBBreadcrumbItem
><DBBreadcrumbItem><a href="/next">Next</a></DBBreadcrumbItem
><DBBreadcrumbItem
  ><a href="/next/current" aria-current="page"> Current </a></DBBreadcrumbItem
>`},render:e=>({components:{DBBreadcrumb:a,DBBreadcrumbItem:i,DBInfotext:s},setup(){return{args:e}},template:`<DBBreadcrumb v-bind="args"   >${e.default}</DBBreadcrumb>`})},p=[`DefaultSmall`,`Medium`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "aria-label": "Breadcrumb (Small)",
    "expandText": "Show more",
    "default": \`<DBBreadcrumbItem><a href="/">Home</a></DBBreadcrumbItem
><DBBreadcrumbItem><a href="/next">Next</a></DBBreadcrumbItem
><DBBreadcrumbItem
  ><a href="/next/current" aria-current="page"> Current </a></DBBreadcrumbItem
>\`
  },
  render: (args: any) => ({
    components: {
      DBBreadcrumb,
      DBBreadcrumbItem,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBBreadcrumb v-bind="args"   >\${args.default}</DBBreadcrumb>\`
  })
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "medium",
    "aria-label": "Breadcrumb (Medium)",
    "expandText": "Show more",
    "default": \`<DBBreadcrumbItem><a href="/">Home</a></DBBreadcrumbItem
><DBBreadcrumbItem><a href="/next">Next</a></DBBreadcrumbItem
><DBBreadcrumbItem
  ><a href="/next/current" aria-current="page"> Current </a></DBBreadcrumbItem
>\`
  },
  render: (args: any) => ({
    components: {
      DBBreadcrumb,
      DBBreadcrumbItem,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBBreadcrumb v-bind="args"   >\${args.default}</DBBreadcrumb>\`
  })
}`,...f.parameters?.docs?.source}}}})))()}export{c as i,f as n,m as r,d as t};