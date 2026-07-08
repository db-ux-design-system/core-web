import{i as e}from"./preload-helper-BG3cxSFj.js";import{t}from"./jsx-runtime-DQ7lR6b4.js";import{B as n,H as r,J as i,W as a,gt as o,t as s,vt as c}from"./src-CrsPTufx.js";var l,u,d,f,p,m;e((()=>{s(),l=t(),{fn:u}=__STORYBOOK_MODULE_TEST__,d={title:`Components/DBHeader/Behavior`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`medium`,`large`,`small`]},forceMobile:{control:`boolean`},drawerOpen:{control:`boolean`},burgerMenuLabel:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},f={args:{brand:(0,l.jsx)(c,{children:`DBHeader`}),metaNavigation:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{href:`#`,children:`Imprint`}),(0,l.jsx)(a,{href:`#`,children:`Help`})]}),primaryAction:(0,l.jsx)(o,{icon:`magnifying_glass`,variant:`ghost`,noText:!0,children:`Search`}),secondaryAction:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{icon:`x_placeholder`,variant:`ghost`,noText:!0,children:`Profile`}),(0,l.jsx)(o,{icon:`x_placeholder`,variant:`ghost`,noText:!0,children:`Notification`}),(0,l.jsx)(o,{icon:`x_placeholder`,variant:`ghost`,noText:!0,children:`Help`})]}),children:(0,l.jsxs)(r,{"aria-label":`Desktop (full width)`,children:[(0,l.jsx)(n,{icon:`x_placeholder`,children:(0,l.jsx)(`a`,{href:`#`,children:`Desktop (full width)`})}),(0,l.jsx)(n,{disabled:!0,children:(0,l.jsx)(`a`,{href:`#`,children:`Desktop (full width) disabled`})})]})},render:e=>(0,l.jsx)(`div`,{style:{width:`100%`,display:`block`},children:(0,l.jsx)(i,{...e})})},p={args:{forceMobile:`true`,brand:(0,l.jsx)(c,{children:`DBHeader`}),metaNavigation:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{href:`#`,children:`Imprint`}),(0,l.jsx)(a,{href:`#`,children:`Help`})]}),primaryAction:(0,l.jsx)(o,{icon:`magnifying_glass`,variant:`ghost`,noText:!0,children:`Search`}),secondaryAction:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{icon:`x_placeholder`,variant:`ghost`,noText:!0,children:`Profile`}),(0,l.jsx)(o,{icon:`x_placeholder`,variant:`ghost`,noText:!0,children:`Notification`}),(0,l.jsx)(o,{icon:`x_placeholder`,variant:`ghost`,noText:!0,children:`Help`})]}),children:(0,l.jsxs)(r,{"aria-label":`Mobile`,children:[(0,l.jsx)(n,{icon:`x_placeholder`,children:(0,l.jsx)(`a`,{href:`#`,children:`Mobile`})}),(0,l.jsx)(n,{disabled:!0,children:(0,l.jsx)(`a`,{href:`#`,children:`Mobile disabled`})})]})},render:e=>(0,l.jsx)(`div`,{style:{width:`100%`,display:`block`},children:(0,l.jsx)(i,{...e})})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`Desktopfullwidth`,`Mobile`]}))();export{f as Desktopfullwidth,p as Mobile,m as __namedExportsOrder,d as default};