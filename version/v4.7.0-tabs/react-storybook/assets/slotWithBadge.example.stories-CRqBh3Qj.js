import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-DC6t-S6Q.js";import{D as n,a as r,i,j as a,o,r as s,t as c}from"./src-U3vAJcA5.js";var l,u,d,f,p;e((()=>{c(),l=t(),{fn:u}=__STORYBOOK_MODULE_TEST__,d={title:`Components/DBTabs/Slot with Badge`,component:s,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},name:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`}}},f={args:{children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(r,{children:[(0,l.jsx)(o,{children:(0,l.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[`Messages`,(0,l.jsx)(a,{semantic:`informational`,children:`134`})]})}),(0,l.jsx)(o,{children:(0,l.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[`Notifications`,(0,l.jsx)(a,{semantic:`neutral`,children:`433`})]})}),(0,l.jsx)(o,{children:`Settings`})]}),(0,l.jsx)(i,{children:`Messages content`}),(0,l.jsx)(i,{children:`Notifications content`}),(0,l.jsx)(i,{children:`Settings content`})]})},render:e=>(0,l.jsxs)(`div`,{className:`fit-content-container`,children:[(0,l.jsx)(n,{icon:`none`,size:`small`,semantic:`informational`,children:`tab-items with badges:`}),(0,l.jsx)(s,{...e})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <><DBTabList><DBTabItem><span style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
                                Messages
                                <DBBadge semantic="informational">134</DBBadge></span></DBTabItem><DBTabItem><span style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
                                Notifications
                                <DBBadge semantic="neutral">433</DBBadge></span></DBTabItem><DBTabItem>Settings</DBTabItem></DBTabList><DBTabPanel>Messages content</DBTabPanel><DBTabPanel>Notifications content</DBTabPanel><DBTabPanel>Settings content</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container"><DBInfotext icon="none" size="small" semantic="informational">
                    tab-items with badges:
                </DBInfotext><DBTabs {...properties} /></div>
}`,...f.parameters?.docs?.source}}},p=[`tabitemswithbadges`]}))();export{p as __namedExportsOrder,d as default,f as tabitemswithbadges};