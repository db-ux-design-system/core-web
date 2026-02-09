import{_ as l}from"./input-CODHB90g.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./constants-qyp1P7vr.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";import"./infotext-C1MSMu4c.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBInput/State",component:l,render:o=>({components:{DBInput:l},setup(){return{args:o}},template:`
      <DBInput v-bind="args">
      ${o.default}
      </DBInput>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},disabled:{control:"boolean"},readOnly:{control:"text"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},icon:{control:"text"},showIcon:{control:"boolean"},iconTrailing:{control:"text"},showIconTrailing:{control:"boolean"},minLength:{control:"text"},maxLength:{control:"text"},type:{control:"text"},min:{control:"text"},max:{control:"text"},dataList:{control:"text"},placeholder:{control:"text"}}},e={args:{default:"",label:"Label",placeholder:"(Default) Empty"}},t={args:{default:"",label:"Label",value:"Filled",placeholder:"Filled"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "label": "Label",
    "placeholder": "(Default) Empty"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "label": "Label",
    "value": "Filled",
    "placeholder": "Filled"
  }
}`,...t.parameters?.docs?.source}}};const u=["DefaultEmpty","Filled"];export{e as DefaultEmpty,t as Filled,u as __namedExportsOrder,m as default};
