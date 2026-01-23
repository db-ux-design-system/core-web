import{_ as o}from"./checkbox-CP42vnGw.js";import"./iframe-6Mx4-xKM.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BI2mJmbL.js";import"./index-S2nzjHTj.js";import"./form-components-DporCuVj.js";import"./infotext-iunmPScm.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBCheckbox/Show Required Asterisk",component:o,render:t=>({components:{DBCheckbox:o},setup(){return{args:t}},template:`
      <DBCheckbox v-bind="args">
      ${t.default}
      </DBCheckbox>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},indeterminate:{control:"text"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},size:{control:"text"},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"}}},e={args:{default:"(Default) True",required:!0,showRequiredAsterisk:!0,name:"Asterisk"}},r={args:{default:"False",required:!0,showRequiredAsterisk:!1,name:"Asterisk"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "(Default) True",
    "required": true,
    "showRequiredAsterisk": true,
    "name": "Asterisk"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    default: "False",
    "required": true,
    "showRequiredAsterisk": false,
    "name": "Asterisk"
  }
}`,...r.parameters?.docs?.source}}};const p=["DefaultTrue","False"];export{e as DefaultTrue,r as False,p as __namedExportsOrder,m as default};
