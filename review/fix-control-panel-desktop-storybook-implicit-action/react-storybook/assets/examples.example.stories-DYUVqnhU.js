import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./button-BjmEg4He.js";import{i,n as a,r as o,t as s}from"./control-panel-actions-2-BEk9ZXkK.js";import{n as c,t as l}from"./control-panel-brand-BcBiPhWm.js";import{n as u,t as d}from"./control-panel-desktop-DbWo95du.js";import{i as f,n as p,r as m,t as h}from"./control-panel-navigation-item-BU8F04qz.js";var g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{n(),i(),a(),c(),p(),f(),u(),g=t(),{fn:_}=__STORYBOOK_MODULE_TEST__,v={title:`Components/DBControlPanelDesktop/Examples`,component:d,parameters:{layout:`centered`},tags:[`autodocs`],args:{onExpandButtonTooltipFn:_()},argTypes:{width:{control:`select`,options:[`full`,`medium`,`large`,`small`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},expanded:{control:`boolean`},expandButtonTooltip:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onExpandButtonTooltipFn:{action:`onExpandButtonTooltipFn`}}},y={args:{orientation:`horizontal`,brand:(0,g.jsx)(l,{"data-logo":`db-systel`}),children:(0,g.jsxs)(m,{"aria-label":`With Application Name + Navigation`,children:[(0,g.jsx)(h,{icon:`x_placeholder`,children:(0,g.jsx)(`a`,{href:`#`,children:`With Application Name + Navigation`})}),(0,g.jsx)(h,{icon:`x_placeholder`,disabled:!0,children:(0,g.jsx)(`a`,{href:`#`,children:`With Application Name disabled`})})]})},render:e=>(0,g.jsx)(`div`,{style:{width:`100%`,display:`block`},children:(0,g.jsx)(d,{...e})})},b={args:{orientation:`horizontal`,brand:(0,g.jsx)(l,{"data-logo":`db-systel`})},render:e=>(0,g.jsx)(`div`,{style:{width:`100%`,display:`block`},children:(0,g.jsx)(d,{...e})})},x={args:{orientation:`horizontal`,brand:(0,g.jsx)(l,{"data-logo":`db-systel`}),actions1:(0,g.jsx)(o,{children:(0,g.jsx)(r,{icon:`magnifying_glass`,variant:`ghost`,noText:!0,children:`Search`})}),actions2:(0,g.jsxs)(s,{children:[(0,g.jsx)(r,{icon:`x_placeholder`,variant:`ghost`,noText:!0,children:`Profile`}),(0,g.jsx)(r,{icon:`x_placeholder`,variant:`ghost`,noText:!0,children:`Notification`}),(0,g.jsx)(r,{icon:`x_placeholder`,variant:`ghost`,noText:!0,children:`Help`})]})},render:e=>(0,g.jsx)(`div`,{style:{width:`100%`,display:`block`},children:(0,g.jsx)(d,{...e})})},S={args:{orientation:`horizontal`,brand:(0,g.jsx)(l,{"data-logo":`db-systel`}),actions1:(0,g.jsx)(o,{children:(0,g.jsx)(r,{icon:`magnifying_glass`,variant:`ghost`,noText:!0,children:`Search`})})},render:e=>(0,g.jsx)(`div`,{style:{width:`100%`,display:`block`},children:(0,g.jsx)(d,{...e})})},C={args:{orientation:`horizontal`,brand:(0,g.jsx)(l,{"data-logo":`db-systel`}),actions2:(0,g.jsxs)(s,{children:[(0,g.jsx)(r,{icon:`x_placeholder`,variant:`ghost`,noText:!0,children:`Profile`}),(0,g.jsx)(r,{icon:`x_placeholder`,variant:`ghost`,noText:!0,children:`Notification`}),(0,g.jsx)(r,{icon:`x_placeholder`,variant:`ghost`,noText:!0,children:`Help`})]})},render:e=>(0,g.jsx)(`div`,{style:{width:`100%`,display:`block`},children:(0,g.jsx)(d,{...e})})},w={args:{orientation:`horizontal`,brand:(0,g.jsx)(l,{}),children:(0,g.jsxs)(m,{"aria-label":`Without Application Name`,children:[(0,g.jsx)(h,{icon:`x_placeholder`,children:(0,g.jsx)(`a`,{href:`#`,children:`Without Application Name`})}),(0,g.jsx)(h,{icon:`x_placeholder`,disabled:!0,children:(0,g.jsx)(`a`,{href:`#`,children:`Without Application Name disabled`})})]})},render:e=>(0,g.jsx)(`div`,{style:{width:`100%`,display:`block`},children:(0,g.jsx)(d,{...e})})},T={args:{orientation:`horizontal`,brand:(0,g.jsx)(l,{})},render:e=>(0,g.jsx)(`div`,{style:{width:`100%`,display:`block`},children:(0,g.jsx)(d,{...e})})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    "orientation": "horizontal",
    "brand": <DBControlPanelBrand data-logo="db-systel" />,
    "children": <DBControlPanelNavigation aria-label="With Application Name + Navigation" {...{}}><DBControlPanelNavigationItem icon="x_placeholder"><a href="#">With Application Name + Navigation</a></DBControlPanelNavigationItem><DBControlPanelNavigationItem icon="x_placeholder" disabled><a href="#">With Application Name disabled</a></DBControlPanelNavigationItem></DBControlPanelNavigation>
  },
  render: (properties: any) => <div style={{
    width: '100%',
    display: 'block'
  }}><DBControlPanelDesktop {...properties} /></div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    "orientation": "horizontal",
    "brand": <DBControlPanelBrand data-logo="db-systel" />
  },
  render: (properties: any) => <div style={{
    width: '100%',
    display: 'block'
  }}><DBControlPanelDesktop {...properties} /></div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    "orientation": "horizontal",
    "brand": <DBControlPanelBrand data-logo="db-systel" />,
    "actions1": <DBControlPanelActions1>
                            <DBButton icon="magnifying_glass" variant="ghost" noText>
                                Search
                            </DBButton>
                        </DBControlPanelActions1>,
    "actions2": <DBControlPanelActions2>
                            <DBButton icon="x_placeholder" variant="ghost" noText>
                                Profile
                            </DBButton>
                            <DBButton icon="x_placeholder" variant="ghost" noText>
                                Notification
                            </DBButton>
                            <DBButton icon="x_placeholder" variant="ghost" noText>
                                Help
                            </DBButton>
                        </DBControlPanelActions2>
  },
  render: (properties: any) => <div style={{
    width: '100%',
    display: 'block'
  }}><DBControlPanelDesktop {...properties} /></div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    "orientation": "horizontal",
    "brand": <DBControlPanelBrand data-logo="db-systel" />,
    "actions1": <DBControlPanelActions1>
                            <DBButton icon="magnifying_glass" variant="ghost" noText>
                                Search
                            </DBButton>
                        </DBControlPanelActions1>
  },
  render: (properties: any) => <div style={{
    width: '100%',
    display: 'block'
  }}><DBControlPanelDesktop {...properties} /></div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    "orientation": "horizontal",
    "brand": <DBControlPanelBrand data-logo="db-systel" />,
    "actions2": <DBControlPanelActions2>
                            <DBButton icon="x_placeholder" variant="ghost" noText>
                                Profile
                            </DBButton>
                            <DBButton icon="x_placeholder" variant="ghost" noText>
                                Notification
                            </DBButton>
                            <DBButton icon="x_placeholder" variant="ghost" noText>
                                Help
                            </DBButton>
                        </DBControlPanelActions2>
  },
  render: (properties: any) => <div style={{
    width: '100%',
    display: 'block'
  }}><DBControlPanelDesktop {...properties} /></div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    "orientation": "horizontal",
    "brand": <DBControlPanelBrand />,
    "children": <DBControlPanelNavigation aria-label="Without Application Name" {...{}}><DBControlPanelNavigationItem icon="x_placeholder"><a href="#">Without Application Name</a></DBControlPanelNavigationItem><DBControlPanelNavigationItem icon="x_placeholder" disabled><a href="#">Without Application Name disabled</a></DBControlPanelNavigationItem></DBControlPanelNavigation>
  },
  render: (properties: any) => <div style={{
    width: '100%',
    display: 'block'
  }}><DBControlPanelDesktop {...properties} /></div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    "orientation": "horizontal",
    "brand": <DBControlPanelBrand />
  },
  render: (properties: any) => <div style={{
    width: '100%',
    display: 'block'
  }}><DBControlPanelDesktop {...properties} /></div>
}`,...T.parameters?.docs?.source}}},E=[`WithApplicationNameNavigation`,`WithoutNavigation`,`WithoutNavigationActions1Actions2`,`WithoutNavigationActions1`,`WithoutNavigationActions2`,`WithoutApplicationName`,`WithoutApplicationNameNavigation`]})))()}D();export{y as WithApplicationNameNavigation,w as WithoutApplicationName,T as WithoutApplicationNameNavigation,b as WithoutNavigation,S as WithoutNavigationActions1,x as WithoutNavigationActions1Actions2,C as WithoutNavigationActions2,E as __namedExportsOrder,v as default};