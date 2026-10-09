import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{n as r,t as i}from"./apply-web-component-args-B1PNRnpa.js";var a,o,s,c,l;function u(){return(u=e((()=>{n(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBSelect/Option Groups`,component:`db-select`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:a()},argTypes:{options:{control:`object`},label:{control:`text`},placeholder:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},showLabel:{control:`boolean`},message:{control:`text`},showMessage:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},disabled:{control:`boolean`},showIcon:{control:`boolean`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},name:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},size:{control:`number`},multiple:{control:`boolean`},showEmptyOption:{control:`boolean`},autocomplete:{control:`text`},messageIcon:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},s={args:{label:`Label`,placeholder:`Using optgroups`,options:[{label:`Group 1`,value:``,options:[{value:`Option 1`},{value:`Option 2`}]},{label:`Group 2`,value:``,options:[{value:`Option 3`},{value:`Option 4`}]}]},render:({children:e,...n})=>t`<div><db-select ${r(n)}></db-select></div>`},c={args:{label:`Label`,placeholder:`Mixed options and groups`,options:[{value:`Single Option`},{label:`Grouped Options`,value:``,options:[{value:`Group Option 1`},{value:`Group Option 2`}]},{value:`Another Single Option`}]},render:({children:e,...n})=>t`<div><db-select ${r(n)}></db-select></div>`},l=[`Usingoptgroups`,`Mixedoptionsandgroups`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "placeholder": "Using optgroups",
    "options": [{
      label: 'Group 1',
      value: '',
      options: [{
        value: 'Option 1'
      }, {
        value: 'Option 2'
      }]
    }, {
      label: 'Group 2',
      value: '',
      options: [{
        value: 'Option 3'
      }, {
        value: 'Option 4'
      }]
    }]
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-select \${spreadArgs(args)}></db-select></div>\`
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "placeholder": "Mixed options and groups",
    "options": [{
      value: 'Single Option'
    }, {
      label: 'Grouped Options',
      value: '',
      options: [{
        value: 'Group Option 1'
      }, {
        value: 'Group Option 2'
      }]
    }, {
      value: 'Another Single Option'
    }]
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-select \${spreadArgs(args)}></db-select></div>\`
}`,...c.parameters?.docs?.source}}}})))()}u();export{c as Mixedoptionsandgroups,s as Usingoptgroups,l as __namedExportsOrder,o as default};