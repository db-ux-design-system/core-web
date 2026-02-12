import{_ as i}from"./custom-select-BOFAG810.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";import"./document-scroll-listener-sPooixGf.js";import"./floating-components-1F_x7pmN.js";import"./form-components-DotznFsp.js";import"./button-BND3SCu0.js";import"./infotext-tCTmoIyB.js";import"./input-DCt77RAB.js";import"./tag-mPlBKPvT.js";import"./tooltip-bsw76Umn.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,O={title:"Components/DBCustomSelect/Validation",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"}}},e={args:{validation:"no-validation",label:"(Default) No Validation",listLabel:"id-102061-(Default) No Validation",options:[{value:"Option 1",id:"miouzc0ec"},{value:"Option 2",id:"10dqnhil5"},{value:"Option 3",id:"10dqnhil4"},{value:"Option 4",id:"10dqnhil3"},{value:"Option 5",id:"10dqnhil2"}],default:""},render:t=>({components:{DBCustomSelect:i},setup(){return{args:t}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${t.default}</DBCustomSelect></div>`})},o={args:{validation:"invalid",invalidMessage:"Invalid Message",label:"Invalid",listLabel:"id-102062-Invalid",options:[{value:"Option 1",id:"miouzc0ec"},{value:"Option 2",id:"10dqnhil5"},{value:"Option 3",id:"10dqnhil4"},{value:"Option 4",id:"10dqnhil3"},{value:"Option 5",id:"10dqnhil2"}],default:""},render:t=>({components:{DBCustomSelect:i},setup(){return{args:t}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${t.default}</DBCustomSelect></div>`})},l={args:{validation:"valid",invalidMessage:"Valid Message",label:"Valid",listLabel:"id-102063-Valid",options:[{value:"Option 1",id:"miouzc0ec"},{value:"Option 2",id:"10dqnhil5"},{value:"Option 3",id:"10dqnhil4"},{value:"Option 4",id:"10dqnhil3"},{value:"Option 5",id:"10dqnhil2"}],default:""},render:t=>({components:{DBCustomSelect:i},setup(){return{args:t}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${t.default}</DBCustomSelect></div>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "validation": "no-validation",
    "label": "(Default) No Validation",
    "listLabel": "id-102061-(Default) No Validation",
    "options": [{
      value: 'Option 1',
      id: 'miouzc0ec'
    }, {
      value: 'Option 2',
      id: '10dqnhil5'
    }, {
      value: 'Option 3',
      id: '10dqnhil4'
    }, {
      value: 'Option 4',
      id: '10dqnhil3'
    }, {
      value: 'Option 5',
      id: '10dqnhil2'
    }],
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBCustomSelect
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >\${args.default}</DBCustomSelect></div>\`
  })
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "validation": "invalid",
    "invalidMessage": "Invalid Message",
    "label": "Invalid",
    "listLabel": "id-102062-Invalid",
    "options": [{
      value: 'Option 1',
      id: 'miouzc0ec'
    }, {
      value: 'Option 2',
      id: '10dqnhil5'
    }, {
      value: 'Option 3',
      id: '10dqnhil4'
    }, {
      value: 'Option 4',
      id: '10dqnhil3'
    }, {
      value: 'Option 5',
      id: '10dqnhil2'
    }],
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBCustomSelect
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >\${args.default}</DBCustomSelect></div>\`
  })
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "validation": "valid",
    "invalidMessage": "Valid Message",
    "label": "Valid",
    "listLabel": "id-102063-Valid",
    "options": [{
      value: 'Option 1',
      id: 'miouzc0ec'
    }, {
      value: 'Option 2',
      id: '10dqnhil5'
    }, {
      value: 'Option 3',
      id: '10dqnhil4'
    }, {
      value: 'Option 4',
      id: '10dqnhil3'
    }, {
      value: 'Option 5',
      id: '10dqnhil2'
    }],
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBCustomSelect
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >\${args.default}</DBCustomSelect></div>\`
  })
}`,...l.parameters?.docs?.source}}};const f=["DefaultNoValidation","Invalid","Valid"];export{e as DefaultNoValidation,o as Invalid,l as Valid,f as __namedExportsOrder,O as default};
