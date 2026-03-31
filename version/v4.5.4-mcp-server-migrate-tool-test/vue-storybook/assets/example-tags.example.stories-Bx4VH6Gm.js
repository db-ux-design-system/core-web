import{_ as n}from"./custom-select-BEuN1pcO.js";import"./iframe-BOTASpA2.js";import"./preload-helper-Bk5FE6Wt.js";import"./constants-y2N5m1XS.js";import"./index-D4Tj0YTI.js";import"./document-scroll-listener-gSfuQz1z.js";import"./floating-components-CKmcRn_b.js";import"./form-components-DkSoQB8U.js";import"./button-CzozbFgE.js";import"./infotext-DdV1p_p1.js";import"./input-BS-E9L6g.js";import"./tag-B_hHOQFn.js";import"./tooltip-Dow1Nn8l.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,O={title:"Components/DBCustomSelect/Example tags",component:n,parameters:{layout:"centered"},tags:["autodocs"],args:{onAmountChange:t(),onOptionSelected:t(),onDropdownToggle:t(),onSearch:t()},argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"},onAmountChange:{action:"onAmountChange"},onOptionSelected:{action:"onOptionSelected"},onDropdownToggle:{action:"onDropdownToggle"},onSearch:{action:"onSearch"}}},e={args:{selectedType:"tag",label:"Tag grow",listLabel:"id-10271-Tag grow",options:[{value:"Option 1",id:"53xbfd1o6"},{value:"Option 2",id:"fq8ypeiz2"},{value:"Option 3",id:"jtd3wevz2"},{value:"Option 4",id:"srr1toi8f"},{value:"Option 5",id:"srr1toi7f"}],multiple:!0,removeTagsTexts:["Remove Option entry 1","Remove Option entry 2","Remove Option entry 3","Remove Option entry 4"],default:""},render:o=>({components:{DBCustomSelect:n},setup(){return{args:o}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${o.default}</DBCustomSelect></div>`})},l={args:{selectedType:"tag",formFieldWidth:"auto",label:"Tag grow + auto",listLabel:"id-10272-Tag grow + auto",options:[{value:"Option 1",id:"jn3s5kl9t"},{value:"Option 2",id:"iesayujhy"},{value:"Option 3",id:"55kavoeem"},{value:"Option 4",id:"xi4qhrdg8"},{value:"Option 5",id:"xi4qhrdg7"}],multiple:!0,default:""},render:o=>({components:{DBCustomSelect:n},setup(){return{args:o}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${o.default}</DBCustomSelect></div>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "selectedType": "tag",
    "label": "Tag grow",
    "listLabel": "id-10271-Tag grow",
    "options": [{
      value: 'Option 1',
      id: '53xbfd1o6'
    }, {
      value: 'Option 2',
      id: 'fq8ypeiz2'
    }, {
      value: 'Option 3',
      id: 'jtd3wevz2'
    }, {
      value: 'Option 4',
      id: 'srr1toi8f'
    }, {
      value: 'Option 5',
      id: 'srr1toi7f'
    }],
    "multiple": true,
    "removeTagsTexts": ['Remove Option entry 1', 'Remove Option entry 2', 'Remove Option entry 3', 'Remove Option entry 4'],
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
    "selectedType": "tag",
    "formFieldWidth": "auto",
    "label": "Tag grow + auto",
    "listLabel": "id-10272-Tag grow + auto",
    "options": [{
      value: 'Option 1',
      id: 'jn3s5kl9t'
    }, {
      value: 'Option 2',
      id: 'iesayujhy'
    }, {
      value: 'Option 3',
      id: '55kavoeem'
    }, {
      value: 'Option 4',
      id: 'xi4qhrdg8'
    }, {
      value: 'Option 5',
      id: 'xi4qhrdg7'
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
}`,...l.parameters?.docs?.source}}};const h=["Taggrow","Taggrowauto"];export{e as Taggrow,l as Taggrowauto,h as __namedExportsOrder,O as default};
