import{_ as o}from"./infotext-C1MSMu4c.js";import{_ as a}from"./divider-h75wiN4i.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./index-B493XNFi.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,c={title:"Components/DBDivider/Variant",component:a,render:r=>({components:{DBDivider:a,DBInfotext:o},setup(){return{args:r}},template:`
      <DBDivider v-bind="args">
      ${r.default}
      </DBDivider>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{width:{control:"text"},variant:{control:"text"},emphasis:{control:"text"}}},t={args:{default:"",width:"full"},decorators:[()=>({template:'<div style="  width:200px"><story /></div>'})]},e={args:{default:"",variant:"vertical",width:"full"},decorators:[()=>({template:'<div style="  height:100px"><story /></div>'})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "width": "full"
  },
  decorators: [() => ({
    template: \`<div style="  width:200px"><story /></div>\`
  })]
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "variant": "vertical",
    "width": "full"
  },
  decorators: [() => ({
    template: \`<div style="  height:100px"><story /></div>\`
  })]
}`,...e.parameters?.docs?.source}}};const m=["DefaultAdaptiveHorizontal","AdaptiveVertical"];export{e as AdaptiveVertical,t as DefaultAdaptiveHorizontal,m as __namedExportsOrder,c as default};
