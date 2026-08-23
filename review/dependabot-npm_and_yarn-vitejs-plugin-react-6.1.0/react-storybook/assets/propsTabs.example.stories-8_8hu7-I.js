import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./infotext-DAsk-n4m.js";import{i,n as a,r as o,t as s}from"./tab-list-CUjDLySl.js";import{i as c,n as l,r as u,t as d}from"./tabs-lKLC-1CP.js";var f,p,m,h,g,_;function v(){return(v=e((()=>{n(),i(),a(),c(),l(),f=t(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/DBTabs/Props Tabs`,component:d,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:p(),onTabSelect:p()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},label:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onTabSelect:{action:`onTabSelect`}}},h={args:{tabs:[{label:`Home`,content:`Home content`},{label:`Profile`,content:`Profile content`},{label:`Settings`,content:`Settings content`}]},render:e=>(0,f.jsxs)(`div`,{className:`fit-content-container`,children:[(0,f.jsx)(r,{icon:`none`,size:`small`,semantic:`informational`,children:`Option API — using the tabs prop with an array of tab objects:`}),(0,f.jsx)(d,{...e})]})},g={args:{children:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(s,{children:[(0,f.jsx)(o,{children:`Home`}),(0,f.jsx)(o,{children:`Profile`}),(0,f.jsx)(o,{children:`Settings`})]}),(0,f.jsx)(u,{children:`Home content`}),(0,f.jsx)(u,{children:`Profile content`}),(0,f.jsx)(u,{children:`Settings content`})]})},render:e=>(0,f.jsxs)(`div`,{className:`fit-content-container`,children:[(0,f.jsx)(r,{icon:`none`,size:`small`,semantic:`informational`,children:`Composition API — using child components:`}),(0,f.jsx)(d,{...e})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "tabs": [{
      label: 'Home',
      content: 'Home content'
    }, {
      label: 'Profile',
      content: 'Profile content'
    }, {
      label: 'Settings',
      content: 'Settings content'
    }]
  },
  render: (properties: any) => <div className="fit-content-container"><DBInfotext icon="none" size="small" semantic="informational">
                    Option API — using the tabs prop with an array of tab
                    objects:
                </DBInfotext><DBTabs {...properties} /></div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <><DBTabList><DBTabItem>Home</DBTabItem><DBTabItem>Profile</DBTabItem><DBTabItem>Settings</DBTabItem></DBTabList><DBTabPanel>Home content</DBTabPanel><DBTabPanel>Profile content</DBTabPanel><DBTabPanel>Settings content</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container"><DBInfotext icon="none" size="small" semantic="informational">
                    Composition API — using child components:
                </DBInfotext><DBTabs {...properties} /></div>
}`,...g.parameters?.docs?.source}}},_=[`OptionAPIpropstabs`,`CompositionAPIchildren`]})))()}v();export{g as CompositionAPIchildren,h as OptionAPIpropstabs,_ as __namedExportsOrder,m as default};