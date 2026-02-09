import{_ as t}from"./textarea-95QrgLws.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./constants-qyp1P7vr.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";import"./infotext-C1MSMu4c.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBTextarea/Show Message",component:t,render:o=>({components:{DBTextarea:t},setup(){return{args:o}},template:`
      <DBTextarea v-bind="args">
      ${o.default}
      </DBTextarea>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},showMessage:{control:"boolean"},message:{control:"text"},disabled:{control:"boolean"},readOnly:{control:"text"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},rows:{control:"text"},showResizer:{control:"boolean"},fieldSizing:{control:"text"}}},e={args:{default:"",showMessage:!1,label:"Label",placeholder:"(Default) False"}},a={args:{default:"",showMessage:!0,label:"Label",message:"Message",placeholder:"true"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "showMessage": false,
    "label": "Label",
    "placeholder": "(Default) False"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "showMessage": true,
    "label": "Label",
    "message": "Message",
    "placeholder": "true"
  }
}`,...a.parameters?.docs?.source}}};const m=["DefaultFalse","True"];export{e as DefaultFalse,a as True,m as __namedExportsOrder,p as default};
