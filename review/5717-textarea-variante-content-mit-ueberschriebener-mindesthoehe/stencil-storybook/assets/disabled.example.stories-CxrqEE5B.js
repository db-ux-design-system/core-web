import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-DesJQKM_.js";import{n as i,t as a}from"./apply-web-component-args-CMbNfqh7.js";var o=t({DefaultFalse:()=>l,True:()=>u,__namedExportsOrder:()=>d,default:()=>c}),s,c,l,u,d;function f(){return(f=e((()=>{r(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBSelect/Disabled`,component:`db-select`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:s()},argTypes:{options:{control:`object`},label:{control:`text`},placeholder:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},showLabel:{control:`boolean`},message:{control:`text`},showMessage:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},disabled:{control:`boolean`},showIcon:{control:`boolean`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},name:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},size:{control:`number`},multiple:{control:`boolean`},showEmptyOption:{control:`boolean`},autocomplete:{control:`text`},messageIcon:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},l={args:{label:`Label`,placeholder:`(Default) False`,options:[{value:`Option 1`},{value:`Option 2`},{value:`Option 3`},{value:`Option 4`},{value:`Option 5`}],disabled:!1},render:({children:e,...t})=>n`<div style="width: 300px"><db-select ${i(t)}></db-select></div>`},u={args:{label:`Label`,placeholder:`True`,options:[{value:`Option 1`},{value:`Option 2`},{value:`Option 3`},{value:`Option 4`},{value:`Option 5`}],disabled:!0},render:({children:e,...t})=>n`<div style="width: 300px"><db-select ${i(t)}></db-select></div>`},d=[`DefaultFalse`,`True`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "placeholder": "(Default) False",
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
    }],
    "disabled": false
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-select \${spreadArgs(args)}></db-select></div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "placeholder": "True",
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
    }],
    "disabled": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-select \${spreadArgs(args)}></db-select></div>\`
}`,...u.parameters?.docs?.source}}}})))()}export{f as i,u as n,o as r,l as t};