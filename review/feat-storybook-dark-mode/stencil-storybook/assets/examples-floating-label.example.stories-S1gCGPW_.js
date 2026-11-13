import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-CR0u9Pnn.js";import{n as i,t as a}from"./apply-web-component-args-eq_daaBH.js";var o=t({DefaultEmpty:()=>l,Disabled:()=>d,Filled:()=>u,ReadonlyFilled:()=>f,__namedExportsOrder:()=>p,default:()=>c}),s,c,l,u,d,f,p;function m(){return(m=e((()=>{r(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTextarea/Examples Floating Label`,component:`db-textarea`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{label:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},showLabel:{control:`boolean`},message:{control:`text`},disabled:{control:`boolean`},readOnly:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},rows:{control:`number`},cols:{control:`number`},showResizer:{control:`boolean`},fieldSizing:{control:`select`,options:[`fixed`,`content`]},resize:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},spellCheck:{control:`boolean`},wrap:{control:`select`,options:[`hard`,`soft`,`off`]},placeholder:{control:`text`},name:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},minLength:{control:`number`},maxLength:{control:`number`},autocomplete:{control:`text`},messageIcon:{control:`text`},showMessage:{control:`boolean`},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{label:`Label`,variant:`floating`,placeholder:`(Default) Empty`},render:({children:e,...t})=>n`<db-textarea ${i(t)}></db-textarea>`},u={args:{label:`Label`,value:`Filled`,variant:`floating`,placeholder:`Filled`},render:({children:e,...t})=>n`<db-textarea ${i(t)}></db-textarea>`},d={args:{label:`Label`,variant:`floating`,placeholder:`Disabled`,disabled:!0},render:({children:e,...t})=>n`<db-textarea ${i(t)}></db-textarea>`},f={args:{label:`Label`,value:`Readonly - Filled`,variant:`floating`,placeholder:`Readonly - Filled`,readOnly:!0},render:({children:e,...t})=>n`<db-textarea ${i(t)}></db-textarea>`},p=[`DefaultEmpty`,`Filled`,`Disabled`,`ReadonlyFilled`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "variant": "floating",
    "placeholder": "(Default) Empty"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-textarea \${spreadArgs(args)}></db-textarea>\`
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
  }: any) => html\`<db-textarea \${spreadArgs(args)}></db-textarea>\`
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
  }: any) => html\`<db-textarea \${spreadArgs(args)}></db-textarea>\`
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
  }: any) => html\`<db-textarea \${spreadArgs(args)}></db-textarea>\`
}`,...f.parameters?.docs?.source}}}})))()}export{o as a,f as i,d as n,m as o,u as r,l as t};