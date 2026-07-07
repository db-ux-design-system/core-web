import{i as e}from"./preload-helper-DtImKteI.js";import{t}from"./iframe-gRBfVmX9.js";import{Mt as n,ft as r,gt as i,mt as a,t as o}from"./src-1VNY2xT3.js";var s,c,l,u,d,f;e((()=>{o(),s=t(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBControlPanelMobile/Position`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{position:{control:`select`,options:[`top`,`bottom`]},drawerHeaderText:{control:`text`},burgerMenuLabel:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},u={args:{position:`top`,drawerHeaderText:`DBControlPanel`,brand:(0,s.jsx)(n,{"data-logo":`db-systel`}),children:(0,s.jsx)(a,{"aria-label":`(Default) Top`,children:(0,s.jsx)(r,{icon:`x_placeholder`,children:(0,s.jsx)(`a`,{href:`#`,children:`(Default) Top`})})})},render:e=>(0,s.jsx)(`div`,{style:{width:`100%`,display:`block`},children:(0,s.jsx)(i,{...e})})},d={args:{position:`bottom`,drawerHeaderText:`DBControlPanel`,brand:(0,s.jsx)(n,{"data-logo":`db-systel`}),children:(0,s.jsx)(a,{"aria-label":`Bottom`,children:(0,s.jsx)(r,{icon:`x_placeholder`,children:(0,s.jsx)(`a`,{href:`#`,children:`Bottom`})})})},render:e=>(0,s.jsx)(`div`,{style:{width:`100%`,display:`block`},children:(0,s.jsx)(i,{...e})})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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