import{_ as o}from"./infotext-D2zgab01.js";import"./iframe-D9Yu_Ccn.js";import"./preload-helper-_n2GBM2K.js";import"./index-CeOJJTBm.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,c={title:"Components/DBInfotext/Size",component:o,render:a=>({components:{DBInfotext:o},setup(){return{args:a}},template:`
      <DBInfotext v-bind="args">
      ${a.default}
      </DBInfotext>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{semantic:{control:"text"},size:{control:"text"},showIcon:{control:"boolean"}}},e={args:{default:"(Default) Medium"}},t={args:{default:"Small",size:"small"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "(Default) Medium"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "Small",
    "size": "small"
  }
}`,...t.parameters?.docs?.source}}};const u=["DefaultMedium","Small"];export{e as DefaultMedium,t as Small,u as __namedExportsOrder,c as default};
