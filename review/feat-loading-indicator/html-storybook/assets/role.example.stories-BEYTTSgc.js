import{n as e}from"./iframe-DXdNuXW7.js";import{n as t,t as n}from"./loading-indicator-BbtPTAdi.js";import{n as r}from"./rolldown-runtime-DkW27tQK.js";var i,a,o,s,c,l,u;function d(){return(d=r((()=>{t(),i=e(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBLoadingIndicator/Role`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`bar`,`circular`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},size:{control:`select`,options:[`small`,`medium`]},state:{control:`select`,options:[`inactive`,`active`,`successful`,`critical`]},indeterminate:{control:`boolean`},value:{control:`number`},max:{control:`number`},showLabel:{control:`boolean`},showProgressText:{control:`boolean`},overlay:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]}}},s={args:{variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`,children:`Default`},render:e=>(0,i.jsx)(n,{...e})},c={args:{role:`status`,variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`,children:`Status`},render:e=>(0,i.jsx)(n,{...e})},l={args:{role:`alert`,variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`,children:`Alert`},render:e=>(0,i.jsx)(n,{...e})},u=[`Defaultstatus`,`rolestatus`,`rolealert`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100",
    "children": "Default"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "role": "status",
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100",
    "children": "Status"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "role": "alert",
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100",
    "children": "Alert"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...l.parameters?.docs?.source}}}})))()}d();export{s as Defaultstatus,u as __namedExportsOrder,o as default,l as rolealert,c as rolestatus};