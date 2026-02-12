import{_ as l}from"./custom-select-BOFAG810.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";import"./document-scroll-listener-sPooixGf.js";import"./floating-components-1F_x7pmN.js";import"./form-components-DotznFsp.js";import"./button-BND3SCu0.js";import"./infotext-tCTmoIyB.js";import"./input-DCt77RAB.js";import"./tag-mPlBKPvT.js";import"./tooltip-bsw76Umn.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBCustomSelect/Show Search",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"}}},t={args:{label:"(Default) False",selectAllLabel:"Select all",searchLabel:"Search",listLabel:"id-10254-(Default) False",options:[{value:"Option 1",id:"09nure8co"},{value:"Option 2",id:"74n91hp14"},{value:"Option 3",id:"74n91hp15"},{value:"Option 4",id:"74n91hp16"},{value:"Option 5",id:"74n91hp17"},{value:"Option 6",id:"74n91hp18"},{value:"Option 7",id:"74n91hp19"},{value:"Option 8",id:"74n91hp24"},{value:"Option 9",id:"74n91hp34"},{value:"Option 10",id:"74n91hp44"}],showSearch:!1,multiple:!0,default:""},render:e=>({components:{DBCustomSelect:l},setup(){return{args:e}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})},o={args:{selectAllLabel:"Select all",searchLabel:"Search",label:"True",listLabel:"id-10255-True",options:[{value:"Option 1",id:"ktmbve0k2"},{value:"Option 2",id:"uf9wakkc1"},{value:"Option 3",id:"uf9wakkc2"},{value:"Option 4",id:"uf9wakkc3"},{value:"Option 5",id:"uf9wakkc4"}],showSearch:!0,multiple:!0,default:""},render:e=>({components:{DBCustomSelect:l},setup(){return{args:e}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) False",
    "selectAllLabel": "Select all",
    "searchLabel": "Search",
    "listLabel": "id-10254-(Default) False",
    "options": [{
      value: 'Option 1',
      id: '09nure8co'
    }, {
      value: 'Option 2',
      id: '74n91hp14'
    }, {
      value: 'Option 3',
      id: '74n91hp15'
    }, {
      value: 'Option 4',
      id: '74n91hp16'
    }, {
      value: 'Option 5',
      id: '74n91hp17'
    }, {
      value: 'Option 6',
      id: '74n91hp18'
    }, {
      value: 'Option 7',
      id: '74n91hp19'
    }, {
      value: 'Option 8',
      id: '74n91hp24'
    }, {
      value: 'Option 9',
      id: '74n91hp34'
    }, {
      value: 'Option 10',
      id: '74n91hp44'
    }],
    "showSearch": false,
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
    "searchLabel": "Search",
    "label": "True",
    "listLabel": "id-10255-True",
    "options": [{
      value: 'Option 1',
      id: 'ktmbve0k2'
    }, {
      value: 'Option 2',
      id: 'uf9wakkc1'
    }, {
      value: 'Option 3',
      id: 'uf9wakkc2'
    }, {
      value: 'Option 4',
      id: 'uf9wakkc3'
    }, {
      value: 'Option 5',
      id: 'uf9wakkc4'
    }],
    "showSearch": true,
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
}`,...o.parameters?.docs?.source}}};const O=["DefaultFalse","True"];export{t as DefaultFalse,o as True,O as __namedExportsOrder,f as default};
