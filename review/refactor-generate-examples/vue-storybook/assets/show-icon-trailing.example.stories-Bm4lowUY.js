import{_ as r}from"./input-CODHB90g.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./constants-qyp1P7vr.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";import"./infotext-C1MSMu4c.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBInput/Show Icon Trailing",component:r,render:t=>({components:{DBInput:r},setup(){return{args:t}},template:`
      <DBInput v-bind="args">
      ${t.default}
      </DBInput>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},disabled:{control:"boolean"},readOnly:{control:"text"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},icon:{control:"text"},showIcon:{control:"boolean"},iconTrailing:{control:"text"},showIconTrailing:{control:"boolean"},minLength:{control:"text"},maxLength:{control:"text"},type:{control:"text"},min:{control:"text"},max:{control:"text"},dataList:{control:"text"},placeholder:{control:"text"}}},e={args:{default:"",showIconTrailing:!1,label:"False",iconTrailing:"x_placeholder",placeholder:"(Default) False"}},o={args:{default:"",showIconTrailing:!0,label:"True",iconTrailing:"x_placeholder",placeholder:"True"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "showIconTrailing": false,
    "label": "False",
    "iconTrailing": "x_placeholder",
    "placeholder": "(Default) False"
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "showIconTrailing": true,
    "label": "True",
    "iconTrailing": "x_placeholder",
    "placeholder": "True"
  }
}`,...o.parameters?.docs?.source}}};const m=["DefaultFalse","True"];export{e as DefaultFalse,o as True,m as __namedExportsOrder,u as default};
