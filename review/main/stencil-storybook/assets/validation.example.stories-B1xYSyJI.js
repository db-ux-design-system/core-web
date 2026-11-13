import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-B4vbRiLP.js";import{n as i,t as a}from"./apply-web-component-args-nLpIKx2m.js";var o=t({DefaultNovalidation:()=>l,Invalid:()=>u,Valid:()=>d,__namedExportsOrder:()=>f,default:()=>c}),s,c,l,u,d,f;function p(){return(p=e((()=>{r(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBInput/Validation`,component:`db-input`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{label:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},showLabel:{control:`boolean`},message:{control:`text`},showMessage:{control:`boolean`},disabled:{control:`boolean`},readOnly:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},minLength:{control:`number`},maxLength:{control:`number`},type:{control:`select`,options:[`color`,`date`,`datetime-local`,`email`,`file`,`hidden`,`month`,`number`,`password`,`range`,`search`,`tel`,`text`,`time`,`url`,`week`]},min:{control:`text`},max:{control:`text`},step:{control:`text`},dataList:{control:`object`},dataListId:{control:`text`},placeholder:{control:`text`},name:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},size:{control:`number`},pattern:{control:`text`},accept:{control:`text`},multiple:{control:`boolean`},enterkeyhint:{control:`select`,options:[`enter`,`done`,`go`,`next`,`previous`,`search`,`send`]},inputmode:{control:`select`,options:[`none`,`text`,`decimal`,`numeric`,`tel`,`search`,`email`,`url`]},autocomplete:{control:`text`},messageIcon:{control:`text`},messageSize:{control:`select`,options:[`small`,`medium`]},validMessageSize:{control:`select`,options:[`small`,`medium`]},invalidMessageSize:{control:`select`,options:[`small`,`medium`]},fieldSizing:{control:`select`,options:[`fixed`,`content`]},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{label:`Label`,validation:`no-validation`,placeholder:`(Default) No validation`},render:({children:e,...t})=>n`<db-input ${i(t)}></db-input>`},u={args:{label:`Label`,validation:`invalid`,invalidMessage:`Invalid Message`,placeholder:`Invalid`},render:({children:e,...t})=>n`<db-input ${i(t)}></db-input>`},d={args:{label:`Label`,validation:`valid`,validMessage:`Valid message`,placeholder:`Valid`},render:({children:e,...t})=>n`<db-input ${i(t)}></db-input>`},f=[`DefaultNovalidation`,`Invalid`,`Valid`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "validation": "no-validation",
    "placeholder": "(Default) No validation"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-input \${spreadArgs(args)}></db-input>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "validation": "invalid",
    "invalidMessage": "Invalid Message",
    "placeholder": "Invalid"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-input \${spreadArgs(args)}></db-input>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "validation": "valid",
    "validMessage": "Valid message",
    "placeholder": "Valid"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-input \${spreadArgs(args)}></db-input>\`
}`,...d.parameters?.docs?.source}}}})))()}export{o as a,p as i,u as n,d as r,l as t};