import{_ as n}from"./switch-BKUXWiSr.js";import"./iframe-CgwUe40S.js";import"./preload-helper-_n2GBM2K.js";import"./constants-B3j-ayWu.js";import"./index-CeOJJTBm.js";import"./form-components-DH866HtI.js";import"./infotext--aWAJ7b2.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,g={title:"Components/DBSwitch/Visual Aid",component:n,render:t=>({components:{DBSwitch:n},setup(){return{args:t}},template:`
      <DBSwitch v-bind="args">
      ${t.default}
      </DBSwitch>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},visualAid:{control:"text"},iconLeading:{control:"text"},iconTrailing:{control:"text"},size:{control:"text"},label:{control:"text"},variant:{control:"text"},showLabel:{control:"boolean"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},showMessage:{control:"boolean"},message:{control:"text"},icon:{control:"text"}}},e={args:{default:"(Default) False (Unchecked)",visualAid:!1}},a={args:{default:"(Default) False (Checked)",visualAid:!1,checked:!0}},o={args:{default:"True (Unchecked)",visualAid:!0,iconLeading:"moon",iconTrailing:"sun"}},r={args:{default:"True (Checked)",visualAid:!0,checked:!0,iconLeading:"moon",iconTrailing:"sun"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "(Default) False (Unchecked)",
    "visualAid": false
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    default: "(Default) False (Checked)",
    "visualAid": false,
    "checked": true
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    default: "True (Unchecked)",
    "visualAid": true,
    "iconLeading": "moon",
    "iconTrailing": "sun"
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    default: "True (Checked)",
    "visualAid": true,
    "checked": true,
    "iconLeading": "moon",
    "iconTrailing": "sun"
  }
}`,...r.parameters?.docs?.source}}};const h=["DefaultFalseUnchecked","DefaultFalseChecked","TrueUnchecked","TrueChecked"];export{a as DefaultFalseChecked,e as DefaultFalseUnchecked,r as TrueChecked,o as TrueUnchecked,h as __namedExportsOrder,g as default};
