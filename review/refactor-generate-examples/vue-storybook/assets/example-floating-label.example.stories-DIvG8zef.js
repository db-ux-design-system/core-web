import{_ as r}from"./input-CODHB90g.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./constants-qyp1P7vr.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";import"./infotext-C1MSMu4c.js";const{fn:g}=__STORYBOOK_MODULE_TEST__,b={title:"Components/DBInput/Example Floating Label",component:r,render:n=>({components:{DBInput:r},setup(){return{args:n}},template:`
      <DBInput v-bind="args">
      ${n.default}
      </DBInput>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},disabled:{control:"boolean"},readOnly:{control:"text"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},icon:{control:"text"},showIcon:{control:"boolean"},iconTrailing:{control:"text"},showIconTrailing:{control:"boolean"},minLength:{control:"text"},maxLength:{control:"text"},type:{control:"text"},min:{control:"text"},max:{control:"text"},dataList:{control:"text"},placeholder:{control:"text"}}},e={args:{default:"",label:"Label",variant:"floating",placeholder:"(Default) Empty"}},a={args:{default:"",label:"Label",value:"Filled",variant:"floating",placeholder:"Filled"}},l={args:{default:"",disabled:!0,label:"Label",variant:"floating",placeholder:"Disabled"}},t={args:{default:"",readOnly:!0,label:"Label",value:"Readonly - Filled",variant:"floating",placeholder:"Readonly - Filled"}},o={args:{default:"",label:"Label",validation:"invalid",invalidMessage:"Invalid Message",variant:"floating",placeholder:"Invalid"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "label": "Label",
    "variant": "floating",
    "placeholder": "(Default) Empty"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "label": "Label",
    "value": "Filled",
    "variant": "floating",
    "placeholder": "Filled"
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "disabled": true,
    "label": "Label",
    "variant": "floating",
    "placeholder": "Disabled"
  }
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "readOnly": true,
    "label": "Label",
    "value": "Readonly - Filled",
    "variant": "floating",
    "placeholder": "Readonly - Filled"
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "label": "Label",
    "validation": "invalid",
    "invalidMessage": "Invalid Message",
    "variant": "floating",
    "placeholder": "Invalid"
  }
}`,...o.parameters?.docs?.source}}};const v=["DefaultEmpty","Filled","Disabled","ReadonlyFilled","Invalid"];export{e as DefaultEmpty,l as Disabled,a as Filled,o as Invalid,t as ReadonlyFilled,v as __namedExportsOrder,b as default};
