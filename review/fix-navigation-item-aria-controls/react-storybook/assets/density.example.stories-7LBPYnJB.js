import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as l}from"./header-DJ_mHiu5.js";import{D as c}from"./navigation-ChU-54rH.js";import{D as t}from"./navigation-item-Cq7w8RmI.js";import{D as a}from"./button-Dn2Ax-0i.js";import{D as r}from"./link-CAsMu1gR.js";import{D as d}from"./brand-Bv3ZqkR6.js";import"./index-D2E5Z_bU.js";import"./iframe-CX-OtVog.js";import"./preload-helper-BJJItvT9.js";import"./constants-C-ysBZRi.js";import"./drawer-lUm_N1VA.js";import"./floating-components-DAXMbqch.js";const{fn:_}=__STORYBOOK_MODULE_TEST__,b={title:"Components/DBHeader/Density",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{width:{control:"select",options:["full","medium","large","small"]},forceMobile:{control:"boolean"},drawerOpen:{control:"boolean"},burgerMenuLabel:{control:"text"},closeButtonId:{control:"text"},closeButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},n={args:{"data-density":"functional",brand:e.jsx(d,{children:"DBHeader"}),metaNavigation:e.jsxs(e.Fragment,{children:[e.jsx(r,{href:"#",children:"Imprint"}),e.jsx(r,{href:"#",children:"Help"})]}),primaryAction:e.jsx(a,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:e.jsxs(e.Fragment,{children:[e.jsx(a,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Profile"}),e.jsx(a,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Notification"}),e.jsx(a,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Help"})]}),children:e.jsxs(c,{ariaLabel:"Navigation - Functional",children:[e.jsx(t,{icon:"x_placeholder",children:e.jsx("a",{href:"#",children:"Functional"})}),e.jsx(t,{disabled:!0,children:e.jsx("a",{href:"#",children:"Functional disabled"})})]})},render:i=>e.jsx("div",{style:{width:"100%",display:"block"},children:e.jsx(l,{...i})})},o={args:{"data-density":"regular",brand:e.jsx(d,{children:"DBHeader"}),metaNavigation:e.jsxs(e.Fragment,{children:[e.jsx(r,{href:"#",children:"Imprint"}),e.jsx(r,{href:"#",children:"Help"})]}),primaryAction:e.jsx(a,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:e.jsxs(e.Fragment,{children:[e.jsx(a,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Profile"}),e.jsx(a,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Notification"}),e.jsx(a,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Help"})]}),children:e.jsxs(c,{ariaLabel:"Navigation - Regular",children:[e.jsx(t,{icon:"x_placeholder",children:e.jsx("a",{href:"#",children:"(Default) Regular"})}),e.jsx(t,{disabled:!0,children:e.jsx("a",{href:"#",children:"(Default) Regular disabled"})})]})},render:i=>e.jsx("div",{style:{width:"100%",display:"block"},children:e.jsx(l,{...i})})},s={args:{"data-density":"expressive",brand:e.jsx(d,{children:"DBHeader"}),metaNavigation:e.jsxs(e.Fragment,{children:[e.jsx(r,{href:"#",children:"Imprint"}),e.jsx(r,{href:"#",children:"Help"})]}),primaryAction:e.jsx(a,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:e.jsxs(e.Fragment,{children:[e.jsx(a,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Profile"}),e.jsx(a,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Notification"}),e.jsx(a,{icon:"x_placeholder",variant:"ghost",noText:!0,children:"Help"})]}),children:e.jsxs(c,{ariaLabel:"Navigation - Expressive",children:[e.jsx(t,{icon:"x_placeholder",children:e.jsx("a",{href:"#",children:"Expressive"})}),e.jsx(t,{disabled:!0,children:e.jsx("a",{href:"#",children:"Expressive disabled"})})]})},render:i=>e.jsx("div",{style:{width:"100%",display:"block"},children:e.jsx(l,{...i})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
    "children": <DBNavigation ariaLabel="Navigation - Functional" {...{}}><DBNavigationItem icon="x_placeholder"><a href="#">Functional</a></DBNavigationItem><DBNavigationItem disabled><a href="#">Functional disabled</a></DBNavigationItem></DBNavigation>
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
    "children": <DBNavigation ariaLabel="Navigation - Regular" {...{}}><DBNavigationItem icon="x_placeholder"><a href="#">(Default) Regular</a></DBNavigationItem><DBNavigationItem disabled><a href="#">(Default) Regular disabled</a></DBNavigationItem></DBNavigation>
  },
  render: (properties: any) => <div style={{
    width: '100%',
    display: 'block'
  }}><DBHeader {...properties} /></div>
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
    "children": <DBNavigation ariaLabel="Navigation - Expressive" {...{}}><DBNavigationItem icon="x_placeholder"><a href="#">Expressive</a></DBNavigationItem><DBNavigationItem disabled><a href="#">Expressive disabled</a></DBNavigationItem></DBNavigation>
  },
  render: (properties: any) => <div style={{
    width: '100%',
    display: 'block'
  }}><DBHeader {...properties} /></div>
}`,...s.parameters?.docs?.source}}};const T=["Functional","DefaultRegular","Expressive"];export{o as DefaultRegular,s as Expressive,n as Functional,T as __namedExportsOrder,b as default};
