import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as l}from"./header-DjpL1Ujc.js";import{D as s}from"./navigation-COvLTcRl.js";import{D as i}from"./navigation-item-B4M3WgAz.js";import{D as t}from"./button-DcJZ2vgj.js";import{D as a}from"./link-BjapYyHZ.js";import{D as c}from"./brand-BMd4rX3D.js";import"./index-cGbbigiG.js";import"./iframe-6D4xCEbg.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./drawer-CajJcFZp.js";import"./floating-components-BNmGdAgy.js";const{fn:_}=__STORYBOOK_MODULE_TEST__,y={title:"Components/DBHeader/Behavior",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{width:{control:"select",options:["full","medium","large","small"]},forceMobile:{control:"boolean"},drawerOpen:{control:"boolean"},burgerMenuLabel:{control:"text"},closeButtonId:{control:"text"},closeButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},o={args:{brand:e.jsx(c,{children:"DBHeader"}),metaNavigation:e.jsxs(e.Fragment,{children:[e.jsx(a,{href:"#",children:"Imprint"}),e.jsx(a,{href:"#",children:"Help"})]}),primaryAction:e.jsx(t,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:e.jsxs(e.Fragment,{children:[e.jsx(t,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Profile"}),e.jsx(t,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Notification"}),e.jsx(t,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Help"})]}),children:e.jsxs(s,{"aria-label":"Desktop (full width)",children:[e.jsx(i,{icon:"x_placeholder",children:e.jsx("a",{href:"#",children:"Desktop (full width)"})}),e.jsx(i,{disabled:!0,children:e.jsx("a",{href:"#",children:"Desktop (full width) disabled"})})]})},render:n=>e.jsx("div",{style:{width:"100%",display:"block"},children:e.jsx(l,{...n})})},r={args:{forceMobile:"true",brand:e.jsx(c,{children:"DBHeader"}),metaNavigation:e.jsxs(e.Fragment,{children:[e.jsx(a,{href:"#",children:"Imprint"}),e.jsx(a,{href:"#",children:"Help"})]}),primaryAction:e.jsx(t,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:e.jsxs(e.Fragment,{children:[e.jsx(t,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Profile"}),e.jsx(t,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Notification"}),e.jsx(t,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Help"})]}),children:e.jsxs(s,{"aria-label":"Mobile",children:[e.jsx(i,{icon:"x_placeholder",children:e.jsx("a",{href:"#",children:"Mobile"})}),e.jsx(i,{disabled:!0,children:e.jsx("a",{href:"#",children:"Mobile disabled"})})]})},render:n=>e.jsx("div",{style:{width:"100%",display:"block"},children:e.jsx(l,{...n})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    "children": <DBNavigation aria-label="Desktop (full width)" {...{}}><DBNavigationItem icon="x_placeholder"><a href="#">Desktop (full width)</a></DBNavigationItem><DBNavigationItem disabled><a href="#">Desktop (full width) disabled</a></DBNavigationItem></DBNavigation>
  },
  render: (properties: any) => <div style={{
    width: '100%',
    display: 'block'
  }}><DBHeader {...properties} /></div>
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
    "children": <DBNavigation aria-label="Mobile" {...{}}><DBNavigationItem icon="x_placeholder"><a href="#">Mobile</a></DBNavigationItem><DBNavigationItem disabled><a href="#">Mobile disabled</a></DBNavigationItem></DBNavigation>
  },
  render: (properties: any) => <div style={{
    width: '100%',
    display: 'block'
  }}><DBHeader {...properties} /></div>
}`,...r.parameters?.docs?.source}}};const N=["Desktopfullwidth","Mobile"];export{o as Desktopfullwidth,r as Mobile,N as __namedExportsOrder,y as default};
