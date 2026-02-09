import{_ as o}from"./textarea-95QrgLws.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./constants-qyp1P7vr.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";import"./infotext-C1MSMu4c.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBTextarea/Density",component:o,render:r=>({components:{DBTextarea:o},setup(){return{args:r}},template:`
      <DBTextarea v-bind="args">
      ${r.default}
      </DBTextarea>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},showMessage:{control:"boolean"},message:{control:"text"},disabled:{control:"boolean"},readOnly:{control:"text"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},rows:{control:"text"},showResizer:{control:"boolean"},fieldSizing:{control:"text"}}},e={args:{default:"","data-density":"functional",label:"Label",placeholder:"Functional"}},a={args:{default:"","data-density":"regular",label:"Label",placeholder:"(Default) Regular"}},t={args:{default:"","data-density":"expressive",label:"Label",placeholder:"Expressive"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "data-density": "functional",
    "label": "Label",
    "placeholder": "Functional"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "data-density": "regular",
    "label": "Label",
    "placeholder": "(Default) Regular"
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "data-density": "expressive",
    "label": "Label",
    "placeholder": "Expressive"
  }
}`,...t.parameters?.docs?.source}}};const b=["Functional","DefaultRegular","Expressive"];export{a as DefaultRegular,t as Expressive,e as Functional,b as __namedExportsOrder,m as default};
