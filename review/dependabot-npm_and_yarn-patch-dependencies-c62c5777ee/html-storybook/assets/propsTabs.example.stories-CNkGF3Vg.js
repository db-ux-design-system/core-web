import{n as e}from"./iframe-B0DhEXS_.js";import{n as t,t as n}from"./infotext-DzdDzjzW.js";import{i as r,n as i,r as a,t as o}from"./tab-list-Cf96c3O2.js";import{i as s,n as c,r as l,t as u}from"./tabs-Bnd_zLOx.js";import{n as d}from"./rolldown-runtime-DkW27tQK.js";var f,p,m,h,g,_;function v(){return(v=d((()=>{t(),r(),i(),s(),c(),f=e(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/DBTabs/Props Tabs`,component:u,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:p(),onTabSelect:p()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},label:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onTabSelect:{action:`onTabSelect`}}},h={args:{tabs:[{label:`Home`,content:`Home content`},{label:`Profile`,content:`Profile content`},{label:`Settings`,content:`Settings content`}]},render:e=>(0,f.jsxs)(`div`,{className:`fit-content-container`,children:[(0,f.jsx)(n,{icon:`none`,size:`small`,semantic:`informational`,children:`Option API — using the tabs prop with an array of tab objects:`}),(0,f.jsx)(u,{...e})]})},g={args:{children:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(o,{children:[(0,f.jsx)(a,{children:`Home`}),(0,f.jsx)(a,{children:`Profile`}),(0,f.jsx)(a,{children:`Settings`})]}),(0,f.jsx)(l,{children:`Home content`}),(0,f.jsx)(l,{children:`Profile content`}),(0,f.jsx)(l,{children:`Settings content`})]})},render:e=>(0,f.jsxs)(`div`,{className:`fit-content-container`,children:[(0,f.jsx)(n,{icon:`none`,size:`small`,semantic:`informational`,children:`Composition API — using child components:`}),(0,f.jsx)(u,{...e})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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