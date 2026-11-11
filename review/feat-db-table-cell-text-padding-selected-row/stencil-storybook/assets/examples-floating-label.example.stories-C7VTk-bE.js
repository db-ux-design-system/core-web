import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-6dzo3qU4.js";import{n as i,t as a}from"./apply-web-component-args-WLmUBxRd.js";var o=t({DefaultEmpty:()=>l,Disabled:()=>d,Filled:()=>u,Invalid:()=>f,__namedExportsOrder:()=>p,default:()=>c}),s,c,l,u,d,f,p;function m(){return(m=e((()=>{r(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBSelect/Examples Floating Label`,component:`db-select`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:s()},argTypes:{options:{control:`object`},label:{control:`text`},placeholder:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},showLabel:{control:`boolean`},message:{control:`text`},showMessage:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},disabled:{control:`boolean`},showIcon:{control:`boolean`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},name:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},size:{control:`number`},multiple:{control:`boolean`},showEmptyOption:{control:`boolean`},autocomplete:{control:`text`},messageIcon:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},l={args:{label:`Label`,variant:`floating`,placeholder:`(Default) Empty`,options:[{value:`Option 1`},{value:`Option 2`},{value:`Option 3`},{value:`Option 4`},{value:`Option 5`}]},render:({children:e,...t})=>n`<div style="width: 300px"><db-select ${i(t)}></db-select></div>`},u={args:{label:`Label`,value:`Filled`,variant:`floating`,placeholder:`Filled`,options:[{value:`Filled`,selected:!0},{value:`Option 2`}]},render:({children:e,...t})=>n`<div style="width: 300px"><db-select ${i(t)}></db-select></div>`},d={args:{label:`Label`,variant:`floating`,value:`Disabled`,placeholder:`Disabled`,options:[{value:`Disabled`,selected:!0},{value:`Option 2`}],disabled:!0},render:({children:e,...t})=>n`<div style="width: 300px"><db-select ${i(t)}></db-select></div>`},f={args:{label:`Label`,placeholder:`Invalid`,variant:`floating`,validation:`invalid`,invalidMessage:`Invalid Message`,options:[{value:`Option 1`},{value:`Option 2`},{value:`Option 3`},{value:`Option 4`},{value:`Option 5`}]},render:({children:e,...t})=>n`<div style="width: 300px"><db-select ${i(t)}></db-select></div>`},p=[`DefaultEmpty`,`Filled`,`Disabled`,`Invalid`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
  }: any) => html\`<div style="width: 300px"><db-select \${spreadArgs(args)}></db-select></div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
  }: any) => html\`<div style="width: 300px"><db-select \${spreadArgs(args)}></db-select></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
  }: any) => html\`<div style="width: 300px"><db-select \${spreadArgs(args)}></db-select></div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
  }: any) => html\`<div style="width: 300px"><db-select \${spreadArgs(args)}></db-select></div>\`
}`,...f.parameters?.docs?.source}}}})))()}export{o as a,f as i,d as n,m as o,u as r,l as t};