import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as d}from"./header-DJ_mHiu5.js";import{D as s}from"./navigation-ChU-54rH.js";import{D as a}from"./navigation-item-Cq7w8RmI.js";import{D as i}from"./button-Dn2Ax-0i.js";import{D as r}from"./link-CAsMu1gR.js";import{D as c}from"./brand-Bv3ZqkR6.js";import"./index-D2E5Z_bU.js";import"./iframe-CX-OtVog.js";import"./preload-helper-BJJItvT9.js";import"./constants-C-ysBZRi.js";import"./drawer-lUm_N1VA.js";import"./floating-components-DAXMbqch.js";const{fn:b}=__STORYBOOK_MODULE_TEST__,y={title:"Components/DBHeader/Width",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{width:{control:"select",options:["full","medium","large","small"]},forceMobile:{control:"boolean"},drawerOpen:{control:"boolean"},burgerMenuLabel:{control:"text"},closeButtonId:{control:"text"},closeButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},n={args:{brand:e.jsx(c,{children:"DBHeader"}),metaNavigation:e.jsxs(e.Fragment,{children:[e.jsx(r,{href:"#",children:"Imprint"}),e.jsx(r,{href:"#",children:"Help"})]}),primaryAction:e.jsx(i,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:e.jsxs(e.Fragment,{children:[e.jsx(i,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Profile"}),e.jsx(i,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Notification"}),e.jsx(i,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Help"})]}),children:e.jsxs(s,{ariaLabel:"Navigation - Full Width",children:[e.jsx(a,{icon:"x_placeholder",children:e.jsx("a",{href:"#",children:"Full"})}),e.jsx(a,{disabled:!0,children:e.jsx("a",{href:"#",children:"Full disabled"})})]})},render:t=>e.jsx("div",{style:{width:"100%",display:"block"},children:e.jsx(d,{...t})})},o={args:{width:"medium",brand:e.jsx(c,{children:"DBHeader"}),metaNavigation:e.jsxs(e.Fragment,{children:[e.jsx(r,{href:"#",children:"Imprint"}),e.jsx(r,{href:"#",children:"Help"})]}),primaryAction:e.jsx(i,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:e.jsxs(e.Fragment,{children:[e.jsx(i,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Profile"}),e.jsx(i,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Notification"}),e.jsx(i,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Help"})]}),children:e.jsxs(s,{ariaLabel:"Navigation - Medium Width",children:[e.jsx(a,{icon:"x_placeholder",children:e.jsx("a",{href:"#",children:"Medium"})}),e.jsx(a,{disabled:!0,children:e.jsx("a",{href:"#",children:"Medium disabled"})})]})},render:t=>e.jsx("div",{style:{width:"100%",display:"block"},children:e.jsx(d,{...t})})},l={args:{width:"large",brand:e.jsx(c,{children:"DBHeader"}),metaNavigation:e.jsxs(e.Fragment,{children:[e.jsx(r,{href:"#",children:"Imprint"}),e.jsx(r,{href:"#",children:"Help"})]}),primaryAction:e.jsx(i,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:e.jsxs(e.Fragment,{children:[e.jsx(i,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Profile"}),e.jsx(i,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Notification"}),e.jsx(i,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Help"})]}),children:e.jsxs(s,{ariaLabel:"Navigation - Large Width",children:[e.jsx(a,{icon:"x_placeholder",children:e.jsx("a",{href:"#",children:"Large"})}),e.jsx(a,{disabled:!0,children:e.jsx("a",{href:"#",children:"Large disabled"})})]})},render:t=>e.jsx("div",{style:{width:"100%",display:"block"},children:e.jsx(d,{...t})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
    "children": <DBNavigation ariaLabel="Navigation - Full Width" {...{}}><DBNavigationItem icon="x_placeholder"><a href="#">Full</a></DBNavigationItem><DBNavigationItem disabled><a href="#">Full disabled</a></DBNavigationItem></DBNavigation>
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
    "children": <DBNavigation ariaLabel="Navigation - Medium Width" {...{}}><DBNavigationItem icon="x_placeholder"><a href="#">Medium</a></DBNavigationItem><DBNavigationItem disabled><a href="#">Medium disabled</a></DBNavigationItem></DBNavigation>
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
    "children": <DBNavigation ariaLabel="Navigation - Large Width" {...{}}><DBNavigationItem icon="x_placeholder"><a href="#">Large</a></DBNavigationItem><DBNavigationItem disabled><a href="#">Large disabled</a></DBNavigationItem></DBNavigation>
  },
  render: (properties: any) => <div style={{
    width: '100%',
    display: 'block'
  }}><DBHeader {...properties} /></div>
}`,...l.parameters?.docs?.source}}};const L=["Full","Medium","Large"];export{n as Full,l as Large,o as Medium,L as __namedExportsOrder,y as default};
