import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{i as n,n as r,r as i,t as a}from"./breadcrumb-D6Vk7H7M.js";import{n as o,t as s}from"./infotext-CUcAE1qP.js";var c=t({Expressive:()=>p,Functional:()=>d,Regular:()=>f,__namedExportsOrder:()=>m,default:()=>u}),l,u,d,f,p,m;function h(){return(h=e((()=>{n(),o(),r(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBBreadcrumb/Density`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`small`,`medium`]},separator:{control:`select`,options:[`chevron`,`slash`]},id:{control:`text`}}},d={args:{"data-density":`functional`,"aria-label":`Breadcrumb (Functional)`,expandText:`Show more`,default:`<DBBreadcrumbItem><a href="/">Home</a></DBBreadcrumbItem
><DBBreadcrumbItem><a href="/next">Next</a></DBBreadcrumbItem
><DBBreadcrumbItem
  ><a href="/next/next/current" aria-current="page">
    Current
  </a></DBBreadcrumbItem
>`},render:e=>({components:{DBBreadcrumb:a,DBBreadcrumbItem:i,DBInfotext:s},setup(){return{args:e}},template:`<DBBreadcrumb v-bind="args"   >${e.default}</DBBreadcrumb>`})},f={args:{"data-density":`regular`,"aria-label":`Breadcrumb (Regular)`,expandText:`Show more`,default:`<DBBreadcrumbItem><a href="/">Home</a></DBBreadcrumbItem
><DBBreadcrumbItem><a href="/next">Next</a></DBBreadcrumbItem
><DBBreadcrumbItem
  ><a href="/next/next/current" aria-current="page">
    Current
  </a></DBBreadcrumbItem
>`},render:e=>({components:{DBBreadcrumb:a,DBBreadcrumbItem:i,DBInfotext:s},setup(){return{args:e}},template:`<DBBreadcrumb v-bind="args"   >${e.default}</DBBreadcrumb>`})},p={args:{"data-density":`expressive`,"aria-label":`Breadcrumb (Expressive)`,expandText:`Show more`,default:`<DBBreadcrumbItem><a href="/">Home</a></DBBreadcrumbItem
><DBBreadcrumbItem><a href="/next">Next</a></DBBreadcrumbItem
><DBBreadcrumbItem
  ><a href="/next/next/current" aria-current="page">
    Current
  </a></DBBreadcrumbItem
>`},render:e=>({components:{DBBreadcrumb:a,DBBreadcrumbItem:i,DBInfotext:s},setup(){return{args:e}},template:`<DBBreadcrumb v-bind="args"   >${e.default}</DBBreadcrumb>`})},m=[`Functional`,`Regular`,`Expressive`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "aria-label": "Breadcrumb (Functional)",
    "expandText": "Show more",
    "default": \`<DBBreadcrumbItem><a href="/">Home</a></DBBreadcrumbItem
><DBBreadcrumbItem><a href="/next">Next</a></DBBreadcrumbItem
><DBBreadcrumbItem
  ><a href="/next/next/current" aria-current="page">
    Current
  </a></DBBreadcrumbItem
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
    "data-density": "regular",
    "aria-label": "Breadcrumb (Regular)",
    "expandText": "Show more",
    "default": \`<DBBreadcrumbItem><a href="/">Home</a></DBBreadcrumbItem
><DBBreadcrumbItem><a href="/next">Next</a></DBBreadcrumbItem
><DBBreadcrumbItem
  ><a href="/next/next/current" aria-current="page">
    Current
  </a></DBBreadcrumbItem
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "aria-label": "Breadcrumb (Expressive)",
    "expandText": "Show more",
    "default": \`<DBBreadcrumbItem><a href="/">Home</a></DBBreadcrumbItem
><DBBreadcrumbItem><a href="/next">Next</a></DBBreadcrumbItem
><DBBreadcrumbItem
  ><a href="/next/next/current" aria-current="page">
    Current
  </a></DBBreadcrumbItem
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
}`,...p.parameters?.docs?.source}}}})))()}export{h as a,c as i,d as n,f as r,p as t};