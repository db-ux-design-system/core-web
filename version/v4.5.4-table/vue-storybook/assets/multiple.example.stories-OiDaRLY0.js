import{_ as a}from"./custom-select-GdrkFlgv.js";import"./iframe-DfvinHPj.js";import"./preload-helper-eESElaRw.js";import"./constants-y2N5m1XS.js";import"./index-COCtms_G.js";import"./document-scroll-listener-BYqEBCaA.js";import"./floating-components-CKmcRn_b.js";import"./form-components-B8gyVD2Y.js";import"./button-eZpQGvA1.js";import"./infotext-ChOUO4Z5.js";import"./input-VcXdES3u.js";import"./tag-pLFSfp1d.js";import"./tooltip-DdSEXsAc.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,h={title:"Components/DBCustomSelect/Multiple",component:a,parameters:{layout:"centered"},tags:["autodocs"],args:{onAmountChange:e(),onOptionSelected:e(),onDropdownToggle:e(),onSearch:e()},argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"},onAmountChange:{action:"onAmountChange"},onOptionSelected:{action:"onOptionSelected"},onDropdownToggle:{action:"onDropdownToggle"},onSearch:{action:"onSearch"}}},t={args:{label:"(Default) False",listLabel:"id-10209-(Default) False",options:[{value:"Option 1",id:"ykzqfs8oa"},{value:"Option 2",id:"kcndx1xog"},{value:"Option 3",id:"kcndx2xog"},{value:"Option 4",id:"kcndx3xog"},{value:"Option 5",id:"kcndx4xog"}],multiple:!1,default:""},render:o=>({components:{DBCustomSelect:a},setup(){return{args:o}},template:`<div  :style="{
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
