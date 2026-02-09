import{_ as r}from"./textarea-95QrgLws.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./constants-qyp1P7vr.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";import"./infotext-C1MSMu4c.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,b={title:"Components/DBTextarea/Examples Floating Label",component:r,render:o=>({components:{DBTextarea:r},setup(){return{args:o}},template:`
      <DBTextarea v-bind="args">
      ${o.default}
      </DBTextarea>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},showMessage:{control:"boolean"},message:{control:"text"},disabled:{control:"boolean"},readOnly:{control:"text"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},rows:{control:"text"},showResizer:{control:"boolean"},fieldSizing:{control:"text"}}},e={args:{default:"",label:"Label",variant:"floating",placeholder:"(Default) Empty"}},a={args:{default:"",label:"Label",value:"Filled",variant:"floating",placeholder:"Filled"}},l={args:{default:"",disabled:!0,label:"Label",variant:"floating",placeholder:"Disabled"}},t={args:{default:"",readOnly:!0,label:"Label",value:"Readonly - Filled",variant:"floating",placeholder:"Readonly - Filled"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const g=["DefaultEmpty","Filled","Disabled","ReadonlyFilled"];export{e as DefaultEmpty,l as Disabled,a as Filled,t as ReadonlyFilled,g as __namedExportsOrder,b as default};
