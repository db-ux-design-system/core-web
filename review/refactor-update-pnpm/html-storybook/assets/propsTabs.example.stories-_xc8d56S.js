import{i as e}from"./preload-helper-CmHOqGA3.js";import{t}from"./iframe-B_F6Clr-.js";import{S as n,b as r,gt as i,i as a,t as o,w as s}from"./src-B8XgrC6b.js";var c,l,u,d,f,p;e((()=>{o(),c=t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBTabs/Props Tabs`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:l(),onTabSelect:l()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},label:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onTabSelect:{action:`onTabSelect`}}},d={args:{tabs:[{label:`Home`,content:`Home content`},{label:`Profile`,content:`Profile content`},{label:`Settings`,content:`Settings content`}]},render:e=>(0,c.jsxs)(`div`,{className:`fit-content-container`,children:[(0,c.jsx)(i,{icon:`none`,size:`small`,semantic:`informational`,children:`Option API — using the tabs prop with an array of tab objects:`}),(0,c.jsx)(a,{...e})]})},f={args:{children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n,{children:[(0,c.jsx)(s,{children:`Home`}),(0,c.jsx)(s,{children:`Profile`}),(0,c.jsx)(s,{children:`Settings`})]}),(0,c.jsx)(r,{children:`Home content`}),(0,c.jsx)(r,{children:`Profile content`}),(0,c.jsx)(r,{children:`Settings content`})]})},render:e=>(0,c.jsxs)(`div`,{className:`fit-content-container`,children:[(0,c.jsx)(i,{icon:`none`,size:`small`,semantic:`informational`,children:`Composition API — using child components:`}),(0,c.jsx)(a,{...e})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <><DBTabList><DBTabItem>Home</DBTabItem><DBTabItem>Profile</DBTabItem><DBTabItem>Settings</DBTabItem></DBTabList><DBTabPanel>Home content</DBTabPanel><DBTabPanel>Profile content</DBTabPanel><DBTabPanel>Settings content</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container"><DBInfotext icon="none" size="small" semantic="informational">
                    Composition API — using child components:
                </DBInfotext><DBTabs {...properties} /></div>
}`,...f.parameters?.docs?.source}}},p=[`OptionAPIpropstabs`,`CompositionAPIchildren`]}))();export{f as CompositionAPIchildren,d as OptionAPIpropstabs,p as __namedExportsOrder,u as default};