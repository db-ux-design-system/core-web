import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./radio-Dd12m3Dz.js";var a=t({DefaultNovalidation:()=>l,Invalid:()=>u,Valid:()=>d,__namedExportsOrder:()=>f,default:()=>c}),o,s,c,l,u,d,f;function p(){return(p=e((()=>{r(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBRadio/Validation`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},value:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{name:`No validation`,validation:`no-validation`,children:`(Default) No validation`},render:e=>(0,o.jsx)(i,{...e})},u={args:{name:`invalid`,validation:`invalid`,children:`Invalid`},render:e=>(0,o.jsx)(i,{...e})},d={args:{name:`valid`,validation:`valid`,checked:!0,children:`Valid`},render:e=>(0,o.jsx)(i,{...e})},f=[`DefaultNovalidation`,`Invalid`,`Valid`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "No validation",
    "validation": "no-validation",
    "children": "(Default) No validation"
  },
  render: (properties: any) => <DBRadio {...properties} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "invalid",
    "validation": "invalid",
    "children": "Invalid"
  },
  render: (properties: any) => <DBRadio {...properties} />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "valid",
    "validation": "valid",
    "checked": true,
    "children": "Valid"
  },
  render: (properties: any) => <DBRadio {...properties} />
}`,...d.parameters?.docs?.source}}}})))()}export{a,p as i,u as n,d as r,l as t};