import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./badge-BEgZVBHl.js";import{n as i,t as a}from"./infotext-DFmQ42-R.js";import{i as o,n as s,r as c,t as l}from"./tab-list-CfBZqhKA.js";import{i as u,n as d,r as f,t as p}from"./tabs-79ui6OC6.js";var m,h,g,_,v,y;function b(){return(b=e((()=>{n(),i(),o(),s(),u(),d(),m=t(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/DBTabs/Slot with Badge`,component:p,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:h(),onTabSelect:h()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},label:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onTabSelect:{action:`onTabSelect`}}},_={args:{children:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(l,{children:[(0,m.jsx)(c,{endSlot:(0,m.jsx)(r,{semantic:`informational`,children:`134`}),children:`Messages`}),(0,m.jsx)(c,{endSlot:(0,m.jsx)(r,{semantic:`neutral`,children:`433`}),children:`Notifications and very long content`}),(0,m.jsx)(c,{children:`Settings`})]}),(0,m.jsx)(f,{children:`Messages content`}),(0,m.jsx)(f,{children:`Notifications content`}),(0,m.jsx)(f,{children:`Settings content`})]})},render:e=>(0,m.jsxs)(`div`,{className:`fit-content-container`,children:[(0,m.jsx)(a,{icon:`none`,size:`small`,semantic:`informational`,children:`Horizontal:`}),(0,m.jsx)(p,{...e})]})},v={args:{orientation:`vertical`,children:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(l,{children:[(0,m.jsx)(c,{endSlot:(0,m.jsx)(r,{semantic:`informational`,children:`134`}),children:`Messages`}),(0,m.jsx)(c,{endSlot:(0,m.jsx)(r,{semantic:`neutral`,children:`433`}),children:`Notifications and very long content`}),(0,m.jsx)(c,{children:`Settings`})]}),(0,m.jsx)(f,{children:`Messages content`}),(0,m.jsx)(f,{children:`Notifications content`}),(0,m.jsx)(f,{children:`Settings content`})]})},render:e=>(0,m.jsxs)(`div`,{className:`fit-content-container`,children:[(0,m.jsx)(a,{icon:`none`,size:`small`,semantic:`informational`,children:`Vertical:`}),(0,m.jsx)(p,{...e})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y=[`Horizontal`,`Vertical`]})))()}b();export{_ as Horizontal,v as Vertical,y as __namedExportsOrder,g as default};