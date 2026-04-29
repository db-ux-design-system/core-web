import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-BpX3lQ6F.js";import{D as n,a as r,i,o as a,r as o,t as s}from"./src-CXJdFFf7.js";var c,l,u,d,f,p,m,h;e((()=>{s(),c=t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBTabs/Overflow`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},name:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`}}},d={args:{tabItemWidth:`auto`,children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r,{children:[(0,c.jsx)(a,{children:`Test 1`}),(0,c.jsx)(a,{children:`Test 2`}),(0,c.jsx)(a,{children:`Test 3`})]}),(0,c.jsx)(i,{children:`Tab Panel 1`}),(0,c.jsx)(i,{children:`Tab Panel 2`}),(0,c.jsx)(i,{children:`Tab Panel 3`})]})},render:e=>(0,c.jsxs)(`div`,{className:`fit-content-container`,style:{width:`300px`},children:[(0,c.jsx)(n,{icon:`none`,size:`small`,semantic:`informational`,children:`no overflow:`}),(0,c.jsx)(o,{...e})]})},f={args:{behavior:`arrows`,children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r,{children:[(0,c.jsx)(a,{children:`Test 1`}),(0,c.jsx)(a,{children:`Test 2`}),(0,c.jsx)(a,{children:`Test 3`}),(0,c.jsx)(a,{children:`Test 4`}),(0,c.jsx)(a,{children:`Test 5`})]}),(0,c.jsx)(i,{children:`Tab Panel 1`}),(0,c.jsx)(i,{children:`Tab Panel 2`}),(0,c.jsx)(i,{children:`Tab Panel 3`}),(0,c.jsx)(i,{children:`Tab Panel 4`}),(0,c.jsx)(i,{children:`Tab Panel 5`})]})},render:e=>(0,c.jsxs)(`div`,{className:`fit-content-container`,style:{width:`300px`},children:[(0,c.jsx)(n,{icon:`none`,size:`small`,semantic:`informational`,children:`with overflow - behavior: arrows:`}),(0,c.jsx)(o,{...e})]})},p={args:{behavior:`scrollbar`,children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r,{children:[(0,c.jsx)(a,{children:`Test 1`}),(0,c.jsx)(a,{children:`Test 2`}),(0,c.jsx)(a,{children:`Test 3`}),(0,c.jsx)(a,{children:`Test 4`}),(0,c.jsx)(a,{children:`Test 5`})]}),(0,c.jsx)(i,{children:`Tab Panel 1`}),(0,c.jsx)(i,{children:`Tab Panel 2`}),(0,c.jsx)(i,{children:`Tab Panel 3`}),(0,c.jsx)(i,{children:`Tab Panel 4`}),(0,c.jsx)(i,{children:`Tab Panel 5`})]})},render:e=>(0,c.jsxs)(`div`,{className:`fit-content-container`,style:{width:`300px`},children:[(0,c.jsx)(n,{icon:`none`,size:`small`,semantic:`informational`,children:`with overflow - behavior: scrollbar:`}),(0,c.jsx)(o,{...e})]})},m={args:{behavior:`arrows`,arrowScrollDistance:250,children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r,{children:[(0,c.jsx)(a,{children:`Berlin`}),(0,c.jsx)(a,{children:`München`}),(0,c.jsx)(a,{children:`Hamburg`}),(0,c.jsx)(a,{children:`Frankfurt`}),(0,c.jsx)(a,{children:`Köln`}),(0,c.jsx)(a,{children:`Stuttgart`}),(0,c.jsx)(a,{children:`Düsseldorf`}),(0,c.jsx)(a,{children:`Leipzig`}),(0,c.jsx)(a,{children:`Hannover`}),(0,c.jsx)(a,{children:`Nürnberg`}),(0,c.jsx)(a,{children:`Dresden`}),(0,c.jsx)(a,{children:`Bremen`})]}),(0,c.jsx)(i,{children:`Berlin`}),(0,c.jsx)(i,{children:`München`}),(0,c.jsx)(i,{children:`Hamburg`}),(0,c.jsx)(i,{children:`Frankfurt`}),(0,c.jsx)(i,{children:`Köln`}),(0,c.jsx)(i,{children:`Stuttgart`}),(0,c.jsx)(i,{children:`Düsseldorf`}),(0,c.jsx)(i,{children:`Leipzig`}),(0,c.jsx)(i,{children:`Hannover`}),(0,c.jsx)(i,{children:`Nürnberg`}),(0,c.jsx)(i,{children:`Dresden`}),(0,c.jsx)(i,{children:`Bremen`})]})},render:e=>(0,c.jsxs)(`div`,{className:`fit-content-container`,style:{width:`300px`},children:[(0,c.jsx)(n,{icon:`none`,size:`small`,semantic:`informational`,children:`arrows heavy load (12 tabs, custom distance 250px):`}),(0,c.jsx)(o,{...e})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "tabItemWidth": "auto",
    "children": <><DBTabList><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem><DBTabItem>Test 3</DBTabItem></DBTabList><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel><DBTabPanel>Tab Panel 3</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container" style={{
    width: '300px'
  }}><DBInfotext icon="none" size="small" semantic="informational">
                    no overflow:
                </DBInfotext><DBTabs {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "behavior": "arrows",
    "children": <><DBTabList><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem><DBTabItem>Test 3</DBTabItem><DBTabItem>Test 4</DBTabItem><DBTabItem>Test 5</DBTabItem></DBTabList><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel><DBTabPanel>Tab Panel 3</DBTabPanel><DBTabPanel>Tab Panel 4</DBTabPanel><DBTabPanel>Tab Panel 5</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container" style={{
    width: '300px'
  }}><DBInfotext icon="none" size="small" semantic="informational">
                    with overflow - behavior: arrows:
                </DBInfotext><DBTabs {...properties} /></div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "behavior": "scrollbar",
    "children": <><DBTabList><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem><DBTabItem>Test 3</DBTabItem><DBTabItem>Test 4</DBTabItem><DBTabItem>Test 5</DBTabItem></DBTabList><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel><DBTabPanel>Tab Panel 3</DBTabPanel><DBTabPanel>Tab Panel 4</DBTabPanel><DBTabPanel>Tab Panel 5</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container" style={{
    width: '300px'
  }}><DBInfotext icon="none" size="small" semantic="informational">
                    with overflow - behavior: scrollbar:
                </DBInfotext><DBTabs {...properties} /></div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "behavior": "arrows",
    "arrowScrollDistance": 250,
    "children": <><DBTabList><DBTabItem>Berlin</DBTabItem><DBTabItem>München</DBTabItem><DBTabItem>Hamburg</DBTabItem><DBTabItem>Frankfurt</DBTabItem><DBTabItem>Köln</DBTabItem><DBTabItem>Stuttgart</DBTabItem><DBTabItem>Düsseldorf</DBTabItem><DBTabItem>Leipzig</DBTabItem><DBTabItem>Hannover</DBTabItem><DBTabItem>Nürnberg</DBTabItem><DBTabItem>Dresden</DBTabItem><DBTabItem>Bremen</DBTabItem></DBTabList><DBTabPanel>Berlin</DBTabPanel><DBTabPanel>München</DBTabPanel><DBTabPanel>Hamburg</DBTabPanel><DBTabPanel>Frankfurt</DBTabPanel><DBTabPanel>Köln</DBTabPanel><DBTabPanel>Stuttgart</DBTabPanel><DBTabPanel>Düsseldorf</DBTabPanel><DBTabPanel>Leipzig</DBTabPanel><DBTabPanel>Hannover</DBTabPanel><DBTabPanel>Nürnberg</DBTabPanel><DBTabPanel>Dresden</DBTabPanel><DBTabPanel>Bremen</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container" style={{
    width: '300px'
  }}><DBInfotext icon="none" size="small" semantic="informational">
                    arrows heavy load (12 tabs, custom distance 250px):
                </DBInfotext><DBTabs {...properties} /></div>
}`,...m.parameters?.docs?.source}}},h=[`nooverflow`,`withoverflowbehaviorarrows`,`withoverflowbehaviorscrollbar`,`arrowsheavyload12tabscustomdistance`]}))();export{h as __namedExportsOrder,m as arrowsheavyload12tabscustomdistance,u as default,d as nooverflow,f as withoverflowbehaviorarrows,p as withoverflowbehaviorscrollbar};