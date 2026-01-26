import{_ as t}from"./checkbox-DN6mLQpW.js";import"./iframe-D4GwdY-M.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BI2mJmbL.js";import"./index-CeOJJTBm.js";import"./form-components-B2LcTOtB.js";import"./infotext-CNKaL6ue.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBCheckbox/Example",component:t,render:o=>({components:{DBCheckbox:t},setup(){return{args:o}},template:`
      <DBCheckbox v-bind="args">
      ${o.default}
      </DBCheckbox>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},indeterminate:{control:"text"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},size:{control:"text"},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"}}},e={args:{default:"Long label",checked:!0,name:"Example"},decorators:[()=>({template:'<div style="  width: 100px"><story /></div>'})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "Long label",
    "checked": true,
    "name": "Example"
  },
  decorators: [() => ({
    template: \`<div style="  width: 100px"><story /></div>\`
  })]
}`,...e.parameters?.docs?.source}}};const p=["Longlabel"];export{e as Longlabel,p as __namedExportsOrder,m as default};
