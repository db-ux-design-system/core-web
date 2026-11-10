import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-BqvJLakp.js";import{i,n as a,t as o}from"./apply-web-component-args-BtUnDguQ.js";var s=t({Composition:()=>u,Compositionslotted:()=>f,OptionsAPI:()=>d,__namedExportsOrder:()=>p,default:()=>l}),c,l,u,d,f,p;function m(){return(m=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBBreadcrumb/No text`,component:`db-breadcrumb`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`small`,`medium`]},separator:{control:`select`,options:[`chevron`,`slash`]},id:{control:`text`}}},u={args:{"aria-label":`Breadcrumb No text (Composition)`,expandText:`Show more`},render:({children:e,...t})=>n`<db-breadcrumb ${a(t)}>${i(`<db-breadcrumb-item icon="house" text="Home" href="/" no-text></db-breadcrumb-item><db-breadcrumb-item icon="person" text="Profile" href="/profile" no-text></db-breadcrumb-item><db-breadcrumb-item icon="gear" text="Settings" href="/profile/settings" aria-current="page" no-text></db-breadcrumb-item>`)}</db-breadcrumb>`},d={args:{"aria-label":`Breadcrumb No text (Options API)`,expandText:`Show more`,items:[{noText:!0,icon:`house`,text:`Home`,href:`/`},{noText:!0,icon:`person`,text:`Profile`,href:`/profile`},{noText:!0,icon:`gear`,text:`Settings`,href:`/profile/settings`}]},render:({children:e,...t})=>n`<db-breadcrumb ${a(t)}></db-breadcrumb>`},f={args:{"aria-label":`Breadcrumb No text (Composition slotted)`,expandText:`Show more`},render:({children:e,...t})=>n`<db-breadcrumb ${a(t)}>${i(`<db-breadcrumb-item icon="house" no-text><a href="/">Home</a></db-breadcrumb-item><db-breadcrumb-item icon="person" no-text><a href="/profile">Profile</a></db-breadcrumb-item><db-breadcrumb-item icon="gear" no-text><a href="/profile/settings" aria-current="page">Settings</a></db-breadcrumb-item>`)}</db-breadcrumb>`},p=[`Composition`,`OptionsAPI`,`Compositionslotted`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Breadcrumb No text (Composition)",
    "expandText": "Show more"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-breadcrumb \${spreadArgs(args)}>\${unsafeHTML(\`<db-breadcrumb-item icon="house" text="Home" href="/" no-text></db-breadcrumb-item><db-breadcrumb-item icon="person" text="Profile" href="/profile" no-text></db-breadcrumb-item><db-breadcrumb-item icon="gear" text="Settings" href="/profile/settings" aria-current="page" no-text></db-breadcrumb-item>\`)}</db-breadcrumb>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Breadcrumb No text (Composition slotted)",
    "expandText": "Show more"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-breadcrumb \${spreadArgs(args)}>\${unsafeHTML(\`<db-breadcrumb-item icon="house" no-text><a href="/">Home</a></db-breadcrumb-item><db-breadcrumb-item icon="person" no-text><a href="/profile">Profile</a></db-breadcrumb-item><db-breadcrumb-item icon="gear" no-text><a href="/profile/settings" aria-current="page">Settings</a></db-breadcrumb-item>\`)}</db-breadcrumb>\`
}`,...f.parameters?.docs?.source}}}})))()}export{s as a,m as i,f as n,d as r,u as t};