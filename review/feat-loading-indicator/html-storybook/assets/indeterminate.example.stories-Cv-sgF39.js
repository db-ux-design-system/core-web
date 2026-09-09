import{n as e}from"./iframe-DXdNuXW7.js";import{n as t,t as n}from"./loading-indicator-BbtPTAdi.js";import{n as r}from"./rolldown-runtime-DkW27tQK.js";var i,a,o,s,c,l,u,d,f,p;function m(){return(m=r((()=>{t(),i=e(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBLoadingIndicator/Indeterminate`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`bar`,`circular`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},size:{control:`select`,options:[`small`,`medium`]},state:{control:`select`,options:[`inactive`,`active`,`successful`,`critical`]},indeterminate:{control:`boolean`},value:{control:`number`},max:{control:`number`},showLabel:{control:`boolean`},showProgressText:{control:`boolean`},overlay:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]}}},s={args:{variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`,indeterminate:!0,children:`Circular horizontal`},render:e=>(0,i.jsx)(n,{...e})},c={args:{variant:`circular`,orientation:`vertical`,progressText:`42%`,indeterminate:!0,children:`Circular vertical`},render:e=>(0,i.jsx)(n,{...e})},l={args:{variant:`bar`,progressText:`42 of 100`,indeterminate:!0,children:`Bar`},render:e=>(0,i.jsx)(n,{...e})},u={args:{state:`active`,variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`,indeterminate:!1,value:42,max:100,children:`Circular horizontal`},render:e=>(0,i.jsx)(n,{...e})},d={args:{state:`active`,variant:`circular`,orientation:`vertical`,progressText:`42%`,indeterminate:!1,value:42,max:100,children:`Circular vertical`},render:e=>(0,i.jsx)(n,{...e})},f={args:{state:`active`,variant:`bar`,progressText:`42 of 100`,indeterminate:!1,value:42,max:100,children:`Bar`},render:e=>(0,i.jsx)(n,{...e})},p=[`DefaultTrueCircularhorizontal`,`DefaultTrueCircularvertical`,`DefaultTrueBar`,`FalseCircularhorizontal`,`FalseCircularvertical`,`FalseBar`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100",
    "indeterminate": true,
    "children": "Circular horizontal"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "circular",
    "orientation": "vertical",
    "progressText": "42%",
    "indeterminate": true,
    "children": "Circular vertical"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "bar",
    "progressText": "42 of 100",
    "indeterminate": true,
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
}`,...f.parameters?.docs?.source}}}})))()}m();export{l as DefaultTrueBar,s as DefaultTrueCircularhorizontal,c as DefaultTrueCircularvertical,f as FalseBar,u as FalseCircularhorizontal,d as FalseCircularvertical,p as __namedExportsOrder,o as default};