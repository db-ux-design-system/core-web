import{i as e}from"./preload-helper-vuDpiu_8.js";import{t}from"./jsx-runtime-46GgYJu-.js";import{S as n,b as r,gt as i,i as a,t as o,w as s,wt as c}from"./src-B0a4df5D.js";var l,u,d,f,p,m;e((()=>{o(),l=t(),{fn:u}=__STORYBOOK_MODULE_TEST__,d={title:`Components/DBTabs/Slot with Badge`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:u(),onTabSelect:u()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},label:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onTabSelect:{action:`onTabSelect`}}},f={args:{children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n,{children:[(0,l.jsx)(s,{endSlot:(0,l.jsx)(c,{semantic:`informational`,children:`134`}),children:`Messages`}),(0,l.jsx)(s,{endSlot:(0,l.jsx)(c,{semantic:`neutral`,children:`433`}),children:`Notifications and very long content`}),(0,l.jsx)(s,{children:`Settings`})]}),(0,l.jsx)(r,{children:`Messages content`}),(0,l.jsx)(r,{children:`Notifications content`}),(0,l.jsx)(r,{children:`Settings content`})]})},render:e=>(0,l.jsxs)(`div`,{className:`fit-content-container`,children:[(0,l.jsx)(i,{icon:`none`,size:`small`,semantic:`informational`,children:`Horizontal:`}),(0,l.jsx)(a,{...e})]})},p={args:{orientation:`vertical`,children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n,{children:[(0,l.jsx)(s,{endSlot:(0,l.jsx)(c,{semantic:`informational`,children:`134`}),children:`Messages`}),(0,l.jsx)(s,{endSlot:(0,l.jsx)(c,{semantic:`neutral`,children:`433`}),children:`Notifications and very long content`}),(0,l.jsx)(s,{children:`Settings`})]}),(0,l.jsx)(r,{children:`Messages content`}),(0,l.jsx)(r,{children:`Notifications content`}),(0,l.jsx)(r,{children:`Settings content`})]})},render:e=>(0,l.jsxs)(`div`,{className:`fit-content-container`,children:[(0,l.jsx)(i,{icon:`none`,size:`small`,semantic:`informational`,children:`Vertical:`}),(0,l.jsx)(a,{...e})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <><DBTabList><DBTabItem endSlot={<DBBadge semantic="informational">134</DBBadge>}>
                            Messages
                        </DBTabItem><DBTabItem endSlot={<DBBadge semantic="neutral">433</DBBadge>}>
                            Notifications and very long content
                        </DBTabItem><DBTabItem>Settings</DBTabItem></DBTabList><DBTabPanel>Messages content</DBTabPanel><DBTabPanel>Notifications content</DBTabPanel><DBTabPanel>Settings content</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container"><DBInfotext icon="none" size="small" semantic="informational">
                    Horizontal:
                </DBInfotext><DBTabs {...properties} /></div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "orientation": "vertical",
    "children": <><DBTabList><DBTabItem endSlot={<DBBadge semantic="informational">134</DBBadge>}>
                            Messages
                        </DBTabItem><DBTabItem endSlot={<DBBadge semantic="neutral">433</DBBadge>}>
                            Notifications and very long content
                        </DBTabItem><DBTabItem>Settings</DBTabItem></DBTabList><DBTabPanel>Messages content</DBTabPanel><DBTabPanel>Notifications content</DBTabPanel><DBTabPanel>Settings content</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container"><DBInfotext icon="none" size="small" semantic="informational">
                    Vertical:
                </DBInfotext><DBTabs {...properties} /></div>
}`,...p.parameters?.docs?.source}}},m=[`Horizontal`,`Vertical`]}))();export{f as Horizontal,p as Vertical,m as __namedExportsOrder,d as default};