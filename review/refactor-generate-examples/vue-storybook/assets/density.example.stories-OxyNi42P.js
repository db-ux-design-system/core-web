import{_ as r}from"./input-CODHB90g.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./constants-qyp1P7vr.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";import"./infotext-C1MSMu4c.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBInput/Density",component:r,render:a=>({components:{DBInput:r},setup(){return{args:a}},template:`
      <DBInput v-bind="args">
      ${a.default}
      </DBInput>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},disabled:{control:"boolean"},readOnly:{control:"text"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},icon:{control:"text"},showIcon:{control:"boolean"},iconTrailing:{control:"text"},showIconTrailing:{control:"boolean"},minLength:{control:"text"},maxLength:{control:"text"},type:{control:"text"},min:{control:"text"},max:{control:"text"},dataList:{control:"text"},placeholder:{control:"text"}}},e={args:{default:"","data-density":"functional",label:"Label",placeholder:"Functional"}},t={args:{default:"","data-density":"regular",label:"Label",placeholder:"(Default) Regular"}},o={args:{default:"","data-density":"expressive",label:"Label",placeholder:"Expressive"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "data-density": "functional",
    "label": "Label",
    "placeholder": "Functional"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "data-density": "regular",
    "label": "Label",
    "placeholder": "(Default) Regular"
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "data-density": "expressive",
    "label": "Label",
    "placeholder": "Expressive"
  }
}`,...o.parameters?.docs?.source}}};const x=["Functional","DefaultRegular","Expressive"];export{t as DefaultRegular,o as Expressive,e as Functional,x as __namedExportsOrder,m as default};
