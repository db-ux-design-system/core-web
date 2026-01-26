import{_ as a}from"./switch-CG2ffWQQ.js";import"./iframe-DibQWrOg.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BI2mJmbL.js";import"./index-hMc7d43z.js";import"./form-components-Pzox8QFX.js";import"./infotext-BXtUkf96.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBSwitch/Size",component:a,render:o=>({components:{DBSwitch:a},setup(){return{args:o}},template:`
      <DBSwitch v-bind="args">
      ${o.default}
      </DBSwitch>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},visualAid:{control:"text"},iconLeading:{control:"text"},iconTrailing:{control:"text"},size:{control:"text"},label:{control:"text"},variant:{control:"text"},showLabel:{control:"boolean"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},showMessage:{control:"boolean"},message:{control:"text"},icon:{control:"text"}}},e={args:{default:"(Default) Medium"}},t={args:{default:"Small",size:"small"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "(Default) Medium"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "Small",
    "size": "small"
  }
}`,...t.parameters?.docs?.source}}};const p=["DefaultMedium","Small"];export{e as DefaultMedium,t as Small,p as __namedExportsOrder,u as default};
