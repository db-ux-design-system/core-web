import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-dqn2cA9M.js";import{n as i,t as a}from"./apply-web-component-args-ARfb8F4v.js";var o=t({ControlledOptionsAndValuesExternalState:()=>l,__namedExportsOrder:()=>u,default:()=>c}),s,c,l,u;function d(){return(d=e((()=>{r(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBCustomSelect/Controlled`,component:`db-custom-select`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onAmountChange:s(),onOptionSelected:s(),onDropdownToggle:s(),onSearch:s()},argTypes:{options:{control:`object`},label:{control:`text`},placeholder:{control:`text`},id:{control:`text`},multiple:{control:`boolean`},variant:{control:`select`,options:[`above`,`floating`]},values:{control:`object`},showLabel:{control:`boolean`},message:{control:`text`},showMessage:{control:`boolean`},showIcon:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},disabled:{control:`boolean`},name:{control:`text`},form:{control:`text`},autoComplete:{control:`text`},ariaDescribedBy:{control:`text`},formFieldWidth:{control:`select`,options:[`full`,`auto`]},dropdownWidth:{control:`select`,options:[`auto`,`fixed`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`]},selectedType:{control:`select`,options:[`amount`,`text`,`tag`]},showNoResults:{control:`boolean`},noResultsText:{control:`text`},showLoading:{control:`boolean`},loadingText:{control:`text`},showSearch:{control:`boolean`},showSelectAll:{control:`boolean`},showClearSelection:{control:`boolean`},removeTagsTexts:{control:`object`},searchValue:{control:`text`},searchLabel:{control:`text`},searchPlaceholder:{control:`text`},selectedLabels:{control:`text`},selectedPrefix:{control:`text`},selectAllLabel:{control:`text`},listLabel:{control:`text`},clearSelectionText:{control:`text`},amountText:{control:`text`},mobileCloseButtonText:{control:`text`},open:{control:`boolean`},autofocus:{control:`boolean`},onAmountChange:{action:`onAmountChange`},onOptionSelected:{action:`onOptionSelected`},onDropdownToggle:{action:`onDropdownToggle`},onSearch:{action:`onSearch`}}},l={args:{label:`Country`,placeholder:`Choose countries`,selectedType:`tag`,multiple:!0,options:[{value:`de`,label:`Germany`},{value:`at`,label:`Austria`}],values:void 0,onOptionSelected:s()},render:({children:e,...t})=>n`<div data-gap="fixed-md"><div>Use external buttons to change options and selection</div><div style="width: 200px"><db-custom-select ${i(t)}></db-custom-select><div>Selections by user: 0</div></div></div>`},u=[`ControlledOptionsAndValuesExternalState`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
  }: any) => html\`<div data-gap="fixed-md"><div>Use external buttons to change options and selection</div><div style="width: 200px"><db-custom-select \${spreadArgs(args)}></db-custom-select><div>Selections by user: 0</div></div></div>\`
}`,...l.parameters?.docs?.source}}}})))()}export{o as n,d as r,l as t};