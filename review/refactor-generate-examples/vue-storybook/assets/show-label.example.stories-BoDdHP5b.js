import{_ as t}from"./textarea-95QrgLws.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./constants-qyp1P7vr.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";import"./infotext-C1MSMu4c.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBTextarea/Show Label",component:t,render:a=>({components:{DBTextarea:t},setup(){return{args:a}},template:`
      <DBTextarea v-bind="args">
      ${a.default}
      </DBTextarea>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},showMessage:{control:"boolean"},message:{control:"text"},disabled:{control:"boolean"},readOnly:{control:"text"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},rows:{control:"text"},showResizer:{control:"boolean"},fieldSizing:{control:"text"}}},e={args:{default:"",showLabel:!0,label:"Label",placeholder:"(Default) True"}},o={args:{default:"",showLabel:!1,label:"Label",placeholder:"False"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "showLabel": true,
    "label": "Label",
    "placeholder": "(Default) True"
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "showLabel": false,
    "label": "Label",
    "placeholder": "False"
  }
}`,...o.parameters?.docs?.source}}};const m=["DefaultTrue","False"];export{e as DefaultTrue,o as False,m as __namedExportsOrder,p as default};
