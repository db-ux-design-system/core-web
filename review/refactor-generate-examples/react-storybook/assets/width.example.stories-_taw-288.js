import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as d}from"./header-BihiJHCh.js";import{D as s}from"./navigation-BHsyO_BG.js";import{D as a}from"./navigation-item-CgYwv9u5.js";import{D as r}from"./button-DnZnbJNC.js";import{D as i}from"./link-uXDym9Hz.js";import{D as c}from"./brand-CJj_VJxS.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./drawer-XRNJ70bH.js";import"./floating-components-BNmGdAgy.js";const{fn:y}=__STORYBOOK_MODULE_TEST__,N={title:"Components/DBHeader/Width",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{width:{control:"select",options:["full","medium","large","small"]},forceMobile:{control:"boolean"},drawerOpen:{control:"boolean"},burgerMenuLabel:{control:"text"},closeButtonId:{control:"text"},closeButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},n={args:{brand:e.jsx(c,{children:"DBHeader"}),metaNavigation:e.jsxs(e.Fragment,{children:[e.jsx(i,{href:"#",children:"Imprint"}),e.jsx(i,{href:"#",children:"Help"})]}),primaryAction:e.jsx(r,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:e.jsxs(e.Fragment,{children:[e.jsx(r,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Profile"}),e.jsx(r,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Notification"}),e.jsx(r,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Help"})]}),children:e.jsxs(s,{"aria-label":"Full",children:[e.jsx(a,{icon:"x_placeholder",children:e.jsx("a",{href:"#",children:"Full"})}),e.jsx(a,{disabled:!0,children:e.jsx("a",{href:"#",children:"Full disabled"})})]})},render:t=>e.jsx("div",{style:{width:"100%",display:"block"},children:e.jsx(d,{...t})})},o={args:{width:"medium",brand:e.jsx(c,{children:"DBHeader"}),metaNavigation:e.jsxs(e.Fragment,{children:[e.jsx(i,{href:"#",children:"Imprint"}),e.jsx(i,{href:"#",children:"Help"})]}),primaryAction:e.jsx(r,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:e.jsxs(e.Fragment,{children:[e.jsx(r,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Profile"}),e.jsx(r,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Notification"}),e.jsx(r,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Help"})]}),children:e.jsxs(s,{"aria-label":"Medium",children:[e.jsx(a,{icon:"x_placeholder",children:e.jsx("a",{href:"#",children:"Medium"})}),e.jsx(a,{disabled:!0,children:e.jsx("a",{href:"#",children:"Medium disabled"})})]})},render:t=>e.jsx("div",{style:{width:"100%",display:"block"},children:e.jsx(d,{...t})})},l={args:{width:"large",brand:e.jsx(c,{children:"DBHeader"}),metaNavigation:e.jsxs(e.Fragment,{children:[e.jsx(i,{href:"#",children:"Imprint"}),e.jsx(i,{href:"#",children:"Help"})]}),primaryAction:e.jsx(r,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:e.jsxs(e.Fragment,{children:[e.jsx(r,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Profile"}),e.jsx(r,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Notification"}),e.jsx(r,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Help"})]}),children:e.jsxs(s,{"aria-label":"Large",children:[e.jsx(a,{icon:"x_placeholder",children:e.jsx("a",{href:"#",children:"Large"})}),e.jsx(a,{disabled:!0,children:e.jsx("a",{href:"#",children:"Large disabled"})})]})},render:t=>e.jsx("div",{style:{width:"100%",display:"block"},children:e.jsx(d,{...t})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
    "children": <DBNavigation aria-label="Full" {...{}}><DBNavigationItem icon="x_placeholder"><a href="#">Full</a></DBNavigationItem><DBNavigationItem disabled><a href="#">Full disabled</a></DBNavigationItem></DBNavigation>
  },
  render: (properties: any) => <div style={{
    width: '100%',
    display: 'block'
  }}><DBHeader {...properties} /></div>
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "medium",
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
    "children": <DBNavigation aria-label="Medium" {...{}}><DBNavigationItem icon="x_placeholder"><a href="#">Medium</a></DBNavigationItem><DBNavigationItem disabled><a href="#">Medium disabled</a></DBNavigationItem></DBNavigation>
  },
  render: (properties: any) => <div style={{
    width: '100%',
    display: 'block'
  }}><DBHeader {...properties} /></div>
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "large",
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
    "children": <DBNavigation aria-label="Large" {...{}}><DBNavigationItem icon="x_placeholder"><a href="#">Large</a></DBNavigationItem><DBNavigationItem disabled><a href="#">Large disabled</a></DBNavigationItem></DBNavigation>
  },
  render: (properties: any) => <div style={{
    width: '100%',
    display: 'block'
  }}><DBHeader {...properties} /></div>
}`,...l.parameters?.docs?.source}}};const T=["Full","Medium","Large"];export{n as Full,l as Large,o as Medium,T as __namedExportsOrder,N as default};
