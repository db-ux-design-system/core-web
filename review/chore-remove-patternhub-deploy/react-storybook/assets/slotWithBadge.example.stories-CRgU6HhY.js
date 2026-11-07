import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./badge-d0YH_xk8.js";import{n as a,t as o}from"./infotext-DWUtRaHE.js";import{i as s,n as c,r as l,t as u}from"./tab-list-CanyN2YD.js";import{i as d,n as f,r as p,t as m}from"./tabs-DMG3H2ST.js";var h=t({Horizontal:()=>y,Vertical:()=>b,__namedExportsOrder:()=>x,default:()=>v}),g,_,v,y,b,x;function S(){return(S=e((()=>{r(),a(),s(),c(),d(),f(),g=n(),{fn:_}=__STORYBOOK_MODULE_TEST__,v={title:`Components/DBTabs/Slot with Badge`,component:m,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:_(),onValueChange:_()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},label:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onValueChange:{action:`onValueChange`}}},y={args:{children:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(u,{children:[(0,g.jsx)(l,{endSlot:(0,g.jsx)(i,{semantic:`informational`,children:`134`}),children:`Messages`}),(0,g.jsx)(l,{endSlot:(0,g.jsx)(i,{semantic:`neutral`,children:`433`}),children:`Notifications and very long content`}),(0,g.jsx)(l,{children:`Settings`})]}),(0,g.jsx)(p,{children:`Messages content`}),(0,g.jsx)(p,{children:`Notifications content`}),(0,g.jsx)(p,{children:`Settings content`})]})},render:e=>(0,g.jsxs)(`div`,{className:`fit-content-container`,children:[(0,g.jsx)(o,{icon:`none`,size:`small`,semantic:`informational`,children:`Horizontal:`}),(0,g.jsx)(m,{...e})]})},b={args:{orientation:`vertical`,children:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(u,{children:[(0,g.jsx)(l,{endSlot:(0,g.jsx)(i,{semantic:`informational`,children:`134`}),children:`Messages`}),(0,g.jsx)(l,{endSlot:(0,g.jsx)(i,{semantic:`neutral`,children:`433`}),children:`Notifications and very long content`}),(0,g.jsx)(l,{children:`Settings`})]}),(0,g.jsx)(p,{children:`Messages content`}),(0,g.jsx)(p,{children:`Notifications content`}),(0,g.jsx)(p,{children:`Settings content`})]})},render:e=>(0,g.jsxs)(`div`,{className:`fit-content-container`,children:[(0,g.jsx)(o,{icon:`none`,size:`small`,semantic:`informational`,children:`Vertical:`}),(0,g.jsx)(m,{...e})]})},x=[`Horizontal`,`Vertical`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}}})))()}export{h as i,b as n,S as r,y as t};