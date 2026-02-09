import{_ as t}from"./checkbox-B-3mJP4_.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./constants-qyp1P7vr.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";import"./infotext-C1MSMu4c.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBCheckbox/Example",component:t,render:o=>({components:{DBCheckbox:t},setup(){return{args:o}},template:`
      <DBCheckbox v-bind="args">
      ${o.default}
      </DBCheckbox>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},indeterminate:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},size:{control:"text"},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"}}},e={args:{default:"Long label",checked:!0,name:"Example"},decorators:[()=>({template:'<div style="  width:100px"><story /></div>'})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "Long label",
    "checked": true,
    "name": "Example"
  },
  decorators: [() => ({
    template: \`<div style="  width:100px"><story /></div>\`
  })]
}`,...e.parameters?.docs?.source}}};const p=["Longlabel"];export{e as Longlabel,p as __namedExportsOrder,m as default};
