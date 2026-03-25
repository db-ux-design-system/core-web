import{_ as n}from"./custom-select-CttCx83r.js";import"./iframe-IFZVrxLO.js";import"./preload-helper-B7q7OWx3.js";import"./constants-y2N5m1XS.js";import"./index-DFbrfN6t.js";import"./document-scroll-listener-DgOjS5ct.js";import"./floating-components-CKmcRn_b.js";import"./form-components-CohepBcF.js";import"./button-D5ThCaUY.js";import"./infotext-B-ZttWlo.js";import"./input-YL2TVPnO.js";import"./tag-hwpgD5o6.js";import"./tooltip-B25qYuFW.js";const{fn:o}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBCustomSelect/Required",component:n,parameters:{layout:"centered"},tags:["autodocs"],args:{onAmountChange:o(),onOptionSelected:o(),onDropdownToggle:o(),onSearch:o()},argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"},onAmountChange:{action:"onAmountChange"},onOptionSelected:{action:"onOptionSelected"},onDropdownToggle:{action:"onDropdownToggle"},onSearch:{action:"onSearch"}}},t={args:{label:"(Default) False",listLabel:"id-10219-(Default) False",options:[{value:"Option 1",id:"drpx8im88"},{value:"Option 2",id:"211e6zox5"},{value:"Option 3",id:"211e6zox4"},{value:"Option 4",id:"211e6zox3"},{value:"Option 5",id:"211e6zox2"}],multiple:!0,required:!1,default:""},render:e=>({components:{DBCustomSelect:n},setup(){return{args:e}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})},l={args:{label:"True",listLabel:"id-10220-True",options:[{value:"Option 1",id:"2v0zw8afc"},{value:"Option 2",id:"308308w5z"},{value:"Option 3",id:"308308w4z"},{value:"Option 4",id:"308308w3z"},{value:"Option 5",id:"308308w2z"}],required:!0,multiple:!0,default:""},render:e=>({components:{DBCustomSelect:n},setup(){return{args:e}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) False",
    "listLabel": "id-10219-(Default) False",
    "options": [{
      value: 'Option 1',
      id: 'drpx8im88'
    }, {
      value: 'Option 2',
      id: '211e6zox5'
    }, {
      value: 'Option 3',
      id: '211e6zox4'
    }, {
      value: 'Option 4',
      id: '211e6zox3'
    }, {
      value: 'Option 5',
      id: '211e6zox2'
    }],
    "multiple": true,
    "required": false,
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
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "True",
    "listLabel": "id-10220-True",
    "options": [{
      value: 'Option 1',
      id: '2v0zw8afc'
    }, {
      value: 'Option 2',
      id: '308308w5z'
    }, {
      value: 'Option 3',
      id: '308308w4z'
    }, {
      value: 'Option 4',
      id: '308308w3z'
    }, {
      value: 'Option 5',
      id: '308308w2z'
    }],
    "required": true,
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
}`,...l.parameters?.docs?.source}}};const O=["DefaultFalse","True"];export{t as DefaultFalse,l as True,O as __namedExportsOrder,f as default};
