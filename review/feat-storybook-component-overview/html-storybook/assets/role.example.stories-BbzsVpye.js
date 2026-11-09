import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./loading-indicator-DOELcZYH.js";var a=t({Defaultstatus:()=>l,__namedExportsOrder:()=>f,default:()=>c,rolealert:()=>d,rolestatus:()=>u}),o,s,c,l,u,d,f;function p(){return(p=e((()=>{r(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBLoadingIndicator/Role`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onTimeout:s()},argTypes:{variant:{control:`select`,options:[`bar`,`circular`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},size:{control:`select`,options:[`small`,`medium`,`large`]},state:{control:`select`,options:[`inactive`,`active`,`successful`,`critical`]},indeterminate:{control:`boolean`},value:{control:`number`},max:{control:`number`},showLabel:{control:`boolean`},showProgressText:{control:`boolean`},overlay:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},onTimeout:{action:`onTimeout`}}},l={args:{variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`,children:`Default`},render:e=>(0,o.jsx)(i,{...e})},u={args:{role:`status`,variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`,children:`Status`},render:e=>(0,o.jsx)(i,{...e})},d={args:{role:`alert`,variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`,children:`Alert`},render:e=>(0,o.jsx)(i,{...e})},f=[`Defaultstatus`,`rolestatus`,`rolealert`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100",
    "children": "Default"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "role": "status",
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100",
    "children": "Status"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "role": "alert",
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100",
    "children": "Alert"
  },
  render: (properties: any) => <DBLoadingIndicator {...properties} />
}`,...d.parameters?.docs?.source}}}})))()}export{u as a,d as i,p as n,a as r,l as t};