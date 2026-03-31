import{_ as r}from"./custom-select-BEuN1pcO.js";import"./iframe-BOTASpA2.js";import"./preload-helper-Bk5FE6Wt.js";import"./constants-y2N5m1XS.js";import"./index-D4Tj0YTI.js";import"./document-scroll-listener-gSfuQz1z.js";import"./floating-components-CKmcRn_b.js";import"./form-components-DkSoQB8U.js";import"./button-CzozbFgE.js";import"./infotext-DdV1p_p1.js";import"./input-BS-E9L6g.js";import"./tag-B_hHOQFn.js";import"./tooltip-Dow1Nn8l.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,g={title:"Components/DBCustomSelect/Show Required Asterisk",component:r,parameters:{layout:"centered"},tags:["autodocs"],args:{onAmountChange:t(),onOptionSelected:t(),onDropdownToggle:t(),onSearch:t()},argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"},onAmountChange:{action:"onAmountChange"},onOptionSelected:{action:"onOptionSelected"},onDropdownToggle:{action:"onDropdownToggle"},onSearch:{action:"onSearch"}}},o={args:{label:"(Default) True",listLabel:"id-1021s9-(Default) True",options:[{value:"Option 1",id:"drpxs8im88"},{value:"Option 2",id:"211ed6zox5"},{value:"Option 3",id:"211ed6zox4"},{value:"Option 4",id:"211ed6zox3"},{value:"Option 5",id:"211ed6zox2"}],multiple:!0,required:!0,showRequiredAsterisk:!0,default:""},render:e=>({components:{DBCustomSelect:r},setup(){return{args:e}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})},l={args:{label:"False",listLabel:"id-10s220-False",options:[{value:"Option 1",id:"2v0zfw8afc"},{value:"Option 2",id:"30830f8w5z"},{value:"Option 3",id:"30830f8w4z"},{value:"Option 4",id:"30830f8w3z"},{value:"Option 5",id:"30830f8w2z"}],required:!0,showRequiredAsterisk:!1,multiple:!0,default:""},render:e=>({components:{DBCustomSelect:r},setup(){return{args:e}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) True",
    "listLabel": "id-1021s9-(Default) True",
    "options": [{
      value: 'Option 1',
      id: 'drpxs8im88'
    }, {
      value: 'Option 2',
      id: '211ed6zox5'
    }, {
      value: 'Option 3',
      id: '211ed6zox4'
    }, {
      value: 'Option 4',
      id: '211ed6zox3'
    }, {
      value: 'Option 5',
      id: '211ed6zox2'
    }],
    "multiple": true,
    "required": true,
    "showRequiredAsterisk": true,
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
    "label": "False",
    "listLabel": "id-10s220-False",
    "options": [{
      value: 'Option 1',
      id: '2v0zfw8afc'
    }, {
      value: 'Option 2',
      id: '30830f8w5z'
    }, {
      value: 'Option 3',
      id: '30830f8w4z'
    }, {
      value: 'Option 4',
      id: '30830f8w3z'
    }, {
      value: 'Option 5',
      id: '30830f8w2z'
    }],
    "required": true,
    "showRequiredAsterisk": false,
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
}`,...l.parameters?.docs?.source}}};const h=["DefaultTrue","False"];export{o as DefaultTrue,l as False,h as __namedExportsOrder,g as default};
