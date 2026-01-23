import{_ as r}from"./tab-item-BBkeaNpd.js";import"./iframe-IRMWFPfw.js";import"./preload-helper-_n2GBM2K.js";import"./index-S2nzjHTj.js";import"./form-components-DporCuVj.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBTabItem/Show Icon Leading",component:r,render:a=>({components:{DBTabItem:r},setup(){return{args:a}},template:`
      <DBTabItem v-bind="args">
      ${a.default}
      </DBTabItem>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},active:{control:"text"},disabled:{control:"boolean"},icon:{control:"text"},showIcon:{control:"boolean"},iconTrailing:{control:"text"},showIconTrailing:{control:"boolean"}}},e={args:{showIcon:!1,label:"(Default) False",icon:"x_placeholder"}},o={args:{showIcon:!0,label:"True",icon:"x_placeholder"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "showIcon": false,
    "label": "(Default) False",
    "icon": "x_placeholder"
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "showIcon": true,
    "label": "True",
    "icon": "x_placeholder"
  }
}`,...o.parameters?.docs?.source}}};const i=["DefaultFalse","True"];export{e as DefaultFalse,o as True,i as __namedExportsOrder,p as default};
