import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,n as r,r as i,t as a}from"./breadcrumb-BZ17RS47.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),r(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBBreadcrumb/Separator`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`small`,`medium`]},separator:{control:`select`,options:[`chevron`,`slash`]},id:{control:`text`}}},l={args:{separator:`chevron`,"aria-label":`Breadcrumb (Chevron)`,expandText:`Show more`,children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i,{children:(0,o.jsx)(`a`,{href:`/`,children:`Home`})}),(0,o.jsx)(i,{children:(0,o.jsx)(`a`,{href:`/next`,children:`Next`})}),(0,o.jsx)(i,{children:(0,o.jsx)(`a`,{href:`/next/current`,"aria-current":`page`,children:`Current`})})]})},render:e=>(0,o.jsx)(a,{...e})},u={args:{separator:`slash`,"aria-label":`Breadcrumb (Slash)`,expandText:`Show more`,children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i,{children:(0,o.jsx)(`a`,{href:`/`,children:`Home`})}),(0,o.jsx)(i,{children:(0,o.jsx)(`a`,{href:`/next`,children:`Next`})}),(0,o.jsx)(i,{children:(0,o.jsx)(`a`,{href:`/next/current`,"aria-current":`page`,children:`Current`})})]})},render:e=>(0,o.jsx)(a,{...e})},d=[`DefaultChevron`,`Slash`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "separator": "chevron",
    "aria-label": "Breadcrumb (Chevron)",
    "expandText": "Show more",
    "children": <><DBBreadcrumbItem><a href="/">Home</a></DBBreadcrumbItem><DBBreadcrumbItem><a href="/next">Next</a></DBBreadcrumbItem><DBBreadcrumbItem><a href="/next/current" aria-current="page">
                        Current
                    </a></DBBreadcrumbItem></>
  },
  render: (properties: any) => <DBBreadcrumb {...properties} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "separator": "slash",
    "aria-label": "Breadcrumb (Slash)",
    "expandText": "Show more",
    "children": <><DBBreadcrumbItem><a href="/">Home</a></DBBreadcrumbItem><DBBreadcrumbItem><a href="/next">Next</a></DBBreadcrumbItem><DBBreadcrumbItem><a href="/next/current" aria-current="page">
                        Current
                    </a></DBBreadcrumbItem></>
  },
  render: (properties: any) => <DBBreadcrumb {...properties} />
}`,...u.parameters?.docs?.source}}}})))()}f();export{l as DefaultChevron,u as Slash,d as __namedExportsOrder,c as default};