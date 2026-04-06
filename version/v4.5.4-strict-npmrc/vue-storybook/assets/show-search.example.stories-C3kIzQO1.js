import{_ as a}from"./custom-select-Cq4h8IPS.js";import"./iframe-B_8YGBdU.js";import"./preload-helper-COvGWKxX.js";import"./constants-y2N5m1XS.js";import"./index-CggTMVtt.js";import"./document-scroll-listener-DrIox47U.js";import"./floating-components-CKmcRn_b.js";import"./form-components-K9dL8jr8.js";import"./button-CJtBRNYR.js";import"./infotext-C3w6LSzH.js";import"./input-D0u4pW9R.js";import"./tag-A7pXg_Af.js";import"./tooltip-DCuXygWR.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,O={title:"Components/DBCustomSelect/Show Search",component:a,parameters:{layout:"centered"},tags:["autodocs"],args:{onAmountChange:t(),onOptionSelected:t(),onDropdownToggle:t(),onSearch:t()},argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"},onAmountChange:{action:"onAmountChange"},onOptionSelected:{action:"onOptionSelected"},onDropdownToggle:{action:"onDropdownToggle"},onSearch:{action:"onSearch"}}},o={args:{label:"(Default) False",selectAllLabel:"Select all",searchLabel:"Search",listLabel:"id-10254-(Default) False",options:[{value:"Option 1",id:"09nure8co"},{value:"Option 2",id:"74n91hp14"},{value:"Option 3",id:"74n91hp15"},{value:"Option 4",id:"74n91hp16"},{value:"Option 5",id:"74n91hp17"},{value:"Option 6",id:"74n91hp18"},{value:"Option 7",id:"74n91hp19"},{value:"Option 8",id:"74n91hp24"},{value:"Option 9",id:"74n91hp34"},{value:"Option 10",id:"74n91hp44"}],showSearch:!1,multiple:!0,default:""},render:e=>({components:{DBCustomSelect:a},setup(){return{args:e}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})},l={args:{selectAllLabel:"Select all",searchLabel:"Search",label:"True",listLabel:"id-10255-True",options:[{value:"Option 1",id:"ktmbve0k2"},{value:"Option 2",id:"uf9wakkc1"},{value:"Option 3",id:"uf9wakkc2"},{value:"Option 4",id:"uf9wakkc3"},{value:"Option 5",id:"uf9wakkc4"}],showSearch:!0,multiple:!0,default:""},render:e=>({components:{DBCustomSelect:a},setup(){return{args:e}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const x=["DefaultFalse","True"];export{o as DefaultFalse,l as True,x as __namedExportsOrder,O as default};
