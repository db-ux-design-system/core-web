import{n as e}from"./chunk-BneVvdWh.js";import{t,x as n}from"./src-ColJ0xlm.js";var r,i,a,o,s;e((()=>{t(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBCustomSelect/Show Clear Selection`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],args:{onAmountChange:r(),onOptionSelected:r(),onDropdownToggle:r(),onSearch:r()},argTypes:{options:{control:`object`},label:{control:`text`},placeholder:{control:`text`},id:{control:`text`},multiple:{control:`boolean`},variant:{control:`select`,options:[`above`,`floating`]},values:{control:`object`},showLabel:{control:`boolean`},message:{control:`text`},showMessage:{control:`boolean`},showIcon:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},disabled:{control:`boolean`},name:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},formFieldWidth:{control:`select`,options:[`full`,`auto`]},dropdownWidth:{control:`select`,options:[`auto`,`fixed`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`]},selectedType:{control:`select`,options:[`amount`,`text`,`tag`]},showNoResults:{control:`boolean`},noResultsText:{control:`text`},showLoading:{control:`boolean`},loadingText:{control:`text`},showSearch:{control:`boolean`},showSelectAll:{control:`boolean`},showClearSelection:{control:`boolean`},removeTagsTexts:{control:`object`},searchValue:{control:`text`},searchLabel:{control:`text`},searchPlaceholder:{control:`text`},selectedLabels:{control:`text`},selectedPrefix:{control:`text`},selectAllLabel:{control:`text`},listLabel:{control:`text`},clearSelectionText:{control:`text`},amountText:{control:`text`},mobileCloseButtonText:{control:`text`},open:{control:`boolean`},autofocus:{control:`boolean`},onAmountChange:{action:`onAmountChange`},onOptionSelected:{action:`onOptionSelected`},onDropdownToggle:{action:`onDropdownToggle`},onSearch:{action:`onSearch`}}},a={args:{label:`(Default) True`,listLabel:`id-10258-(Default) True`,options:[{value:`Option 1`,id:`9zfvu9noy`},{value:`Option 2`,id:`cox90a0q8`},{value:`Option 3`,id:`cox80a0q8`},{value:`Option 4`,id:`cox70a0q8`},{value:`Option 5`,id:`cox60a0q8`}],showClearSelection:!0,multiple:!0,default:``},render:e=>({components:{DBCustomSelect:n},setup(){return{args:e}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})},o={args:{label:`False`,listLabel:`id-10259-False`,options:[{value:`Option 1`,id:`ln9ms4fjy`},{value:`Option 2`,id:`dta90rteq`},{value:`Option 3`,id:`dta80rteq`},{value:`Option 4`,id:`dta70rteq`},{value:`Option 5`,id:`dta60rteq`}],showClearSelection:!1,multiple:!0,default:``},render:e=>({components:{DBCustomSelect:n},setup(){return{args:e}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) True",
    "listLabel": "id-10258-(Default) True",
    "options": [{
      value: 'Option 1',
      id: '9zfvu9noy'
    }, {
      value: 'Option 2',
      id: 'cox90a0q8'
    }, {
      value: 'Option 3',
      id: 'cox80a0q8'
    }, {
      value: 'Option 4',
      id: 'cox70a0q8'
    }, {
      value: 'Option 5',
      id: 'cox60a0q8'
    }],
    "showClearSelection": true,
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
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "False",
    "listLabel": "id-10259-False",
    "options": [{
      value: 'Option 1',
      id: 'ln9ms4fjy'
    }, {
      value: 'Option 2',
      id: 'dta90rteq'
    }, {
      value: 'Option 3',
      id: 'dta80rteq'
    }, {
      value: 'Option 4',
      id: 'dta70rteq'
    }, {
      value: 'Option 5',
      id: 'dta60rteq'
    }],
    "showClearSelection": false,
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
}`,...o.parameters?.docs?.source}}},s=[`DefaultTrue`,`False`]}))();export{a as DefaultTrue,o as False,s as __namedExportsOrder,i as default};