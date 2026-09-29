import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,n,r,t as i}from"./breadcrumb-BY6WOvhP.js";import{n as a,t as o}from"./breadcrumb-truncation-item-C0i4mOO5.js";var s,c,l,u;function d(){return(d=e((()=>{t(),a(),n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBBreadcrumb/Truncation`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`small`,`medium`]},separator:{control:`select`,options:[`chevron`,`slash`]},id:{control:`text`}}},l={args:{"aria-label":`Breadcrumb`,expandText:`Show more`,default:`<DBBreadcrumbItem><a href="/">Home</a></DBBreadcrumbItem
><DBBreadcrumbTruncationItem label="Show more breadcrumbs"
  ><DBBreadcrumbItem><a href="/1">Level 1</a></DBBreadcrumbItem
  ><DBBreadcrumbItem><a href="/1/2">Level 2</a></DBBreadcrumbItem
  ><DBBreadcrumbItem
    ><a href="/1/2/3">Level 3</a></DBBreadcrumbItem
  ></DBBreadcrumbTruncationItem
><DBBreadcrumbItem><a href="/1/2/3/4">Level 4</a></DBBreadcrumbItem
><DBBreadcrumbItem
  ><a href="/1/2/3/4/current" aria-current="page">
    Current
  </a></DBBreadcrumbItem
>`},render:e=>({components:{DBBreadcrumb:i,DBBreadcrumbItem:r,DBBreadcrumbTruncationItem:o},setup(){return{args:e}},template:`<DBBreadcrumb v-bind="args"   >${e.default}</DBBreadcrumb>`})},u=[`Popover`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Breadcrumb",
    "expandText": "Show more",
    "default": \`<DBBreadcrumbItem><a href="/">Home</a></DBBreadcrumbItem
><DBBreadcrumbTruncationItem label="Show more breadcrumbs"
  ><DBBreadcrumbItem><a href="/1">Level 1</a></DBBreadcrumbItem
  ><DBBreadcrumbItem><a href="/1/2">Level 2</a></DBBreadcrumbItem
  ><DBBreadcrumbItem
    ><a href="/1/2/3">Level 3</a></DBBreadcrumbItem
  ></DBBreadcrumbTruncationItem
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
      DBBreadcrumbTruncationItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBBreadcrumb v-bind="args"   >\${args.default}</DBBreadcrumb>\`
  })
}`,...l.parameters?.docs?.source}}}})))()}d();export{l as Popover,u as __namedExportsOrder,c as default};