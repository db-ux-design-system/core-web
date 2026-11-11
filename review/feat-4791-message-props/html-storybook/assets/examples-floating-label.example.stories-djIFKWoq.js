import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./select-Cqq_snRA.js";var a=t({DefaultEmpty:()=>l,Disabled:()=>d,Filled:()=>u,Invalid:()=>f,__namedExportsOrder:()=>p,default:()=>c}),o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{r(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBSelect/Examples Floating Label`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:s()},argTypes:{options:{control:`object`},label:{control:`text`},placeholder:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},showLabel:{control:`boolean`},message:{control:`text`},messageProps:{control:`object`},validMessageProps:{control:`object`},invalidMessageProps:{control:`object`},showMessage:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},disabled:{control:`boolean`},showIcon:{control:`boolean`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},name:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},size:{control:`number`},multiple:{control:`boolean`},showEmptyOption:{control:`boolean`},autocomplete:{control:`text`},messageIcon:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},l={args:{label:`Label`,variant:`floating`,placeholder:`(Default) Empty`,options:[{value:`Option 1`},{value:`Option 2`},{value:`Option 3`},{value:`Option 4`},{value:`Option 5`}]},render:e=>(0,o.jsx)(`div`,{style:{width:`300px`},children:(0,o.jsx)(i,{...e})})},u={args:{label:`Label`,value:`Filled`,variant:`floating`,placeholder:`Filled`,options:[{value:`Filled`,selected:!0},{value:`Option 2`}]},render:e=>(0,o.jsx)(`div`,{style:{width:`300px`},children:(0,o.jsx)(i,{...e})})},d={args:{label:`Label`,variant:`floating`,value:`Disabled`,placeholder:`Disabled`,options:[{value:`Disabled`,selected:!0},{value:`Option 2`}],disabled:!0},render:e=>(0,o.jsx)(`div`,{style:{width:`300px`},children:(0,o.jsx)(i,{...e})})},f={args:{label:`Label`,placeholder:`Invalid`,variant:`floating`,validation:`invalid`,invalidMessage:`Invalid Message`,options:[{value:`Option 1`},{value:`Option 2`},{value:`Option 3`},{value:`Option 4`},{value:`Option 5`}]},render:e=>(0,o.jsx)(`div`,{style:{width:`300px`},children:(0,o.jsx)(i,{...e})})},p=[`DefaultEmpty`,`Filled`,`Disabled`,`Invalid`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBSelect {...properties} /></div>
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
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBSelect {...properties} /></div>
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
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBSelect {...properties} /></div>
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
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBSelect {...properties} /></div>
}`,...f.parameters?.docs?.source}}}})))()}export{a,f as i,d as n,m as o,u as r,l as t};