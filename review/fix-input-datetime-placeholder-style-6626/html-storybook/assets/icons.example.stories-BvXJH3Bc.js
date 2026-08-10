import{n as e}from"./iframe-B2ki1UxO.js";import{n as t,t as n}from"./infotext-BDrg-WaV.js";import{i as r,n as i,r as a,t as o}from"./tab-list-ChMgL8UR.js";import{i as s,n as c,r as l,t as u}from"./tabs-DrdVtVV0.js";import{n as d}from"./rolldown-runtime-DkW27tQK.js";var f,p,m,h,g,_;function v(){return(v=d((()=>{t(),r(),i(),s(),c(),f=e(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/DBTabs/Icons`,component:u,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:p(),onTabSelect:p()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},label:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onTabSelect:{action:`onTabSelect`}}},h={args:{children:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(o,{children:[(0,f.jsx)(a,{icon:`house`,showIcon:!0,children:`Home`}),(0,f.jsx)(a,{icon:`magnifying_glass`,showIcon:!0,children:`Search`}),(0,f.jsx)(a,{icon:`calendar`,showIcon:!0,children:`Calendar`})]}),(0,f.jsx)(l,{children:`Home content`}),(0,f.jsx)(l,{children:`Search content`}),(0,f.jsx)(l,{children:`Calendar content`})]})},render:e=>(0,f.jsxs)(`div`,{className:`fit-content-container`,children:[(0,f.jsx)(n,{icon:`none`,size:`small`,semantic:`informational`,children:`with leading icons:`}),(0,f.jsx)(u,{...e})]})},g={args:{children:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(o,{children:[(0,f.jsx)(a,{iconTrailing:`exclamation_mark_circle`,showIconTrailing:!0,children:`Notifications`}),(0,f.jsx)(a,{iconTrailing:`information_circle`,showIconTrailing:!0,children:`Info`}),(0,f.jsx)(a,{iconTrailing:`circular_arrows`,showIconTrailing:!0,children:`Settings`})]}),(0,f.jsx)(l,{children:`Notifications content`}),(0,f.jsx)(l,{children:`Info content`}),(0,f.jsx)(l,{children:`Settings content`})]})},render:e=>(0,f.jsxs)(`div`,{className:`fit-content-container`,children:[(0,f.jsx)(n,{icon:`none`,size:`small`,semantic:`informational`,children:`with trailing icons:`}),(0,f.jsx)(u,{...e})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`withleadingicons`,`withtrailingicons`]})))()}v();export{_ as __namedExportsOrder,m as default,h as withleadingicons,g as withtrailingicons};