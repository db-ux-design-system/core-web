import{i as e}from"./preload-helper-WHSqt9X7.js";import{t}from"./iframe-B2xIszA6.js";import{S as n,b as r,ft as i,i as a,t as o,w as s}from"./src-odd8ycl5.js";var c,l,u,d,f,p,m;e((()=>{o(),c=t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBTabs/Width`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:l(),onTabSelect:l()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},width:{control:`select`,options:[`full`,`auto`]},alignment:{control:`select`,options:[`start`,`center`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},name:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onTabSelect:{action:`onTabSelect`}}},d={args:{width:`auto`,children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n,{children:[(0,c.jsx)(s,{children:`Test 1`}),(0,c.jsx)(s,{children:`Test 2`}),(0,c.jsx)(s,{children:`Test 3`})]}),(0,c.jsx)(r,{children:`Tab Panel 1`}),(0,c.jsx)(r,{children:`Tab Panel 2`}),(0,c.jsx)(r,{children:`Tab Panel 3`})]})},render:e=>(0,c.jsxs)(`div`,{className:`fit-content-container`,style:{width:`100%`},children:[(0,c.jsx)(i,{icon:`none`,size:`small`,semantic:`informational`,children:`auto:`}),(0,c.jsx)(a,{...e})]})},f={args:{width:`full`,children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n,{children:[(0,c.jsx)(s,{children:`Test 1`}),(0,c.jsx)(s,{children:`Test 2`}),(0,c.jsx)(s,{children:`Test 3`})]}),(0,c.jsx)(r,{children:`Tab Panel 1`}),(0,c.jsx)(r,{children:`Tab Panel 2`}),(0,c.jsx)(r,{children:`Tab Panel 3`})]})},render:e=>(0,c.jsxs)(`div`,{className:`fit-content-container`,style:{width:`100%`},children:[(0,c.jsx)(i,{icon:`none`,size:`small`,semantic:`informational`,children:`full - alignment: start:`}),(0,c.jsx)(a,{...e})]})},p={args:{width:`full`,alignment:`center`,children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n,{children:[(0,c.jsx)(s,{children:`Test 1`}),(0,c.jsx)(s,{children:`Test 2`}),(0,c.jsx)(s,{children:`Test 3`})]}),(0,c.jsx)(r,{children:`Tab Panel 1`}),(0,c.jsx)(r,{children:`Tab Panel 2`}),(0,c.jsx)(r,{children:`Tab Panel 3`})]})},render:e=>(0,c.jsxs)(`div`,{className:`fit-content-container`,style:{width:`100%`},children:[(0,c.jsx)(i,{icon:`none`,size:`small`,semantic:`informational`,children:`full - alignment: center:`}),(0,c.jsx)(a,{...e})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "auto",
    "children": <><DBTabList><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem><DBTabItem>Test 3</DBTabItem></DBTabList><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel><DBTabPanel>Tab Panel 3</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container" style={{
    width: '100%'
  }}><DBInfotext icon="none" size="small" semantic="informational">
                    auto:
                </DBInfotext><DBTabs {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "children": <><DBTabList><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem><DBTabItem>Test 3</DBTabItem></DBTabList><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel><DBTabPanel>Tab Panel 3</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container" style={{
    width: '100%'
  }}><DBInfotext icon="none" size="small" semantic="informational">
                    full - alignment: start:
                </DBInfotext><DBTabs {...properties} /></div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "alignment": "center",
    "children": <><DBTabList><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem><DBTabItem>Test 3</DBTabItem></DBTabList><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel><DBTabPanel>Tab Panel 3</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container" style={{
    width: '100%'
  }}><DBInfotext icon="none" size="small" semantic="informational">
                    full - alignment: center:
                </DBInfotext><DBTabs {...properties} /></div>
}`,...p.parameters?.docs?.source}}},m=[`auto`,`fullalignmentstart`,`fullalignmentcenter`]}))();export{m as __namedExportsOrder,d as auto,u as default,p as fullalignmentcenter,f as fullalignmentstart};