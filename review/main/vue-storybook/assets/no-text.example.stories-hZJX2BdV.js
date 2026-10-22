import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,n,r,t as i}from"./breadcrumb-U16jAvtl.js";import{n as a,t as o}from"./infotext-CMFkNVUS.js";var s,c,l,u,d,f;function p(){return(p=e((()=>{t(),a(),n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBBreadcrumb/No text`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`small`,`medium`]},separator:{control:`select`,options:[`chevron`,`slash`]},id:{control:`text`}}},l={args:{"aria-label":`Breadcrumb No text (Composition)`,expandText:`Show more`,default:`<DBBreadcrumbItem
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
></DBBreadcrumbItem>`},render:e=>({components:{DBBreadcrumb:i,DBBreadcrumbItem:r,DBInfotext:o},setup(){return{args:e}},template:`<DBBreadcrumb v-bind="args"   >${e.default}</DBBreadcrumb>`})},u={args:{"aria-label":`Breadcrumb No text (Options API)`,expandText:`Show more`,items:[{noText:!0,icon:`house`,text:`Home`,href:`/`},{noText:!0,icon:`person`,text:`Profile`,href:`/profile`},{noText:!0,icon:`gear`,text:`Settings`,href:`/profile/settings`}],default:``},render:e=>({components:{DBBreadcrumb:i,DBBreadcrumbItem:r,DBInfotext:o},setup(){return{args:e}},template:`<DBBreadcrumb v-bind="args"   >${e.default}</DBBreadcrumb>`})},d={args:{"aria-label":`Breadcrumb No text (Composition slotted)`,expandText:`Show more`,default:`<DBBreadcrumbItem icon="house" :noText="true"
  ><a href="/">Home</a></DBBreadcrumbItem
><DBBreadcrumbItem icon="person" :noText="true"
  ><a href="/profile">Profile</a></DBBreadcrumbItem
><DBBreadcrumbItem icon="gear" :noText="true"
  ><a href="/profile/settings" aria-current="page">
    Settings
  </a></DBBreadcrumbItem
>`},render:e=>({components:{DBBreadcrumb:i,DBBreadcrumbItem:r,DBInfotext:o},setup(){return{args:e}},template:`<DBBreadcrumb v-bind="args"   >${e.default}</DBBreadcrumb>`})},f=[`Composition`,`OptionsAPI`,`Compositionslotted`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}}})))()}p();export{l as Composition,d as Compositionslotted,u as OptionsAPI,f as __namedExportsOrder,c as default};