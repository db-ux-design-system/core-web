import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./card-DtwUkJn9.js";import{n as a,t as o}from"./loading-indicator-DXi5IQPw.js";var s=t({DefaultFalseBar:()=>p,DefaultFalseCircularhorizontal:()=>d,DefaultFalseCircularvertical:()=>f,TrueCircularvertical:()=>m,__namedExportsOrder:()=>h,default:()=>u}),c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{r(),a(),c=n(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBLoadingIndicator/Overlay`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`bar`,`circular`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},size:{control:`select`,options:[`small`,`medium`,`large`]},state:{control:`select`,options:[`inactive`,`active`,`successful`,`critical`]},indeterminate:{control:`boolean`},value:{control:`number`},max:{control:`number`},showLabel:{control:`boolean`},showProgressText:{control:`boolean`},overlay:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]}}},d={args:{variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`,overlay:!1,children:`Circular horizontal`},render:e=>(0,c.jsx)(o,{...e})},f={args:{variant:`circular`,orientation:`vertical`,progressText:`42%`,overlay:!1,children:`Circular vertical`},render:e=>(0,c.jsx)(o,{...e})},p={args:{variant:`bar`,progressText:`42 of 100`,overlay:!1,children:`Bar`},render:e=>(0,c.jsx)(o,{...e})},m={args:{variant:`circular`,orientation:`vertical`,progressText:`42%`,overlay:!0,children:`Circular vertical`},render:e=>(0,c.jsxs)(i,{children:[(0,c.jsx)(o,{...e}),(0,c.jsx)(`p`,{children:`Content 1`}),(0,c.jsx)(`p`,{children:`Content 2`}),(0,c.jsx)(`p`,{children:`Content 3`})]})},h=[`DefaultFalseCircularhorizontal`,`DefaultFalseCircularvertical`,`DefaultFalseBar`,`TrueCircularvertical`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100",
    "overlay": false,
    "children": "Circular horizontal"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "circular",
    "orientation": "vertical",
    "progressText": "42%",
    "overlay": false,
    "children": "Circular vertical"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "bar",
    "progressText": "42 of 100",
    "overlay": false,
    "children": "Bar"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "circular",
    "orientation": "vertical",
    "progressText": "42%",
    "overlay": true,
    "children": "Circular vertical"
  },
  render: (properties: any) => <DBCard><DBLoadingIndicator {...properties} /><p>Content 1</p><p>Content 2</p><p>Content 3</p></DBCard>
}`,...m.parameters?.docs?.source}}}})))()}export{g as a,m as i,d as n,s as o,f as r,p as t};