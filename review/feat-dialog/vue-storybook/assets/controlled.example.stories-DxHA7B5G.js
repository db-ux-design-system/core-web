import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./button-BhmTF-gJ.js";import{n as r,t as i}from"./custom-select-COID45FV.js";var a,o,s,c;function l(){return(l=e((()=>{t(),r(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBCustomSelect/Controlled`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onAmountChange:a(),onOptionSelected:a(),onDropdownToggle:a(),onSearch:a()},argTypes:{options:{control:`object`},label:{control:`text`},placeholder:{control:`text`},id:{control:`text`},multiple:{control:`boolean`},variant:{control:`select`,options:[`above`,`floating`]},values:{control:`object`},showLabel:{control:`boolean`},message:{control:`text`},showMessage:{control:`boolean`},showIcon:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},disabled:{control:`boolean`},name:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},formFieldWidth:{control:`select`,options:[`full`,`auto`]},dropdownWidth:{control:`select`,options:[`auto`,`fixed`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`]},selectedType:{control:`select`,options:[`amount`,`text`,`tag`]},showNoResults:{control:`boolean`},noResultsText:{control:`text`},showLoading:{control:`boolean`},loadingText:{control:`text`},showSearch:{control:`boolean`},showSelectAll:{control:`boolean`},showClearSelection:{control:`boolean`},removeTagsTexts:{control:`object`},searchValue:{control:`text`},searchLabel:{control:`text`},searchPlaceholder:{control:`text`},selectedLabels:{control:`text`},selectedPrefix:{control:`text`},selectAllLabel:{control:`text`},listLabel:{control:`text`},clearSelectionText:{control:`text`},amountText:{control:`text`},mobileCloseButtonText:{control:`text`},open:{control:`boolean`},autofocus:{control:`boolean`},onAmountChange:{action:`onAmountChange`},onOptionSelected:{action:`onOptionSelected`},onDropdownToggle:{action:`onDropdownToggle`},onSearch:{action:`onSearch`}}},s={args:{label:`Country`,placeholder:`Choose countries`,selectedType:`tag`,multiple:!0,options:[{value:`de`,label:`Germany`},{value:`at`,label:`Austria`}],values:void 0,onOptionSelected:a(),default:``},render:e=>({components:{DBCustomSelect:i,DBButton:n},setup(){return{args:e}},template:`<div class="db-stack" data-gap="fixed-md"   >Use external buttons to change options and selection<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect>Selections by user: 0</div></div>`})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Country",
    "placeholder": "Choose countries",
    "selectedType": "tag",
    "multiple": true,
    "options": [{
      value: 'de',
      label: 'Germany'
    }, {
      value: 'at',
      label: 'Austria'
    }],
    "values": undefined,
    "onOptionSelected": fn(),
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBCustomSelect,
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div class="db-stack" data-gap="fixed-md"   >Use external buttons to change options and selection<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >\${args.default}</DBCustomSelect>Selections by user: 0</div></div>\`
  })
}`,...s.parameters?.docs?.source}}},c=[`ControlledOptionsAndValuesExternalState`]})))()}l();export{s as ControlledOptionsAndValuesExternalState,c as __namedExportsOrder,o as default};