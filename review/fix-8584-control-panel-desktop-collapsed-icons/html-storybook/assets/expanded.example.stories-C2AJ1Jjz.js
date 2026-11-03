import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-D8n028zg.js";import{n,t as r}from"./control-panel-brand-DIy7etZA.js";import{n as i,t as a}from"./control-panel-desktop-BmvwqMnI.js";import{i as o,n as s,r as c,t as l}from"./control-panel-navigation-item-BpUoWz4E.js";var u,d,f,p,m,h;function g(){return(g=e((()=>{n(),s(),o(),i(),u=t(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBControlPanelDesktop/Expanded`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],args:{onExpandButtonTooltipFn:d()},argTypes:{width:{control:`select`,options:[`full`,`medium`,`large`,`small`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},expanded:{control:`boolean`},expandButtonTooltip:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onExpandButtonTooltipFn:{action:`onExpandButtonTooltipFn`}}},p={args:{orientation:`vertical`,expanded:!0,brand:(0,u.jsx)(r,{"data-logo":`db-systel`}),children:(0,u.jsxs)(c,{"aria-label":`(Default) Expanded`,children:[(0,u.jsx)(l,{icon:`x_placeholder`,active:!0,children:(0,u.jsx)(`a`,{href:`#`,children:`(Default) Expanded 1`})}),(0,u.jsx)(l,{icon:`x_placeholder`,children:(0,u.jsx)(`a`,{href:`#`,children:`(Default) Expanded 2`})}),(0,u.jsx)(l,{icon:`x_placeholder`,children:(0,u.jsx)(`a`,{href:`#`,children:`(Default) Expanded 3`})})]})},render:e=>(0,u.jsx)(`div`,{style:{maxInlineSize:`300px`,width:`auto`,height:`500px`,display:`block`},children:(0,u.jsx)(a,{...e})})},m={args:{orientation:`vertical`,expanded:!1,brand:(0,u.jsx)(r,{"data-logo":`db-systel`}),children:(0,u.jsxs)(c,{"aria-label":`Collapsed`,children:[(0,u.jsx)(l,{icon:`x_placeholder`,active:!0,children:(0,u.jsx)(`a`,{href:`#`,children:`Collapsed 1`})}),(0,u.jsx)(l,{icon:`x_placeholder`,children:(0,u.jsx)(`a`,{href:`#`,children:`Collapsed 2`})}),(0,u.jsx)(l,{icon:`x_placeholder`,children:(0,u.jsx)(`a`,{href:`#`,children:`Collapsed 3`})})]})},render:e=>(0,u.jsx)(`div`,{style:{maxInlineSize:`300px`,width:`auto`,height:`500px`,display:`block`},children:(0,u.jsx)(a,{...e})})},h=[`DefaultExpanded`,`Collapsed`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "orientation": "vertical",
    "expanded": true,
    "brand": <DBControlPanelBrand data-logo="db-systel" />,
    "children": <DBControlPanelNavigation aria-label="(Default) Expanded" {...{}}><DBControlPanelNavigationItem icon="x_placeholder" active><a href="#">(Default) Expanded 1</a></DBControlPanelNavigationItem><DBControlPanelNavigationItem icon="x_placeholder"><a href="#">(Default) Expanded 2</a></DBControlPanelNavigationItem><DBControlPanelNavigationItem icon="x_placeholder"><a href="#">(Default) Expanded 3</a></DBControlPanelNavigationItem></DBControlPanelNavigation>
  },
  render: (properties: any) => <div style={{
    maxInlineSize: '300px',
    width: 'auto',
    height: '500px',
    display: 'block'
  }}><DBControlPanelDesktop {...properties} /></div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "orientation": "vertical",
    "expanded": false,
    "brand": <DBControlPanelBrand data-logo="db-systel" />,
    "children": <DBControlPanelNavigation aria-label="Collapsed" {...{}}><DBControlPanelNavigationItem icon="x_placeholder" active><a href="#">Collapsed 1</a></DBControlPanelNavigationItem><DBControlPanelNavigationItem icon="x_placeholder"><a href="#">Collapsed 2</a></DBControlPanelNavigationItem><DBControlPanelNavigationItem icon="x_placeholder"><a href="#">Collapsed 3</a></DBControlPanelNavigationItem></DBControlPanelNavigation>
  },
  render: (properties: any) => <div style={{
    maxInlineSize: '300px',
    width: 'auto',
    height: '500px',
    display: 'block'
  }}><DBControlPanelDesktop {...properties} /></div>
}`,...m.parameters?.docs?.source}}}})))()}g();export{m as Collapsed,p as DefaultExpanded,h as __namedExportsOrder,f as default};