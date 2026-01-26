import{_ as r}from"./tab-item-BHhqGf67.js";import"./iframe-D4GwdY-M.js";import"./preload-helper-_n2GBM2K.js";import"./index-CeOJJTBm.js";import"./form-components-B2LcTOtB.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBTabItem/Behavior",component:r,render:o=>({components:{DBTabItem:r},setup(){return{args:o}},template:`
      <DBTabItem v-bind="args">
      ${o.default}
      </DBTabItem>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},active:{control:"text"},disabled:{control:"boolean"},icon:{control:"text"},showIcon:{control:"boolean"},iconTrailing:{control:"text"},showIconTrailing:{control:"boolean"}}},t={args:{label:"(Default) Auto Width"}},e={args:{style:{width:"500px"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) Auto Width"
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "style": {
      width: '500px'
    }
  }
}`,...e.parameters?.docs?.source}}};const d=["DefaultAutoWidth","Widthfull"];export{t as DefaultAutoWidth,e as Widthfull,d as __namedExportsOrder,m as default};
