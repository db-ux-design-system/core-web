import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-0i0uJ4bx.js";import{i as r,n as i,t as a}from"./apply-web-component-args-qAksxCkG.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBBreadcrumb/No text`,component:`db-breadcrumb`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`small`,`medium`]},separator:{control:`select`,options:[`chevron`,`slash`]},id:{control:`text`}}},c={args:{"aria-label":`Breadcrumb No text (Composition)`,expandText:`Show more`},render:({children:e,...n})=>t`<db-breadcrumb ${i(n)}>${r(`<db-breadcrumb-item icon="house" text="Home" href="/" no-text></db-breadcrumb-item><db-breadcrumb-item icon="person" text="Profile" href="/profile" no-text></db-breadcrumb-item><db-breadcrumb-item icon="gear" text="Settings" href="/profile/settings" aria-current="page" no-text></db-breadcrumb-item>`)}</db-breadcrumb>`},l={args:{"aria-label":`Breadcrumb No text (Options API)`,expandText:`Show more`,items:[{noText:!0,icon:`house`,text:`Home`,href:`/`},{noText:!0,icon:`person`,text:`Profile`,href:`/profile`},{noText:!0,icon:`gear`,text:`Settings`,href:`/profile/settings`}]},render:({children:e,...n})=>t`<db-breadcrumb ${i(n)}></db-breadcrumb>`},u={args:{"aria-label":`Breadcrumb No text (Composition slotted)`,expandText:`Show more`},render:({children:e,...n})=>t`<db-breadcrumb ${i(n)}>${r(`<db-breadcrumb-item icon="house" no-text><a href="/">Home</a></db-breadcrumb-item><db-breadcrumb-item icon="person" no-text><a href="/profile">Profile</a></db-breadcrumb-item><db-breadcrumb-item icon="gear" no-text><a href="/profile/settings" aria-current="page">Settings</a></db-breadcrumb-item>`)}</db-breadcrumb>`},d=[`Composition`,`OptionsAPI`,`Compositionslotted`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Breadcrumb No text (Composition)",
    "expandText": "Show more"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-breadcrumb \${spreadArgs(args)}>\${unsafeHTML(\`<db-breadcrumb-item icon="house" text="Home" href="/" no-text></db-breadcrumb-item><db-breadcrumb-item icon="person" text="Profile" href="/profile" no-text></db-breadcrumb-item><db-breadcrumb-item icon="gear" text="Settings" href="/profile/settings" aria-current="page" no-text></db-breadcrumb-item>\`)}</db-breadcrumb>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
    }]
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-breadcrumb \${spreadArgs(args)}></db-breadcrumb>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Breadcrumb No text (Composition slotted)",
    "expandText": "Show more"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-breadcrumb \${spreadArgs(args)}>\${unsafeHTML(\`<db-breadcrumb-item icon="house" no-text><a href="/">Home</a></db-breadcrumb-item><db-breadcrumb-item icon="person" no-text><a href="/profile">Profile</a></db-breadcrumb-item><db-breadcrumb-item icon="gear" no-text><a href="/profile/settings" aria-current="page">Settings</a></db-breadcrumb-item>\`)}</db-breadcrumb>\`
}`,...u.parameters?.docs?.source}}}})))()}f();export{c as Composition,u as Compositionslotted,l as OptionsAPI,d as __namedExportsOrder,s as default};