import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{Rt as n,St as r,bt as i,t as a,vt as o}from"./src-DoBU-6Jr.js";var s,c,l,u,d,f;e((()=>{a(),s=t(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBControlPanelMobile/Position`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{position:{control:`select`,options:[`top`,`bottom`]},drawerHeaderText:{control:`text`},burgerMenuLabel:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},u={args:{position:`top`,drawerHeaderText:`DBControlPanel`,brand:(0,s.jsx)(n,{"data-logo":`db-systel`}),children:(0,s.jsx)(i,{"aria-label":`(Default) Top`,children:(0,s.jsx)(o,{icon:`x_placeholder`,children:(0,s.jsx)(`a`,{href:`#`,children:`(Default) Top`})})})},render:e=>(0,s.jsx)(`div`,{style:{width:`100%`,display:`block`},children:(0,s.jsx)(r,{...e})})},d={args:{position:`bottom`,drawerHeaderText:`DBControlPanel`,brand:(0,s.jsx)(n,{"data-logo":`db-systel`}),children:(0,s.jsx)(i,{"aria-label":`Bottom`,children:(0,s.jsx)(o,{icon:`x_placeholder`,children:(0,s.jsx)(`a`,{href:`#`,children:`Bottom`})})})},render:e=>(0,s.jsx)(`div`,{style:{width:`100%`,display:`block`},children:(0,s.jsx)(r,{...e})})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "position": "top",
    "drawerHeaderText": "DBControlPanel",
    "brand": <DBControlPanelBrand data-logo="db-systel" />,
    "children": <DBControlPanelNavigation aria-label="(Default) Top" {...{}}><DBControlPanelNavigationItem icon="x_placeholder"><a href="#">(Default) Top</a></DBControlPanelNavigationItem></DBControlPanelNavigation>
  },
  render: (properties: any) => <div style={{
    width: '100%',
    display: 'block'
  }}><DBControlPanelMobile {...properties} /></div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "position": "bottom",
    "drawerHeaderText": "DBControlPanel",
    "brand": <DBControlPanelBrand data-logo="db-systel" />,
    "children": <DBControlPanelNavigation aria-label="Bottom" {...{}}><DBControlPanelNavigationItem icon="x_placeholder"><a href="#">Bottom</a></DBControlPanelNavigationItem></DBControlPanelNavigation>
  },
  render: (properties: any) => <div style={{
    width: '100%',
    display: 'block'
  }}><DBControlPanelMobile {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f=[`DefaultTop`,`Bottom`]}))();export{d as Bottom,u as DefaultTop,f as __namedExportsOrder,l as default};