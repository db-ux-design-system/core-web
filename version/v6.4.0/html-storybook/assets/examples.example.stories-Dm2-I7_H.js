import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./brand-DWkBHp1a.js";import{n as a,t as o}from"./header-DoZd1_WF.js";import{n as s,t as c}from"./navigation-8dmwULBy.js";import{n as l,t as u}from"./navigation-item-yvJ5JDfx.js";var d=t({WithApplicationNameNavigation:()=>h,WithoutApplicationName:()=>_,WithoutApplicationNameNavigation:()=>v,WithoutNavigation:()=>g,__namedExportsOrder:()=>y,default:()=>m}),f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{r(),l(),s(),a(),f=n(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/DBHeader/Examples`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`medium`,`large`,`small`]},forceMobile:{control:`boolean`},drawerOpen:{control:`boolean`},burgerMenuLabel:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},h={args:{brand:(0,f.jsx)(i,{children:`DBHeader`}),children:(0,f.jsxs)(c,{"aria-label":`With Application Name + Navigation`,children:[(0,f.jsx)(u,{icon:`x_placeholder`,children:(0,f.jsx)(`a`,{href:`#`,children:`With Application Name + Navigation`})}),(0,f.jsx)(u,{disabled:!0,children:(0,f.jsx)(`a`,{href:`#`,children:`With Application Name + Navigation disabled`})})]})},render:e=>(0,f.jsx)(`div`,{style:{width:`100%`,display:`block`},children:(0,f.jsx)(o,{...e})})},g={args:{brand:(0,f.jsx)(i,{children:`DBHeader`})},render:e=>(0,f.jsx)(`div`,{style:{width:`100%`,display:`block`},children:(0,f.jsx)(o,{...e})})},_={args:{brand:(0,f.jsx)(i,{}),children:(0,f.jsxs)(c,{"aria-label":`Without Application Name`,children:[(0,f.jsx)(u,{icon:`x_placeholder`,children:(0,f.jsx)(`a`,{href:`#`,children:`Without Application Name`})}),(0,f.jsx)(u,{disabled:!0,children:(0,f.jsx)(`a`,{href:`#`,children:`Without Application Name disabled`})})]})},render:e=>(0,f.jsx)(`div`,{style:{width:`100%`,display:`block`},children:(0,f.jsx)(o,{...e})})},v={args:{brand:(0,f.jsx)(i,{})},render:e=>(0,f.jsx)(`div`,{style:{width:`100%`,display:`block`},children:(0,f.jsx)(o,{...e})})},y=[`WithApplicationNameNavigation`,`WithoutNavigation`,`WithoutApplicationName`,`WithoutApplicationNameNavigation`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "brand": <DBBrand>DBHeader</DBBrand>
  },
  render: (properties: any) => <div style={{
    width: '100%',
    display: 'block'
  }}><DBHeader {...properties} /></div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    "brand": <DBBrand></DBBrand>,
    "children": <DBNavigation aria-label="Without Application Name" {...{}}><DBNavigationItem icon="x_placeholder"><a href="#">Without Application Name</a></DBNavigationItem><DBNavigationItem disabled><a href="#">Without Application Name disabled</a></DBNavigationItem></DBNavigation>
  },
  render: (properties: any) => <div style={{
    width: '100%',
    display: 'block'
  }}><DBHeader {...properties} /></div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    "brand": <DBBrand></DBBrand>
  },
  render: (properties: any) => <div style={{
    width: '100%',
    display: 'block'
  }}><DBHeader {...properties} /></div>
}`,...v.parameters?.docs?.source}}}})))()}export{d as a,g as i,_ as n,b as o,v as r,h as t};