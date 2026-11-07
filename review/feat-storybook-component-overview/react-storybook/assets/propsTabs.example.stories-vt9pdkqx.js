import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./infotext-BrqREugs.js";import{i as a,n as o,r as s,t as c}from"./tab-list-C3027wOx.js";import{i as l,n as u,r as d,t as f}from"./tabs-BoJeCsLg.js";var p=t({CompositionAPIchildren:()=>v,OptionAPIpropstabs:()=>_,__namedExportsOrder:()=>y,default:()=>g}),m,h,g,_,v,y;function b(){return(b=e((()=>{r(),a(),o(),l(),u(),m=n(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/DBTabs/Props Tabs`,component:f,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:h(),onValueChange:h()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},label:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onValueChange:{action:`onValueChange`}}},_={args:{tabs:[{label:`Home`,content:`Home content`},{label:`Profile`,content:`Profile content`},{label:`Settings`,content:`Settings content`}]},render:e=>(0,m.jsxs)(`div`,{className:`fit-content-container`,children:[(0,m.jsx)(i,{icon:`none`,size:`small`,semantic:`informational`,children:`Option API — using the tabs prop with an array of tab objects:`}),(0,m.jsx)(f,{...e})]})},v={args:{children:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(c,{children:[(0,m.jsx)(s,{children:`Home`}),(0,m.jsx)(s,{children:`Profile`}),(0,m.jsx)(s,{children:`Settings`})]}),(0,m.jsx)(d,{children:`Home content`}),(0,m.jsx)(d,{children:`Profile content`}),(0,m.jsx)(d,{children:`Settings content`})]})},render:e=>(0,m.jsxs)(`div`,{className:`fit-content-container`,children:[(0,m.jsx)(i,{icon:`none`,size:`small`,semantic:`informational`,children:`Composition API — using child components:`}),(0,m.jsx)(f,{...e})]})},y=[`OptionAPIpropstabs`,`CompositionAPIchildren`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <><DBTabList><DBTabItem>Home</DBTabItem><DBTabItem>Profile</DBTabItem><DBTabItem>Settings</DBTabItem></DBTabList><DBTabPanel>Home content</DBTabPanel><DBTabPanel>Profile content</DBTabPanel><DBTabPanel>Settings content</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container"><DBInfotext icon="none" size="small" semantic="informational">
                    Composition API — using child components:
                </DBInfotext><DBTabs {...properties} /></div>
}`,...v.parameters?.docs?.source}}}})))()}export{p as i,_ as n,b as r,v as t};