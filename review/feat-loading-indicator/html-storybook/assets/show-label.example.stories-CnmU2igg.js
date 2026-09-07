import{n as e}from"./iframe-CpZ5RC9g.js";import{n as t,t as n}from"./loading-indicator-EdMXiBfy.js";import{n as r}from"./rolldown-runtime-DkW27tQK.js";var i,a,o,s,c,l,u,d,f,p;function m(){return(m=r((()=>{t(),i=e(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBLoadingIndicator/Show Label`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`bar`,`circular`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},size:{control:`select`,options:[`small`,`medium`]},state:{control:`select`,options:[`inactive`,`active`,`successful`,`critical`]},indeterminate:{control:`boolean`},value:{control:`number`},max:{control:`number`},showLabel:{control:`boolean`},showProgressText:{control:`boolean`},overlay:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]}}},s={args:{variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`,showLabel:!0,children:`Circular horizontal`},render:e=>(0,i.jsx)(n,{...e})},c={args:{variant:`circular`,orientation:`vertical`,progressText:`42%`,showLabel:!0,children:`Circular vertical`},render:e=>(0,i.jsx)(n,{...e})},l={args:{variant:`bar`,progressText:`42 of 100`,showLabel:!0,children:`Bar`},render:e=>(0,i.jsx)(n,{...e})},u={args:{variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`,showLabel:!1,children:`Circular horizontal`},render:e=>(0,i.jsx)(n,{...e})},d={args:{variant:`circular`,orientation:`vertical`,progressText:`42%`,showLabel:!1,children:`Circular vertical`},render:e=>(0,i.jsx)(n,{...e})},f={args:{variant:`bar`,progressText:`42 of 100`,showLabel:!1,children:`Bar`},render:e=>(0,i.jsx)(n,{...e})},p=[`DefaultTrueCircularhorizontal`,`DefaultTrueCircularvertical`,`DefaultTrueBar`,`FalseCircularhorizontal`,`FalseCircularvertical`,`FalseBar`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100",
    "showLabel": true,
    "children": "Circular horizontal"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "circular",
    "orientation": "vertical",
    "progressText": "42%",
    "showLabel": true,
    "children": "Circular vertical"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "bar",
    "progressText": "42 of 100",
    "showLabel": true,
    "children": "Bar"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100",
    "showLabel": false,
    "children": "Circular horizontal"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "circular",
    "orientation": "vertical",
    "progressText": "42%",
    "showLabel": false,
    "children": "Circular vertical"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "bar",
    "progressText": "42 of 100",
    "showLabel": false,
    "children": "Bar"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...f.parameters?.docs?.source}}}})))()}m();export{l as DefaultTrueBar,s as DefaultTrueCircularhorizontal,c as DefaultTrueCircularvertical,f as FalseBar,u as FalseCircularhorizontal,d as FalseCircularvertical,p as __namedExportsOrder,o as default};