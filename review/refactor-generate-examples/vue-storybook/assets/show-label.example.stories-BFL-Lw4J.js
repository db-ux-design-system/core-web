import{_ as l}from"./custom-select-BOFAG810.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";import"./document-scroll-listener-sPooixGf.js";import"./floating-components-1F_x7pmN.js";import"./form-components-DotznFsp.js";import"./button-BND3SCu0.js";import"./infotext-tCTmoIyB.js";import"./input-DCt77RAB.js";import"./tag-mPlBKPvT.js";import"./tooltip-bsw76Umn.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBCustomSelect/Show Label",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"}}},t={args:{label:"(Default) True",listLabel:"id-10213-(Default) True",options:[{value:"Option 1",id:"09a47p13k"},{value:"Option 2",id:"ya0ahf4od"},{value:"Option 3",id:"ya0ahf3od"},{value:"Option 4",id:"ya0ahf2od"},{value:"Option 5",id:"ya0ahf1od"}],showLabel:!0,default:""},render:o=>({components:{DBCustomSelect:l},setup(){return{args:o}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${o.default}</DBCustomSelect></div>`})},e={args:{label:"False",listLabel:"id-10214-False",options:[{value:"Option 1",id:"h8apm2qse"},{value:"Option 2",id:"vop8vkb8q"},{value:"Option 3",id:"vop8vkb7q"},{value:"Option 4",id:"vop8vkb6q"},{value:"Option 5",id:"vop8vkb5q"}],showLabel:!1,default:""},render:o=>({components:{DBCustomSelect:l},setup(){return{args:o}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${o.default}</DBCustomSelect></div>`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) True",
    "listLabel": "id-10213-(Default) True",
    "options": [{
      value: 'Option 1',
      id: '09a47p13k'
    }, {
      value: 'Option 2',
      id: 'ya0ahf4od'
    }, {
      value: 'Option 3',
      id: 'ya0ahf3od'
    }, {
      value: 'Option 4',
      id: 'ya0ahf2od'
    }, {
      value: 'Option 5',
      id: 'ya0ahf1od'
    }],
    "showLabel": true,
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
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "False",
    "listLabel": "id-10214-False",
    "options": [{
      value: 'Option 1',
      id: 'h8apm2qse'
    }, {
      value: 'Option 2',
      id: 'vop8vkb8q'
    }, {
      value: 'Option 3',
      id: 'vop8vkb7q'
    }, {
      value: 'Option 4',
      id: 'vop8vkb6q'
    }, {
      value: 'Option 5',
      id: 'vop8vkb5q'
    }],
    "showLabel": false,
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
}`,...e.parameters?.docs?.source}}};const g=["DefaultTrue","False"];export{t as DefaultTrue,e as False,g as __namedExportsOrder,f as default};
