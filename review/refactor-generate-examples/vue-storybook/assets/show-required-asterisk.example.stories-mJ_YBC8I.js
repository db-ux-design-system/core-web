import{_ as o}from"./radio-CMd3WBB_.js";import"./iframe-6Mx4-xKM.js";import"./preload-helper-_n2GBM2K.js";import"./index-S2nzjHTj.js";import"./form-components-DporCuVj.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBRadio/Show Required Asterisk",component:o,render:t=>({components:{DBRadio:o},setup(){return{args:t}},template:`
      <DBRadio v-bind="args">
      ${t.default}
      </DBRadio>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},validation:{control:"text"},size:{control:"text"},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"}}},e={args:{default:"(Default) True",required:!0,showRequiredAsterisk:!0,name:"Asterisk"}},r={args:{default:"False",required:!0,showRequiredAsterisk:!1,name:"Asterisk"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const c=["DefaultTrue","False"];export{e as DefaultTrue,r as False,c as __namedExportsOrder,d as default};
