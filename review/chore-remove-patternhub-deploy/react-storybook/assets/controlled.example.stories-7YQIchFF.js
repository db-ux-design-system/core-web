import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./custom-select-Dq357rpT.js";var a=t({ControlledOptionsAndValuesExternalState:()=>l,__namedExportsOrder:()=>u,default:()=>c}),o,s,c,l,u;function d(){return(d=e((()=>{r(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBCustomSelect/Controlled`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onAmountChange:s(),onOptionSelected:s(),onDropdownToggle:s(),onSearch:s()},argTypes:{options:{control:`object`},label:{control:`text`},placeholder:{control:`text`},id:{control:`text`},multiple:{control:`boolean`},variant:{control:`select`,options:[`above`,`floating`]},values:{control:`object`},showLabel:{control:`boolean`},message:{control:`text`},showMessage:{control:`boolean`},showIcon:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},disabled:{control:`boolean`},name:{control:`text`},form:{control:`text`},autoComplete:{control:`text`},ariaDescribedBy:{control:`text`},formFieldWidth:{control:`select`,options:[`full`,`auto`]},dropdownWidth:{control:`select`,options:[`auto`,`fixed`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`]},selectedType:{control:`select`,options:[`amount`,`text`,`tag`]},showNoResults:{control:`boolean`},noResultsText:{control:`text`},showLoading:{control:`boolean`},loadingText:{control:`text`},showSearch:{control:`boolean`},showSelectAll:{control:`boolean`},showClearSelection:{control:`boolean`},removeTagsTexts:{control:`object`},searchValue:{control:`text`},searchLabel:{control:`text`},searchPlaceholder:{control:`text`},selectedLabels:{control:`text`},selectedPrefix:{control:`text`},selectAllLabel:{control:`text`},listLabel:{control:`text`},clearSelectionText:{control:`text`},amountText:{control:`text`},mobileCloseButtonText:{control:`text`},open:{control:`boolean`},autofocus:{control:`boolean`},onAmountChange:{action:`onAmountChange`},onOptionSelected:{action:`onOptionSelected`},onDropdownToggle:{action:`onDropdownToggle`},onSearch:{action:`onSearch`}}},l={args:{label:`Country`,placeholder:`Choose countries`,selectedType:`tag`,multiple:!0,options:[{value:`de`,label:`Germany`},{value:`at`,label:`Austria`}],values:void 0,onOptionSelected:s()},render:e=>(0,o.jsxs)(`div`,{className:`db-stack`,"data-gap":`fixed-md`,children:[`Use external buttons to change options and selection`,(0,o.jsxs)(`div`,{style:{width:`200px`},children:[(0,o.jsx)(i,{...e}),`Selections by user: 0`]})]})},u=[`ControlledOptionsAndValuesExternalState`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
  render: (properties: any) => <div className="db-stack" data-gap="fixed-md">Use external buttons to change options and selection<div style={{
      width: '200px'
    }}><DBCustomSelect {...properties} />Selections by user: 0</div></div>
}`,...l.parameters?.docs?.source}}}})))()}export{a as n,d as r,l as t};