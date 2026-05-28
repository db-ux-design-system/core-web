import{i as e}from"./preload-helper-BWahpnvW.js";import{t}from"./jsx-runtime-DB7_Oyf5.js";import{Q as n,c as r,i,o as a,t as o,u as s}from"./src-DTmcQ_BZ.js";var c,l,u,d,f,p;e((()=>{o(),c=t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBTabs/Icons`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:l(),onTabSelect:l()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},name:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onTabSelect:{action:`onTabSelect`}}},d={args:{children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r,{children:[(0,c.jsx)(s,{icon:`house`,showIcon:!0,children:`Home`}),(0,c.jsx)(s,{icon:`magnifying_glass`,showIcon:!0,children:`Search`}),(0,c.jsx)(s,{icon:`calendar`,showIcon:!0,children:`Calendar`})]}),(0,c.jsx)(a,{children:`Home content`}),(0,c.jsx)(a,{children:`Search content`}),(0,c.jsx)(a,{children:`Calendar content`})]})},render:e=>(0,c.jsxs)(`div`,{className:`fit-content-container`,children:[(0,c.jsx)(n,{icon:`none`,size:`small`,semantic:`informational`,children:`with leading icons:`}),(0,c.jsx)(i,{...e})]})},f={args:{children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r,{children:[(0,c.jsx)(s,{iconTrailing:`exclamation_mark_circle`,showIconTrailing:!0,children:`Notifications`}),(0,c.jsx)(s,{iconTrailing:`information_circle`,showIconTrailing:!0,children:`Info`}),(0,c.jsx)(s,{iconTrailing:`circular_arrows`,showIconTrailing:!0,children:`Settings`})]}),(0,c.jsx)(a,{children:`Notifications content`}),(0,c.jsx)(a,{children:`Info content`}),(0,c.jsx)(a,{children:`Settings content`})]})},render:e=>(0,c.jsxs)(`div`,{className:`fit-content-container`,children:[(0,c.jsx)(n,{icon:`none`,size:`small`,semantic:`informational`,children:`with trailing icons:`}),(0,c.jsx)(i,{...e})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <><DBTabList><DBTabItem icon="house" showIcon>
                            Home
                        </DBTabItem><DBTabItem icon="magnifying_glass" showIcon>
                            Search
                        </DBTabItem><DBTabItem icon="calendar" showIcon>
                            Calendar
                        </DBTabItem></DBTabList><DBTabPanel>Home content</DBTabPanel><DBTabPanel>Search content</DBTabPanel><DBTabPanel>Calendar content</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container"><DBInfotext icon="none" size="small" semantic="informational">
                    with leading icons:
                </DBInfotext><DBTabs {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <><DBTabList><DBTabItem iconTrailing="exclamation_mark_circle" showIconTrailing>
                            Notifications
                        </DBTabItem><DBTabItem iconTrailing="information_circle" showIconTrailing>
                            Info
                        </DBTabItem><DBTabItem iconTrailing="circular_arrows" showIconTrailing>
                            Settings
                        </DBTabItem></DBTabList><DBTabPanel>Notifications content</DBTabPanel><DBTabPanel>Info content</DBTabPanel><DBTabPanel>Settings content</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container"><DBInfotext icon="none" size="small" semantic="informational">
                    with trailing icons:
                </DBInfotext><DBTabs {...properties} /></div>
}`,...f.parameters?.docs?.source}}},p=[`withleadingicons`,`withtrailingicons`]}))();export{p as __namedExportsOrder,u as default,d as withleadingicons,f as withtrailingicons};