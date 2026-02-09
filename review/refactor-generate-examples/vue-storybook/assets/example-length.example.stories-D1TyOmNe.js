import{_ as a}from"./input-CODHB90g.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./constants-qyp1P7vr.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";import"./infotext-C1MSMu4c.js";const{fn:g}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBInput/Example - Length",component:a,render:o=>({components:{DBInput:a},setup(){return{args:o}},template:`
      <DBInput v-bind="args">
      ${o.default}
      </DBInput>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},disabled:{control:"boolean"},readOnly:{control:"text"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},icon:{control:"text"},showIcon:{control:"boolean"},iconTrailing:{control:"text"},showIconTrailing:{control:"boolean"},minLength:{control:"text"},maxLength:{control:"text"},type:{control:"text"},min:{control:"text"},max:{control:"text"},dataList:{control:"text"},placeholder:{control:"text"}}},e={args:{default:"",minLength:3,label:"Label",placeholder:"MinLength"}},t={args:{default:"",maxLength:5,label:"Label",placeholder:"MaxLength"}},n={args:{default:"",minLength:3,maxLength:5,label:"Label",placeholder:"MinMaxLength"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "minLength": 3,
    "label": "Label",
    "placeholder": "MinLength"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "maxLength": 5,
    "label": "Label",
    "placeholder": "MaxLength"
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "minLength": 3,
    "maxLength": 5,
    "label": "Label",
    "placeholder": "MinMaxLength"
  }
}`,...n.parameters?.docs?.source}}};const h=["MinLength","MaxLength","MinMaxLength"];export{t as MaxLength,e as MinLength,n as MinMaxLength,h as __namedExportsOrder,d as default};
