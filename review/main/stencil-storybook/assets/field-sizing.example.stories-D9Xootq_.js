import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-CT9kjjde.js";import{n as i,t as a}from"./apply-web-component-args-MGmqLAAR.js";var o=t({Content:()=>u,Contentwithminheight:()=>d,DefaultFixed:()=>l,__namedExportsOrder:()=>f,default:()=>c}),s,c,l,u,d,f;function p(){return(p=e((()=>{r(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTextarea/Field Sizing`,component:`db-textarea`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{label:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},showLabel:{control:`boolean`},message:{control:`text`},disabled:{control:`boolean`},readOnly:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},rows:{control:`number`},cols:{control:`number`},showResizer:{control:`boolean`},fieldSizing:{control:`select`,options:[`fixed`,`content`]},resize:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},spellCheck:{control:`boolean`},wrap:{control:`select`,options:[`hard`,`soft`,`off`]},placeholder:{control:`text`},name:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},minLength:{control:`number`},maxLength:{control:`number`},autocomplete:{control:`text`},messageIcon:{control:`text`},showMessage:{control:`boolean`},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{label:`Label`,fieldSizing:`fixed`,placeholder:`(Default) Fixed`},render:({children:e,...t})=>n`<div style="width: 300px"><db-textarea ${i(t)}></db-textarea></div>`},u={args:{label:`Label`,fieldSizing:`content`,placeholder:`Content`},render:({children:e,...t})=>n`<div style="width: 300px"><db-textarea ${i(t)}></db-textarea></div>`},d={args:{label:`Label`,fieldSizing:`content`,placeholder:`Content with min-height`},render:({children:e,...t})=>n`<div style="width: 300px; --db-form-component-min-block-size: 4lh"><db-textarea ${i(t)}></db-textarea></div>`},f=[`DefaultFixed`,`Content`,`Contentwithminheight`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "fieldSizing": "fixed",
    "placeholder": "(Default) Fixed"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-textarea \${spreadArgs(args)}></db-textarea></div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "fieldSizing": "content",
    "placeholder": "Content"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-textarea \${spreadArgs(args)}></db-textarea></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "fieldSizing": "content",
    "placeholder": "Content with min-height"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px; --db-form-component-min-block-size: 4lh"><db-textarea \${spreadArgs(args)}></db-textarea></div>\`
}`,...d.parameters?.docs?.source}}}})))()}export{p as a,o as i,d as n,l as r,u as t};