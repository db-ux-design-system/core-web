import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./button-Cd7Pz-Ib.js";import{n as a,t as o}from"./infotext-BzIHEy3h.js";import{n as s,t as c}from"./custom-select-0MA5OHg2.js";import{n as l,t as u}from"./input-BaRVr8dz.js";var d=t({AutoComplete:()=>h,__namedExportsOrder:()=>g,default:()=>m}),f,p,m,h,g;function _(){return(_=e((()=>{r(),a(),l(),s(),f=n(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/DBCustomSelect/Auto Complete`,component:c,parameters:{layout:`centered`},tags:[`autodocs`],args:{onAmountChange:p(),onOptionSelected:p(),onDropdownToggle:p(),onSearch:p()},argTypes:{options:{control:`object`},label:{control:`text`},placeholder:{control:`text`},id:{control:`text`},multiple:{control:`boolean`},variant:{control:`select`,options:[`above`,`floating`]},values:{control:`object`},showLabel:{control:`boolean`},message:{control:`text`},showMessage:{control:`boolean`},showIcon:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},disabled:{control:`boolean`},name:{control:`text`},form:{control:`text`},autoComplete:{control:`text`},ariaDescribedBy:{control:`text`},formFieldWidth:{control:`select`,options:[`full`,`auto`]},dropdownWidth:{control:`select`,options:[`auto`,`fixed`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`]},selectedType:{control:`select`,options:[`amount`,`text`,`tag`]},showNoResults:{control:`boolean`},noResultsText:{control:`text`},showLoading:{control:`boolean`},loadingText:{control:`text`},showSearch:{control:`boolean`},showSelectAll:{control:`boolean`},showClearSelection:{control:`boolean`},removeTagsTexts:{control:`object`},searchValue:{control:`text`},searchLabel:{control:`text`},searchPlaceholder:{control:`text`},selectedLabels:{control:`text`},selectedPrefix:{control:`text`},selectAllLabel:{control:`text`},listLabel:{control:`text`},clearSelectionText:{control:`text`},amountText:{control:`text`},mobileCloseButtonText:{control:`text`},open:{control:`boolean`},autofocus:{control:`boolean`},onAmountChange:{action:`onAmountChange`},onOptionSelected:{action:`onOptionSelected`},onDropdownToggle:{action:`onDropdownToggle`},onSearch:{action:`onSearch`}}},h={args:{autoComplete:`country`,name:`country`,label:`Country`,placeholder:`Choose a country`,options:[{value:`DE`,label:`Germany`},{value:`AT`,label:`Austria`},{value:`CH`,label:`Switzerland`},{value:`FR`,label:`France`}]},render:e=>(0,f.jsx)(`form`,{onSubmit:e=>handleSubmit(e),children:(0,f.jsxs)(`div`,{className:`db-stack`,"data-gap":`fixed-md`,children:[(0,f.jsx)(o,{semantic:`informational`,size:`small`,children:`Needs address autofill switched on in your browser and an address saved, set to one of the countries below. Pick it in the address field: the browser then fills the whole form, including the hidden select that carries the country, so the selection below has to follow.`}),(0,f.jsx)(`div`,{style:{width:`200px`},children:(0,f.jsx)(u,{autoComplete:`address-line1`,name:`address-line1`,label:`Address`,placeholder:`Street and number`})}),(0,f.jsx)(`div`,{style:{width:`200px`},children:(0,f.jsx)(c,{...e})}),(0,f.jsx)(`div`,{children:(0,f.jsx)(i,{type:`submit`,variant:`brand`,children:`Submit`})}),`Submitted country: -`]})})},g=[`AutoComplete`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
  render: (properties: any) => <form onSubmit={event => handleSubmit(event)}><div className="db-stack" data-gap="fixed-md"><DBInfotext semantic="informational" size="small">
                        Needs address autofill switched on in your browser and
                        an address saved, set to one of the countries below.
                        Pick it in the address field: the browser then fills the
                        whole form, including the hidden select that carries the
                        country, so the selection below has to follow.
                    </DBInfotext><div style={{
        width: '200px'
      }}><DBInput autoComplete="address-line1" name="address-line1" label="Address" placeholder="Street and number" /></div><div style={{
        width: '200px'
      }}><DBCustomSelect {...properties} /></div><div><DBButton type="submit" variant="brand">
                            Submit
                        </DBButton></div>Submitted country: -</div></form>
}`,...h.parameters?.docs?.source}}}})))()}export{d as n,_ as r,h as t};