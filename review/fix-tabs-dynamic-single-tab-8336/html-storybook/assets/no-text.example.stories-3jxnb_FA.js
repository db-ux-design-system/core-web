import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-CXe8Kd5c.js";import{i as n,n as r,r as i,t as a}from"./breadcrumb-ByNMJekK.js";var o,s,c,l,u,d,f;function p(){return(p=e((()=>{n(),r(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBBreadcrumb/No text`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`small`,`medium`]},separator:{control:`select`,options:[`chevron`,`slash`]},id:{control:`text`}}},l={args:{"aria-label":`Breadcrumb No text (Composition)`,expandText:`Show more`,children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i,{icon:`house`,text:`Home`,href:`/`,noText:!0}),(0,o.jsx)(i,{icon:`person`,text:`Profile`,href:`/profile`,noText:!0}),(0,o.jsx)(i,{icon:`gear`,text:`Settings`,href:`/profile/settings`,ariaCurrent:`page`,noText:!0})]})},render:e=>(0,o.jsx)(a,{...e})},u={args:{"aria-label":`Breadcrumb No text (Options API)`,expandText:`Show more`,items:[{noText:!0,icon:`house`,text:`Home`,href:`/`},{noText:!0,icon:`person`,text:`Profile`,href:`/profile`},{noText:!0,icon:`gear`,text:`Settings`,href:`/profile/settings`}]},render:e=>(0,o.jsx)(a,{...e})},d={args:{"aria-label":`Breadcrumb No text (Composition slotted)`,expandText:`Show more`,children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i,{icon:`house`,noText:!0,children:(0,o.jsx)(`a`,{href:`/`,children:`Home`})}),(0,o.jsx)(i,{icon:`person`,noText:!0,children:(0,o.jsx)(`a`,{href:`/profile`,children:`Profile`})}),(0,o.jsx)(i,{icon:`gear`,noText:!0,children:(0,o.jsx)(`a`,{href:`/profile/settings`,"aria-current":`page`,children:`Settings`})})]})},render:e=>(0,o.jsx)(a,{...e})},f=[`Composition`,`OptionsAPI`,`Compositionslotted`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Breadcrumb No text (Composition)",
    "expandText": "Show more",
    "children": <><DBBreadcrumbItem icon="house" text="Home" href="/" noText /><DBBreadcrumbItem icon="person" text="Profile" href="/profile" noText /><DBBreadcrumbItem icon="gear" text="Settings" href="/profile/settings" ariaCurrent="page" noText /></>
  },
  render: (properties: any) => <DBBreadcrumb {...properties} />
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
    }]
  },
  render: (properties: any) => <DBBreadcrumb {...properties} />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Breadcrumb No text (Composition slotted)",
    "expandText": "Show more",
    "children": <><DBBreadcrumbItem icon="house" noText><a href="/">Home</a></DBBreadcrumbItem><DBBreadcrumbItem icon="person" noText><a href="/profile">Profile</a></DBBreadcrumbItem><DBBreadcrumbItem icon="gear" noText><a href="/profile/settings" aria-current="page">
                        Settings
                    </a></DBBreadcrumbItem></>
  },
  render: (properties: any) => <DBBreadcrumb {...properties} />
}`,...d.parameters?.docs?.source}}}})))()}p();export{l as Composition,d as Compositionslotted,u as OptionsAPI,f as __namedExportsOrder,c as default};