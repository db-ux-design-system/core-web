import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./checkbox-CK4kfkJB.js";var a=t({DefaultTrue:()=>l,False:()=>u,__namedExportsOrder:()=>d,default:()=>c}),o,s,c,l,u,d;function f(){return(f=e((()=>{r(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBCheckbox/Show Required Asterisk`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},indeterminate:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},message:{control:`text`},messageProps:{control:`object`},validMessageProps:{control:`object`},invalidMessageProps:{control:`object`},showMessage:{control:`boolean`},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},placeholder:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{name:`Asterisk`,required:!0,showRequiredAsterisk:!0,children:`(Default) True`},render:e=>(0,o.jsx)(i,{...e})},u={args:{name:`Asterisk`,required:!0,showRequiredAsterisk:!1,children:`False`},render:e=>(0,o.jsx)(i,{...e})},d=[`DefaultTrue`,`False`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Asterisk",
    "required": true,
    "showRequiredAsterisk": true,
    "children": "(Default) True"
  },
  render: (properties: any) => <DBCheckbox {...properties} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Asterisk",
    "required": true,
    "showRequiredAsterisk": false,
    "children": "False"
  },
  render: (properties: any) => <DBCheckbox {...properties} />
}`,...u.parameters?.docs?.source}}}})))()}export{a as i,u as n,f as r,l as t};