import{_ as l}from"./input-CODHB90g.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./constants-qyp1P7vr.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";import"./infotext-C1MSMu4c.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBInput/Validation",component:l,render:t=>({components:{DBInput:l},setup(){return{args:t}},template:`
      <DBInput v-bind="args">
      ${t.default}
      </DBInput>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},disabled:{control:"boolean"},readOnly:{control:"text"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},icon:{control:"text"},showIcon:{control:"boolean"},iconTrailing:{control:"text"},showIconTrailing:{control:"boolean"},minLength:{control:"text"},maxLength:{control:"text"},type:{control:"text"},min:{control:"text"},max:{control:"text"},dataList:{control:"text"},placeholder:{control:"text"}}},a={args:{default:"",label:"Label",validation:"no-validation",placeholder:"(Default) No validation"}},e={args:{default:"",label:"Label",validation:"invalid",invalidMessage:"Invalid Message",placeholder:"Invalid"}},o={args:{default:"",label:"Label",validation:"valid",validMessage:"Valid message",placeholder:"Valid"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "label": "Label",
    "validation": "no-validation",
    "placeholder": "(Default) No validation"
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "label": "Label",
    "validation": "invalid",
    "invalidMessage": "Invalid Message",
    "placeholder": "Invalid"
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "label": "Label",
    "validation": "valid",
    "validMessage": "Valid message",
    "placeholder": "Valid"
  }
}`,...o.parameters?.docs?.source}}};const v=["DefaultNovalidation","Invalid","Valid"];export{a as DefaultNovalidation,e as Invalid,o as Valid,v as __namedExportsOrder,u as default};
