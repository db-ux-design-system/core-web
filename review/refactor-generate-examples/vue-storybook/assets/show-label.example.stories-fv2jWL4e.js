import{_ as r}from"./infotext-C1MSMu4c.js";import{_ as a}from"./radio-o7Uv79jD.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,i={title:"Components/DBRadio/Show Label",component:a,render:t=>({components:{DBRadio:a,DBInfotext:r},setup(){return{args:t}},template:`
      <DBRadio v-bind="args">
      ${t.default}
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
}`,...o.parameters?.docs?.source}}};const p=["DefaultTrue","False"];export{e as DefaultTrue,o as False,p as __namedExportsOrder,i as default};
