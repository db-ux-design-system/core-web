import{n as e}from"./iframe-i8yDqpr9.js";import{i as t,n,r,t as i}from"./tab-list-BeXbnkvO.js";import{i as a,n as o,r as s,t as c}from"./tabs-T99wfaxS.js";import{n as l}from"./rolldown-runtime-DkW27tQK.js";var u,d,f,p,m,h,g,_,v;function y(){return(y=l((()=>{t(),n(),a(),o(),u=e(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBTabs/Interaction`,component:c,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:d(),onTabSelect:d()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},label:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onTabSelect:{action:`onTabSelect`}}},p={args:{children:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(i,{children:[(0,u.jsx)(r,{children:`Test 1`}),(0,u.jsx)(r,{children:`Test 2`})]}),(0,u.jsx)(s,{children:`Panel 1`}),(0,u.jsx)(s,{children:`Panel 2`})]})},render:e=>(0,u.jsx)(`div`,{className:`fit-content-container`,"data-testid":`click-tabs`,children:(0,u.jsx)(c,{...e})})},m={args:{"data-testid":`alignment-tabs`,tabItemAlignment:`center`,children:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{children:(0,u.jsx)(r,{children:`Test 1`})}),(0,u.jsx)(s,{children:`Content 1`})]})},render:e=>(0,u.jsx)(`div`,{className:`fit-content-container`,children:(0,u.jsx)(c,{...e})})},h={args:{"data-testid":`auto-width-tabs`,tabItemWidth:`auto`,children:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(i,{children:[(0,u.jsx)(r,{icon:`x_placeholder`,children:`Tab item with a very long label that must not be cut off`}),(0,u.jsx)(r,{children:`Short`})]}),(0,u.jsx)(s,{children:`Panel 1`}),(0,u.jsx)(s,{children:`Panel 2`})]})},render:e=>(0,u.jsx)(`div`,{className:`fit-content-container`,style:{width:`100%`},children:(0,u.jsx)(c,{...e})})},g={args:{"data-testid":`vertical-width-tabs`,orientation:`vertical`,tabItemWidth:`auto`,children:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(i,{children:[(0,u.jsx)(r,{children:`Very long vertical tab label that definitely gets truncated`}),(0,u.jsx)(r,{children:`Short`})]}),(0,u.jsx)(s,{children:`Panel 1`}),(0,u.jsx)(s,{children:`Panel 2`})]})},render:e=>(0,u.jsx)(`div`,{className:`fit-content-container`,style:{width:`100%`},children:(0,u.jsx)(c,{...e})})},_={args:{"data-testid":`full-width-tabs`,tabItemWidth:`full`,children:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(i,{children:[(0,u.jsx)(r,{children:`Short`}),(0,u.jsx)(r,{children:`A considerably longer full-width tab item label`})]}),(0,u.jsx)(s,{children:`Panel 1`}),(0,u.jsx)(s,{children:`Panel 2`})]})},render:e=>(0,u.jsx)(`div`,{className:`fit-content-container`,style:{width:`100%`},children:(0,u.jsx)(c,{...e})})},v=[`Interaction`,`TabsInteraction1`,`TabsInteraction2`,`TabsInteraction3`,`TabsInteraction4`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <><DBTabList><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem></DBTabList><DBTabPanel>Panel 1</DBTabPanel><DBTabPanel>Panel 2</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container" data-testid="click-tabs"><DBTabs {...properties} /></div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "alignment-tabs",
    "tabItemAlignment": "center",
    "children": <><DBTabList><DBTabItem>Test 1</DBTabItem></DBTabList><DBTabPanel>Content 1</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container"><DBTabs {...properties} /></div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "auto-width-tabs",
    "tabItemWidth": "auto",
    "children": <><DBTabList><DBTabItem icon="x_placeholder">
                            Tab item with a very long label that must not be cut
                            off
                        </DBTabItem><DBTabItem>Short</DBTabItem></DBTabList><DBTabPanel>Panel 1</DBTabPanel><DBTabPanel>Panel 2</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container" style={{
    width: '100%'
  }}><DBTabs {...properties} /></div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "vertical-width-tabs",
    "orientation": "vertical",
    "tabItemWidth": "auto",
    "children": <><DBTabList><DBTabItem>
                            Very long vertical tab label that definitely gets
                            truncated
                        </DBTabItem><DBTabItem>Short</DBTabItem></DBTabList><DBTabPanel>Panel 1</DBTabPanel><DBTabPanel>Panel 2</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container" style={{
    width: '100%'
  }}><DBTabs {...properties} /></div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "full-width-tabs",
    "tabItemWidth": "full",
    "children": <><DBTabList><DBTabItem>Short</DBTabItem><DBTabItem>
                            A considerably longer full-width tab item label
                        </DBTabItem></DBTabList><DBTabPanel>Panel 1</DBTabPanel><DBTabPanel>Panel 2</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container" style={{
    width: '100%'
  }}><DBTabs {...properties} /></div>
}`,..._.parameters?.docs?.source}}}})))()}y();export{p as Interaction,m as TabsInteraction1,h as TabsInteraction2,g as TabsInteraction3,_ as TabsInteraction4,v as __namedExportsOrder,f as default};