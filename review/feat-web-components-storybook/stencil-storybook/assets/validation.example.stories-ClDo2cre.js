import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{n as r,t as i}from"./apply-web-component-args-B1PNRnpa.js";var a,o,s,c,l,u;function d(){return(d=e((()=>{n(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBSelect/Validation`,component:`db-select`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:a()},argTypes:{options:{control:`object`},label:{control:`text`},placeholder:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},showLabel:{control:`boolean`},message:{control:`text`},showMessage:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},disabled:{control:`boolean`},showIcon:{control:`boolean`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},name:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},size:{control:`number`},multiple:{control:`boolean`},showEmptyOption:{control:`boolean`},autocomplete:{control:`text`},messageIcon:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},s={args:{label:`Label`,validation:`no-validation`,placeholder:`(Default) No validation`,options:[{value:`Option 1`},{value:`Option 2`},{value:`Option 3`},{value:`Option 4`},{value:`Option 5`}]},render:({children:e,...n})=>t`<div><db-select ${r(n)}></db-select></div>`},c={args:{label:`Label`,validation:`invalid`,invalidMessage:`Invalid Message`,placeholder:`Invalid`,options:[{value:`Option 1`},{value:`Option 2`},{value:`Option 3`},{value:`Option 4`},{value:`Option 5`}]},render:({children:e,...n})=>t`<div><db-select ${r(n)}></db-select></div>`},l={args:{label:`Label`,validation:`valid`,validMessage:`Valid message`,placeholder:`Valid`,options:[{value:`Valid`,selected:!0},{value:`Option 2`}]},render:({children:e,...n})=>t`<div><db-select ${r(n)}></db-select></div>`},u=[`DefaultNovalidation`,`Invalid`,`Valid`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "validation": "no-validation",
    "placeholder": "(Default) No validation",
    "options": [{
      value: 'Option 1'
    }, {
      value: 'Option 2'
    }, {
      value: 'Option 3'
    }, {
      value: 'Option 4'
    }, {
      value: 'Option 5'
    }]
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-select \${spreadArgs(args)}></db-select></div>\`
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "validation": "invalid",
    "invalidMessage": "Invalid Message",
    "placeholder": "Invalid",
    "options": [{
      value: 'Option 1'
    }, {
      value: 'Option 2'
    }, {
      value: 'Option 3'
    }, {
      value: 'Option 4'
    }, {
      value: 'Option 5'
    }]
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-select \${spreadArgs(args)}></db-select></div>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "validation": "valid",
    "validMessage": "Valid message",
    "placeholder": "Valid",
    "options": [{
      value: 'Valid',
      selected: true
    }, {
      value: 'Option 2'
    }]
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-select \${spreadArgs(args)}></db-select></div>\`
}`,...l.parameters?.docs?.source}}}})))()}d();export{s as DefaultNovalidation,c as Invalid,l as Valid,u as __namedExportsOrder,o as default};