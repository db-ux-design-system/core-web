import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-DC6t-S6Q.js";import{D as n,a as r,i,o as a,r as o,t as s}from"./src-U3vAJcA5.js";var c,l,u,d,f,p,m;e((()=>{s(),c=t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBTabs/Icons`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},name:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`}}},d={args:{children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r,{children:[(0,c.jsx)(a,{icon:`house`,showIcon:!0,children:`Home`}),(0,c.jsx)(a,{icon:`magnifying_glass`,showIcon:!0,children:`Search`}),(0,c.jsx)(a,{icon:`calendar`,showIcon:!0,children:`Calendar`})]}),(0,c.jsx)(i,{children:`Home content`}),(0,c.jsx)(i,{children:`Search content`}),(0,c.jsx)(i,{children:`Calendar content`})]})},render:e=>(0,c.jsxs)(`div`,{className:`fit-content-container`,children:[(0,c.jsx)(n,{icon:`none`,size:`small`,semantic:`informational`,children:`with leading icons:`}),(0,c.jsx)(o,{...e})]})},f={args:{children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r,{children:[(0,c.jsx)(a,{iconTrailing:`exclamation_mark_circle`,showIconTrailing:!0,children:`Notifications`}),(0,c.jsx)(a,{iconTrailing:`information_circle`,showIconTrailing:!0,children:`Info`}),(0,c.jsx)(a,{iconTrailing:`circular_arrows`,showIconTrailing:!0,children:`Settings`})]}),(0,c.jsx)(i,{children:`Notifications content`}),(0,c.jsx)(i,{children:`Info content`}),(0,c.jsx)(i,{children:`Settings content`})]})},render:e=>(0,c.jsxs)(`div`,{className:`fit-content-container`,children:[(0,c.jsx)(n,{icon:`none`,size:`small`,semantic:`informational`,children:`with trailing icons:`}),(0,c.jsx)(o,{...e})]})},p={args:{children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r,{children:[(0,c.jsx)(a,{label:`Home`,icon:`house`,showIcon:!0,noText:!0}),(0,c.jsx)(a,{label:`Search`,icon:`magnifying_glass`,showIcon:!0,noText:!0}),(0,c.jsx)(a,{label:`Calendar`,icon:`calendar`,showIcon:!0,noText:!0})]}),(0,c.jsx)(i,{children:`Home content`}),(0,c.jsx)(i,{children:`Search content`}),(0,c.jsx)(i,{children:`Calendar content`})]})},render:e=>(0,c.jsxs)(`div`,{className:`fit-content-container`,children:[(0,c.jsx)(n,{icon:`none`,size:`small`,semantic:`informational`,children:`icon-only (noText):`}),(0,c.jsx)(o,{...e})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <><DBTabList><DBTabItem label="Home" icon="house" showIcon noText /><DBTabItem label="Search" icon="magnifying_glass" showIcon noText /><DBTabItem label="Calendar" icon="calendar" showIcon noText /></DBTabList><DBTabPanel>Home content</DBTabPanel><DBTabPanel>Search content</DBTabPanel><DBTabPanel>Calendar content</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container"><DBInfotext icon="none" size="small" semantic="informational">
                    icon-only (noText):
                </DBInfotext><DBTabs {...properties} /></div>
}`,...p.parameters?.docs?.source}}},m=[`withleadingicons`,`withtrailingicons`,`icononlynoText`]}))();export{m as __namedExportsOrder,u as default,p as icononlynoText,d as withleadingicons,f as withtrailingicons};