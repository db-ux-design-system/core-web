import{_ as r,a as n}from"./tab-list-D9dAxwvb.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";import"./constants-qyp1P7vr.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBTabItem/Show Icon Trailing",component:n,render:a=>({components:{DBTabItem:n,DBTabList:r},setup(){return{args:a}},template:`
      <DBTabItem v-bind="args">
      ${a.default}
      </DBTabItem>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},active:{control:"text"},disabled:{control:"boolean"},icon:{control:"text"},showIcon:{control:"boolean"},iconTrailing:{control:"text"},showIconTrailing:{control:"boolean"}}},e={args:{default:"",showIcon:!1,showIconTrailing:!1,label:"(Default) False",icon:"x_placeholder",iconTrailing:"x_placeholder"}},o={args:{default:"",showIcon:!0,showIconTrailing:!0,label:"True",icon:"x_placeholder",iconTrailing:"x_placeholder"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "showIcon": false,
    "showIconTrailing": false,
    "label": "(Default) False",
    "icon": "x_placeholder",
    "iconTrailing": "x_placeholder"
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "showIcon": true,
    "showIconTrailing": true,
    "label": "True",
    "icon": "x_placeholder",
    "iconTrailing": "x_placeholder"
  }
}`,...o.parameters?.docs?.source}}};const u=["DefaultFalse","True"];export{e as DefaultFalse,o as True,u as __namedExportsOrder,m as default};
