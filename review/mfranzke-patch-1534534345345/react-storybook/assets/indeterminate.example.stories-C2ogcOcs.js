import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./loading-indicator-DOELcZYH.js";var a=t({DefaultTrueBar:()=>d,DefaultTrueCircularhorizontal:()=>l,DefaultTrueCircularvertical:()=>u,FalseBar:()=>m,FalseCircularhorizontal:()=>f,FalseCircularvertical:()=>p,__namedExportsOrder:()=>h,default:()=>c}),o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{r(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBLoadingIndicator/Indeterminate`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onTimeout:s()},argTypes:{variant:{control:`select`,options:[`bar`,`circular`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},size:{control:`select`,options:[`small`,`medium`,`large`]},state:{control:`select`,options:[`inactive`,`active`,`successful`,`critical`]},indeterminate:{control:`boolean`},value:{control:`number`},max:{control:`number`},showLabel:{control:`boolean`},showProgressText:{control:`boolean`},overlay:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},onTimeout:{action:`onTimeout`}}},l={args:{variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`,indeterminate:!0,children:`Circular horizontal`},render:e=>(0,o.jsx)(i,{...e})},u={args:{variant:`circular`,orientation:`vertical`,progressText:`42%`,indeterminate:!0,children:`Circular vertical`},render:e=>(0,o.jsx)(i,{...e})},d={args:{variant:`bar`,progressText:`42 of 100`,indeterminate:!0,children:`Bar`},render:e=>(0,o.jsx)(i,{...e})},f={args:{state:`active`,variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`,indeterminate:!1,value:42,max:100,children:`Circular horizontal`},render:e=>(0,o.jsx)(i,{...e})},p={args:{state:`active`,variant:`circular`,orientation:`vertical`,progressText:`42%`,indeterminate:!1,value:42,max:100,children:`Circular vertical`},render:e=>(0,o.jsx)(i,{...e})},m={args:{state:`active`,variant:`bar`,progressText:`42 of 100`,indeterminate:!1,value:42,max:100,children:`Bar`},render:e=>(0,o.jsx)(i,{...e})},h=[`DefaultTrueCircularhorizontal`,`DefaultTrueCircularvertical`,`DefaultTrueBar`,`FalseCircularhorizontal`,`FalseCircularvertical`,`FalseBar`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100",
    "indeterminate": true,
    "children": "Circular horizontal"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "circular",
    "orientation": "vertical",
    "progressText": "42%",
    "indeterminate": true,
    "children": "Circular vertical"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "bar",
    "progressText": "42 of 100",
    "indeterminate": true,
    "children": "Bar"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "active",
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100",
    "indeterminate": false,
    "value": 42,
    "max": 100,
    "children": "Circular horizontal"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "active",
    "variant": "circular",
    "orientation": "vertical",
    "progressText": "42%",
    "indeterminate": false,
    "value": 42,
    "max": 100,
    "children": "Circular vertical"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "active",
    "variant": "bar",
    "progressText": "42 of 100",
    "indeterminate": false,
    "value": 42,
    "max": 100,
    "children": "Bar"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...m.parameters?.docs?.source}}}})))()}export{f as a,g as c,m as i,l as n,p as o,u as r,a as s,d as t};