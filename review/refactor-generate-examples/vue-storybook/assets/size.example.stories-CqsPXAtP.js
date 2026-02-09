import{_ as a}from"./link-z-qbJaFT.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./index-B493XNFi.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBLink/Size",component:a,render:r=>({components:{DBLink:a},setup(){return{args:r}},template:`
      <DBLink v-bind="args">
      ${r.default}
      </DBLink>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{href:{control:"text"},variant:{control:"text"},disabled:{control:"boolean"},size:{control:"text"},content:{control:"text"},showIcon:{control:"boolean"},wrap:{control:"text"}}},e={args:{default:"",href:"#",text:"(Default) Medium"}},t={args:{default:"",href:"#",size:"small",text:"Small"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "href": "#",
    "text": "(Default) Medium"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "href": "#",
    "size": "small",
    "text": "Small"
  }
}`,...t.parameters?.docs?.source}}};const i=["DefaultMedium","Small"];export{e as DefaultMedium,t as Small,i as __namedExportsOrder,m as default};
