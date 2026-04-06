import{_ as t}from"./checkbox-C2lMxE0B.js";import"./iframe-B_8YGBdU.js";import"./preload-helper-COvGWKxX.js";import"./constants-y2N5m1XS.js";import"./index-CggTMVtt.js";import"./form-components-K9dL8jr8.js";import"./infotext-C3w6LSzH.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBCheckbox/Example",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},indeterminate:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},message:{control:"text"},showMessage:{control:"boolean"},size:{control:"select",options:["small","medium"]},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},label:{control:"text"},placeholder:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{name:"Example",checked:!0,default:"Long label"},render:o=>({components:{DBCheckbox:t},setup(){return{args:o}},template:`<div  :style="{
  width: '100px'
}"  ><DBCheckbox v-bind="args"   >${o.default}</DBCheckbox></div>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Example",
    "checked": true,
    "default": \`Long label\`
  },
  render: (args: any) => ({
    components: {
      DBCheckbox
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '100px'
}"  ><DBCheckbox v-bind="args"   >\${args.default}</DBCheckbox></div>\`
  })
}`,...e.parameters?.docs?.source}}};const p=["Longlabel"];export{e as Longlabel,p as __namedExportsOrder,m as default};
