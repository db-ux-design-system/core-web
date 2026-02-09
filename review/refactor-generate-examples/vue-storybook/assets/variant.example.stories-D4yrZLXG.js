import{_ as a}from"./input-CODHB90g.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./constants-qyp1P7vr.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";import"./infotext-C1MSMu4c.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBInput/Variant",component:a,render:e=>({components:{DBInput:a},setup(){return{args:e}},template:`
      <DBInput v-bind="args">
      ${e.default}
      </DBInput>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},disabled:{control:"boolean"},readOnly:{control:"text"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},icon:{control:"text"},showIcon:{control:"boolean"},iconTrailing:{control:"text"},showIconTrailing:{control:"boolean"},minLength:{control:"text"},maxLength:{control:"text"},type:{control:"text"},min:{control:"text"},max:{control:"text"},dataList:{control:"text"},placeholder:{control:"text"}}},t={args:{default:"",label:"Label",placeholder:"(Default) Above"}},o={args:{default:"",label:"Label",variant:"floating",placeholder:"Floating",value:"Floating"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "label": "Label",
    "placeholder": "(Default) Above"
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "label": "Label",
    "variant": "floating",
    "placeholder": "Floating",
    "value": "Floating"
  }
}`,...o.parameters?.docs?.source}}};const u=["DefaultAbove","Floating"];export{t as DefaultAbove,o as Floating,u as __namedExportsOrder,m as default};
