import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{i as r,n as i,r as a,t as o}from"./tab-list-Dogey9Yg.js";import{i as s,n as c,r as l,t as u}from"./tabs-xah4fmDJ.js";var d=t({Interaction:()=>h,TabsInteraction1:()=>g,TabsInteraction2:()=>_,TabsInteraction3:()=>v,TabsInteraction4:()=>y,__namedExportsOrder:()=>b,default:()=>m}),f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{r(),i(),s(),c(),f=n(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/DBTabs/Interaction`,component:u,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:p(),onValueChange:p()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},label:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onValueChange:{action:`onValueChange`}}},h={args:{children:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(o,{children:[(0,f.jsx)(a,{children:`Test 1`}),(0,f.jsx)(a,{children:`Test 2`})]}),(0,f.jsx)(l,{children:`Panel 1`}),(0,f.jsx)(l,{children:`Panel 2`})]})},render:e=>(0,f.jsx)(`div`,{className:`fit-content-container`,"data-testid":`click-tabs`,children:(0,f.jsx)(u,{...e})})},g={args:{"data-testid":`alignment-tabs`,tabItemAlignment:`center`,children:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o,{children:(0,f.jsx)(a,{children:`Test 1`})}),(0,f.jsx)(l,{children:`Content 1`})]})},render:e=>(0,f.jsx)(`div`,{className:`fit-content-container`,children:(0,f.jsx)(u,{...e})})},_={args:{"data-testid":`auto-width-tabs`,tabItemWidth:`auto`,children:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(o,{children:[(0,f.jsx)(a,{icon:`x_placeholder`,children:`Tab item with a very long label that must not be cut off`}),(0,f.jsx)(a,{children:`Short`})]}),(0,f.jsx)(l,{children:`Panel 1`}),(0,f.jsx)(l,{children:`Panel 2`})]})},render:e=>(0,f.jsx)(`div`,{className:`fit-content-container`,style:{width:`100%`},children:(0,f.jsx)(u,{...e})})},v={args:{"data-testid":`vertical-width-tabs`,orientation:`vertical`,tabItemWidth:`auto`,children:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(o,{children:[(0,f.jsx)(a,{children:`Very long vertical tab label that definitely gets truncated`}),(0,f.jsx)(a,{children:`Short`})]}),(0,f.jsx)(l,{children:`Panel 1`}),(0,f.jsx)(l,{children:`Panel 2`})]})},render:e=>(0,f.jsx)(`div`,{className:`fit-content-container`,style:{width:`100%`},children:(0,f.jsx)(u,{...e})})},y={args:{"data-testid":`full-width-tabs`,tabItemWidth:`full`,children:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(o,{children:[(0,f.jsx)(a,{children:`Short`}),(0,f.jsx)(a,{children:`A considerably longer full-width tab item label`})]}),(0,f.jsx)(l,{children:`Panel 1`}),(0,f.jsx)(l,{children:`Panel 2`})]})},render:e=>(0,f.jsx)(`div`,{className:`fit-content-container`,style:{width:`100%`},children:(0,f.jsx)(u,{...e})})},b=[`Interaction`,`TabsInteraction1`,`TabsInteraction2`,`TabsInteraction3`,`TabsInteraction4`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <><DBTabList><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem></DBTabList><DBTabPanel>Panel 1</DBTabPanel><DBTabPanel>Panel 2</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container" data-testid="click-tabs"><DBTabs {...properties} /></div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "alignment-tabs",
    "tabItemAlignment": "center",
    "children": <><DBTabList><DBTabItem>Test 1</DBTabItem></DBTabList><DBTabPanel>Content 1</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container"><DBTabs {...properties} /></div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}}})))()}export{y as a,v as i,g as n,x as o,_ as r,d as s,h as t};