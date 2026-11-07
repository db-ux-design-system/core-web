import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{i as r,n as i,r as a,t as o}from"./breadcrumb-rATwRcfe.js";var s=t({Composition:()=>d,Compositionslotted:()=>p,OptionsAPI:()=>f,__namedExportsOrder:()=>m,default:()=>u}),c,l,u,d,f,p,m;function h(){return(h=e((()=>{r(),i(),c=n(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBBreadcrumb/No text`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`small`,`medium`]},separator:{control:`select`,options:[`chevron`,`slash`]},id:{control:`text`}}},d={args:{"aria-label":`Breadcrumb No text (Composition)`,expandText:`Show more`,children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{icon:`house`,text:`Home`,href:`/`,noText:!0}),(0,c.jsx)(a,{icon:`person`,text:`Profile`,href:`/profile`,noText:!0}),(0,c.jsx)(a,{icon:`gear`,text:`Settings`,href:`/profile/settings`,ariaCurrent:`page`,noText:!0})]})},render:e=>(0,c.jsx)(o,{...e})},f={args:{"aria-label":`Breadcrumb No text (Options API)`,expandText:`Show more`,items:[{noText:!0,icon:`house`,text:`Home`,href:`/`},{noText:!0,icon:`person`,text:`Profile`,href:`/profile`},{noText:!0,icon:`gear`,text:`Settings`,href:`/profile/settings`}]},render:e=>(0,c.jsx)(o,{...e})},p={args:{"aria-label":`Breadcrumb No text (Composition slotted)`,expandText:`Show more`,children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{icon:`house`,noText:!0,children:(0,c.jsx)(`a`,{href:`/`,children:`Home`})}),(0,c.jsx)(a,{icon:`person`,noText:!0,children:(0,c.jsx)(`a`,{href:`/profile`,children:`Profile`})}),(0,c.jsx)(a,{icon:`gear`,noText:!0,children:(0,c.jsx)(`a`,{href:`/profile/settings`,"aria-current":`page`,children:`Settings`})})]})},render:e=>(0,c.jsx)(o,{...e})},m=[`Composition`,`OptionsAPI`,`Compositionslotted`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Breadcrumb No text (Composition)",
    "expandText": "Show more",
    "children": <><DBBreadcrumbItem icon="house" text="Home" href="/" noText /><DBBreadcrumbItem icon="person" text="Profile" href="/profile" noText /><DBBreadcrumbItem icon="gear" text="Settings" href="/profile/settings" ariaCurrent="page" noText /></>
  },
  render: (properties: any) => <DBBreadcrumb {...properties} />
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
    }]
  },
  render: (properties: any) => <DBBreadcrumb {...properties} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Breadcrumb No text (Composition slotted)",
    "expandText": "Show more",
    "children": <><DBBreadcrumbItem icon="house" noText><a href="/">Home</a></DBBreadcrumbItem><DBBreadcrumbItem icon="person" noText><a href="/profile">Profile</a></DBBreadcrumbItem><DBBreadcrumbItem icon="gear" noText><a href="/profile/settings" aria-current="page">
                        Settings
                    </a></DBBreadcrumbItem></>
  },
  render: (properties: any) => <DBBreadcrumb {...properties} />
}`,...p.parameters?.docs?.source}}}})))()}export{s as a,h as i,p as n,f as r,d as t};