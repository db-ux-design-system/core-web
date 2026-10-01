import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,n as r,r as i,t as a}from"./breadcrumb-CKW-3lps.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),r(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBBreadcrumb/Disabled`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`small`,`medium`]},separator:{control:`select`,options:[`chevron`,`slash`]},id:{control:`text`}}},l={args:{"aria-label":`Breadcrumb Disabled (Composition)`,expandText:`Show more`,children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i,{children:(0,o.jsx)(`a`,{href:`/`,children:`Home`})}),(0,o.jsx)(i,{text:`Disabled`,href:`/next`,disabled:!0}),(0,o.jsx)(i,{children:(0,o.jsx)(`a`,{href:`/next/next`,children:`NextNext`})}),(0,o.jsx)(i,{children:(0,o.jsx)(`a`,{href:`/next/next/current`,"aria-current":`page`,children:`Current`})})]})},render:e=>(0,o.jsx)(a,{...e})},u={args:{"aria-label":`Breadcrumb Disabled (Options API)`,expandText:`Show more`,items:[{text:`Home`,href:`/`},{text:`Disabled`,href:`/next`,disabled:!0},{text:`NextNext`,href:`/next/next`},{text:`Current`,href:`/next/next/current`}]},render:e=>(0,o.jsx)(a,{...e})},d=[`Composition`,`OptionsAPI`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Breadcrumb Disabled (Composition)",
    "expandText": "Show more",
    "children": <><DBBreadcrumbItem><a href="/">Home</a></DBBreadcrumbItem><DBBreadcrumbItem text="Disabled" href="/next" disabled /><DBBreadcrumbItem><a href="/next/next">NextNext</a></DBBreadcrumbItem><DBBreadcrumbItem><a href="/next/next/current" aria-current="page">
                        Current
                    </a></DBBreadcrumbItem></>
  },
  render: (properties: any) => <DBBreadcrumb {...properties} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
    }]
  },
  render: (properties: any) => <DBBreadcrumb {...properties} />
}`,...u.parameters?.docs?.source}}}})))()}f();export{l as Composition,u as OptionsAPI,d as __namedExportsOrder,c as default};