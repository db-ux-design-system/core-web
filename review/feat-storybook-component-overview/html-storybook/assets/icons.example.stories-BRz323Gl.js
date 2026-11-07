import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./infotext-BzIHEy3h.js";import{i as a,n as o,r as s,t as c}from"./tab-list-BEgYNVfY.js";import{i as l,n as u,r as d,t as f}from"./tabs-CEPi2X6o.js";var p=t({__namedExportsOrder:()=>y,default:()=>g,withleadingicons:()=>_,withtrailingicons:()=>v}),m,h,g,_,v,y;function b(){return(b=e((()=>{r(),a(),o(),l(),u(),m=n(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/DBTabs/Icons`,component:f,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:h(),onValueChange:h()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},label:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onValueChange:{action:`onValueChange`}}},_={args:{children:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(c,{children:[(0,m.jsx)(s,{icon:`house`,showIcon:!0,children:`Home`}),(0,m.jsx)(s,{icon:`magnifying_glass`,showIcon:!0,children:`Search`}),(0,m.jsx)(s,{icon:`calendar`,showIcon:!0,children:`Calendar`})]}),(0,m.jsx)(d,{children:`Home content`}),(0,m.jsx)(d,{children:`Search content`}),(0,m.jsx)(d,{children:`Calendar content`})]})},render:e=>(0,m.jsxs)(`div`,{className:`fit-content-container`,children:[(0,m.jsx)(i,{icon:`none`,size:`small`,semantic:`informational`,children:`with leading icons:`}),(0,m.jsx)(f,{...e})]})},v={args:{children:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(c,{children:[(0,m.jsx)(s,{iconTrailing:`exclamation_mark_circle`,showIconTrailing:!0,children:`Notifications`}),(0,m.jsx)(s,{iconTrailing:`information_circle`,showIconTrailing:!0,children:`Info`}),(0,m.jsx)(s,{iconTrailing:`circular_arrows`,showIconTrailing:!0,children:`Settings`})]}),(0,m.jsx)(d,{children:`Notifications content`}),(0,m.jsx)(d,{children:`Info content`}),(0,m.jsx)(d,{children:`Settings content`})]})},render:e=>(0,m.jsxs)(`div`,{className:`fit-content-container`,children:[(0,m.jsx)(i,{icon:`none`,size:`small`,semantic:`informational`,children:`with trailing icons:`}),(0,m.jsx)(f,{...e})]})},y=[`withleadingicons`,`withtrailingicons`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}}})))()}export{v as i,b as n,_ as r,p as t};