import{_ as l}from"./select-CcNa6tKe.js";import"./iframe-IRMWFPfw.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BI2mJmbL.js";import"./index-S2nzjHTj.js";import"./form-components-DporCuVj.js";import"./infotext-06GstPkD.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,v={title:"Components/DBSelect/Density",component:l,render:a=>({components:{DBSelect:l},setup(){return{args:a}},template:`
      <DBSelect v-bind="args">
      ${a.default}
      </DBSelect>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"text"},label:{control:"text"},placeholder:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},disabled:{control:"boolean"},icon:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"}}},e={args:{options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"}],"data-density":"functional",label:"Label",placeholder:"Functional"},decorators:[()=>({template:'<div style="  width: 300px"><story /></div>'})]},t={args:{options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"}],"data-density":"regular",label:"Label",placeholder:"(Default) Regular"},decorators:[()=>({template:'<div style="  width: 300px"><story /></div>'})]},o={args:{options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"}],"data-density":"expressive",label:"Label",placeholder:"Expressive"},decorators:[()=>({template:'<div style="  width: 300px"><story /></div>'})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "options": [{
      value: 'Option 1'
    }, {
      value: 'Option 2'
    }, {
      value: 'Option 3'
    }, {
      value: 'Option 4'
    }, {
      value: 'Option 5'
    }],
    "data-density": "functional",
    "label": "Label",
    "placeholder": "Functional"
  },
  decorators: [() => ({
    template: \`<div style="  width: 300px"><story /></div>\`
  })]
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "options": [{
      value: 'Option 1'
    }, {
      value: 'Option 2'
    }, {
      value: 'Option 3'
    }, {
      value: 'Option 4'
    }, {
      value: 'Option 5'
    }],
    "data-density": "regular",
    "label": "Label",
    "placeholder": "(Default) Regular"
  },
  decorators: [() => ({
    template: \`<div style="  width: 300px"><story /></div>\`
  })]
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "options": [{
      value: 'Option 1'
    }, {
      value: 'Option 2'
    }, {
      value: 'Option 3'
    }, {
      value: 'Option 4'
    }, {
      value: 'Option 5'
    }],
    "data-density": "expressive",
    "label": "Label",
    "placeholder": "Expressive"
  },
  decorators: [() => ({
    template: \`<div style="  width: 300px"><story /></div>\`
  })]
}`,...o.parameters?.docs?.source}}};const m=["Functional","DefaultRegular","Expressive"];export{t as DefaultRegular,o as Expressive,e as Functional,m as __namedExportsOrder,v as default};
