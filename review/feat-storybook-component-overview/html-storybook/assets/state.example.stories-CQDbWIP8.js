import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./loading-indicator-DOELcZYH.js";var a=t({ActiveBar:()=>m,ActiveCircularhorizontal:()=>f,ActiveCircularvertical:()=>p,CriticalBar:()=>b,CriticalCircularhorizontal:()=>v,CriticalCircularvertical:()=>y,InactiveBar:()=>d,InactiveCircularhorizontal:()=>l,InactiveCircularvertical:()=>u,SuccessfulBar:()=>_,SuccessfulCircularhorizontal:()=>h,SuccessfulCircularvertical:()=>g,__namedExportsOrder:()=>x,default:()=>c}),o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{r(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBLoadingIndicator/State`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`bar`,`circular`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},size:{control:`select`,options:[`small`,`medium`,`large`]},state:{control:`select`,options:[`inactive`,`active`,`successful`,`critical`]},indeterminate:{control:`boolean`},value:{control:`number`},max:{control:`number`},showLabel:{control:`boolean`},showProgressText:{control:`boolean`},overlay:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]}}},l={args:{state:`inactive`,variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`,children:`Circular horizontal`},render:e=>(0,o.jsx)(i,{...e})},u={args:{state:`inactive`,variant:`circular`,orientation:`vertical`,progressText:`42%`,children:`Circular vertical`},render:e=>(0,o.jsx)(i,{...e})},d={args:{state:`inactive`,variant:`bar`,progressText:`42 of 100`,children:`Bar`},render:e=>(0,o.jsx)(i,{...e})},f={args:{state:`active`,variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`,children:`Circular horizontal`},render:e=>(0,o.jsx)(i,{...e})},p={args:{state:`active`,variant:`circular`,orientation:`vertical`,progressText:`42%`,children:`Circular vertical`},render:e=>(0,o.jsx)(i,{...e})},m={args:{state:`active`,variant:`bar`,progressText:`42 of 100`,children:`Bar`},render:e=>(0,o.jsx)(i,{...e})},h={args:{state:`successful`,variant:`circular`,orientation:`horizontal`,progressText:`100 of 100`,propOverrides:{progress:{ariaLabel:`Success`}},children:`Circular horizontal`},render:e=>(0,o.jsx)(i,{...e})},g={args:{state:`successful`,variant:`circular`,orientation:`vertical`,progressText:`100%`,propOverrides:{progress:{ariaLabel:`Success`}},children:`Circular vertical`},render:e=>(0,o.jsx)(i,{...e})},_={args:{state:`successful`,variant:`bar`,progressText:`100 of 100`,propOverrides:{progress:{ariaLabel:`Success`}},children:`Bar`},render:e=>(0,o.jsx)(i,{...e})},v={args:{state:`critical`,variant:`circular`,orientation:`horizontal`,progressText:`100 of 100`,propOverrides:{progress:{ariaLabel:`Error`}},children:`Circular horizontal`},render:e=>(0,o.jsx)(i,{...e})},y={args:{state:`critical`,variant:`circular`,orientation:`vertical`,progressText:`100%`,propOverrides:{progress:{ariaLabel:`Error`}},children:`Circular vertical`},render:e=>(0,o.jsx)(i,{...e})},b={args:{state:`critical`,variant:`bar`,progressText:`100 of 100`,propOverrides:{progress:{ariaLabel:`Error`}},children:`Bar`},render:e=>(0,o.jsx)(i,{...e})},x=[`InactiveCircularhorizontal`,`InactiveCircularvertical`,`InactiveBar`,`ActiveCircularhorizontal`,`ActiveCircularvertical`,`ActiveBar`,`SuccessfulCircularhorizontal`,`SuccessfulCircularvertical`,`SuccessfulBar`,`CriticalCircularhorizontal`,`CriticalCircularvertical`,`CriticalBar`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "inactive",
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100",
    "children": "Circular horizontal"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "inactive",
    "variant": "circular",
    "orientation": "vertical",
    "progressText": "42%",
    "children": "Circular vertical"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "inactive",
    "variant": "bar",
    "progressText": "42 of 100",
    "children": "Bar"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "active",
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100",
    "children": "Circular horizontal"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "active",
    "variant": "circular",
    "orientation": "vertical",
    "progressText": "42%",
    "children": "Circular vertical"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "active",
    "variant": "bar",
    "progressText": "42 of 100",
    "children": "Bar"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "successful",
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "100 of 100",
    "propOverrides": {
      progress: {
        ariaLabel: 'Success'
      }
    },
    "children": "Circular horizontal"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "successful",
    "variant": "circular",
    "orientation": "vertical",
    "progressText": "100%",
    "propOverrides": {
      progress: {
        ariaLabel: 'Success'
      }
    },
    "children": "Circular vertical"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "successful",
    "variant": "bar",
    "progressText": "100 of 100",
    "propOverrides": {
      progress: {
        ariaLabel: 'Success'
      }
    },
    "children": "Bar"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "critical",
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "100 of 100",
    "propOverrides": {
      progress: {
        ariaLabel: 'Error'
      }
    },
    "children": "Circular horizontal"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "critical",
    "variant": "circular",
    "orientation": "vertical",
    "progressText": "100%",
    "propOverrides": {
      progress: {
        ariaLabel: 'Error'
      }
    },
    "children": "Circular vertical"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "critical",
    "variant": "bar",
    "progressText": "100 of 100",
    "propOverrides": {
      progress: {
        ariaLabel: 'Error'
      }
    },
    "children": "Bar"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...b.parameters?.docs?.source}}}})))()}export{v as a,l as c,h as d,g as f,b as i,u as l,a as m,f as n,y as o,S as p,p as r,d as s,m as t,_ as u};