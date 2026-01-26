import{_ as a}from"./switch-Bh3YLLGr.js";import"./iframe-D4GwdY-M.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BI2mJmbL.js";import"./index-CeOJJTBm.js";import"./form-components-B2LcTOtB.js";import"./infotext-CNKaL6ue.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBSwitch/Show Label",component:a,render:t=>({components:{DBSwitch:a},setup(){return{args:t}},template:`
      <DBSwitch v-bind="args">
      ${t.default}
      </DBSwitch>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},visualAid:{control:"text"},iconLeading:{control:"text"},iconTrailing:{control:"text"},size:{control:"text"},label:{control:"text"},variant:{control:"text"},showLabel:{control:"boolean"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},showMessage:{control:"boolean"},message:{control:"text"},icon:{control:"text"}}},e={args:{default:"(Default) True",showLabel:!0}},o={args:{default:"False",showLabel:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "(Default) True",
    "showLabel": true
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    default: "False",
    "showLabel": false
  }
}`,...o.parameters?.docs?.source}}};const p=["DefaultTrue","False"];export{e as DefaultTrue,o as False,p as __namedExportsOrder,m as default};
