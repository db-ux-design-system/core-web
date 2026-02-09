import{_ as r}from"./link-z-qbJaFT.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./index-B493XNFi.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBLink/Show Icon",component:r,render:o=>({components:{DBLink:r},setup(){return{args:o}},template:`
      <DBLink v-bind="args">
      ${o.default}
      </DBLink>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{href:{control:"text"},variant:{control:"text"},disabled:{control:"boolean"},size:{control:"text"},content:{control:"text"},showIcon:{control:"boolean"},wrap:{control:"text"}}},e={args:{default:"",showIcon:!0,href:"#",text:"(Default) True"}},t={args:{default:"",showIcon:!1,href:"#",text:"False"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "showIcon": true,
    "href": "#",
    "text": "(Default) True"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "showIcon": false,
    "href": "#",
    "text": "False"
  }
}`,...t.parameters?.docs?.source}}};const p=["DefaultTrue","False"];export{e as DefaultTrue,t as False,p as __namedExportsOrder,u as default};
