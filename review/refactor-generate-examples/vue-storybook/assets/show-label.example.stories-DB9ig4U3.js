import{_ as r}from"./infotext-C1MSMu4c.js";import{_ as t}from"./checkbox-B-3mJP4_.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./index-B493XNFi.js";import"./constants-qyp1P7vr.js";import"./form-components-DlJa7Tu6.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBCheckbox/Show Label",component:t,render:a=>({components:{DBCheckbox:t,DBInfotext:r},setup(){return{args:a}},template:`
      <DBCheckbox v-bind="args">
      ${a.default}
      </DBCheckbox>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},indeterminate:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},size:{control:"text"},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"}}},e={args:{default:"(Default) True",showLabel:!0,name:"Label"}},o={args:{default:"False",showLabel:!1,name:"Label"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "(Default) True",
    "showLabel": true,
    "name": "Label"
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    default: "False",
    "showLabel": false,
    "name": "Label"
  }
}`,...o.parameters?.docs?.source}}};const b=["DefaultTrue","False"];export{e as DefaultTrue,o as False,b as __namedExportsOrder,p as default};
