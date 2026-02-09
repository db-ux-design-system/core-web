import{_ as r}from"./input-CODHB90g.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./constants-qyp1P7vr.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";import"./infotext-C1MSMu4c.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBInput/Show Required Asterisk",component:r,render:o=>({components:{DBInput:r},setup(){return{args:o}},template:`
      <DBInput v-bind="args">
      ${o.default}
      </DBInput>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},disabled:{control:"boolean"},readOnly:{control:"text"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},icon:{control:"text"},showIcon:{control:"boolean"},iconTrailing:{control:"text"},showIconTrailing:{control:"boolean"},minLength:{control:"text"},maxLength:{control:"text"},type:{control:"text"},min:{control:"text"},max:{control:"text"},dataList:{control:"text"},placeholder:{control:"text"}}},e={args:{default:"",required:!0,showRequiredAsterisk:!0,label:"Label",placeholder:"(Default) True"}},t={args:{default:"",required:!0,showRequiredAsterisk:!1,label:"Label",placeholder:"False"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "required": true,
    "showRequiredAsterisk": true,
    "label": "Label",
    "placeholder": "(Default) True"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "required": true,
    "showRequiredAsterisk": false,
    "label": "Label",
    "placeholder": "False"
  }
}`,...t.parameters?.docs?.source}}};const m=["DefaultTrue","False"];export{e as DefaultTrue,t as False,m as __namedExportsOrder,p as default};
