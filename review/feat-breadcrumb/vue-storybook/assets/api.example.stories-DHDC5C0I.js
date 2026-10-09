import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,n,r,t as i}from"./breadcrumb-P14sVts-.js";import{n as a,t as o}from"./infotext-BAJ_KW8J.js";var s,c,l,u,d;function f(){return(f=e((()=>{t(),a(),n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBBreadcrumb/API`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`small`,`medium`]},separator:{control:`select`,options:[`chevron`,`slash`]},id:{control:`text`}}},l={args:{"aria-label":`Breadcrumb API (Composition)`,expandText:`Show more`,default:`<DBBreadcrumbItem><a href="/">Home</a></DBBreadcrumbItem
><DBBreadcrumbItem><a href="/next">Next</a></DBBreadcrumbItem
><DBBreadcrumbItem><a href="/next/next">NextNext</a></DBBreadcrumbItem
><DBBreadcrumbItem
  ><a href="/next/next/current" aria-current="page">
    Current
  </a></DBBreadcrumbItem
>`},render:e=>({components:{DBBreadcrumb:i,DBBreadcrumbItem:r,DBInfotext:o},setup(){return{args:e}},template:`<DBBreadcrumb v-bind="args"   >${e.default}</DBBreadcrumb>`})},u={args:{"aria-label":`Breadcrumb API (Options API)`,expandText:`Show more`,items:[{text:`Home`,href:`/`},{text:`Next`,href:`/next`},{text:`NextNext`,href:`/next/next`},{text:`Current`,href:`/next/next/current`}],default:``},render:e=>({components:{DBBreadcrumb:i,DBBreadcrumbItem:r,DBInfotext:o},setup(){return{args:e}},template:`<DBBreadcrumb v-bind="args"   >${e.default}</DBBreadcrumb>`})},d=[`Composition`,`OptionsAPI`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Breadcrumb API (Composition)",
    "expandText": "Show more",
    "default": \`<DBBreadcrumbItem><a href="/">Home</a></DBBreadcrumbItem
><DBBreadcrumbItem><a href="/next">Next</a></DBBreadcrumbItem
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Breadcrumb API (Options API)",
    "expandText": "Show more",
    "items": [{
      text: 'Home',
      href: '/'
    }, {
      text: 'Next',
      href: '/next'
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
}`,...u.parameters?.docs?.source}}}})))()}f();export{l as Composition,u as OptionsAPI,d as __namedExportsOrder,c as default};