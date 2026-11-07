import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-dqn2cA9M.js";import{n as i,t as a}from"./apply-web-component-args-ARfb8F4v.js";var o=t({DefaultNovalidation:()=>l,Invalid:()=>u,Valid:()=>d,__namedExportsOrder:()=>f,default:()=>c}),s,c,l,u,d,f;function p(){return(p=e((()=>{r(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTextarea/Validation`,component:`db-textarea`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{label:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},showLabel:{control:`boolean`},message:{control:`text`},disabled:{control:`boolean`},readOnly:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},rows:{control:`number`},cols:{control:`number`},showResizer:{control:`boolean`},fieldSizing:{control:`select`,options:[`fixed`,`content`]},resize:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},spellCheck:{control:`boolean`},wrap:{control:`select`,options:[`hard`,`soft`,`off`]},placeholder:{control:`text`},name:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},minLength:{control:`number`},maxLength:{control:`number`},autocomplete:{control:`text`},messageIcon:{control:`text`},showMessage:{control:`boolean`},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{label:`Label`,validation:`no-validation`,placeholder:`(Default) No validation`},render:({children:e,...t})=>n`<db-textarea ${i(t)}></db-textarea>`},u={args:{label:`Label`,validation:`invalid`,invalidMessage:`Invalid Message`,placeholder:`Invalid`},render:({children:e,...t})=>n`<db-textarea ${i(t)}></db-textarea>`},d={args:{label:`Label`,validation:`valid`,validMessage:`Valid message`,placeholder:`Valid`},render:({children:e,...t})=>n`<db-textarea ${i(t)}></db-textarea>`},f=[`DefaultNovalidation`,`Invalid`,`Valid`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "validation": "no-validation",
    "placeholder": "(Default) No validation"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-textarea \${spreadArgs(args)}></db-textarea>\`
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
  }: any) => html\`<db-textarea \${spreadArgs(args)}></db-textarea>\`
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
  }: any) => html\`<db-textarea \${spreadArgs(args)}></db-textarea>\`
}`,...d.parameters?.docs?.source}}}})))()}export{o as a,p as i,u as n,d as r,l as t};