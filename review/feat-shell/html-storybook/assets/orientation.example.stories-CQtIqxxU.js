import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{Pt as n,Rt as r,bt as i,t as a,vt as o}from"./src-DoBU-6Jr.js";var s,c,l,u,d,f;e((()=>{a(),s=t(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBControlPanelDesktop/Orientation`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`medium`,`large`,`small`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},expanded:{control:`boolean`},expandButtonTooltip:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},u={args:{orientation:`horizontal`,brand:(0,s.jsx)(r,{"data-logo":`db-systel`}),children:(0,s.jsxs)(i,{"aria-label":`(Default) Horizontal`,children:[(0,s.jsx)(o,{icon:`x_placeholder`,children:(0,s.jsx)(`a`,{href:`#`,children:`(Default) Horizontal`})}),(0,s.jsx)(o,{icon:`x_placeholder`,disabled:!0,children:(0,s.jsx)(`a`,{href:`#`,children:`(Default) Horizontal disabled`})})]})},render:e=>(0,s.jsx)(`div`,{style:{width:`100%`,display:`block`},children:(0,s.jsx)(n,{...e})})},d={args:{orientation:`vertical`,brand:(0,s.jsx)(r,{"data-logo":`db-systel`}),children:(0,s.jsxs)(i,{"aria-label":`Vertical`,children:[(0,s.jsx)(o,{icon:`x_placeholder`,children:(0,s.jsx)(`a`,{href:`#`,children:`Vertical`})}),(0,s.jsx)(o,{icon:`x_placeholder`,disabled:!0,children:(0,s.jsx)(`a`,{href:`#`,children:`Vertical disabled`})})]})},render:e=>(0,s.jsx)(`div`,{style:{maxInlineSize:`300px`,width:`auto`,height:`500px`,display:`block`},children:(0,s.jsx)(n,{...e})})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "orientation": "horizontal",
    "brand": <DBControlPanelBrand data-logo="db-systel" />,
    "children": <DBControlPanelNavigation aria-label="(Default) Horizontal" {...{}}><DBControlPanelNavigationItem icon="x_placeholder"><a href="#">(Default) Horizontal</a></DBControlPanelNavigationItem><DBControlPanelNavigationItem icon="x_placeholder" disabled><a href="#">(Default) Horizontal disabled</a></DBControlPanelNavigationItem></DBControlPanelNavigation>
  },
  render: (properties: any) => <div style={{
    width: '100%',
    display: 'block'
  }}><DBControlPanelDesktop {...properties} /></div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "orientation": "vertical",
    "brand": <DBControlPanelBrand data-logo="db-systel" />,
    "children": <DBControlPanelNavigation aria-label="Vertical" {...{}}><DBControlPanelNavigationItem icon="x_placeholder"><a href="#">Vertical</a></DBControlPanelNavigationItem><DBControlPanelNavigationItem icon="x_placeholder" disabled><a href="#">Vertical disabled</a></DBControlPanelNavigationItem></DBControlPanelNavigation>
  },
  render: (properties: any) => <div style={{
    maxInlineSize: '300px',
    width: 'auto',
    height: '500px',
    display: 'block'
  }}><DBControlPanelDesktop {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f=[`DefaultHorizontal`,`Vertical`]}))();export{u as DefaultHorizontal,d as Vertical,f as __namedExportsOrder,l as default};