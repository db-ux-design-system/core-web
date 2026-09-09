import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./loading-indicator-BMjAwaa6.js";var i,a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{n(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBLoadingIndicator/Show Progress Text`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`bar`,`circular`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},size:{control:`select`,options:[`small`,`medium`]},state:{control:`select`,options:[`inactive`,`active`,`successful`,`critical`]},indeterminate:{control:`boolean`},value:{control:`number`},max:{control:`number`},showLabel:{control:`boolean`},showProgressText:{control:`boolean`},overlay:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]}}},s={args:{state:`active`,variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`,showProgressText:!0,indeterminate:!1,value:42,max:100,children:`Circular horizontal`},render:e=>(0,i.jsx)(r,{...e})},c={args:{state:`active`,variant:`circular`,orientation:`vertical`,progressText:`42%`,showProgressText:!0,indeterminate:!1,value:42,max:100,children:`Circular vertical`},render:e=>(0,i.jsx)(r,{...e})},l={args:{state:`active`,variant:`bar`,progressText:`42 of 100`,showProgressText:!0,indeterminate:!1,value:42,max:100,children:`Bar`},render:e=>(0,i.jsx)(r,{...e})},u={args:{state:`active`,variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`,showProgressText:!1,indeterminate:!1,value:42,max:100,children:`Circular horizontal`},render:e=>(0,i.jsx)(r,{...e})},d={args:{state:`active`,variant:`circular`,orientation:`vertical`,progressText:`42%`,showProgressText:!1,indeterminate:!1,value:42,max:100,children:`Circular vertical`},render:e=>(0,i.jsx)(r,{...e})},f={args:{state:`active`,variant:`bar`,progressText:`42 of 100`,showProgressText:!1,indeterminate:!1,value:42,max:100,children:`Bar`},render:e=>(0,i.jsx)(r,{...e})},p=[`DefaultTrueCircularhorizontal`,`DefaultTrueCircularvertical`,`DefaultTrueBar`,`FalseCircularhorizontal`,`FalseCircularvertical`,`FalseBar`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "active",
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100",
    "showProgressText": true,
    "indeterminate": false,
    "value": 42,
    "max": 100,
    "children": "Circular horizontal"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "active",
    "variant": "circular",
    "orientation": "vertical",
    "progressText": "42%",
    "showProgressText": true,
    "indeterminate": false,
    "value": 42,
    "max": 100,
    "children": "Circular vertical"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "active",
    "variant": "bar",
    "progressText": "42 of 100",
    "showProgressText": true,
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
    "showProgressText": false,
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
    "showProgressText": false,
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
    "showProgressText": false,
    "indeterminate": false,
    "value": 42,
    "max": 100,
    "children": "Bar"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...f.parameters?.docs?.source}}}})))()}m();export{l as DefaultTrueBar,s as DefaultTrueCircularhorizontal,c as DefaultTrueCircularvertical,f as FalseBar,u as FalseCircularhorizontal,d as FalseCircularvertical,p as __namedExportsOrder,o as default};