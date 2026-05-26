import{i as e}from"./preload-helper-DAz2H_jd.js";import{t}from"./jsx-runtime-BXhj9UbI.js";import{Q as n,c as r,i,o as a,t as o,u as s}from"./src-DrczcBtm.js";var c,l,u,d,f,p,m;e((()=>{o(),c=t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBTabs/Density`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},width:{control:`select`,options:[`full`,`auto`]},alignment:{control:`select`,options:[`start`,`center`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},name:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`}}},d={args:{"data-density":`functional`,children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r,{children:[(0,c.jsx)(s,{children:`Test 1`}),(0,c.jsx)(s,{children:`Test 2`}),(0,c.jsx)(s,{children:`Test 3`})]}),(0,c.jsx)(a,{children:`Tab Panel 1`}),(0,c.jsx)(a,{children:`Tab Panel 2`}),(0,c.jsx)(a,{children:`Tab Panel 3`})]})},render:e=>(0,c.jsxs)(`div`,{className:`fit-content-container`,children:[(0,c.jsx)(n,{icon:`none`,size:`small`,semantic:`informational`,children:`Functional:`}),(0,c.jsx)(i,{...e})]})},f={args:{"data-density":`regular`,children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r,{children:[(0,c.jsx)(s,{children:`Test 1`}),(0,c.jsx)(s,{children:`Test 2`}),(0,c.jsx)(s,{children:`Test 3`})]}),(0,c.jsx)(a,{children:`Tab Panel 1`}),(0,c.jsx)(a,{children:`Tab Panel 2`}),(0,c.jsx)(a,{children:`Tab Panel 3`})]})},render:e=>(0,c.jsxs)(`div`,{className:`fit-content-container`,children:[(0,c.jsx)(n,{icon:`none`,size:`small`,semantic:`informational`,children:`(Default) Regular:`}),(0,c.jsx)(i,{...e})]})},p={args:{"data-density":`expressive`,children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r,{children:[(0,c.jsx)(s,{children:`Test 1`}),(0,c.jsx)(s,{children:`Test 2`}),(0,c.jsx)(s,{children:`Test 3`})]}),(0,c.jsx)(a,{children:`Tab Panel 1`}),(0,c.jsx)(a,{children:`Tab Panel 2`}),(0,c.jsx)(a,{children:`Tab Panel 3`})]})},render:e=>(0,c.jsxs)(`div`,{className:`fit-content-container`,children:[(0,c.jsx)(n,{icon:`none`,size:`small`,semantic:`informational`,children:`Expressive:`}),(0,c.jsx)(i,{...e})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "children": <><DBTabList><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem><DBTabItem>Test 3</DBTabItem></DBTabList><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel><DBTabPanel>Tab Panel 3</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container"><DBInfotext icon="none" size="small" semantic="informational">
                    Functional:
                </DBInfotext><DBTabs {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "children": <><DBTabList><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem><DBTabItem>Test 3</DBTabItem></DBTabList><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel><DBTabPanel>Tab Panel 3</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container"><DBInfotext icon="none" size="small" semantic="informational">
                    (Default) Regular:
                </DBInfotext><DBTabs {...properties} /></div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "children": <><DBTabList><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem><DBTabItem>Test 3</DBTabItem></DBTabList><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel><DBTabPanel>Tab Panel 3</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container"><DBInfotext icon="none" size="small" semantic="informational">
                    Expressive:
                </DBInfotext><DBTabs {...properties} /></div>
}`,...p.parameters?.docs?.source}}},m=[`Functional`,`DefaultRegular`,`Expressive`]}))();export{f as DefaultRegular,p as Expressive,d as Functional,m as __namedExportsOrder,u as default};