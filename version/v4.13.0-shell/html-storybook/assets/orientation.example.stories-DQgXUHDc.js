import{i as e}from"./preload-helper-DtImKteI.js";import{t}from"./iframe-gRBfVmX9.js";import{Mt as n,Ot as r,ft as i,mt as a,t as o}from"./src-1VNY2xT3.js";var s,c,l,u,d,f;e((()=>{o(),s=t(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBControlPanelDesktop/Orientation`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`medium`,`large`,`small`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},expanded:{control:`boolean`},expandButtonTooltip:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},u={args:{orientation:`horizontal`,brand:(0,s.jsx)(n,{"data-logo":`db-systel`}),children:(0,s.jsxs)(a,{"aria-label":`(Default) Horizontal`,children:[(0,s.jsx)(i,{icon:`x_placeholder`,children:(0,s.jsx)(`a`,{href:`#`,children:`(Default) Horizontal`})}),(0,s.jsx)(i,{icon:`x_placeholder`,disabled:!0,children:(0,s.jsx)(`a`,{href:`#`,children:`(Default) Horizontal disabled`})})]})},render:e=>(0,s.jsx)(`div`,{style:{width:`100%`,display:`block`},children:(0,s.jsx)(r,{...e})})},d={args:{orientation:`vertical`,brand:(0,s.jsx)(n,{"data-logo":`db-systel`}),children:(0,s.jsxs)(a,{"aria-label":`Vertical`,children:[(0,s.jsx)(i,{icon:`x_placeholder`,children:(0,s.jsx)(`a`,{href:`#`,children:`Vertical`})}),(0,s.jsx)(i,{icon:`x_placeholder`,disabled:!0,children:(0,s.jsx)(`a`,{href:`#`,children:`Vertical disabled`})})]})},render:e=>(0,s.jsx)(`div`,{style:{maxInlineSize:`300px`,width:`auto`,height:`500px`,display:`block`},children:(0,s.jsx)(r,{...e})})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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