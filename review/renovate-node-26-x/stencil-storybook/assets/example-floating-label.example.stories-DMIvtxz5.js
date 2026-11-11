import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-DcKsLlVE.js";import{n as i,t as a}from"./apply-web-component-args-CWgj8AIG.js";var o=t({DefaultEmpty:()=>l,Disabled:()=>d,Filled:()=>u,Invalid:()=>p,ReadonlyFilled:()=>f,__namedExportsOrder:()=>m,default:()=>c}),s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{r(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBInput/Example Floating Label`,component:`db-input`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{label:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},showLabel:{control:`boolean`},message:{control:`text`},showMessage:{control:`boolean`},disabled:{control:`boolean`},readOnly:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},minLength:{control:`number`},maxLength:{control:`number`},type:{control:`select`,options:[`color`,`date`,`datetime-local`,`email`,`file`,`hidden`,`month`,`number`,`password`,`range`,`search`,`tel`,`text`,`time`,`url`,`week`]},min:{control:`text`},max:{control:`text`},step:{control:`text`},dataList:{control:`object`},dataListId:{control:`text`},placeholder:{control:`text`},name:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},size:{control:`number`},pattern:{control:`text`},accept:{control:`text`},multiple:{control:`boolean`},enterkeyhint:{control:`select`,options:[`enter`,`done`,`go`,`next`,`previous`,`search`,`send`]},inputmode:{control:`select`,options:[`none`,`text`,`decimal`,`numeric`,`tel`,`search`,`email`,`url`]},autocomplete:{control:`text`},messageIcon:{control:`text`},messageSize:{control:`select`,options:[`small`,`medium`]},validMessageSize:{control:`select`,options:[`small`,`medium`]},invalidMessageSize:{control:`select`,options:[`small`,`medium`]},fieldSizing:{control:`select`,options:[`fixed`,`content`]},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{label:`Label`,variant:`floating`,placeholder:`(Default) Empty`},render:({children:e,...t})=>n`<db-input ${i(t)}></db-input>`},u={args:{label:`Label`,value:`Filled`,variant:`floating`,placeholder:`Filled`},render:({children:e,...t})=>n`<db-input ${i(t)}></db-input>`},d={args:{label:`Label`,variant:`floating`,placeholder:`Disabled`,disabled:!0},render:({children:e,...t})=>n`<db-input ${i(t)}></db-input>`},f={args:{label:`Label`,value:`Readonly - Filled`,variant:`floating`,placeholder:`Readonly - Filled`,readOnly:!0},render:({children:e,...t})=>n`<db-input ${i(t)}></db-input>`},p={args:{label:`Label`,validation:`invalid`,invalidMessage:`Invalid Message`,variant:`floating`,placeholder:`Invalid`},render:({children:e,...t})=>n`<db-input ${i(t)}></db-input>`},m=[`DefaultEmpty`,`Filled`,`Disabled`,`ReadonlyFilled`,`Invalid`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "variant": "floating",
    "placeholder": "(Default) Empty"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-input \${spreadArgs(args)}></db-input>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "value": "Filled",
    "variant": "floating",
    "placeholder": "Filled"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-input \${spreadArgs(args)}></db-input>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "variant": "floating",
    "placeholder": "Disabled",
    "disabled": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-input \${spreadArgs(args)}></db-input>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "value": "Readonly - Filled",
    "variant": "floating",
    "placeholder": "Readonly - Filled",
    "readOnly": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-input \${spreadArgs(args)}></db-input>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "validation": "invalid",
    "invalidMessage": "Invalid Message",
    "variant": "floating",
    "placeholder": "Invalid"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-input \${spreadArgs(args)}></db-input>\`
}`,...p.parameters?.docs?.source}}}})))()}export{f as a,p as i,d as n,o,u as r,h as s,l as t};