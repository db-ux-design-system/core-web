import{_ as a}from"./custom-select-CrBF4FpU.js";import"./iframe-F82tG9VT.js";import"./preload-helper-CDE7oBwp.js";import"./constants-CRDP6LoT.js";import"./index-CrC2-ZEz.js";import"./document-scroll-listener-BflQilF1.js";import"./floating-components-CKmcRn_b.js";import"./form-components-CwmZsWPV.js";import"./button-TpS8XKcE.js";import"./infotext-De0M7kIU.js";import"./input-2kxcQVn4.js";import"./tag-BStxxGmc.js";import"./tooltip-rd4dMVri.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBCustomSelect/Show Loading",component:a,parameters:{layout:"centered"},tags:["autodocs"],args:{onAmountChange:t(),onOptionSelected:t(),onDropdownToggle:t(),onSearch:t()},argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"},onAmountChange:{action:"onAmountChange"},onOptionSelected:{action:"onOptionSelected"},onDropdownToggle:{action:"onDropdownToggle"},onSearch:{action:"onSearch"}}},e={args:{loadingText:"Loading",label:"(Default) False",listLabel:"id-10252-(Default) False",options:[{value:"Option 1",id:"glkscvbn5"},{value:"Option 2",id:"13cmgddkr"},{value:"Option 3",id:"14cmgddkr"},{value:"Option 4",id:"15cmgddkr"},{value:"Option 5",id:"16cmgddkr"}],showLoading:!1,multiple:!0,default:""},render:o=>({components:{DBCustomSelect:a},setup(){return{args:o}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${o.default}</DBCustomSelect></div>`})},l={args:{loadingText:"Loading",label:"True",listLabel:"id-10253-True",options:[{value:"Option 1",id:"e6wvfkv27"},{value:"Option 2",id:"afg1mqolj"},{value:"Option 3",id:"afg2mqolj"},{value:"Option 4",id:"afg3mqolj"},{value:"Option 5",id:"afg4mqolj"}],showLoading:!0,multiple:!0,default:""},render:o=>({components:{DBCustomSelect:a},setup(){return{args:o}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${o.default}</DBCustomSelect></div>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "loadingText": "Loading",
    "label": "(Default) False",
    "listLabel": "id-10252-(Default) False",
    "options": [{
      value: 'Option 1',
      id: 'glkscvbn5'
    }, {
      value: 'Option 2',
      id: '13cmgddkr'
    }, {
      value: 'Option 3',
      id: '14cmgddkr'
    }, {
      value: 'Option 4',
      id: '15cmgddkr'
    }, {
      value: 'Option 5',
      id: '16cmgddkr'
    }],
    "showLoading": false,
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
}`,...e.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "loadingText": "Loading",
    "label": "True",
    "listLabel": "id-10253-True",
    "options": [{
      value: 'Option 1',
      id: 'e6wvfkv27'
    }, {
      value: 'Option 2',
      id: 'afg1mqolj'
    }, {
      value: 'Option 3',
      id: 'afg2mqolj'
    }, {
      value: 'Option 4',
      id: 'afg3mqolj'
    }, {
      value: 'Option 5',
      id: 'afg4mqolj'
    }],
    "showLoading": true,
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
}`,...l.parameters?.docs?.source}}};const h=["DefaultFalse","True"];export{e as DefaultFalse,l as True,h as __namedExportsOrder,f as default};
