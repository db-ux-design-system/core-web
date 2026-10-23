import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-s2ScfbWm.js";import{n as r,t as i}from"./apply-web-component-args-D9l5AfRk.js";var a,o,s,c;function l(){return(l=e((()=>{n(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBCustomSelect/Auto Complete`,component:`db-custom-select`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onAmountChange:a(),onOptionSelected:a(),onDropdownToggle:a(),onSearch:a()},argTypes:{options:{control:`object`},label:{control:`text`},placeholder:{control:`text`},id:{control:`text`},multiple:{control:`boolean`},variant:{control:`select`,options:[`above`,`floating`]},values:{control:`object`},showLabel:{control:`boolean`},message:{control:`text`},showMessage:{control:`boolean`},showIcon:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},disabled:{control:`boolean`},name:{control:`text`},form:{control:`text`},autoComplete:{control:`text`},ariaDescribedBy:{control:`text`},formFieldWidth:{control:`select`,options:[`full`,`auto`]},dropdownWidth:{control:`select`,options:[`auto`,`fixed`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`]},selectedType:{control:`select`,options:[`amount`,`text`,`tag`]},showNoResults:{control:`boolean`},noResultsText:{control:`text`},showLoading:{control:`boolean`},loadingText:{control:`text`},showSearch:{control:`boolean`},showSelectAll:{control:`boolean`},showClearSelection:{control:`boolean`},removeTagsTexts:{control:`object`},searchValue:{control:`text`},searchLabel:{control:`text`},searchPlaceholder:{control:`text`},selectedLabels:{control:`text`},selectedPrefix:{control:`text`},selectAllLabel:{control:`text`},listLabel:{control:`text`},clearSelectionText:{control:`text`},amountText:{control:`text`},mobileCloseButtonText:{control:`text`},open:{control:`boolean`},autofocus:{control:`boolean`},onAmountChange:{action:`onAmountChange`},onOptionSelected:{action:`onOptionSelected`},onDropdownToggle:{action:`onDropdownToggle`},onSearch:{action:`onSearch`}}},s={args:{autoComplete:`country`,name:`country`,label:`Country`,placeholder:`Choose a country`,options:[{value:`DE`,label:`Germany`},{value:`AT`,label:`Austria`},{value:`CH`,label:`Switzerland`},{value:`FR`,label:`France`}]},render:({children:e,...n})=>t`<form><div data-gap="fixed-md"><db-infotext semantic="informational" size="small">Needs address autofill switched on in your browser and an address saved, set to one of the countries below. Pick it in the address field: the browser then fills the whole form, including the hidden select that carries the country, so the selection below has to follow.</db-infotext><div><db-input auto-complete="address-line1" name="address-line1" label="Address" placeholder="Street and number"></db-input></div><div><db-custom-select ${r(n)}></db-custom-select></div><div><db-button type="submit" variant="brand">Submit</db-button></div><div>Submitted country: -</div></div></form>`},c=[`AutoComplete`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "autoComplete": "country",
    "name": "country",
    "label": "Country",
    "placeholder": "Choose a country",
    "options": [{
      value: 'DE',
      label: 'Germany'
    }, {
      value: 'AT',
      label: 'Austria'
    }, {
      value: 'CH',
      label: 'Switzerland'
    }, {
      value: 'FR',
      label: 'France'
    }]
  },
  render: ({
    children,
    ...args
  }: any) => html\`<form><div data-gap="fixed-md"><db-infotext semantic="informational" size="small">Needs address autofill switched on in your browser and an address saved, set to one of the countries below. Pick it in the address field: the browser then fills the whole form, including the hidden select that carries the country, so the selection below has to follow.</db-infotext><div><db-input auto-complete="address-line1" name="address-line1" label="Address" placeholder="Street and number"></db-input></div><div><db-custom-select \${spreadArgs(args)}></db-custom-select></div><div><db-button type="submit" variant="brand">Submit</db-button></div><div>Submitted country: -</div></div></form>\`
}`,...s.parameters?.docs?.source}}}})))()}l();export{s as AutoComplete,c as __namedExportsOrder,o as default};