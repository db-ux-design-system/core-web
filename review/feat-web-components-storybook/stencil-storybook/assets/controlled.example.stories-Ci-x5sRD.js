import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{n as r,t as i}from"./apply-web-component-args-B1PNRnpa.js";var a,o,s,c;function l(){return(l=e((()=>{n(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBCustomSelect/Controlled`,component:`db-custom-select`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onAmountChange:a(),onOptionSelected:a(),onDropdownToggle:a(),onSearch:a()},argTypes:{options:{control:`object`},label:{control:`text`},placeholder:{control:`text`},id:{control:`text`},multiple:{control:`boolean`},variant:{control:`select`,options:[`above`,`floating`]},values:{control:`object`},showLabel:{control:`boolean`},message:{control:`text`},showMessage:{control:`boolean`},showIcon:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},disabled:{control:`boolean`},name:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},formFieldWidth:{control:`select`,options:[`full`,`auto`]},dropdownWidth:{control:`select`,options:[`auto`,`fixed`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`]},selectedType:{control:`select`,options:[`amount`,`text`,`tag`]},showNoResults:{control:`boolean`},noResultsText:{control:`text`},showLoading:{control:`boolean`},loadingText:{control:`text`},showSearch:{control:`boolean`},showSelectAll:{control:`boolean`},showClearSelection:{control:`boolean`},removeTagsTexts:{control:`object`},searchValue:{control:`text`},searchLabel:{control:`text`},searchPlaceholder:{control:`text`},selectedLabels:{control:`text`},selectedPrefix:{control:`text`},selectAllLabel:{control:`text`},listLabel:{control:`text`},clearSelectionText:{control:`text`},amountText:{control:`text`},mobileCloseButtonText:{control:`text`},open:{control:`boolean`},autofocus:{control:`boolean`},onAmountChange:{action:`onAmountChange`},onOptionSelected:{action:`onOptionSelected`},onDropdownToggle:{action:`onDropdownToggle`},onSearch:{action:`onSearch`}}},s={args:{label:`Country`,placeholder:`Choose countries`,selectedType:`tag`,multiple:!0,options:[{value:`de`,label:`Germany`},{value:`at`,label:`Austria`}],values:void 0,onOptionSelected:a()},render:({children:e,...n})=>t`<div data-gap="fixed-md">Use external buttons to change options and selection<div><db-custom-select ${r(n)}></db-custom-select>Selections by user: 0</div></div>`},c=[`ControlledOptionsAndValuesExternalState`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
    "onOptionSelected": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-gap="fixed-md">Use external buttons to change options and selection<div><db-custom-select \${spreadArgs(args)}></db-custom-select>Selections by user: 0</div></div>\`
}`,...s.parameters?.docs?.source}}}})))()}l();export{s as ControlledOptionsAndValuesExternalState,c as __namedExportsOrder,o as default};