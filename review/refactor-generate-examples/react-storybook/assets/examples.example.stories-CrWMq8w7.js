import{j as a}from"./jsx-runtime-u17CrQMm.js";import{D as i}from"./header-BihiJHCh.js";import{D as l}from"./navigation-BHsyO_BG.js";import{D as s}from"./navigation-item-CgYwv9u5.js";import{D as d}from"./brand-CJj_VJxS.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./button-DnZnbJNC.js";import"./drawer-XRNJ70bH.js";import"./floating-components-BNmGdAgy.js";const{fn:j}=__STORYBOOK_MODULE_TEST__,y={title:"Components/DBHeader/Examples",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{width:{control:"select",options:["full","medium","large","small"]},forceMobile:{control:"boolean"},drawerOpen:{control:"boolean"},burgerMenuLabel:{control:"text"},closeButtonId:{control:"text"},closeButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},r={args:{brand:a.jsx(d,{children:"DBHeader"}),children:a.jsxs(l,{"aria-label":"With Application Name + Navigation",children:[a.jsx(s,{icon:"x_placeholder",children:a.jsx("a",{href:"#",children:"With Application Name + Navigation"})}),a.jsx(s,{disabled:!0,children:a.jsx("a",{href:"#",children:"With Application Name + Navigation disabled"})})]})},render:e=>a.jsx("div",{style:{width:"100%",display:"block"},children:a.jsx(i,{...e})})},t={args:{brand:a.jsx(d,{children:"DBHeader"})},render:e=>a.jsx("div",{style:{width:"100%",display:"block"},children:a.jsx(i,{...e})})},o={args:{brand:a.jsx(d,{}),children:a.jsxs(l,{"aria-label":"Without Application Name",children:[a.jsx(s,{icon:"x_placeholder",children:a.jsx("a",{href:"#",children:"Without Application Name"})}),a.jsx(s,{disabled:!0,children:a.jsx("a",{href:"#",children:"Without Application Name disabled"})})]})},render:e=>a.jsx("div",{style:{width:"100%",display:"block"},children:a.jsx(i,{...e})})},n={args:{brand:a.jsx(d,{})},render:e=>a.jsx("div",{style:{width:"100%",display:"block"},children:a.jsx(i,{...e})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "brand": <DBBrand>DBHeader</DBBrand>
  },
  render: (properties: any) => <div style={{
    width: '100%',
    display: 'block'
  }}><DBHeader {...properties} /></div>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "brand": <DBBrand></DBBrand>,
    "children": <DBNavigation aria-label="Without Application Name" {...{}}><DBNavigationItem icon="x_placeholder"><a href="#">Without Application Name</a></DBNavigationItem><DBNavigationItem disabled><a href="#">Without Application Name disabled</a></DBNavigationItem></DBNavigation>
  },
  render: (properties: any) => <div style={{
    width: '100%',
    display: 'block'
  }}><DBHeader {...properties} /></div>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "brand": <DBBrand></DBBrand>
  },
  render: (properties: any) => <div style={{
    width: '100%',
    display: 'block'
  }}><DBHeader {...properties} /></div>
}`,...n.parameters?.docs?.source}}};const W=["WithApplicationNameNavigation","WithoutNavigation","WithoutApplicationName","WithoutApplicationNameNavigation"];export{r as WithApplicationNameNavigation,o as WithoutApplicationName,n as WithoutApplicationNameNavigation,t as WithoutNavigation,W as __namedExportsOrder,y as default};
