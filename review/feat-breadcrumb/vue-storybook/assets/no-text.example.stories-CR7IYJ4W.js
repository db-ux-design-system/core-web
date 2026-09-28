import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,n,r,t as i}from"./breadcrumb-cFri0USm.js";import{n as a,t as o}from"./infotext-D8byYo-2.js";var s,c,l,u,d;function f(){return(f=e((()=>{t(),a(),n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBBreadcrumb/No text`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`small`,`medium`]},separator:{control:`select`,options:[`chevron`,`slash`]},id:{control:`text`}}},l={args:{"aria-label":`Breadcrumb No text (Composition)`,expandText:`Show more`,default:`<DBBreadcrumbItem
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
></DBBreadcrumbItem>`},render:e=>({components:{DBBreadcrumb:i,DBBreadcrumbItem:r,DBInfotext:o},setup(){return{args:e}},template:`<DBBreadcrumb v-bind="args"   >${e.default}</DBBreadcrumb>`})},u={args:{"aria-label":`Breadcrumb No text (Options API)`,expandText:`Show more`,items:[{noText:!0,icon:`house`,text:`Home`,href:`/`},{noText:!0,icon:`person`,text:`Profile`,href:`/profile`},{noText:!0,icon:`gear`,text:`Settings`,href:`/profile/settings`}],default:``},render:e=>({components:{DBBreadcrumb:i,DBBreadcrumbItem:r,DBInfotext:o},setup(){return{args:e}},template:`<DBBreadcrumb v-bind="args"   >${e.default}</DBBreadcrumb>`})},d=[`Composition`,`OptionsAPI`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}}})))()}f();export{l as Composition,u as OptionsAPI,d as __namedExportsOrder,c as default};