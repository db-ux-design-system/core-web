import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{n as r,t as i}from"./apply-web-component-args-B1PNRnpa.js";var a,o,s,c,l,u,d;function f(){return(f=e((()=>{n(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBSelect/Examples Floating Label`,component:`db-select`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:a()},argTypes:{options:{control:`object`},label:{control:`text`},placeholder:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},showLabel:{control:`boolean`},message:{control:`text`},showMessage:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},disabled:{control:`boolean`},showIcon:{control:`boolean`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},name:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},size:{control:`number`},multiple:{control:`boolean`},showEmptyOption:{control:`boolean`},autocomplete:{control:`text`},messageIcon:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},s={args:{label:`Label`,variant:`floating`,placeholder:`(Default) Empty`,options:[{value:`Option 1`},{value:`Option 2`},{value:`Option 3`},{value:`Option 4`},{value:`Option 5`}]},render:({children:e,...n})=>t`<div><db-select ${r(n)}></db-select></div>`},c={args:{label:`Label`,value:`Filled`,variant:`floating`,placeholder:`Filled`,options:[{value:`Filled`,selected:!0},{value:`Option 2`}]},render:({children:e,...n})=>t`<div><db-select ${r(n)}></db-select></div>`},l={args:{label:`Label`,variant:`floating`,value:`Disabled`,placeholder:`Disabled`,options:[{value:`Disabled`,selected:!0},{value:`Option 2`}],disabled:!0},render:({children:e,...n})=>t`<div><db-select ${r(n)}></db-select></div>`},u={args:{label:`Label`,placeholder:`Invalid`,variant:`floating`,validation:`invalid`,invalidMessage:`Invalid Message`,options:[{value:`Option 1`},{value:`Option 2`},{value:`Option 3`},{value:`Option 4`},{value:`Option 5`}]},render:({children:e,...n})=>t`<div><db-select ${r(n)}></db-select></div>`},d=[`DefaultEmpty`,`Filled`,`Disabled`,`Invalid`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "variant": "floating",
    "placeholder": "(Default) Empty",
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
    "value": "Filled",
    "variant": "floating",
    "placeholder": "Filled",
    "options": [{
      value: 'Filled',
      selected: true
    }, {
      value: 'Option 2'
    }]
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-select \${spreadArgs(args)}></db-select></div>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "variant": "floating",
    "value": "Disabled",
    "placeholder": "Disabled",
    "options": [{
      value: 'Disabled',
      selected: true
    }, {
      value: 'Option 2'
    }],
    "disabled": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-select \${spreadArgs(args)}></db-select></div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "placeholder": "Invalid",
    "variant": "floating",
    "validation": "invalid",
    "invalidMessage": "Invalid Message",
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
}`,...u.parameters?.docs?.source}}}})))()}f();export{s as DefaultEmpty,l as Disabled,c as Filled,u as Invalid,d as __namedExportsOrder,o as default};