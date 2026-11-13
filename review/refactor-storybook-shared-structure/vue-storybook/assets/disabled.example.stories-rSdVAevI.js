import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{i as n,n as r,r as i,t as a}from"./breadcrumb-B6HRMBCc.js";import{n as o,t as s}from"./infotext-CnZj_xRa.js";var c=t({Composition:()=>d,OptionsAPI:()=>f,__namedExportsOrder:()=>p,default:()=>u}),l,u,d,f,p;function m(){return(m=e((()=>{n(),o(),r(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBBreadcrumb/Disabled`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`small`,`medium`]},separator:{control:`select`,options:[`chevron`,`slash`]},id:{control:`text`}}},d={args:{"aria-label":`Breadcrumb Disabled (Composition)`,expandText:`Show more`,default:`<DBBreadcrumbItem><a href="/">Home</a></DBBreadcrumbItem
><DBBreadcrumbItem
  text="Disabled"
  href="/next"
  :disabled="true"
></DBBreadcrumbItem
><DBBreadcrumbItem><a href="/next/next">NextNext</a></DBBreadcrumbItem
><DBBreadcrumbItem
  ><a href="/next/next/current" aria-current="page">
    Current
  </a></DBBreadcrumbItem
>`},render:e=>({components:{DBBreadcrumb:a,DBBreadcrumbItem:i,DBInfotext:s},setup(){return{args:e}},template:`<DBBreadcrumb v-bind="args"   >${e.default}</DBBreadcrumb>`})},f={args:{"aria-label":`Breadcrumb Disabled (Options API)`,expandText:`Show more`,items:[{text:`Home`,href:`/`},{text:`Disabled`,href:`/next`,disabled:!0},{text:`NextNext`,href:`/next/next`},{text:`Current`,href:`/next/next/current`}],default:``},render:e=>({components:{DBBreadcrumb:a,DBBreadcrumbItem:i,DBInfotext:s},setup(){return{args:e}},template:`<DBBreadcrumb v-bind="args"   >${e.default}</DBBreadcrumb>`})},p=[`Composition`,`OptionsAPI`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Breadcrumb Disabled (Composition)",
    "expandText": "Show more",
    "default": \`<DBBreadcrumbItem><a href="/">Home</a></DBBreadcrumbItem
><DBBreadcrumbItem
  text="Disabled"
  href="/next"
  :disabled="true"
></DBBreadcrumbItem
><DBBreadcrumbItem><a href="/next/next">NextNext</a></DBBreadcrumbItem
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
    "aria-label": "Breadcrumb Disabled (Options API)",
    "expandText": "Show more",
    "items": [{
      text: 'Home',
      href: '/'
    }, {
      text: 'Disabled',
      href: '/next',
      disabled: true
    }, {
      text: 'NextNext',
      href: '/next/next'
    }, {
      text: 'Current',
      href: '/next/next/current'
    }],
    "default": \`\`
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
}`,...f.parameters?.docs?.source}}}})))()}export{m as i,f as n,c as r,d as t};