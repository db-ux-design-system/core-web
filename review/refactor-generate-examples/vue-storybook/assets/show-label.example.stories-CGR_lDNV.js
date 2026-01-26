import{_ as t}from"./radio-BIgLOyW5.js";import"./iframe-D4GwdY-M.js";import"./preload-helper-_n2GBM2K.js";import"./index-CeOJJTBm.js";import"./form-components-B2LcTOtB.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBRadio/Show Label",component:t,render:a=>({components:{DBRadio:t},setup(){return{args:a}},template:`
      <DBRadio v-bind="args">
      ${a.default}
      </DBRadio>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},validation:{control:"text"},size:{control:"text"},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"}}},e={args:{default:"(Default) True",showLabel:!0,name:"Content"}},o={args:{default:"False",showLabel:!1,name:"Content"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "(Default) True",
    "showLabel": true,
    "name": "Content"
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    default: "False",
    "showLabel": false,
    "name": "Content"
  }
}`,...o.parameters?.docs?.source}}};const m=["DefaultTrue","False"];export{e as DefaultTrue,o as False,m as __namedExportsOrder,d as default};
