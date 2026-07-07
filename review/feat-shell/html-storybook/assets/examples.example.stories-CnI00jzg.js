import{i as e}from"./preload-helper-C9EeBkpf.js";import{t}from"./iframe-CVl9kIwh.js";import{Bt as n,Mt as r,Ot as i,ct as a,ft as o,mt as s,ot as c,t as l}from"./src-CCMbL6zL.js";var u,d,f,p,m,h,g,_,v,y,b;e((()=>{l(),u=t(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBControlPanelDesktop/Examples`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`medium`,`large`,`small`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},expanded:{control:`boolean`},expandButtonTooltip:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},p={args:{orientation:`horizontal`,brand:(0,u.jsx)(r,{"data-logo":`db-systel`}),children:(0,u.jsxs)(s,{"aria-label":`With Application Name + Navigation`,children:[(0,u.jsx)(o,{icon:`x_placeholder`,children:(0,u.jsx)(`a`,{href:`#`,children:`With Application Name + Navigation`})}),(0,u.jsx)(o,{icon:`x_placeholder`,disabled:!0,children:(0,u.jsx)(`a`,{href:`#`,children:`With Application Name disabled`})})]})},render:e=>(0,u.jsx)(`div`,{style:{width:`100%`,display:`block`},children:(0,u.jsx)(i,{...e})})},m={args:{orientation:`horizontal`,brand:(0,u.jsx)(r,{"data-logo":`db-systel`})},render:e=>(0,u.jsx)(`div`,{style:{width:`100%`,display:`block`},children:(0,u.jsx)(i,{...e})})},h={args:{orientation:`horizontal`,brand:(0,u.jsx)(r,{"data-logo":`db-systel`}),primaryActions:(0,u.jsx)(a,{children:(0,u.jsx)(n,{icon:`magnifying_glass`,variant:`ghost`,noText:!0,children:`Search`})}),secondaryActions:(0,u.jsxs)(c,{children:[(0,u.jsx)(n,{icon:`x_placeholder`,variant:`ghost`,noText:!0,children:`Profile`}),(0,u.jsx)(n,{icon:`x_placeholder`,variant:`ghost`,noText:!0,children:`Notification`}),(0,u.jsx)(n,{icon:`x_placeholder`,variant:`ghost`,noText:!0,children:`Help`})]})},render:e=>(0,u.jsx)(`div`,{style:{width:`100%`,display:`block`},children:(0,u.jsx)(i,{...e})})},g={args:{orientation:`horizontal`,brand:(0,u.jsx)(r,{"data-logo":`db-systel`}),primaryActions:(0,u.jsx)(a,{children:(0,u.jsx)(n,{icon:`magnifying_glass`,variant:`ghost`,noText:!0,children:`Search`})})},render:e=>(0,u.jsx)(`div`,{style:{width:`100%`,display:`block`},children:(0,u.jsx)(i,{...e})})},_={args:{orientation:`horizontal`,brand:(0,u.jsx)(r,{"data-logo":`db-systel`}),secondaryActions:(0,u.jsxs)(c,{children:[(0,u.jsx)(n,{icon:`x_placeholder`,variant:`ghost`,noText:!0,children:`Profile`}),(0,u.jsx)(n,{icon:`x_placeholder`,variant:`ghost`,noText:!0,children:`Notification`}),(0,u.jsx)(n,{icon:`x_placeholder`,variant:`ghost`,noText:!0,children:`Help`})]})},render:e=>(0,u.jsx)(`div`,{style:{width:`100%`,display:`block`},children:(0,u.jsx)(i,{...e})})},v={args:{orientation:`horizontal`,brand:(0,u.jsx)(r,{}),children:(0,u.jsxs)(s,{"aria-label":`Without Application Name`,children:[(0,u.jsx)(o,{icon:`x_placeholder`,children:(0,u.jsx)(`a`,{href:`#`,children:`Without Application Name`})}),(0,u.jsx)(o,{icon:`x_placeholder`,disabled:!0,children:(0,u.jsx)(`a`,{href:`#`,children:`Without Application Name disabled`})})]})},render:e=>(0,u.jsx)(`div`,{style:{width:`100%`,display:`block`},children:(0,u.jsx)(i,{...e})})},y={args:{orientation:`horizontal`,brand:(0,u.jsx)(r,{})},render:e=>(0,u.jsx)(`div`,{style:{width:`100%`,display:`block`},children:(0,u.jsx)(i,{...e})})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "orientation": "horizontal",
    "brand": <DBControlPanelBrand data-logo="db-systel" />,
    "children": <DBControlPanelNavigation aria-label="With Application Name + Navigation" {...{}}><DBControlPanelNavigationItem icon="x_placeholder"><a href="#">With Application Name + Navigation</a></DBControlPanelNavigationItem><DBControlPanelNavigationItem icon="x_placeholder" disabled><a href="#">With Application Name disabled</a></DBControlPanelNavigationItem></DBControlPanelNavigation>
  },
  render: (properties: any) => <div style={{
    width: '100%',
    display: 'block'
  }}><DBControlPanelDesktop {...properties} /></div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "orientation": "horizontal",
    "brand": <DBControlPanelBrand data-logo="db-systel" />
  },
  render: (properties: any) => <div style={{
    width: '100%',
    display: 'block'
  }}><DBControlPanelDesktop {...properties} /></div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "orientation": "horizontal",
    "brand": <DBControlPanelBrand data-logo="db-systel" />,
    "primaryActions": <DBControlPanelPrimaryActions>
                            <DBButton icon="magnifying_glass" variant="ghost" noText>
                                Search
                            </DBButton>
                        </DBControlPanelPrimaryActions>,
    "secondaryActions": <DBControlPanelSecondaryActions>
                            <DBButton icon="x_placeholder" variant="ghost" noText>
                                Profile
                            </DBButton>
                            <DBButton icon="x_placeholder" variant="ghost" noText>
                                Notification
                            </DBButton>
                            <DBButton icon="x_placeholder" variant="ghost" noText>
                                Help
                            </DBButton>
                        </DBControlPanelSecondaryActions>
  },
  render: (properties: any) => <div style={{
    width: '100%',
    display: 'block'
  }}><DBControlPanelDesktop {...properties} /></div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "orientation": "horizontal",
    "brand": <DBControlPanelBrand data-logo="db-systel" />,
    "primaryActions": <DBControlPanelPrimaryActions>
                            <DBButton icon="magnifying_glass" variant="ghost" noText>
                                Search
                            </DBButton>
                        </DBControlPanelPrimaryActions>
  },
  render: (properties: any) => <div style={{
    width: '100%',
    display: 'block'
  }}><DBControlPanelDesktop {...properties} /></div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    "orientation": "horizontal",
    "brand": <DBControlPanelBrand data-logo="db-systel" />,
    "secondaryActions": <DBControlPanelSecondaryActions>
                            <DBButton icon="x_placeholder" variant="ghost" noText>
                                Profile
                            </DBButton>
                            <DBButton icon="x_placeholder" variant="ghost" noText>
                                Notification
                            </DBButton>
                            <DBButton icon="x_placeholder" variant="ghost" noText>
                                Help
                            </DBButton>
                        </DBControlPanelSecondaryActions>
  },
  render: (properties: any) => <div style={{
    width: '100%',
    display: 'block'
  }}><DBControlPanelDesktop {...properties} /></div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    "orientation": "horizontal",
    "brand": <DBControlPanelBrand />,
    "children": <DBControlPanelNavigation aria-label="Without Application Name" {...{}}><DBControlPanelNavigationItem icon="x_placeholder"><a href="#">Without Application Name</a></DBControlPanelNavigationItem><DBControlPanelNavigationItem icon="x_placeholder" disabled><a href="#">Without Application Name disabled</a></DBControlPanelNavigationItem></DBControlPanelNavigation>
  },
  render: (properties: any) => <div style={{
    width: '100%',
    display: 'block'
  }}><DBControlPanelDesktop {...properties} /></div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    "orientation": "horizontal",
    "brand": <DBControlPanelBrand />
  },
  render: (properties: any) => <div style={{
    width: '100%',
    display: 'block'
  }}><DBControlPanelDesktop {...properties} /></div>
}`,...y.parameters?.docs?.source}}},b=[`WithApplicationNameNavigation`,`WithoutNavigation`,`WithoutNavigationPrimarySecondary`,`WithoutNavigationPrimary`,`WithoutNavigationSecondary`,`WithoutApplicationName`,`WithoutApplicationNameNavigation`]}))();export{p as WithApplicationNameNavigation,v as WithoutApplicationName,y as WithoutApplicationNameNavigation,m as WithoutNavigation,g as WithoutNavigationPrimary,h as WithoutNavigationPrimarySecondary,_ as WithoutNavigationSecondary,b as __namedExportsOrder,f as default};