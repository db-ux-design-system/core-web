import{_ as o}from"./checkbox-B-3mJP4_.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./constants-qyp1P7vr.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";import"./infotext-C1MSMu4c.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBCheckbox/Density",component:o,render:n=>({components:{DBCheckbox:o},setup(){return{args:n}},template:`
      <DBCheckbox v-bind="args">
      ${n.default}
      </DBCheckbox>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},indeterminate:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},size:{control:"text"},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"}}},e={args:{default:"Functional","data-density":"functional",name:"Density"}},t={args:{default:"(Default) Regular","data-density":"regular",name:"Density"}},a={args:{default:"Expressive","data-density":"expressive",name:"Density"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "Functional",
    "data-density": "functional",
    "name": "Density"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "(Default) Regular",
    "data-density": "regular",
    "name": "Density"
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    default: "Expressive",
    "data-density": "expressive",
    "name": "Density"
  }
}`,...a.parameters?.docs?.source}}};const g=["Functional","DefaultRegular","Expressive"];export{t as DefaultRegular,a as Expressive,e as Functional,g as __namedExportsOrder,p as default};
