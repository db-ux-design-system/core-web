import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./checkbox-CK4kfkJB.js";var a=t({DefaultNovalidation:()=>l,Invalid:()=>u,Valid:()=>d,__namedExportsOrder:()=>f,default:()=>c}),o,s,c,l,u,d,f;function p(){return(p=e((()=>{r(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBCheckbox/Validation`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},indeterminate:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},message:{control:`text`},messageProps:{control:`object`},validMessageProps:{control:`object`},invalidMessageProps:{control:`object`},showMessage:{control:`boolean`},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},placeholder:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{name:`Validation`,validation:`no-validation`,children:`(Default) No validation`},render:e=>(0,o.jsx)(i,{...e})},u={args:{name:`Validation`,validation:`invalid`,invalidMessage:`Invalid Message`,children:`Invalid`},render:e=>(0,o.jsx)(i,{...e})},d={args:{name:`Validation`,validation:`valid`,validMessage:`Valid message`,children:`Valid`},render:e=>(0,o.jsx)(i,{...e})},f=[`DefaultNovalidation`,`Invalid`,`Valid`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Validation",
    "validation": "no-validation",
    "children": "(Default) No validation"
  },
  render: (properties: any) => <DBCheckbox {...properties} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Validation",
    "validation": "invalid",
    "invalidMessage": "Invalid Message",
    "children": "Invalid"
  },
  render: (properties: any) => <DBCheckbox {...properties} />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Validation",
    "validation": "valid",
    "validMessage": "Valid message",
    "children": "Valid"
  },
  render: (properties: any) => <DBCheckbox {...properties} />
}`,...d.parameters?.docs?.source}}}})))()}export{a,p as i,u as n,d as r,l as t};