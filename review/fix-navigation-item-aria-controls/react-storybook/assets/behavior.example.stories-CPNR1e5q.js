import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as l}from"./header-CCnELzwc.js";import{D as s}from"./navigation-SJEhM1yG.js";import{D as r}from"./navigation-item-Bw0-jSJ8.js";import{D as t}from"./button-ZtRh_89M.js";import{D as a}from"./link-0Cqn8xlB.js";import{D as c}from"./brand-CnxS5k1b.js";import"./index-D2E5Z_bU.js";import"./iframe-D1FTWfRp.js";import"./preload-helper-BJJItvT9.js";import"./constants-C-ysBZRi.js";import"./drawer-BTVC9yG8.js";import"./floating-components-DAXMbqch.js";const{fn:_}=__STORYBOOK_MODULE_TEST__,N={title:"Components/DBHeader/Behavior",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{width:{control:"select",options:["full","medium","large","small"]},forceMobile:{control:"boolean"},drawerOpen:{control:"boolean"},burgerMenuLabel:{control:"text"},closeButtonId:{control:"text"},closeButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},o={args:{brand:e.jsx(c,{children:"DBHeader"}),metaNavigation:e.jsxs(e.Fragment,{children:[e.jsx(a,{href:"#",children:"Imprint"}),e.jsx(a,{href:"#",children:"Help"})]}),primaryAction:e.jsx(t,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:e.jsxs(e.Fragment,{children:[e.jsx(t,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Profile"}),e.jsx(t,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Notification"}),e.jsx(t,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Help"})]}),children:e.jsxs(s,{ariaLabel:"Navigation - Desktop (full width)",children:[e.jsx(r,{icon:"x_placeholder",children:e.jsx("a",{href:"#",children:"Desktop (full width)"})}),e.jsx(r,{disabled:!0,children:e.jsx("a",{href:"#",children:"Desktop (full width) disabled"})})]})},render:n=>e.jsx("div",{style:{width:"100%",display:"block"},children:e.jsx(l,{...n})})},i={args:{forceMobile:"true",brand:e.jsx(c,{children:"DBHeader"}),metaNavigation:e.jsxs(e.Fragment,{children:[e.jsx(a,{href:"#",children:"Imprint"}),e.jsx(a,{href:"#",children:"Help"})]}),primaryAction:e.jsx(t,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:e.jsxs(e.Fragment,{children:[e.jsx(t,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Profile"}),e.jsx(t,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Notification"}),e.jsx(t,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Help"})]}),children:e.jsxs(s,{ariaLabel:"Navigation - Mobile",children:[e.jsx(r,{icon:"x_placeholder",children:e.jsx("a",{href:"#",children:"Mobile"})}),e.jsx(r,{disabled:!0,children:e.jsx("a",{href:"#",children:"Mobile disabled"})})]})},render:n=>e.jsx("div",{style:{width:"100%",display:"block"},children:e.jsx(l,{...n})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "brand": <DBBrand>DBHeader</DBBrand>,
    "metaNavigation": <>
                            <DBLink href="#">Imprint</DBLink>
                            <DBLink href="#">Help</DBLink>
                        </>,
    "primaryAction": <DBButton icon="magnifying_glass" variant="ghost" noText>
                            Search
                        </DBButton>,
    "secondaryAction": <>
                            <DBButton icon="x_placeholder" variant="ghost" noText>
                                Profile
                            </DBButton>
                            <DBButton icon="x_placeholder" variant="ghost" noText>
                                Notification
                            </DBButton>
                            <DBButton icon="x_placeholder" variant="ghost" noText>
                                Help
                            </DBButton>
                        </>,
    "children": <DBNavigation ariaLabel="Navigation - Desktop (full width)" {...{}}><DBNavigationItem icon="x_placeholder"><a href="#">Desktop (full width)</a></DBNavigationItem><DBNavigationItem disabled><a href="#">Desktop (full width) disabled</a></DBNavigationItem></DBNavigation>
  },
  render: (properties: any) => <div style={{
    width: '100%',
    display: 'block'
  }}><DBHeader {...properties} /></div>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "forceMobile": "true",
    "brand": <DBBrand>DBHeader</DBBrand>,
    "metaNavigation": <>
                            <DBLink href="#">Imprint</DBLink>
                            <DBLink href="#">Help</DBLink>
                        </>,
    "primaryAction": <DBButton icon="magnifying_glass" variant="ghost" noText>
                            Search
                        </DBButton>,
    "secondaryAction": <>
                            <DBButton icon="x_placeholder" variant="ghost" noText>
                                Profile
                            </DBButton>
                            <DBButton icon="x_placeholder" variant="ghost" noText>
                                Notification
                            </DBButton>
                            <DBButton icon="x_placeholder" variant="ghost" noText>
                                Help
                            </DBButton>
                        </>,
    "children": <DBNavigation ariaLabel="Navigation - Mobile" {...{}}><DBNavigationItem icon="x_placeholder"><a href="#">Mobile</a></DBNavigationItem><DBNavigationItem disabled><a href="#">Mobile disabled</a></DBNavigationItem></DBNavigation>
  },
  render: (properties: any) => <div style={{
    width: '100%',
    display: 'block'
  }}><DBHeader {...properties} /></div>
}`,...i.parameters?.docs?.source}}};const y=["Desktopfullwidth","Mobile"];export{o as Desktopfullwidth,i as Mobile,y as __namedExportsOrder,N as default};
