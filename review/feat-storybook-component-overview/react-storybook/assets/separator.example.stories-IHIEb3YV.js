import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{i as r,n as i,r as a,t as o}from"./breadcrumb-kozVIJXb.js";var s=t({DefaultChevron:()=>d,Slash:()=>f,__namedExportsOrder:()=>p,default:()=>u}),c,l,u,d,f,p;function m(){return(m=e((()=>{r(),i(),c=n(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBBreadcrumb/Separator`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`small`,`medium`]},separator:{control:`select`,options:[`chevron`,`slash`]},id:{control:`text`}}},d={args:{separator:`chevron`,"aria-label":`Breadcrumb (Chevron)`,expandText:`Show more`,children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{children:(0,c.jsx)(`a`,{href:`/`,children:`Home`})}),(0,c.jsx)(a,{children:(0,c.jsx)(`a`,{href:`/next`,children:`Next`})}),(0,c.jsx)(a,{children:(0,c.jsx)(`a`,{href:`/next/current`,"aria-current":`page`,children:`Current`})})]})},render:e=>(0,c.jsx)(o,{...e})},f={args:{separator:`slash`,"aria-label":`Breadcrumb (Slash)`,expandText:`Show more`,children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{children:(0,c.jsx)(`a`,{href:`/`,children:`Home`})}),(0,c.jsx)(a,{children:(0,c.jsx)(`a`,{href:`/next`,children:`Next`})}),(0,c.jsx)(a,{children:(0,c.jsx)(`a`,{href:`/next/current`,"aria-current":`page`,children:`Current`})})]})},render:e=>(0,c.jsx)(o,{...e})},p=[`DefaultChevron`,`Slash`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "separator": "chevron",
    "aria-label": "Breadcrumb (Chevron)",
    "expandText": "Show more",
    "children": <><DBBreadcrumbItem><a href="/">Home</a></DBBreadcrumbItem><DBBreadcrumbItem><a href="/next">Next</a></DBBreadcrumbItem><DBBreadcrumbItem><a href="/next/current" aria-current="page">
                        Current
                    </a></DBBreadcrumbItem></>
  },
  render: (properties: any) => <DBBreadcrumb {...properties} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "separator": "slash",
    "aria-label": "Breadcrumb (Slash)",
    "expandText": "Show more",
    "children": <><DBBreadcrumbItem><a href="/">Home</a></DBBreadcrumbItem><DBBreadcrumbItem><a href="/next">Next</a></DBBreadcrumbItem><DBBreadcrumbItem><a href="/next/current" aria-current="page">
                        Current
                    </a></DBBreadcrumbItem></>
  },
  render: (properties: any) => <DBBreadcrumb {...properties} />
}`,...f.parameters?.docs?.source}}}})))()}export{s as i,f as n,m as r,d as t};