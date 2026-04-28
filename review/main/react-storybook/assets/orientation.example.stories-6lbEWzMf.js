import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-BpX3lQ6F.js";import{D as n,a as r,i,o as a,r as o,t as s}from"./src-FlJ3DuBk.js";var c,l,u,d,f,p;e((()=>{s(),c=t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBTabs/Orientation`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},width:{control:`select`,options:[`full`,`auto`]},alignment:{control:`select`,options:[`start`,`center`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},name:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`}}},d={args:{orientation:`horizontal`,children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r,{children:[(0,c.jsx)(a,{children:`Test 1`}),(0,c.jsx)(a,{children:`Test 2`}),(0,c.jsx)(a,{children:`Test 3`})]}),(0,c.jsx)(i,{children:`Tab Panel 1`}),(0,c.jsx)(i,{children:`Tab Panel 2`}),(0,c.jsx)(i,{children:`Tab Panel 3`})]})},render:e=>(0,c.jsxs)(`div`,{className:`fit-content-container`,children:[(0,c.jsx)(n,{icon:`none`,size:`small`,semantic:`informational`,children:`horizontal:`}),(0,c.jsx)(o,{...e})]})},f={args:{orientation:`vertical`,children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r,{children:[(0,c.jsx)(a,{children:`Test 1`}),(0,c.jsx)(a,{children:`Test 2`}),(0,c.jsx)(a,{children:`Test 3`})]}),(0,c.jsx)(i,{children:`Tab Panel 1`}),(0,c.jsx)(i,{children:`Tab Panel 2`}),(0,c.jsx)(i,{children:`Tab Panel 3`})]})},render:e=>(0,c.jsxs)(`div`,{className:`fit-content-container`,children:[(0,c.jsx)(n,{icon:`none`,size:`small`,semantic:`informational`,children:`vertical:`}),(0,c.jsx)(o,{...e})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "orientation": "horizontal",
    "children": <><DBTabList><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem><DBTabItem>Test 3</DBTabItem></DBTabList><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel><DBTabPanel>Tab Panel 3</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container"><DBInfotext icon="none" size="small" semantic="informational">
                    horizontal:
                </DBInfotext><DBTabs {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "orientation": "vertical",
    "children": <><DBTabList><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem><DBTabItem>Test 3</DBTabItem></DBTabList><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel><DBTabPanel>Tab Panel 3</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container"><DBInfotext icon="none" size="small" semantic="informational">
                    vertical:
                </DBInfotext><DBTabs {...properties} /></div>
}`,...f.parameters?.docs?.source}}},p=[`horizontal`,`vertical`]}))();export{p as __namedExportsOrder,u as default,d as horizontal,f as vertical};