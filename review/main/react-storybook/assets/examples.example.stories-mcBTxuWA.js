import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-BpX3lQ6F.js";import{A as n,h as r,m as i,t as a,v as o}from"./src-FlJ3DuBk.js";var s,c,l,u,d,f,p,m;e((()=>{a(),s=t(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBHeader/Examples`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`medium`,`large`,`small`]},forceMobile:{control:`boolean`},drawerOpen:{control:`boolean`},burgerMenuLabel:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},u={args:{brand:(0,s.jsx)(n,{children:`DBHeader`}),children:(0,s.jsxs)(r,{"aria-label":`With Application Name + Navigation`,children:[(0,s.jsx)(i,{icon:`x_placeholder`,children:(0,s.jsx)(`a`,{href:`#`,children:`With Application Name + Navigation`})}),(0,s.jsx)(i,{disabled:!0,children:(0,s.jsx)(`a`,{href:`#`,children:`With Application Name + Navigation disabled`})})]})},render:e=>(0,s.jsx)(`div`,{style:{width:`100%`,display:`block`},children:(0,s.jsx)(o,{...e})})},d={args:{brand:(0,s.jsx)(n,{children:`DBHeader`})},render:e=>(0,s.jsx)(`div`,{style:{width:`100%`,display:`block`},children:(0,s.jsx)(o,{...e})})},f={args:{brand:(0,s.jsx)(n,{}),children:(0,s.jsxs)(r,{"aria-label":`Without Application Name`,children:[(0,s.jsx)(i,{icon:`x_placeholder`,children:(0,s.jsx)(`a`,{href:`#`,children:`Without Application Name`})}),(0,s.jsx)(i,{disabled:!0,children:(0,s.jsx)(`a`,{href:`#`,children:`Without Application Name disabled`})})]})},render:e=>(0,s.jsx)(`div`,{style:{width:`100%`,display:`block`},children:(0,s.jsx)(o,{...e})})},p={args:{brand:(0,s.jsx)(n,{})},render:e=>(0,s.jsx)(`div`,{style:{width:`100%`,display:`block`},children:(0,s.jsx)(o,{...e})})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "brand": <DBBrand>DBHeader</DBBrand>,
    "children": <DBNavigation aria-label="With Application Name + Navigation" {...{}}><DBNavigationItem icon="x_placeholder"><a href="#">With Application Name + Navigation</a></DBNavigationItem><DBNavigationItem disabled><a href="#">
                                With Application Name + Navigation disabled
                            </a></DBNavigationItem></DBNavigation>
  },
  render: (properties: any) => <div style={{
    width: '100%',
    display: 'block'
  }}><DBHeader {...properties} /></div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "brand": <DBBrand>DBHeader</DBBrand>
  },
  render: (properties: any) => <div style={{
    width: '100%',
    display: 'block'
  }}><DBHeader {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "brand": <DBBrand></DBBrand>,
    "children": <DBNavigation aria-label="Without Application Name" {...{}}><DBNavigationItem icon="x_placeholder"><a href="#">Without Application Name</a></DBNavigationItem><DBNavigationItem disabled><a href="#">Without Application Name disabled</a></DBNavigationItem></DBNavigation>
  },
  render: (properties: any) => <div style={{
    width: '100%',
    display: 'block'
  }}><DBHeader {...properties} /></div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "brand": <DBBrand></DBBrand>
  },
  render: (properties: any) => <div style={{
    width: '100%',
    display: 'block'
  }}><DBHeader {...properties} /></div>
}`,...p.parameters?.docs?.source}}},m=[`WithApplicationNameNavigation`,`WithoutNavigation`,`WithoutApplicationName`,`WithoutApplicationNameNavigation`]}))();export{u as WithApplicationNameNavigation,f as WithoutApplicationName,p as WithoutApplicationNameNavigation,d as WithoutNavigation,m as __namedExportsOrder,l as default};