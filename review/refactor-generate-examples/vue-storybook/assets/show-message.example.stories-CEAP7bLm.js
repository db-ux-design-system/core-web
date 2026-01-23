import{_ as a}from"./select-Pyv2z1PY.js";import"./iframe-6Mx4-xKM.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BI2mJmbL.js";import"./index-S2nzjHTj.js";import"./form-components-DporCuVj.js";import"./infotext-iunmPScm.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBSelect/Show Message",component:a,render:o=>({components:{DBSelect:a},setup(){return{args:o}},template:`
      <DBSelect v-bind="args">
      ${o.default}
      </DBSelect>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"text"},label:{control:"text"},placeholder:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},disabled:{control:"boolean"},icon:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"}}},e={args:{options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"}],showMessage:!1,label:"Label",message:"Message",placeholder:"(Default) False"},decorators:[()=>({template:'<div style="  width: 300px"><story /></div>'})]},t={args:{options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"}],showMessage:!0,label:"Label",message:"Message",placeholder:"True"},decorators:[()=>({template:'<div style="  width: 300px"><story /></div>'})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
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
    "showMessage": false,
    "label": "Label",
    "message": "Message",
    "placeholder": "(Default) False"
  },
  decorators: [() => ({
    template: \`<div style="  width: 300px"><story /></div>\`
  })]
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
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
    "showMessage": true,
    "label": "Label",
    "message": "Message",
    "placeholder": "True"
  },
  decorators: [() => ({
    template: \`<div style="  width: 300px"><story /></div>\`
  })]
}`,...t.parameters?.docs?.source}}};const v=["DefaultFalse","True"];export{e as DefaultFalse,t as True,v as __namedExportsOrder,d as default};
