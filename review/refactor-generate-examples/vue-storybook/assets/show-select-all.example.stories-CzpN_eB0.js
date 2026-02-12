import{_ as l}from"./custom-select-BOFAG810.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";import"./document-scroll-listener-sPooixGf.js";import"./floating-components-1F_x7pmN.js";import"./form-components-DotznFsp.js";import"./button-BND3SCu0.js";import"./infotext-tCTmoIyB.js";import"./input-DCt77RAB.js";import"./tag-mPlBKPvT.js";import"./tooltip-bsw76Umn.js";const{fn:h}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBCustomSelect/Show Select All",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"}}},t={args:{selectAllLabel:"Select all",label:"(Default) False",listLabel:"id-10256-(Default) False",options:[{value:"Option 1",id:"p6l2dpiea"},{value:"Option 2",id:"jh7pczno4"},{value:"Option 3",id:"jh7pczno5"},{value:"Option 4",id:"jh7pczno6"},{value:"Option 5",id:"jh7pczno7"},{value:"Option 6",id:"jh7pczno8"}],showSelectAll:!1,multiple:!0,default:""},render:e=>({components:{DBCustomSelect:l},setup(){return{args:e}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})},o={args:{selectAllLabel:"Select all",label:"True",listLabel:"id-10257-True",options:[{value:"Option 1",id:"zcim85pqg"},{value:"Option 2",id:"kg6gvbwru"},{value:"Option 3",id:"kg5gvbwru"},{value:"Option 4",id:"kg4gvbwru"},{value:"Option 5",id:"kg3gvbwru"}],showSelectAll:!0,multiple:!0,default:""},render:e=>({components:{DBCustomSelect:l},setup(){return{args:e}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "selectAllLabel": "Select all",
    "label": "(Default) False",
    "listLabel": "id-10256-(Default) False",
    "options": [{
      value: 'Option 1',
      id: 'p6l2dpiea'
    }, {
      value: 'Option 2',
      id: 'jh7pczno4'
    }, {
      value: 'Option 3',
      id: 'jh7pczno5'
    }, {
      value: 'Option 4',
      id: 'jh7pczno6'
    }, {
      value: 'Option 5',
      id: 'jh7pczno7'
    }, {
      value: 'Option 6',
      id: 'jh7pczno8'
    }],
    "showSelectAll": false,
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "selectAllLabel": "Select all",
    "label": "True",
    "listLabel": "id-10257-True",
    "options": [{
      value: 'Option 1',
      id: 'zcim85pqg'
    }, {
      value: 'Option 2',
      id: 'kg6gvbwru'
    }, {
      value: 'Option 3',
      id: 'kg5gvbwru'
    }, {
      value: 'Option 4',
      id: 'kg4gvbwru'
    }, {
      value: 'Option 5',
      id: 'kg3gvbwru'
    }],
    "showSelectAll": true,
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
}`,...o.parameters?.docs?.source}}};const S=["DefaultFalse","True"];export{t as DefaultFalse,o as True,S as __namedExportsOrder,x as default};
