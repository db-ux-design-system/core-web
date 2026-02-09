import{_ as a}from"./link-z-qbJaFT.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./index-B493XNFi.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBLink/Disabled",component:a,render:r=>({components:{DBLink:a},setup(){return{args:r}},template:`
      <DBLink v-bind="args">
      ${r.default}
      </DBLink>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{href:{control:"text"},variant:{control:"text"},disabled:{control:"boolean"},size:{control:"text"},content:{control:"text"},showIcon:{control:"boolean"},wrap:{control:"text"}}},e={args:{default:"",disabled:!1,href:"#",text:"(Default) False"}},t={args:{default:"",disabled:!0,href:"#",text:"True"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "disabled": false,
    "href": "#",
    "text": "(Default) False"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "disabled": true,
    "href": "#",
    "text": "True"
  }
}`,...t.parameters?.docs?.source}}};const u=["DefaultFalse","True"];export{e as DefaultFalse,t as True,u as __namedExportsOrder,d as default};
