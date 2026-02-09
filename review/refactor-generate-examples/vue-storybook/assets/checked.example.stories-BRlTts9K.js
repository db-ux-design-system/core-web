import{_ as t}from"./radio-o7Uv79jD.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBRadio/Checked",component:t,render:a=>({components:{DBRadio:t},setup(){return{args:a}},template:`
      <DBRadio v-bind="args">
      ${a.default}
      </DBRadio>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},validation:{control:"text"},size:{control:"text"},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"}}},e={args:{default:"(Default) False",name:"Checked"}},o={args:{default:"True",checked:!0,name:"Checked"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "(Default) False",
    "name": "Checked"
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    default: "True",
    "checked": true,
    "name": "Checked"
  }
}`,...o.parameters?.docs?.source}}};const m=["DefaultFalse","True"];export{e as DefaultFalse,o as True,m as __namedExportsOrder,u as default};
