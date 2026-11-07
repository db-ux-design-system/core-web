import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./infotext-BrqREugs.js";import{i as a,n as o,r as s,t as c}from"./tab-list-HTnT37RY.js";import{i as l,n as u,r as d,t as f}from"./tabs-BwbnSvjV.js";var p=t({DefaultRegular:()=>v,Expressive:()=>y,Functional:()=>_,__namedExportsOrder:()=>b,default:()=>g}),m,h,g,_,v,y,b;function x(){return(x=e((()=>{r(),a(),o(),l(),u(),m=n(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/DBTabs/Density`,component:f,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:h(),onValueChange:h()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},label:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onValueChange:{action:`onValueChange`}}},_={args:{"data-density":`functional`,children:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(c,{children:[(0,m.jsx)(s,{children:`Test 1`}),(0,m.jsx)(s,{children:`Test 2`}),(0,m.jsx)(s,{children:`Test 3`})]}),(0,m.jsx)(d,{children:`Tab Panel 1`}),(0,m.jsx)(d,{children:`Tab Panel 2`}),(0,m.jsx)(d,{children:`Tab Panel 3`})]})},render:e=>(0,m.jsxs)(`div`,{className:`fit-content-container`,children:[(0,m.jsx)(i,{icon:`none`,size:`small`,semantic:`informational`,children:`Functional:`}),(0,m.jsx)(f,{...e})]})},v={args:{"data-density":`regular`,children:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(c,{children:[(0,m.jsx)(s,{children:`Test 1`}),(0,m.jsx)(s,{children:`Test 2`}),(0,m.jsx)(s,{children:`Test 3`})]}),(0,m.jsx)(d,{children:`Tab Panel 1`}),(0,m.jsx)(d,{children:`Tab Panel 2`}),(0,m.jsx)(d,{children:`Tab Panel 3`})]})},render:e=>(0,m.jsxs)(`div`,{className:`fit-content-container`,children:[(0,m.jsx)(i,{icon:`none`,size:`small`,semantic:`informational`,children:`(Default) Regular:`}),(0,m.jsx)(f,{...e})]})},y={args:{"data-density":`expressive`,children:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(c,{children:[(0,m.jsx)(s,{children:`Test 1`}),(0,m.jsx)(s,{children:`Test 2`}),(0,m.jsx)(s,{children:`Test 3`})]}),(0,m.jsx)(d,{children:`Tab Panel 1`}),(0,m.jsx)(d,{children:`Tab Panel 2`}),(0,m.jsx)(d,{children:`Tab Panel 3`})]})},render:e=>(0,m.jsxs)(`div`,{className:`fit-content-container`,children:[(0,m.jsx)(i,{icon:`none`,size:`small`,semantic:`informational`,children:`Expressive:`}),(0,m.jsx)(f,{...e})]})},b=[`Functional`,`DefaultRegular`,`Expressive`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "children": <><DBTabList><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem><DBTabItem>Test 3</DBTabItem></DBTabList><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel><DBTabPanel>Tab Panel 3</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container"><DBInfotext icon="none" size="small" semantic="informational">
                    Functional:
                </DBInfotext><DBTabs {...properties} /></div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "children": <><DBTabList><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem><DBTabItem>Test 3</DBTabItem></DBTabList><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel><DBTabPanel>Tab Panel 3</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container"><DBInfotext icon="none" size="small" semantic="informational">
                    (Default) Regular:
                </DBInfotext><DBTabs {...properties} /></div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "children": <><DBTabList><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem><DBTabItem>Test 3</DBTabItem></DBTabList><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel><DBTabPanel>Tab Panel 3</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container"><DBInfotext icon="none" size="small" semantic="informational">
                    Expressive:
                </DBInfotext><DBTabs {...properties} /></div>
}`,...y.parameters?.docs?.source}}}})))()}export{x as a,p as i,y as n,_ as r,v as t};