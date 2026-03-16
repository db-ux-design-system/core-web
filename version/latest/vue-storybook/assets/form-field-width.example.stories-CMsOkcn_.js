import{_ as n}from"./custom-select-WuUwIRCS.js";import"./iframe-C6HTyZkQ.js";import"./preload-helper-sAVlnXQB.js";import"./constants-y2N5m1XS.js";import"./index-DPATXrhb.js";import"./document-scroll-listener-B3yk2wvJ.js";import"./floating-components-CKmcRn_b.js";import"./form-components-Ceb0jGtC.js";import"./button-DgUqe5HI.js";import"./infotext-BxvkwK5E.js";import"./input-BMmdU6_d.js";import"./tag-CTn1lWl8.js";import"./tooltip-DzYm-QY0.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBCustomSelect/Form Field Width",component:n,parameters:{layout:"centered"},tags:["autodocs"],args:{onAmountChange:t(),onOptionSelected:t(),onDropdownToggle:t(),onSearch:t()},argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"},onAmountChange:{action:"onAmountChange"},onOptionSelected:{action:"onOptionSelected"},onDropdownToggle:{action:"onDropdownToggle"},onSearch:{action:"onSearch"}}},e={args:{label:"(Default) Full",formFieldWidth:"full",listLabel:"id-10223-(Default) Full",options:[{value:"Option 1",id:"z0ispy7ls"},{value:"Option 2",id:"ngl1p4pxn"},{value:"Option 3",id:"ngl1p3pxn"},{value:"Option 4",id:"ngl1p2pxn"},{value:"Option 5",id:"ngl1p1pxn"}],default:""},render:o=>({components:{DBCustomSelect:n},setup(){return{args:o}},template:`<div  :style="{
  width: '400px'
}"  ><DBCustomSelect v-bind="args"   >${o.default}</DBCustomSelect></div>`})},l={args:{label:"Auto",formFieldWidth:"auto",listLabel:"id-10224-Auto",options:[{value:"Option 1",id:"klxyvobwn"},{value:"Option 2",id:"7oag2a4fj"},{value:"Option 3",id:"7oag2a3fj"},{value:"Option 4",id:"7oag2a2fj"},{value:"Option 5",id:"7oag2a1fj"}],default:""},render:o=>({components:{DBCustomSelect:n},setup(){return{args:o}},template:`<div  :style="{
  width: '400px'
}"  ><DBCustomSelect v-bind="args"   >${o.default}</DBCustomSelect></div>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) Full",
    "formFieldWidth": "full",
    "listLabel": "id-10223-(Default) Full",
    "options": [{
      value: 'Option 1',
      id: 'z0ispy7ls'
    }, {
      value: 'Option 2',
      id: 'ngl1p4pxn'
    }, {
      value: 'Option 3',
      id: 'ngl1p3pxn'
    }, {
      value: 'Option 4',
      id: 'ngl1p2pxn'
    }, {
      value: 'Option 5',
      id: 'ngl1p1pxn'
    }],
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
  width: '400px'
}"  ><DBCustomSelect v-bind="args"   >\${args.default}</DBCustomSelect></div>\`
  })
}`,...e.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Auto",
    "formFieldWidth": "auto",
    "listLabel": "id-10224-Auto",
    "options": [{
      value: 'Option 1',
      id: 'klxyvobwn'
    }, {
      value: 'Option 2',
      id: '7oag2a4fj'
    }, {
      value: 'Option 3',
      id: '7oag2a3fj'
    }, {
      value: 'Option 4',
      id: '7oag2a2fj'
    }, {
      value: 'Option 5',
      id: '7oag2a1fj'
    }],
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
  width: '400px'
}"  ><DBCustomSelect v-bind="args"   >\${args.default}</DBCustomSelect></div>\`
  })
}`,...l.parameters?.docs?.source}}};const h=["DefaultFull","Auto"];export{l as Auto,e as DefaultFull,h as __namedExportsOrder,f as default};
