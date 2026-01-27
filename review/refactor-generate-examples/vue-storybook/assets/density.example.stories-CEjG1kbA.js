import{_ as r}from"./switch-DGRXZiRr.js";import"./iframe-CjHKGCyo.js";import"./preload-helper-_n2GBM2K.js";import"./constants-B3j-ayWu.js";import"./index-CeOJJTBm.js";import"./form-components-DH866HtI.js";import"./infotext-DiOvTvP0.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBSwitch/Density",component:r,render:a=>({components:{DBSwitch:r},setup(){return{args:a}},template:`
      <DBSwitch v-bind="args">
      ${a.default}
      </DBSwitch>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},visualAid:{control:"text"},iconLeading:{control:"text"},iconTrailing:{control:"text"},size:{control:"text"},label:{control:"text"},variant:{control:"text"},showLabel:{control:"boolean"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},showMessage:{control:"boolean"},message:{control:"text"},icon:{control:"text"}}},e={args:{default:"functional","data-density":"functional"}},t={args:{default:"regular (Default)","data-density":"regular"}},o={args:{default:"expressive","data-density":"expressive"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "functional",
    "data-density": "functional"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "regular (Default)",
    "data-density": "regular"
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    default: "expressive",
    "data-density": "expressive"
  }
}`,...o.parameters?.docs?.source}}};const g=["functional","regularDefault","expressive"];export{g as __namedExportsOrder,m as default,o as expressive,e as functional,t as regularDefault};
