import{n as e}from"./chunk-BneVvdWh.js";import{t,x as n}from"./src-CGBMmFt6.js";var r,i,a,o,s;e((()=>{t(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBCustomSelect/Show Message`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],args:{onAmountChange:r(),onOptionSelected:r(),onDropdownToggle:r(),onSearch:r()},argTypes:{options:{control:`object`},label:{control:`text`},placeholder:{control:`text`},id:{control:`text`},multiple:{control:`boolean`},variant:{control:`select`,options:[`above`,`floating`]},values:{control:`object`},showLabel:{control:`boolean`},message:{control:`text`},showMessage:{control:`boolean`},showIcon:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},disabled:{control:`boolean`},name:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},formFieldWidth:{control:`select`,options:[`full`,`auto`]},dropdownWidth:{control:`select`,options:[`auto`,`fixed`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`]},selectedType:{control:`select`,options:[`amount`,`text`,`tag`]},showNoResults:{control:`boolean`},noResultsText:{control:`text`},showLoading:{control:`boolean`},loadingText:{control:`text`},showSearch:{control:`boolean`},showSelectAll:{control:`boolean`},showClearSelection:{control:`boolean`},removeTagsTexts:{control:`object`},searchValue:{control:`text`},searchLabel:{control:`text`},searchPlaceholder:{control:`text`},selectedLabels:{control:`text`},selectedPrefix:{control:`text`},selectAllLabel:{control:`text`},listLabel:{control:`text`},clearSelectionText:{control:`text`},amountText:{control:`text`},mobileCloseButtonText:{control:`text`},open:{control:`boolean`},autofocus:{control:`boolean`},onAmountChange:{action:`onAmountChange`},onOptionSelected:{action:`onOptionSelected`},onDropdownToggle:{action:`onDropdownToggle`},onSearch:{action:`onSearch`}}},a={args:{message:`Helper Message`,label:`(Default) False`,listLabel:`id-10215-(Default) False`,options:[{value:`Option 1`,id:`m88qjifb3`},{value:`Option 2`,id:`4et40d885`},{value:`Option 3`,id:`4et40d884`},{value:`Option 4`,id:`4et40d883`},{value:`Option 5`,id:`4et40d882`}],showMessage:!1,default:``},render:e=>({components:{DBCustomSelect:n},setup(){return{args:e}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})},o={args:{message:`Helper Message`,label:`True`,listLabel:`id-10216-True`,options:[{value:`Option 1`,id:`tm65in30k`},{value:`Option 2`,id:`hujnrn5vk`},{value:`Option 3`,id:`hujnrn4vk`},{value:`Option 4`,id:`hujnrn3vk`},{value:`Option 5`,id:`hujnrn2vk`}],showMessage:!0,default:``},render:e=>({components:{DBCustomSelect:n},setup(){return{args:e}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "message": "Helper Message",
    "label": "(Default) False",
    "listLabel": "id-10215-(Default) False",
    "options": [{
      value: 'Option 1',
      id: 'm88qjifb3'
    }, {
      value: 'Option 2',
      id: '4et40d885'
    }, {
      value: 'Option 3',
      id: '4et40d884'
    }, {
      value: 'Option 4',
      id: '4et40d883'
    }, {
      value: 'Option 5',
      id: '4et40d882'
    }],
    "showMessage": false,
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
    "message": "Helper Message",
    "label": "True",
    "listLabel": "id-10216-True",
    "options": [{
      value: 'Option 1',
      id: 'tm65in30k'
    }, {
      value: 'Option 2',
      id: 'hujnrn5vk'
    }, {
      value: 'Option 3',
      id: 'hujnrn4vk'
    }, {
      value: 'Option 4',
      id: 'hujnrn3vk'
    }, {
      value: 'Option 5',
      id: 'hujnrn2vk'
    }],
    "showMessage": true,
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
}`,...o.parameters?.docs?.source}}},s=[`DefaultFalse`,`True`]}))();export{a as DefaultFalse,o as True,s as __namedExportsOrder,i as default};