import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./button-DCjvioJC.js";import{n as r,t as i}from"./infotext-Irhnzw0l.js";import{n as a,t as o}from"./custom-select-IFtJ6poV.js";import{n as s,t as c}from"./input-CSfViBo4.js";var l,u,d,f;function p(){return(p=e((()=>{t(),r(),c(),a(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBCustomSelect/Auto Complete`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],args:{onAmountChange:l(),onOptionSelected:l(),onDropdownToggle:l(),onSearch:l()},argTypes:{options:{control:`object`},label:{control:`text`},placeholder:{control:`text`},id:{control:`text`},multiple:{control:`boolean`},variant:{control:`select`,options:[`above`,`floating`]},values:{control:`object`},showLabel:{control:`boolean`},message:{control:`text`},showMessage:{control:`boolean`},showIcon:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},disabled:{control:`boolean`},name:{control:`text`},form:{control:`text`},autoComplete:{control:`text`},ariaDescribedBy:{control:`text`},formFieldWidth:{control:`select`,options:[`full`,`auto`]},dropdownWidth:{control:`select`,options:[`auto`,`fixed`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`]},selectedType:{control:`select`,options:[`amount`,`text`,`tag`]},showNoResults:{control:`boolean`},noResultsText:{control:`text`},showLoading:{control:`boolean`},loadingText:{control:`text`},showSearch:{control:`boolean`},showSelectAll:{control:`boolean`},showClearSelection:{control:`boolean`},removeTagsTexts:{control:`object`},searchValue:{control:`text`},searchLabel:{control:`text`},searchPlaceholder:{control:`text`},selectedLabels:{control:`text`},selectedPrefix:{control:`text`},selectAllLabel:{control:`text`},listLabel:{control:`text`},clearSelectionText:{control:`text`},amountText:{control:`text`},mobileCloseButtonText:{control:`text`},open:{control:`boolean`},autofocus:{control:`boolean`},onAmountChange:{action:`onAmountChange`},onOptionSelected:{action:`onOptionSelected`},onDropdownToggle:{action:`onDropdownToggle`},onSearch:{action:`onSearch`}}},d={args:{autoComplete:`country`,name:`country`,label:`Country`,placeholder:`Choose a country`,options:[{value:`DE`,label:`Germany`},{value:`AT`,label:`Austria`},{value:`CH`,label:`Switzerland`},{value:`FR`,label:`France`}],default:``},render:e=>({components:{DBCustomSelect:o,DBButton:n,DBInfotext:i,DBInput:s},setup(){return{args:e}},template:`<form  @submit="async (event) => handleSubmit(event)"  ><div class="db-stack" data-gap="fixed-md"   ><DBInfotext semantic="informational" size="small"   >
                        Needs address autofill switched on in your browser and
                        an address saved, set to one of the countries below.
                        Pick it in the address field: the browser then fills the
                        whole form, including the hidden select that carries the
                        country, so the selection below has to follow.
                    </DBInfotext><div  :style="{
  width: '200px'
}"  ><DBInput autoComplete="address-line1" name="address-line1" label="Address" placeholder="Street and number"   ></DBInput></div><div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div><div    ><DBButton type="submit" variant="brand"   >
                            Submit
                        </DBButton></div>Submitted country: -</div></form>`})},f=[`AutoComplete`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
    }],
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBCustomSelect,
      DBButton,
      DBInfotext,
      DBInput
    },
    setup() {
      return {
        args
      };
    },
    template: \`<form  @submit="async (event) => handleSubmit(event)"  ><div class="db-stack" data-gap="fixed-md"   ><DBInfotext semantic="informational" size="small"   >
                        Needs address autofill switched on in your browser and
                        an address saved, set to one of the countries below.
                        Pick it in the address field: the browser then fills the
                        whole form, including the hidden select that carries the
                        country, so the selection below has to follow.
                    </DBInfotext><div  :style="{
  width: '200px'
}"  ><DBInput autoComplete="address-line1" name="address-line1" label="Address" placeholder="Street and number"   ></DBInput></div><div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >\${args.default}</DBCustomSelect></div><div    ><DBButton type="submit" variant="brand"   >
                            Submit
                        </DBButton></div>Submitted country: -</div></form>\`
  })
}`,...d.parameters?.docs?.source}}}})))()}p();export{d as AutoComplete,f as __namedExportsOrder,u as default};