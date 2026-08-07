import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./infotext-CbgRQI_c.js";import{i,n as a,r as o,t as s}from"./tab-list-D4jRX7oV.js";import{i as c,n as l,r as u,t as d}from"./tabs-CO_8Ub8Z.js";var f,p,m,h,g,_,v;function y(){return(y=e((()=>{n(),i(),a(),c(),l(),f=t(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/DBTabs/Density`,component:d,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:p(),onTabSelect:p()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},label:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onTabSelect:{action:`onTabSelect`}}},h={args:{"data-density":`functional`,children:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(s,{children:[(0,f.jsx)(o,{children:`Test 1`}),(0,f.jsx)(o,{children:`Test 2`}),(0,f.jsx)(o,{children:`Test 3`})]}),(0,f.jsx)(u,{children:`Tab Panel 1`}),(0,f.jsx)(u,{children:`Tab Panel 2`}),(0,f.jsx)(u,{children:`Tab Panel 3`})]})},render:e=>(0,f.jsxs)(`div`,{className:`fit-content-container`,children:[(0,f.jsx)(r,{icon:`none`,size:`small`,semantic:`informational`,children:`Functional:`}),(0,f.jsx)(d,{...e})]})},g={args:{"data-density":`regular`,children:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(s,{children:[(0,f.jsx)(o,{children:`Test 1`}),(0,f.jsx)(o,{children:`Test 2`}),(0,f.jsx)(o,{children:`Test 3`})]}),(0,f.jsx)(u,{children:`Tab Panel 1`}),(0,f.jsx)(u,{children:`Tab Panel 2`}),(0,f.jsx)(u,{children:`Tab Panel 3`})]})},render:e=>(0,f.jsxs)(`div`,{className:`fit-content-container`,children:[(0,f.jsx)(r,{icon:`none`,size:`small`,semantic:`informational`,children:`(Default) Regular:`}),(0,f.jsx)(d,{...e})]})},_={args:{"data-density":`expressive`,children:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(s,{children:[(0,f.jsx)(o,{children:`Test 1`}),(0,f.jsx)(o,{children:`Test 2`}),(0,f.jsx)(o,{children:`Test 3`})]}),(0,f.jsx)(u,{children:`Tab Panel 1`}),(0,f.jsx)(u,{children:`Tab Panel 2`}),(0,f.jsx)(u,{children:`Tab Panel 3`})]})},render:e=>(0,f.jsxs)(`div`,{className:`fit-content-container`,children:[(0,f.jsx)(r,{icon:`none`,size:`small`,semantic:`informational`,children:`Expressive:`}),(0,f.jsx)(d,{...e})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "children": <><DBTabList><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem><DBTabItem>Test 3</DBTabItem></DBTabList><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel><DBTabPanel>Tab Panel 3</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container"><DBInfotext icon="none" size="small" semantic="informational">
                    Functional:
                </DBInfotext><DBTabs {...properties} /></div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "children": <><DBTabList><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem><DBTabItem>Test 3</DBTabItem></DBTabList><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel><DBTabPanel>Tab Panel 3</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container"><DBInfotext icon="none" size="small" semantic="informational">
                    (Default) Regular:
                </DBInfotext><DBTabs {...properties} /></div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "children": <><DBTabList><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem><DBTabItem>Test 3</DBTabItem></DBTabList><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel><DBTabPanel>Tab Panel 3</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container"><DBInfotext icon="none" size="small" semantic="informational">
                    Expressive:
                </DBInfotext><DBTabs {...properties} /></div>
}`,..._.parameters?.docs?.source}}},v=[`Functional`,`DefaultRegular`,`Expressive`]})))()}y();export{g as DefaultRegular,_ as Expressive,h as Functional,v as __namedExportsOrder,m as default};