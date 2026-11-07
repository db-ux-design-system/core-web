import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{i as r,n as i,r as a,t as o}from"./breadcrumb-rATwRcfe.js";var s=t({Composition:()=>d,OptionsAPI:()=>f,__namedExportsOrder:()=>p,default:()=>u}),c,l,u,d,f,p;function m(){return(m=e((()=>{r(),i(),c=n(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBBreadcrumb/Disabled`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`small`,`medium`]},separator:{control:`select`,options:[`chevron`,`slash`]},id:{control:`text`}}},d={args:{"aria-label":`Breadcrumb Disabled (Composition)`,expandText:`Show more`,children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{children:(0,c.jsx)(`a`,{href:`/`,children:`Home`})}),(0,c.jsx)(a,{text:`Disabled`,href:`/next`,disabled:!0}),(0,c.jsx)(a,{children:(0,c.jsx)(`a`,{href:`/next/next`,children:`NextNext`})}),(0,c.jsx)(a,{children:(0,c.jsx)(`a`,{href:`/next/next/current`,"aria-current":`page`,children:`Current`})})]})},render:e=>(0,c.jsx)(o,{...e})},f={args:{"aria-label":`Breadcrumb Disabled (Options API)`,expandText:`Show more`,items:[{text:`Home`,href:`/`},{text:`Disabled`,href:`/next`,disabled:!0},{text:`NextNext`,href:`/next/next`},{text:`Current`,href:`/next/next/current`}]},render:e=>(0,c.jsx)(o,{...e})},p=[`Composition`,`OptionsAPI`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Breadcrumb Disabled (Composition)",
    "expandText": "Show more",
    "children": <><DBBreadcrumbItem><a href="/">Home</a></DBBreadcrumbItem><DBBreadcrumbItem text="Disabled" href="/next" disabled /><DBBreadcrumbItem><a href="/next/next">NextNext</a></DBBreadcrumbItem><DBBreadcrumbItem><a href="/next/next/current" aria-current="page">
                        Current
                    </a></DBBreadcrumbItem></>
  },
  render: (properties: any) => <DBBreadcrumb {...properties} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}}})))()}export{m as i,f as n,s as r,d as t};