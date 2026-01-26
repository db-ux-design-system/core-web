import{_ as t}from"./checkbox-DN6mLQpW.js";import"./iframe-D4GwdY-M.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BI2mJmbL.js";import"./index-CeOJJTBm.js";import"./form-components-B2LcTOtB.js";import"./infotext-CNKaL6ue.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,i={title:"Components/DBCheckbox/Show Label",component:t,render:a=>({components:{DBCheckbox:t},setup(){return{args:a}},template:`
      <DBCheckbox v-bind="args">
      ${a.default}
      </DBCheckbox>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},indeterminate:{control:"text"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},size:{control:"text"},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"}}},e={args:{default:"(Default) True",showLabel:!0,name:"Label"}},o={args:{default:"False",showLabel:!1,name:"Label"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const p=["DefaultTrue","False"];export{e as DefaultTrue,o as False,p as __namedExportsOrder,i as default};
