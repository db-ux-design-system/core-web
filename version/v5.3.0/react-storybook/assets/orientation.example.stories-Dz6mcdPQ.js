import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./control-panel-brand-DXPbj5Ub.js";import{n as i,t as a}from"./control-panel-desktop-DEd23h5m.js";import{i as o,n as s,r as c,t as l}from"./control-panel-navigation-item-DeS4eHG6.js";var u,d,f,p,m,h;function g(){return(g=e((()=>{n(),s(),o(),i(),u=t(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBControlPanelDesktop/Orientation`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`medium`,`large`,`small`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},expanded:{control:`boolean`},expandButtonTooltip:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},p={args:{orientation:`horizontal`,brand:(0,u.jsx)(r,{"data-logo":`db-systel`}),children:(0,u.jsxs)(c,{"aria-label":`(Default) Horizontal`,children:[(0,u.jsx)(l,{icon:`x_placeholder`,children:(0,u.jsx)(`a`,{href:`#`,children:`(Default) Horizontal`})}),(0,u.jsx)(l,{icon:`x_placeholder`,disabled:!0,children:(0,u.jsx)(`a`,{href:`#`,children:`(Default) Horizontal disabled`})})]})},render:e=>(0,u.jsx)(`div`,{style:{width:`100%`,display:`block`},children:(0,u.jsx)(a,{...e})})},m={args:{orientation:`vertical`,brand:(0,u.jsx)(r,{"data-logo":`db-systel`}),children:(0,u.jsxs)(c,{"aria-label":`Vertical`,children:[(0,u.jsx)(l,{icon:`x_placeholder`,children:(0,u.jsx)(`a`,{href:`#`,children:`Vertical`})}),(0,u.jsx)(l,{icon:`x_placeholder`,disabled:!0,children:(0,u.jsx)(`a`,{href:`#`,children:`Vertical disabled`})})]})},render:e=>(0,u.jsx)(`div`,{style:{maxInlineSize:`300px`,width:`auto`,height:`500px`,display:`block`},children:(0,u.jsx)(a,{...e})})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "orientation": "horizontal",
    "brand": <DBControlPanelBrand data-logo="db-systel" />,
    "children": <DBControlPanelNavigation aria-label="(Default) Horizontal" {...{}}><DBControlPanelNavigationItem icon="x_placeholder"><a href="#">(Default) Horizontal</a></DBControlPanelNavigationItem><DBControlPanelNavigationItem icon="x_placeholder" disabled><a href="#">(Default) Horizontal disabled</a></DBControlPanelNavigationItem></DBControlPanelNavigation>
  },
  render: (properties: any) => <div style={{
    width: '100%',
    display: 'block'
  }}><DBControlPanelDesktop {...properties} /></div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`DefaultHorizontal`,`Vertical`]})))()}g();export{p as DefaultHorizontal,m as Vertical,h as __namedExportsOrder,f as default};