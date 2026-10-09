import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{n as r,t as i}from"./apply-web-component-args-B1PNRnpa.js";var a,o,s,c,l,u,d;function f(){return(f=e((()=>{n(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBTextarea/Examples Floating Label`,component:`db-textarea`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{label:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},showLabel:{control:`boolean`},message:{control:`text`},disabled:{control:`boolean`},readOnly:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},rows:{control:`number`},cols:{control:`number`},showResizer:{control:`boolean`},fieldSizing:{control:`select`,options:[`fixed`,`content`]},resize:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},spellCheck:{control:`boolean`},wrap:{control:`select`,options:[`hard`,`soft`,`off`]},placeholder:{control:`text`},name:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},minLength:{control:`number`},maxLength:{control:`number`},autocomplete:{control:`text`},messageIcon:{control:`text`},showMessage:{control:`boolean`},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{label:`Label`,variant:`floating`,placeholder:`(Default) Empty`},render:({children:e,...n})=>t`<db-textarea ${r(n)}></db-textarea>`},c={args:{label:`Label`,value:`Filled`,variant:`floating`,placeholder:`Filled`},render:({children:e,...n})=>t`<db-textarea ${r(n)}></db-textarea>`},l={args:{label:`Label`,variant:`floating`,placeholder:`Disabled`,disabled:!0},render:({children:e,...n})=>t`<db-textarea ${r(n)}></db-textarea>`},u={args:{label:`Label`,value:`Readonly - Filled`,variant:`floating`,placeholder:`Readonly - Filled`,readOnly:!0},render:({children:e,...n})=>t`<db-textarea ${r(n)}></db-textarea>`},d=[`DefaultEmpty`,`Filled`,`Disabled`,`ReadonlyFilled`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "variant": "floating",
    "placeholder": "(Default) Empty"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-textarea \${spreadArgs(args)}></db-textarea>\`
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}}})))()}f();export{s as DefaultEmpty,l as Disabled,c as Filled,u as ReadonlyFilled,d as __namedExportsOrder,o as default};