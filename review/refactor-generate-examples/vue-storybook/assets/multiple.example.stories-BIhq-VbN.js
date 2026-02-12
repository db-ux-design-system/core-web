import{_ as l}from"./custom-select-BOFAG810.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";import"./document-scroll-listener-sPooixGf.js";import"./floating-components-1F_x7pmN.js";import"./form-components-DotznFsp.js";import"./button-BND3SCu0.js";import"./infotext-tCTmoIyB.js";import"./input-DCt77RAB.js";import"./tag-mPlBKPvT.js";import"./tooltip-bsw76Umn.js";const{fn:g}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBCustomSelect/Multiple",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"}}},e={args:{label:"(Default) False",listLabel:"id-10209-(Default) False",options:[{value:"Option 1",id:"ykzqfs8oa"},{value:"Option 2",id:"kcndx1xog"},{value:"Option 3",id:"kcndx2xog"},{value:"Option 4",id:"kcndx3xog"},{value:"Option 5",id:"kcndx4xog"}],multiple:!1,default:""},render:t=>({components:{DBCustomSelect:l},setup(){return{args:t}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${t.default}</DBCustomSelect></div>`})},o={args:{searchLabel:"Search",label:"True",listLabel:"id-10210-True",options:[{value:"Option 1",id:"34540enzm"},{value:"Option 2",id:"3a4ml34c8"},{value:"Option 3",id:"3a4ml34c7"},{value:"Option 4",id:"3a4ml34c6"},{value:"Option 5",id:"3a4ml34c5"}],multiple:!0,default:""},render:t=>({components:{DBCustomSelect:l},setup(){return{args:t}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${t.default}</DBCustomSelect></div>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) False",
    "listLabel": "id-10209-(Default) False",
    "options": [{
      value: 'Option 1',
      id: 'ykzqfs8oa'
    }, {
      value: 'Option 2',
      id: 'kcndx1xog'
    }, {
      value: 'Option 3',
      id: 'kcndx2xog'
    }, {
      value: 'Option 4',
      id: 'kcndx3xog'
    }, {
      value: 'Option 5',
      id: 'kcndx4xog'
    }],
    "multiple": false,
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
    "searchLabel": "Search",
    "label": "True",
    "listLabel": "id-10210-True",
    "options": [{
      value: 'Option 1',
      id: '34540enzm'
    }, {
      value: 'Option 2',
      id: '3a4ml34c8'
    }, {
      value: 'Option 3',
      id: '3a4ml34c7'
    }, {
      value: 'Option 4',
      id: '3a4ml34c6'
    }, {
      value: 'Option 5',
      id: '3a4ml34c5'
    }],
    "multiple": true,
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
}`,...o.parameters?.docs?.source}}};const h=["DefaultFalse","True"];export{e as DefaultFalse,o as True,h as __namedExportsOrder,f as default};
