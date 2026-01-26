import{_ as r}from"./tab-item-BYp3ZGxF.js";import"./iframe-DibQWrOg.js";import"./preload-helper-_n2GBM2K.js";import"./index-hMc7d43z.js";import"./form-components-Pzox8QFX.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBTabItem/Behavior",component:r,render:o=>({components:{DBTabItem:r},setup(){return{args:o}},template:`
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
