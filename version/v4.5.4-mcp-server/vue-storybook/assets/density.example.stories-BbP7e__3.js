import{_ as a}from"./custom-select-CttCx83r.js";import"./iframe-IFZVrxLO.js";import"./preload-helper-B7q7OWx3.js";import"./constants-y2N5m1XS.js";import"./index-DFbrfN6t.js";import"./document-scroll-listener-DgOjS5ct.js";import"./floating-components-CKmcRn_b.js";import"./form-components-CohepBcF.js";import"./button-D5ThCaUY.js";import"./infotext-B-ZttWlo.js";import"./input-YL2TVPnO.js";import"./tag-hwpgD5o6.js";import"./tooltip-B25qYuFW.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBCustomSelect/Density",component:a,parameters:{layout:"centered"},tags:["autodocs"],args:{onAmountChange:t(),onOptionSelected:t(),onDropdownToggle:t(),onSearch:t()},argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"},onAmountChange:{action:"onAmountChange"},onOptionSelected:{action:"onOptionSelected"},onDropdownToggle:{action:"onDropdownToggle"},onSearch:{action:"onSearch"}}},o={args:{"data-density":"functional",placeholder:"Placeholder",label:"Functional",listLabel:"id-10206-Functional",options:[{value:"Option 1",id:"miouzc0ec"},{value:"Option 2",id:"10dqnhil2"},{value:"Option 3",id:"10dqnhil3"},{value:"Option 4",id:"10dqnhil4"},{value:"Option 5",id:"10dqnhil5"}],default:""},render:e=>({components:{DBCustomSelect:a},setup(){return{args:e}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})},l={args:{"data-density":"regular",placeholder:"Placeholder",label:"(Default) Regular",listLabel:"id-10207-(Default) Regular",options:[{value:"Option 1",id:"ok5olto18"},{value:"Option 2",id:"mzepnlbp4"},{value:"Option 3",id:"10dqnhil3"},{value:"Option 4",id:"10dqnhil2"},{value:"Option 5",id:"10dqnhil1"}],default:""},render:e=>({components:{DBCustomSelect:a},setup(){return{args:e}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})},n={args:{"data-density":"expressive",placeholder:"Placeholder",label:"Expressive",listLabel:"id-10208-Expressive",options:[{value:"Option 1",id:"ixtyk8z9j"},{value:"Option 2",id:"k8kvx3fm8"},{value:"Option 3",id:"k8kvx3fm5"},{value:"Option 4",id:"k8kvx3fm6"},{value:"Option 5",id:"k8kvx3fm7"}],default:""},render:e=>({components:{DBCustomSelect:a},setup(){return{args:e}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "placeholder": "Placeholder",
    "label": "Functional",
    "listLabel": "id-10206-Functional",
    "options": [{
      value: 'Option 1',
      id: 'miouzc0ec'
    }, {
      value: 'Option 2',
      id: '10dqnhil2'
    }, {
      value: 'Option 3',
      id: '10dqnhil3'
    }, {
      value: 'Option 4',
      id: '10dqnhil4'
    }, {
      value: 'Option 5',
      id: '10dqnhil5'
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
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >\${args.default}</DBCustomSelect></div>\`
  })
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "placeholder": "Placeholder",
    "label": "(Default) Regular",
    "listLabel": "id-10207-(Default) Regular",
    "options": [{
      value: 'Option 1',
      id: 'ok5olto18'
    }, {
      value: 'Option 2',
      id: 'mzepnlbp4'
    }, {
      value: 'Option 3',
      id: '10dqnhil3'
    }, {
      value: 'Option 4',
      id: '10dqnhil2'
    }, {
      value: 'Option 5',
      id: '10dqnhil1'
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
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >\${args.default}</DBCustomSelect></div>\`
  })
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "placeholder": "Placeholder",
    "label": "Expressive",
    "listLabel": "id-10208-Expressive",
    "options": [{
      value: 'Option 1',
      id: 'ixtyk8z9j'
    }, {
      value: 'Option 2',
      id: 'k8kvx3fm8'
    }, {
      value: 'Option 3',
      id: 'k8kvx3fm5'
    }, {
      value: 'Option 4',
      id: 'k8kvx3fm6'
    }, {
      value: 'Option 5',
      id: 'k8kvx3fm7'
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
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >\${args.default}</DBCustomSelect></div>\`
  })
}`,...n.parameters?.docs?.source}}};const O=["Functional","DefaultRegular","Expressive"];export{l as DefaultRegular,n as Expressive,o as Functional,O as __namedExportsOrder,f as default};
