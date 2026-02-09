import{_ as e}from"./link-z-qbJaFT.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./index-B493XNFi.js";const{fn:s}=__STORYBOOK_MODULE_TEST__,l={title:"Components/DBLink/Examples",component:e,render:n=>({components:{DBLink:e},setup(){return{args:n}},template:`
      <DBLink v-bind="args">
      ${n.default}
      </DBLink>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{href:{control:"text"},variant:{control:"text"},disabled:{control:"boolean"},size:{control:"text"},content:{control:"text"},showIcon:{control:"boolean"},wrap:{control:"text"}}},t={args:{default:"",href:"#",variant:"inline",text:"Variant Inline"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "href": "#",
    "variant": "inline",
    "text": "Variant Inline"
  }
}`,...t.parameters?.docs?.source}}};const c=["VariantInline"];export{t as VariantInline,c as __namedExportsOrder,l as default};
