import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./loading-indicator-BMjAwaa6.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{n(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBLoadingIndicator/State: Determinate`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`bar`,`circular`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},size:{control:`select`,options:[`small`,`medium`]},state:{control:`select`,options:[`inactive`,`active`,`successful`,`critical`]},indeterminate:{control:`boolean`},value:{control:`number`},max:{control:`number`},showLabel:{control:`boolean`},showProgressText:{control:`boolean`},overlay:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]}}},s={args:{state:`inactive`,variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`,indeterminate:!1,value:42,max:100,children:`Circular horizontal`},render:e=>(0,i.jsx)(r,{...e})},c={args:{state:`inactive`,variant:`circular`,orientation:`vertical`,progressText:`42%`,indeterminate:!1,value:42,max:100,children:`Circular vertical`},render:e=>(0,i.jsx)(r,{...e})},l={args:{state:`inactive`,variant:`bar`,progressText:`42 of 100`,indeterminate:!1,value:42,max:100,children:`Bar`},render:e=>(0,i.jsx)(r,{...e})},u={args:{state:`active`,variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`,indeterminate:!1,value:42,max:100,children:`Circular horizontal`},render:e=>(0,i.jsx)(r,{...e})},d={args:{state:`active`,variant:`circular`,orientation:`vertical`,progressText:`42%`,indeterminate:!1,value:42,max:100,children:`Circular vertical`},render:e=>(0,i.jsx)(r,{...e})},f={args:{state:`active`,variant:`bar`,progressText:`42 of 100`,indeterminate:!1,value:42,max:100,children:`Bar`},render:e=>(0,i.jsx)(r,{...e})},p={args:{state:`successful`,variant:`circular`,orientation:`horizontal`,progressText:`100 of 100`,indeterminate:!1,value:100,max:100,children:`Circular horizontal`},render:e=>(0,i.jsx)(r,{...e})},m={args:{state:`successful`,variant:`circular`,orientation:`vertical`,progressText:`100%`,indeterminate:!1,value:100,max:100,children:`Circular vertical`},render:e=>(0,i.jsx)(r,{...e})},h={args:{state:`successful`,variant:`bar`,progressText:`100 of 100`,indeterminate:!1,value:100,max:100,children:`Bar`},render:e=>(0,i.jsx)(r,{...e})},g={args:{state:`critical`,variant:`circular`,orientation:`horizontal`,progressText:`100 of 100`,indeterminate:!1,value:100,max:100,children:`Circular horizontal`},render:e=>(0,i.jsx)(r,{...e})},_={args:{state:`critical`,variant:`circular`,orientation:`vertical`,progressText:`100%`,indeterminate:!1,value:100,max:100,children:`Circular vertical`},render:e=>(0,i.jsx)(r,{...e})},v={args:{state:`critical`,variant:`bar`,progressText:`100 of 100`,indeterminate:!1,value:100,max:100,children:`Bar`},render:e=>(0,i.jsx)(r,{...e})},y=[`InactiveCircularhorizontal`,`InactiveCircularvertical`,`InactiveBar`,`ActiveCircularhorizontal`,`ActiveCircularvertical`,`ActiveBar`,`SuccessfulCircularhorizontal`,`SuccessfulCircularvertical`,`SuccessfulBar`,`CriticalCircularhorizontal`,`CriticalCircularvertical`,`CriticalBar`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "inactive",
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100",
    "indeterminate": false,
    "value": 42,
    "max": 100,
    "children": "Circular horizontal"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "inactive",
    "variant": "circular",
    "orientation": "vertical",
    "progressText": "42%",
    "indeterminate": false,
    "value": 42,
    "max": 100,
    "children": "Circular vertical"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "inactive",
    "variant": "bar",
    "progressText": "42 of 100",
    "indeterminate": false,
    "value": 42,
    "max": 100,
    "children": "Bar"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "successful",
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "100 of 100",
    "indeterminate": false,
    "value": 100,
    "max": 100,
    "children": "Circular horizontal"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "successful",
    "variant": "circular",
    "orientation": "vertical",
    "progressText": "100%",
    "indeterminate": false,
    "value": 100,
    "max": 100,
    "children": "Circular vertical"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "successful",
    "variant": "bar",
    "progressText": "100 of 100",
    "indeterminate": false,
    "value": 100,
    "max": 100,
    "children": "Bar"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "critical",
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "100 of 100",
    "indeterminate": false,
    "value": 100,
    "max": 100,
    "children": "Circular horizontal"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "critical",
    "variant": "circular",
    "orientation": "vertical",
    "progressText": "100%",
    "indeterminate": false,
    "value": 100,
    "max": 100,
    "children": "Circular vertical"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "critical",
    "variant": "bar",
    "progressText": "100 of 100",
    "indeterminate": false,
    "value": 100,
    "max": 100,
    "children": "Bar"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...v.parameters?.docs?.source}}}})))()}b();export{f as ActiveBar,u as ActiveCircularhorizontal,d as ActiveCircularvertical,v as CriticalBar,g as CriticalCircularhorizontal,_ as CriticalCircularvertical,l as InactiveBar,s as InactiveCircularhorizontal,c as InactiveCircularvertical,h as SuccessfulBar,p as SuccessfulCircularhorizontal,m as SuccessfulCircularvertical,y as __namedExportsOrder,o as default};