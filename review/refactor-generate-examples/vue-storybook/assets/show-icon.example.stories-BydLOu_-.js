import{_ as r}from"./infotext-iunmPScm.js";import"./iframe-6Mx4-xKM.js";import"./preload-helper-_n2GBM2K.js";import"./index-S2nzjHTj.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,l={title:"Components/DBInfotext/Show Icon",component:r,render:o=>({components:{DBInfotext:r},setup(){return{args:o}},template:`
      <DBInfotext v-bind="args">
      ${o.default}
      </DBInfotext>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{semantic:{control:"text"},size:{control:"text"},showIcon:{control:"boolean"}}},e={args:{default:"(Default) True",showIcon:!0}},t={args:{default:"False",showIcon:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "(Default) True",
    "showIcon": true
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "False",
    "showIcon": false
  }
}`,...t.parameters?.docs?.source}}};const m=["DefaultTrue","False"];export{e as DefaultTrue,t as False,m as __namedExportsOrder,l as default};
