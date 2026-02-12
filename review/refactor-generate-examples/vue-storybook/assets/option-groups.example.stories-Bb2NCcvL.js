import{_ as l}from"./select-spT-QGLO.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";import"./form-components-DotznFsp.js";import"./infotext-tCTmoIyB.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBSelect/Option Groups",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},disabled:{control:"boolean"},showIcon:{control:"boolean"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},size:{control:"number"},multiple:{control:"boolean"},showEmptyOption:{control:"boolean"},autocomplete:{control:"text"},messageIcon:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},e={args:{label:"Label",placeholder:"Using optgroups",options:[{label:"Group 1",value:"",options:[{value:"Option 1"},{value:"Option 2"}]},{label:"Group 2",value:"",options:[{value:"Option 3"},{value:"Option 4"}]}],default:""},render:o=>({components:{DBSelect:l},setup(){return{args:o}},template:`<div  :style="{
  width: '300px'
}"  ><DBSelect v-bind="args"   >${o.default}</DBSelect></div>`})},t={args:{label:"Label",placeholder:"Mixed options and groups",options:[{value:"Single Option"},{label:"Grouped Options",value:"",options:[{value:"Group Option 1"},{value:"Group Option 2"}]},{value:"Another Single Option"}],default:""},render:o=>({components:{DBSelect:l},setup(){return{args:o}},template:`<div  :style="{
  width: '300px'
}"  ><DBSelect v-bind="args"   >${o.default}</DBSelect></div>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "placeholder": "Using optgroups",
    "options": [{
      label: 'Group 1',
      value: '',
      options: [{
        value: 'Option 1'
      }, {
        value: 'Option 2'
      }]
    }, {
      label: 'Group 2',
      value: '',
      options: [{
        value: 'Option 3'
      }, {
        value: 'Option 4'
      }]
    }],
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBSelect
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '300px'
}"  ><DBSelect v-bind="args"   >\${args.default}</DBSelect></div>\`
  })
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "placeholder": "Mixed options and groups",
    "options": [{
      value: 'Single Option'
    }, {
      label: 'Grouped Options',
      value: '',
      options: [{
        value: 'Group Option 1'
      }, {
        value: 'Group Option 2'
      }]
    }, {
      value: 'Another Single Option'
    }],
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBSelect
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '300px'
}"  ><DBSelect v-bind="args"   >\${args.default}</DBSelect></div>\`
  })
}`,...t.parameters?.docs?.source}}};const v=["Usingoptgroups","Mixedoptionsandgroups"];export{t as Mixedoptionsandgroups,e as Usingoptgroups,v as __namedExportsOrder,d as default};
