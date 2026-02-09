import{_ as o}from"./textarea-95QrgLws.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./constants-qyp1P7vr.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";import"./infotext-C1MSMu4c.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBTextarea/Show Required Asterisk",component:o,render:t=>({components:{DBTextarea:o},setup(){return{args:t}},template:`
      <DBTextarea v-bind="args">
      ${t.default}
      </DBTextarea>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},showMessage:{control:"boolean"},message:{control:"text"},disabled:{control:"boolean"},readOnly:{control:"text"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},rows:{control:"text"},showResizer:{control:"boolean"},fieldSizing:{control:"text"}}},e={args:{default:"",required:!0,showRequiredAsterisk:!0,label:"Label",placeholder:"(Default) True"}},r={args:{default:"",required:!0,showRequiredAsterisk:!1,label:"Label",placeholder:"False"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "required": true,
    "showRequiredAsterisk": true,
    "label": "Label",
    "placeholder": "(Default) True"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "required": true,
    "showRequiredAsterisk": false,
    "label": "Label",
    "placeholder": "False"
  }
}`,...r.parameters?.docs?.source}}};const m=["DefaultTrue","False"];export{e as DefaultTrue,r as False,m as __namedExportsOrder,p as default};
