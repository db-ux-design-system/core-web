import{_ as t}from"./textarea-95QrgLws.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./constants-qyp1P7vr.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";import"./infotext-C1MSMu4c.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBTextarea/Required",component:t,render:o=>({components:{DBTextarea:t},setup(){return{args:o}},template:`
      <DBTextarea v-bind="args">
      ${o.default}
      </DBTextarea>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},showMessage:{control:"boolean"},message:{control:"text"},disabled:{control:"boolean"},readOnly:{control:"text"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},rows:{control:"text"},showResizer:{control:"boolean"},fieldSizing:{control:"text"}}},e={args:{default:"",required:!1,label:"Label",placeholder:"(Default) False"}},r={args:{default:"",required:!0,label:"Label",placeholder:"True"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "required": false,
    "label": "Label",
    "placeholder": "(Default) False"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "required": true,
    "label": "Label",
    "placeholder": "True"
  }
}`,...r.parameters?.docs?.source}}};const m=["DefaultFalse","True"];export{e as DefaultFalse,r as True,m as __namedExportsOrder,p as default};
