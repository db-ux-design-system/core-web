import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as s}from"./header-BihiJHCh.js";import{D as c}from"./navigation-BHsyO_BG.js";import{D as r}from"./navigation-item-CgYwv9u5.js";import{D as a}from"./button-DnZnbJNC.js";import{D as t}from"./link-uXDym9Hz.js";import{D as d}from"./brand-CJj_VJxS.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./drawer-XRNJ70bH.js";import"./floating-components-BNmGdAgy.js";const{fn:b}=__STORYBOOK_MODULE_TEST__,N={title:"Components/DBHeader/Density",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{width:{control:"select",options:["full","medium","large","small"]},forceMobile:{control:"boolean"},drawerOpen:{control:"boolean"},burgerMenuLabel:{control:"text"},closeButtonId:{control:"text"},closeButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},n={args:{"data-density":"functional",brand:e.jsx(d,{children:"DBHeader"}),metaNavigation:e.jsxs(e.Fragment,{children:[e.jsx(t,{href:"#",children:"Imprint"}),e.jsx(t,{href:"#",children:"Help"})]}),primaryAction:e.jsx(a,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:e.jsxs(e.Fragment,{children:[e.jsx(a,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Profile"}),e.jsx(a,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Notification"}),e.jsx(a,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Help"})]}),children:e.jsxs(c,{"aria-label":"Functional",children:[e.jsx(r,{icon:"x_placeholder",children:e.jsx("a",{href:"#",children:"Functional"})}),e.jsx(r,{disabled:!0,children:e.jsx("a",{href:"#",children:"Functional disabled"})})]})},render:i=>e.jsx("div",{style:{width:"100%",display:"block"},children:e.jsx(s,{...i})})},o={args:{"data-density":"regular",brand:e.jsx(d,{children:"DBHeader"}),metaNavigation:e.jsxs(e.Fragment,{children:[e.jsx(t,{href:"#",children:"Imprint"}),e.jsx(t,{href:"#",children:"Help"})]}),primaryAction:e.jsx(a,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:e.jsxs(e.Fragment,{children:[e.jsx(a,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Profile"}),e.jsx(a,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Notification"}),e.jsx(a,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Help"})]}),children:e.jsxs(c,{"aria-label":"(Default) Regular",children:[e.jsx(r,{icon:"x_placeholder",children:e.jsx("a",{href:"#",children:"(Default) Regular"})}),e.jsx(r,{disabled:!0,children:e.jsx("a",{href:"#",children:"(Default) Regular disabled"})})]})},render:i=>e.jsx("div",{style:{width:"100%",display:"block"},children:e.jsx(s,{...i})})},l={args:{"data-density":"expressive",brand:e.jsx(d,{children:"DBHeader"}),metaNavigation:e.jsxs(e.Fragment,{children:[e.jsx(t,{href:"#",children:"Imprint"}),e.jsx(t,{href:"#",children:"Help"})]}),primaryAction:e.jsx(a,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:e.jsxs(e.Fragment,{children:[e.jsx(a,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Profile"}),e.jsx(a,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Notification"}),e.jsx(a,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Help"})]}),children:e.jsxs(c,{"aria-label":"Expressive",children:[e.jsx(r,{icon:"x_placeholder",children:e.jsx("a",{href:"#",children:"Expressive"})}),e.jsx(r,{disabled:!0,children:e.jsx("a",{href:"#",children:"Expressive disabled"})})]})},render:i=>e.jsx("div",{style:{width:"100%",display:"block"},children:e.jsx(s,{...i})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
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
    "children": <DBNavigation aria-label="Functional" {...{}}><DBNavigationItem icon="x_placeholder"><a href="#">Functional</a></DBNavigationItem><DBNavigationItem disabled><a href="#">Functional disabled</a></DBNavigationItem></DBNavigation>
  },
  render: (properties: any) => <div style={{
    width: '100%',
    display: 'block'
  }}><DBHeader {...properties} /></div>
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
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
    "children": <DBNavigation aria-label="(Default) Regular" {...{}}><DBNavigationItem icon="x_placeholder"><a href="#">(Default) Regular</a></DBNavigationItem><DBNavigationItem disabled><a href="#">(Default) Regular disabled</a></DBNavigationItem></DBNavigation>
  },
  render: (properties: any) => <div style={{
    width: '100%',
    display: 'block'
  }}><DBHeader {...properties} /></div>
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
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
    "children": <DBNavigation aria-label="Expressive" {...{}}><DBNavigationItem icon="x_placeholder"><a href="#">Expressive</a></DBNavigationItem><DBNavigationItem disabled><a href="#">Expressive disabled</a></DBNavigationItem></DBNavigation>
  },
  render: (properties: any) => <div style={{
    width: '100%',
    display: 'block'
  }}><DBHeader {...properties} /></div>
}`,...l.parameters?.docs?.source}}};const T=["Functional","DefaultRegular","Expressive"];export{o as DefaultRegular,l as Expressive,n as Functional,T as __namedExportsOrder,N as default};
