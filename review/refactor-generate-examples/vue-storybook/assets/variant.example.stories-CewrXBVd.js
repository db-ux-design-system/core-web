import{_ as a}from"./link-z-qbJaFT.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./index-B493XNFi.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBLink/Variant",component:a,render:r=>({components:{DBLink:a},setup(){return{args:r}},template:`
      <DBLink v-bind="args">
      ${r.default}
      </DBLink>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{href:{control:"text"},variant:{control:"text"},disabled:{control:"boolean"},size:{control:"text"},content:{control:"text"},showIcon:{control:"boolean"},wrap:{control:"text"}}},t={args:{default:"",href:"#",text:"(Default) Adaptive"}},e={args:{default:"",href:"#",variant:"brand",text:"Brand"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "href": "#",
    "text": "(Default) Adaptive"
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "href": "#",
    "variant": "brand",
    "text": "Brand"
  }
}`,...e.parameters?.docs?.source}}};const i=["DefaultAdaptive","Brand"];export{e as Brand,t as DefaultAdaptive,i as __namedExportsOrder,p as default};
