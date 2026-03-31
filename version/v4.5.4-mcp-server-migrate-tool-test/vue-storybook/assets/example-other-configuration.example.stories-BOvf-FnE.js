import{_ as t}from"./custom-select-BEuN1pcO.js";import"./iframe-BOTASpA2.js";import"./preload-helper-Bk5FE6Wt.js";import"./constants-y2N5m1XS.js";import"./index-D4Tj0YTI.js";import"./document-scroll-listener-gSfuQz1z.js";import"./floating-components-CKmcRn_b.js";import"./form-components-DkSoQB8U.js";import"./button-CzozbFgE.js";import"./infotext-DdV1p_p1.js";import"./input-BS-E9L6g.js";import"./tag-B_hHOQFn.js";import"./tooltip-Dow1Nn8l.js";const{fn:o}=__STORYBOOK_MODULE_TEST__,C={title:"Components/DBCustomSelect/Example: Other configuration",component:t,parameters:{layout:"centered"},tags:["autodocs"],args:{onAmountChange:o(),onOptionSelected:o(),onDropdownToggle:o(),onSearch:o()},argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"boolean"},variant:{control:"select",options:["above","floating"]},values:{control:"object"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},showIcon:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},formFieldWidth:{control:"select",options:["full","auto"]},dropdownWidth:{control:"select",options:["auto","fixed"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end"]},selectedType:{control:"select",options:["amount","text","tag"]},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"object"},searchValue:{control:"text"},searchLabel:{control:"text"},searchPlaceholder:{control:"text"},selectedLabels:{control:"text"},selectedPrefix:{control:"text"},selectAllLabel:{control:"text"},listLabel:{control:"text"},clearSelectionText:{control:"text"},amountText:{control:"text"},mobileCloseButtonText:{control:"text"},open:{control:"boolean"},autofocus:{control:"boolean"},onAmountChange:{action:"onAmountChange"},onOptionSelected:{action:"onOptionSelected"},onDropdownToggle:{action:"onDropdownToggle"},onSearch:{action:"onSearch"}}},l={args:{searchValue:"1",searchLabel:"Search",label:"Search Value",listLabel:"id-10as4-Search Value",options:[{value:"Option 1",id:"09nursdao"},{value:"Option 2",id:"74n9csdc14"},{value:"Option 3",id:"64n9csdc14"},{value:"Option 4",id:"54n9csdc14"},{value:"Option 5",id:"44n9csdc14"}],showSearch:!0,multiple:!0,default:""},render:e=>({components:{DBCustomSelect:t},setup(){return{args:e}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})},a={args:{selectedLabels:"Selected: Label controlled",label:"Custom Selected Label",listLabel:"id-10aasds4-Custom Selected Label",options:[{value:"Option 1",id:"09nurdscsdao"},{value:"Option 2",id:"74n9ccsddc14"},{value:"Option 3",id:"73n9ccsddc14"},{value:"Option 4",id:"72n9ccsddc14"},{value:"Option 5",id:"71n9ccsddc14"}],default:""},render:e=>({components:{DBCustomSelect:t},setup(){return{args:e}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})},s={args:{label:"Transform Selected Label",listLabel:"id-10aasds4-Transform Selected Label",options:[{value:"Option 1",id:"09nurdscsdao"},{value:"Option 2",id:"74n9ccsddc14"},{value:"Option 3",id:"73n9ccsddc14"},{value:"Option 4",id:"72n9ccsddc14"},{value:"Option 5",id:"71n9ccsddc14"}],default:""},render:e=>({components:{DBCustomSelect:t},setup(){return{args:e}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})},c={args:{label:"Custom Search Filter",listLabel:"id-10aasds4-Custom Search Filter",options:[{value:"Option 1",id:"09nurdscsdao"},{value:"Option 2",id:"74n9ccsddc14"},{value:"Option 3",id:"73n9ccsddc14"},{value:"Option 4",id:"72n9ccsddc14"},{value:"Option 5",id:"71n9ccsddc14"}],default:""},render:e=>({components:{DBCustomSelect:t},setup(){return{args:e}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "searchValue": "1",
    "searchLabel": "Search",
    "label": "Search Value",
    "listLabel": "id-10as4-Search Value",
    "options": [{
      value: 'Option 1',
      id: '09nursdao'
    }, {
      value: 'Option 2',
      id: '74n9csdc14'
    }, {
      value: 'Option 3',
      id: '64n9csdc14'
    }, {
      value: 'Option 4',
      id: '54n9csdc14'
    }, {
      value: 'Option 5',
      id: '44n9csdc14'
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
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "selectedLabels": "Selected: Label controlled",
    "label": "Custom Selected Label",
    "listLabel": "id-10aasds4-Custom Selected Label",
    "options": [{
      value: 'Option 1',
      id: '09nurdscsdao'
    }, {
      value: 'Option 2',
      id: '74n9ccsddc14'
    }, {
      value: 'Option 3',
      id: '73n9ccsddc14'
    }, {
      value: 'Option 4',
      id: '72n9ccsddc14'
    }, {
      value: 'Option 5',
      id: '71n9ccsddc14'
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Transform Selected Label",
    "listLabel": "id-10aasds4-Transform Selected Label",
    "options": [{
      value: 'Option 1',
      id: '09nurdscsdao'
    }, {
      value: 'Option 2',
      id: '74n9ccsddc14'
    }, {
      value: 'Option 3',
      id: '73n9ccsddc14'
    }, {
      value: 'Option 4',
      id: '72n9ccsddc14'
    }, {
      value: 'Option 5',
      id: '71n9ccsddc14'
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
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Custom Search Filter",
    "listLabel": "id-10aasds4-Custom Search Filter",
    "options": [{
      value: 'Option 1',
      id: '09nurdscsdao'
    }, {
      value: 'Option 2',
      id: '74n9ccsddc14'
    }, {
      value: 'Option 3',
      id: '73n9ccsddc14'
    }, {
      value: 'Option 4',
      id: '72n9ccsddc14'
    }, {
      value: 'Option 5',
      id: '71n9ccsddc14'
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
}`,...c.parameters?.docs?.source}}};const x=["SearchValue","CustomSelectedLabel","TransformSelectedLabel","CustomSearchFilter"];export{c as CustomSearchFilter,a as CustomSelectedLabel,l as SearchValue,s as TransformSelectedLabel,x as __namedExportsOrder,C as default};
