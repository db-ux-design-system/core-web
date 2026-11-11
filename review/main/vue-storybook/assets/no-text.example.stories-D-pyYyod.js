import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{i as n,n as r,r as i,t as a}from"./breadcrumb-DoeiKJQi.js";import{n as o,t as s}from"./infotext-f14xs-al.js";var c=t({Composition:()=>d,Compositionslotted:()=>p,OptionsAPI:()=>f,__namedExportsOrder:()=>m,default:()=>u}),l,u,d,f,p,m;function h(){return(h=e((()=>{n(),o(),r(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBBreadcrumb/No text`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`small`,`medium`]},separator:{control:`select`,options:[`chevron`,`slash`]},id:{control:`text`}}},d={args:{"aria-label":`Breadcrumb No text (Composition)`,expandText:`Show more`,default:`<DBBreadcrumbItem
  icon="house"
  text="Home"
  href="/"
  :noText="true"
></DBBreadcrumbItem
><DBBreadcrumbItem
  icon="person"
  text="Profile"
  href="/profile"
  :noText="true"
></DBBreadcrumbItem
><DBBreadcrumbItem
  icon="gear"
  text="Settings"
  href="/profile/settings"
  ariaCurrent="page"
  :noText="true"
></DBBreadcrumbItem>`},render:e=>({components:{DBBreadcrumb:a,DBBreadcrumbItem:i,DBInfotext:s},setup(){return{args:e}},template:`<DBBreadcrumb v-bind="args"   >${e.default}</DBBreadcrumb>`})},f={args:{"aria-label":`Breadcrumb No text (Options API)`,expandText:`Show more`,items:[{noText:!0,icon:`house`,text:`Home`,href:`/`},{noText:!0,icon:`person`,text:`Profile`,href:`/profile`},{noText:!0,icon:`gear`,text:`Settings`,href:`/profile/settings`}],default:``},render:e=>({components:{DBBreadcrumb:a,DBBreadcrumbItem:i,DBInfotext:s},setup(){return{args:e}},template:`<DBBreadcrumb v-bind="args"   >${e.default}</DBBreadcrumb>`})},p={args:{"aria-label":`Breadcrumb No text (Composition slotted)`,expandText:`Show more`,default:`<DBBreadcrumbItem icon="house" :noText="true"
  ><a href="/">Home</a></DBBreadcrumbItem
><DBBreadcrumbItem icon="person" :noText="true"
  ><a href="/profile">Profile</a></DBBreadcrumbItem
><DBBreadcrumbItem icon="gear" :noText="true"
  ><a href="/profile/settings" aria-current="page">
    Settings
  </a></DBBreadcrumbItem
>`},render:e=>({components:{DBBreadcrumb:a,DBBreadcrumbItem:i,DBInfotext:s},setup(){return{args:e}},template:`<DBBreadcrumb v-bind="args"   >${e.default}</DBBreadcrumb>`})},m=[`Composition`,`OptionsAPI`,`Compositionslotted`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Breadcrumb No text (Composition)",
    "expandText": "Show more",
    "default": \`<DBBreadcrumbItem
  icon="house"
  text="Home"
  href="/"
  :noText="true"
></DBBreadcrumbItem
><DBBreadcrumbItem
  icon="person"
  text="Profile"
  href="/profile"
  :noText="true"
></DBBreadcrumbItem
><DBBreadcrumbItem
  icon="gear"
  text="Settings"
  href="/profile/settings"
  ariaCurrent="page"
  :noText="true"
></DBBreadcrumbItem>\`
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
    "aria-label": "Breadcrumb No text (Options API)",
    "expandText": "Show more",
    "items": [{
      noText: true,
      icon: 'house',
      text: 'Home',
      href: '/'
    }, {
      noText: true,
      icon: 'person',
      text: 'Profile',
      href: '/profile'
    }, {
      noText: true,
      icon: 'gear',
      text: 'Settings',
      href: '/profile/settings'
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Breadcrumb No text (Composition slotted)",
    "expandText": "Show more",
    "default": \`<DBBreadcrumbItem icon="house" :noText="true"
  ><a href="/">Home</a></DBBreadcrumbItem
><DBBreadcrumbItem icon="person" :noText="true"
  ><a href="/profile">Profile</a></DBBreadcrumbItem
><DBBreadcrumbItem icon="gear" :noText="true"
  ><a href="/profile/settings" aria-current="page">
    Settings
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
}`,...p.parameters?.docs?.source}}}})))()}export{c as a,h as i,p as n,f as r,d as t};