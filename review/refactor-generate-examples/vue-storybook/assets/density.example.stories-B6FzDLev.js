import{_ as o}from"./infotext-C1MSMu4c.js";import{_ as s}from"./divider-h75wiN4i.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./index-B493XNFi.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBDivider/Density",component:s,render:a=>({components:{DBDivider:s,DBInfotext:o},setup(){return{args:a}},template:`
      <DBDivider v-bind="args">
      ${a.default}
      </DBDivider>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{width:{control:"text"},variant:{control:"text"},emphasis:{control:"text"}}},t={args:{default:"","data-density":"functional",width:"full"},decorators:[()=>({template:'<div style="  width:200px"><story /></div>'})]},e={args:{default:"","data-density":"regular",width:"full"},decorators:[()=>({template:'<div style="  width:200px"><story /></div>'})]},r={args:{default:"","data-density":"expressive",width:"full"},decorators:[()=>({template:'<div style="  width:200px"><story /></div>'})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "data-density": "functional",
    "width": "full"
  },
  decorators: [() => ({
    template: \`<div style="  width:200px"><story /></div>\`
  })]
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "data-density": "regular",
    "width": "full"
  },
  decorators: [() => ({
    template: \`<div style="  width:200px"><story /></div>\`
  })]
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "data-density": "expressive",
    "width": "full"
  },
  decorators: [() => ({
    template: \`<div style="  width:200px"><story /></div>\`
  })]
}`,...r.parameters?.docs?.source}}};const m=["Functional","DefaultRegular","Expressive"];export{e as DefaultRegular,r as Expressive,t as Functional,m as __namedExportsOrder,u as default};
