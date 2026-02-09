import{_ as r}from"./link-z-qbJaFT.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./index-B493XNFi.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBLink/Content",component:r,render:n=>({components:{DBLink:r},setup(){return{args:n}},template:`
      <DBLink v-bind="args">
      ${n.default}
      </DBLink>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{href:{control:"text"},variant:{control:"text"},disabled:{control:"boolean"},size:{control:"text"},content:{control:"text"},showIcon:{control:"boolean"},wrap:{control:"text"}}},t={args:{default:"",href:"#",text:"(Default) Internal"}},e={args:{default:"",href:"#",content:"external",text:"External"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "href": "#",
    "text": "(Default) Internal"
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "href": "#",
    "content": "external",
    "text": "External"
  }
}`,...e.parameters?.docs?.source}}};const m=["DefaultInternal","External"];export{t as DefaultInternal,e as External,m as __namedExportsOrder,p as default};
