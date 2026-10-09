import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,n,r,t as i}from"./breadcrumb-Ca5sU7pb.js";import{n as a,t as o}from"./infotext-CWJHPk_N.js";var s,c,l,u,d,f;function p(){return(p=e((()=>{t(),a(),n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBBreadcrumb/Density`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`small`,`medium`]},separator:{control:`select`,options:[`chevron`,`slash`]},id:{control:`text`}}},l={args:{"data-density":`functional`,"aria-label":`Breadcrumb (Functional)`,expandText:`Show more`,default:`<DBBreadcrumbItem><a href="/">Home</a></DBBreadcrumbItem
><DBBreadcrumbItem><a href="/next">Next</a></DBBreadcrumbItem
><DBBreadcrumbItem
  ><a href="/next/next/current" aria-current="page">
    Current
  </a></DBBreadcrumbItem
>`},render:e=>({components:{DBBreadcrumb:i,DBBreadcrumbItem:r,DBInfotext:o},setup(){return{args:e}},template:`<DBBreadcrumb v-bind="args"   >${e.default}</DBBreadcrumb>`})},u={args:{"data-density":`regular`,"aria-label":`Breadcrumb (Regular)`,expandText:`Show more`,default:`<DBBreadcrumbItem><a href="/">Home</a></DBBreadcrumbItem
><DBBreadcrumbItem><a href="/next">Next</a></DBBreadcrumbItem
><DBBreadcrumbItem
  ><a href="/next/next/current" aria-current="page">
    Current
  </a></DBBreadcrumbItem
>`},render:e=>({components:{DBBreadcrumb:i,DBBreadcrumbItem:r,DBInfotext:o},setup(){return{args:e}},template:`<DBBreadcrumb v-bind="args"   >${e.default}</DBBreadcrumb>`})},d={args:{"data-density":`expressive`,"aria-label":`Breadcrumb (Expressive)`,expandText:`Show more`,default:`<DBBreadcrumbItem><a href="/">Home</a></DBBreadcrumbItem
><DBBreadcrumbItem><a href="/next">Next</a></DBBreadcrumbItem
><DBBreadcrumbItem
  ><a href="/next/next/current" aria-current="page">
    Current
  </a></DBBreadcrumbItem
>`},render:e=>({components:{DBBreadcrumb:i,DBBreadcrumbItem:r,DBInfotext:o},setup(){return{args:e}},template:`<DBBreadcrumb v-bind="args"   >${e.default}</DBBreadcrumb>`})},f=[`Functional`,`Regular`,`Expressive`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}}})))()}p();export{d as Expressive,l as Functional,u as Regular,f as __namedExportsOrder,c as default};