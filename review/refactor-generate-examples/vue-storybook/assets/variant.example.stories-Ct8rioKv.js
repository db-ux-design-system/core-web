import{_ as o}from"./switch-DGRXZiRr.js";import"./iframe-CjHKGCyo.js";import"./preload-helper-_n2GBM2K.js";import"./constants-B3j-ayWu.js";import"./index-CeOJJTBm.js";import"./form-components-DH866HtI.js";import"./infotext-DiOvTvP0.js";const{fn:g}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBSwitch/Variant",component:o,render:a=>({components:{DBSwitch:o},setup(){return{args:a}},template:`
      <DBSwitch v-bind="args">
      ${a.default}
      </DBSwitch>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},visualAid:{control:"text"},iconLeading:{control:"text"},iconTrailing:{control:"text"},size:{control:"text"},label:{control:"text"},variant:{control:"text"},showLabel:{control:"boolean"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},showMessage:{control:"boolean"},message:{control:"text"},icon:{control:"text"}}},e={args:{default:"(Default) Trailing",label:"(Default) Trailing"}},t={args:{default:"Leading",label:"Leading",variant:"leading"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "(Default) Trailing",
    "label": "(Default) Trailing"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "Leading",
    "label": "Leading",
    "variant": "leading"
  }
}`,...t.parameters?.docs?.source}}};const u=["DefaultTrailing","Leading"];export{e as DefaultTrailing,t as Leading,u as __namedExportsOrder,m as default};
