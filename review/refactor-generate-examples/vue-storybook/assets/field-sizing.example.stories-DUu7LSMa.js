import{_ as a}from"./textarea-95QrgLws.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./constants-qyp1P7vr.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";import"./infotext-C1MSMu4c.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBTextarea/Field Sizing",component:a,render:o=>({components:{DBTextarea:a},setup(){return{args:o}},template:`
      <DBTextarea v-bind="args">
      ${o.default}
      </DBTextarea>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},showMessage:{control:"boolean"},message:{control:"text"},disabled:{control:"boolean"},readOnly:{control:"text"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},rows:{control:"text"},showResizer:{control:"boolean"},fieldSizing:{control:"text"}}},e={args:{default:"",label:"Label",fieldSizing:"fixed",placeholder:"(Default) Fixed"},decorators:[()=>({template:'<div style="  width:300px"><story /></div>'})]},t={args:{default:"",label:"Label",fieldSizing:"content",placeholder:"Content"},decorators:[()=>({template:'<div style="  width:300px"><story /></div>'})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "label": "Label",
    "fieldSizing": "fixed",
    "placeholder": "(Default) Fixed"
  },
  decorators: [() => ({
    template: \`<div style="  width:300px"><story /></div>\`
  })]
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "label": "Label",
    "fieldSizing": "content",
    "placeholder": "Content"
  },
  decorators: [() => ({
    template: \`<div style="  width:300px"><story /></div>\`
  })]
}`,...t.parameters?.docs?.source}}};const x=["DefaultFixed","Content"];export{t as Content,e as DefaultFixed,x as __namedExportsOrder,m as default};
