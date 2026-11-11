import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./select-Bu2-PBzT.js";var a=t({DefaultNovalidation:()=>l,Invalid:()=>u,Valid:()=>d,__namedExportsOrder:()=>f,default:()=>c}),o,s,c,l,u,d,f;function p(){return(p=e((()=>{r(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBSelect/Validation`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:s()},argTypes:{options:{control:`object`},label:{control:`text`},placeholder:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},showLabel:{control:`boolean`},message:{control:`text`},showMessage:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},disabled:{control:`boolean`},showIcon:{control:`boolean`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},name:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},size:{control:`number`},multiple:{control:`boolean`},showEmptyOption:{control:`boolean`},autocomplete:{control:`text`},messageIcon:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},l={args:{label:`Label`,validation:`no-validation`,placeholder:`(Default) No validation`,options:[{value:`Option 1`},{value:`Option 2`},{value:`Option 3`},{value:`Option 4`},{value:`Option 5`}]},render:e=>(0,o.jsx)(`div`,{style:{width:`300px`},children:(0,o.jsx)(i,{...e})})},u={args:{label:`Label`,validation:`invalid`,invalidMessage:`Invalid Message`,placeholder:`Invalid`,options:[{value:`Option 1`},{value:`Option 2`},{value:`Option 3`},{value:`Option 4`},{value:`Option 5`}]},render:e=>(0,o.jsx)(`div`,{style:{width:`300px`},children:(0,o.jsx)(i,{...e})})},d={args:{label:`Label`,validation:`valid`,validMessage:`Valid message`,placeholder:`Valid`,options:[{value:`Valid`,selected:!0},{value:`Option 2`}]},render:e=>(0,o.jsx)(`div`,{style:{width:`300px`},children:(0,o.jsx)(i,{...e})})},f=[`DefaultNovalidation`,`Invalid`,`Valid`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBSelect {...properties} /></div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBSelect {...properties} /></div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBSelect {...properties} /></div>
}`,...d.parameters?.docs?.source}}}})))()}export{a,p as i,u as n,d as r,l as t};