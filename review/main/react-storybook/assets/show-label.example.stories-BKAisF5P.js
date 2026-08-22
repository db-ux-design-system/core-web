import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./select-DZBQNjHM.js";var i,a,o,s,c,l;function u(){return(u=e((()=>{n(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBSelect/Show Label`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:a()},argTypes:{options:{control:`object`},label:{control:`text`},placeholder:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},showLabel:{control:`boolean`},message:{control:`text`},showMessage:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},disabled:{control:`boolean`},showIcon:{control:`boolean`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},name:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},size:{control:`number`},multiple:{control:`boolean`},showEmptyOption:{control:`boolean`},autocomplete:{control:`text`},messageIcon:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},s={args:{label:`Label`,placeholder:`(Default) True`,options:[{value:`Option 1`},{value:`Option 2`},{value:`Option 3`},{value:`Option 4`},{value:`Option 5`}],showLabel:!0},render:e=>(0,i.jsx)(`div`,{style:{width:`300px`},children:(0,i.jsx)(r,{...e})})},c={args:{label:`Label`,placeholder:`False`,options:[{value:`Option 1`},{value:`Option 2`},{value:`Option 3`},{value:`Option 4`},{value:`Option 5`}],showLabel:!1},render:e=>(0,i.jsx)(`div`,{style:{width:`300px`},children:(0,i.jsx)(r,{...e})})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "placeholder": "(Default) True",
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
    "showLabel": true
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBSelect {...properties} /></div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "placeholder": "False",
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
    "showLabel": false
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBSelect {...properties} /></div>
}`,...c.parameters?.docs?.source}}},l=[`DefaultTrue`,`False`]})))()}u();export{s as DefaultTrue,c as False,l as __namedExportsOrder,o as default};