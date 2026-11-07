import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./control-panel-brand-D5CF13xm.js";import{n as a,t as o}from"./control-panel-desktop-DgOkUIM8.js";import{i as s,n as c,r as l,t as u}from"./control-panel-navigation-item-BCGTLR3Z.js";var d=t({DefaultHorizontal:()=>h,Vertical:()=>g,__namedExportsOrder:()=>_,default:()=>m}),f,p,m,h,g,_;function v(){return(v=e((()=>{r(),c(),s(),a(),f=n(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/DBControlPanelDesktop/Orientation`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],args:{onExpandButtonTooltipFn:p()},argTypes:{width:{control:`select`,options:[`full`,`medium`,`large`,`small`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},expanded:{control:`boolean`},expandButtonTooltip:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onExpandButtonTooltipFn:{action:`onExpandButtonTooltipFn`}}},h={args:{orientation:`horizontal`,brand:(0,f.jsx)(i,{"data-logo":`db-systel`}),children:(0,f.jsxs)(l,{"aria-label":`(Default) Horizontal`,children:[(0,f.jsx)(u,{icon:`x_placeholder`,children:(0,f.jsx)(`a`,{href:`#`,children:`(Default) Horizontal`})}),(0,f.jsx)(u,{icon:`x_placeholder`,disabled:!0,children:(0,f.jsx)(`a`,{href:`#`,children:`(Default) Horizontal disabled`})})]})},render:e=>(0,f.jsx)(`div`,{style:{width:`100%`,display:`block`},children:(0,f.jsx)(o,{...e})})},g={args:{orientation:`vertical`,brand:(0,f.jsx)(i,{"data-logo":`db-systel`}),children:(0,f.jsxs)(l,{"aria-label":`Vertical`,children:[(0,f.jsx)(u,{icon:`x_placeholder`,children:(0,f.jsx)(`a`,{href:`#`,children:`Vertical`})}),(0,f.jsx)(u,{icon:`x_placeholder`,disabled:!0,children:(0,f.jsx)(`a`,{href:`#`,children:`Vertical disabled`})})]})},render:e=>(0,f.jsx)(`div`,{style:{maxInlineSize:`300px`,width:`auto`,height:`500px`,display:`block`},children:(0,f.jsx)(o,{...e})})},_=[`DefaultHorizontal`,`Vertical`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "orientation": "horizontal",
    "brand": <DBControlPanelBrand data-logo="db-systel" />,
    "children": <DBControlPanelNavigation aria-label="(Default) Horizontal" {...{}}><DBControlPanelNavigationItem icon="x_placeholder"><a href="#">(Default) Horizontal</a></DBControlPanelNavigationItem><DBControlPanelNavigationItem icon="x_placeholder" disabled><a href="#">(Default) Horizontal disabled</a></DBControlPanelNavigationItem></DBControlPanelNavigation>
  },
  render: (properties: any) => <div style={{
    width: '100%',
    display: 'block'
  }}><DBControlPanelDesktop {...properties} /></div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}}})))()}export{d as i,g as n,v as r,h as t};