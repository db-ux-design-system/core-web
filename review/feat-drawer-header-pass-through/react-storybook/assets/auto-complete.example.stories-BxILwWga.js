import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./button-ChhR9oDm.js";import{n as i,t as a}from"./infotext-ioQeZiK-.js";import{n as o,t as s}from"./custom-select-CECTft9r.js";import{n as c,t as l}from"./input-BA4P_mzj.js";var u,d,f,p,m;function h(){return(h=e((()=>{n(),i(),c(),o(),u=t(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBCustomSelect/Auto Complete`,component:s,parameters:{layout:`centered`},tags:[`autodocs`],args:{onAmountChange:d(),onOptionSelected:d(),onDropdownToggle:d(),onSearch:d()},argTypes:{options:{control:`object`},label:{control:`text`},placeholder:{control:`text`},id:{control:`text`},multiple:{control:`boolean`},variant:{control:`select`,options:[`above`,`floating`]},values:{control:`object`},showLabel:{control:`boolean`},message:{control:`text`},showMessage:{control:`boolean`},showIcon:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},disabled:{control:`boolean`},name:{control:`text`},form:{control:`text`},autoComplete:{control:`text`},ariaDescribedBy:{control:`text`},formFieldWidth:{control:`select`,options:[`full`,`auto`]},dropdownWidth:{control:`select`,options:[`auto`,`fixed`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`]},selectedType:{control:`select`,options:[`amount`,`text`,`tag`]},showNoResults:{control:`boolean`},noResultsText:{control:`text`},showLoading:{control:`boolean`},loadingText:{control:`text`},showSearch:{control:`boolean`},showSelectAll:{control:`boolean`},showClearSelection:{control:`boolean`},removeTagsTexts:{control:`object`},searchValue:{control:`text`},searchLabel:{control:`text`},searchPlaceholder:{control:`text`},selectedLabels:{control:`text`},selectedPrefix:{control:`text`},selectAllLabel:{control:`text`},listLabel:{control:`text`},clearSelectionText:{control:`text`},amountText:{control:`text`},mobileCloseButtonText:{control:`text`},open:{control:`boolean`},autofocus:{control:`boolean`},onAmountChange:{action:`onAmountChange`},onOptionSelected:{action:`onOptionSelected`},onDropdownToggle:{action:`onDropdownToggle`},onSearch:{action:`onSearch`}}},p={args:{autoComplete:`country`,name:`country`,label:`Country`,placeholder:`Choose a country`,options:[{value:`DE`,label:`Germany`},{value:`AT`,label:`Austria`},{value:`CH`,label:`Switzerland`},{value:`FR`,label:`France`}]},render:e=>(0,u.jsx)(`form`,{onSubmit:e=>handleSubmit(e),children:(0,u.jsxs)(`div`,{className:`db-stack`,"data-gap":`fixed-md`,children:[(0,u.jsx)(a,{semantic:`informational`,size:`small`,children:`Needs address autofill switched on in your browser and an address saved, set to one of the countries below. Pick it in the address field: the browser then fills the whole form, including the hidden select that carries the country, so the selection below has to follow.`}),(0,u.jsx)(`div`,{style:{width:`200px`},children:(0,u.jsx)(l,{autoComplete:`address-line1`,name:`address-line1`,label:`Address`,placeholder:`Street and number`})}),(0,u.jsx)(`div`,{style:{width:`200px`},children:(0,u.jsx)(s,{...e})}),(0,u.jsx)(`div`,{children:(0,u.jsx)(r,{type:`submit`,variant:`brand`,children:`Submit`})}),`Submitted country: -`]})})},m=[`AutoComplete`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}}})))()}h();export{p as AutoComplete,m as __namedExportsOrder,f as default};