import{_ as a}from"./custom-select-BEuN1pcO.js";import"./iframe-BOTASpA2.js";import"./preload-helper-Bk5FE6Wt.js";import"./constants-y2N5m1XS.js";import"./index-D4Tj0YTI.js";import"./document-scroll-listener-gSfuQz1z.js";import"./floating-components-CKmcRn_b.js";import"./form-components-DkSoQB8U.js";import"./button-CzozbFgE.js";import"./infotext-DdV1p_p1.js";import"./input-BS-E9L6g.js";import"./tag-B_hHOQFn.js";import"./tooltip-Dow1Nn8l.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,h={title:"Components/DBCustomSelect/Multiple",component:a,parameters:{layout:"centered"},tags:["autodocs"],args:{onAmountChange:e(),onOptionSelected:e(),onDropdownToggle:e(),onSearch:e()},argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"},onAmountChange:{action:"onAmountChange"},onOptionSelected:{action:"onOptionSelected"},onDropdownToggle:{action:"onDropdownToggle"},onSearch:{action:"onSearch"}}},t={args:{label:"(Default) False",listLabel:"id-10209-(Default) False",options:[{value:"Option 1",id:"ykzqfs8oa"},{value:"Option 2",id:"kcndx1xog"},{value:"Option 3",id:"kcndx2xog"},{value:"Option 4",id:"kcndx3xog"},{value:"Option 5",id:"kcndx4xog"}],multiple:!1,default:""},render:o=>({components:{DBCustomSelect:a},setup(){return{args:o}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${o.default}</DBCustomSelect></div>`})},l={args:{searchLabel:"Search",label:"True",listLabel:"id-10210-True",options:[{value:"Option 1",id:"34540enzm"},{value:"Option 2",id:"3a4ml34c8"},{value:"Option 3",id:"3a4ml34c7"},{value:"Option 4",id:"3a4ml34c6"},{value:"Option 5",id:"3a4ml34c5"}],multiple:!0,default:""},render:o=>({components:{DBCustomSelect:a},setup(){return{args:o}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${o.default}</DBCustomSelect></div>`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const f=["DefaultFalse","True"];export{t as DefaultFalse,l as True,f as __namedExportsOrder,h as default};
