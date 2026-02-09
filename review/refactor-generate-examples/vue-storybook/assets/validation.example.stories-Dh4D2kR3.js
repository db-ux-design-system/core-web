import{_ as t}from"./textarea-95QrgLws.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./constants-qyp1P7vr.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";import"./infotext-C1MSMu4c.js";const{fn:v}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBTextarea/Validation",component:t,render:l=>({components:{DBTextarea:t},setup(){return{args:l}},template:`
      <DBTextarea v-bind="args">
      ${l.default}
      </DBTextarea>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},showMessage:{control:"boolean"},message:{control:"text"},disabled:{control:"boolean"},readOnly:{control:"text"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},rows:{control:"text"},showResizer:{control:"boolean"},fieldSizing:{control:"text"}}},a={args:{default:"",label:"Label",validation:"no-validation",placeholder:"(Default) No validation"}},e={args:{default:"",label:"Label",validation:"invalid",invalidMessage:"Invalid Message",placeholder:"Invalid"}},o={args:{default:"",label:"Label",validation:"valid",validMessage:"Valid message",placeholder:"Valid"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const u=["DefaultNovalidation","Invalid","Valid"];export{a as DefaultNovalidation,e as Invalid,o as Valid,u as __namedExportsOrder,m as default};
