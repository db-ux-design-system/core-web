import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./card-BSBo56TA.js";import{n as i,t as a}from"./loading-indicator-BMjAwaa6.js";var o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{n(),i(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBLoadingIndicator/Overlay`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`bar`,`circular`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},size:{control:`select`,options:[`small`,`medium`]},state:{control:`select`,options:[`inactive`,`active`,`successful`,`critical`]},indeterminate:{control:`boolean`},value:{control:`number`},max:{control:`number`},showLabel:{control:`boolean`},showProgressText:{control:`boolean`},overlay:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]}}},l={args:{variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`,overlay:!1,children:`Circular horizontal`},render:e=>(0,o.jsx)(a,{...e})},u={args:{variant:`circular`,orientation:`vertical`,progressText:`42%`,overlay:!1,children:`Circular vertical`},render:e=>(0,o.jsx)(a,{...e})},d={args:{variant:`bar`,progressText:`42 of 100`,overlay:!1,children:`Bar`},render:e=>(0,o.jsx)(a,{...e})},f={args:{variant:`circular`,orientation:`vertical`,progressText:`42%`,overlay:!0,children:`Circular vertical`},render:e=>(0,o.jsxs)(r,{children:[(0,o.jsx)(a,{...e}),(0,o.jsx)(`p`,{children:`Content 1`}),(0,o.jsx)(`p`,{children:`Content 2`}),(0,o.jsx)(`p`,{children:`Content 3`})]})},p=[`DefaultFalseCircularhorizontal`,`DefaultFalseCircularvertical`,`DefaultFalseBar`,`TrueCircularvertical`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100",
    "overlay": false,
    "children": "Circular horizontal"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "circular",
    "orientation": "vertical",
    "progressText": "42%",
    "overlay": false,
    "children": "Circular vertical"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "bar",
    "progressText": "42 of 100",
    "overlay": false,
    "children": "Bar"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "circular",
    "orientation": "vertical",
    "progressText": "42%",
    "overlay": true,
    "children": "Circular vertical"
  },
  render: (properties: any) => <DBCard><DBLoadingIndicator {...properties} /><p>Content 1</p><p>Content 2</p><p>Content 3</p></DBCard>
}`,...f.parameters?.docs?.source}}}})))()}m();export{d as DefaultFalseBar,l as DefaultFalseCircularhorizontal,u as DefaultFalseCircularvertical,f as TrueCircularvertical,p as __namedExportsOrder,c as default};