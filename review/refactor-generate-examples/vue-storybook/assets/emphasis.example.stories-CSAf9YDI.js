import{_ as a}from"./infotext-C1MSMu4c.js";import{_ as s}from"./divider-h75wiN4i.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./index-B493XNFi.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBDivider/Emphasis",component:s,render:r=>({components:{DBDivider:s,DBInfotext:a},setup(){return{args:r}},template:`
      <DBDivider v-bind="args">
      ${r.default}
      </DBDivider>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{width:{control:"text"},variant:{control:"text"},emphasis:{control:"text"}}},t={args:{default:"",width:"full"},decorators:[()=>({template:'<div style="  width:200px"><story /></div>'})]},e={args:{default:"",emphasis:"strong",width:"full"},decorators:[()=>({template:'<div style="  width:200px"><story /></div>'})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
    "emphasis": "strong",
    "width": "full"
  },
  decorators: [() => ({
    template: \`<div style="  width:200px"><story /></div>\`
  })]
}`,...e.parameters?.docs?.source}}};const c=["DefaultWeak","Strong"];export{t as DefaultWeak,e as Strong,c as __namedExportsOrder,m as default};
