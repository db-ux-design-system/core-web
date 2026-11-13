import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./button-B6HPeu-1.js";import{n as i,t as a}from"./infotext-xvgetHsw.js";import{n as o,t as s}from"./custom-select-DBx6Bwvm.js";import{n as c,t as l}from"./input-CCzMUFzN.js";var u=t({AutoComplete:()=>p,__namedExportsOrder:()=>m,default:()=>f}),d,f,p,m;function h(){return(h=e((()=>{n(),i(),l(),o(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBCustomSelect/Auto Complete`,component:s,parameters:{layout:`centered`},tags:[`autodocs`],args:{onAmountChange:d(),onOptionSelected:d(),onDropdownToggle:d(),onSearch:d()},argTypes:{options:{control:`object`},label:{control:`text`},placeholder:{control:`text`},id:{control:`text`},multiple:{control:`boolean`},variant:{control:`select`,options:[`above`,`floating`]},values:{control:`object`},showLabel:{control:`boolean`},message:{control:`text`},showMessage:{control:`boolean`},showIcon:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},disabled:{control:`boolean`},name:{control:`text`},form:{control:`text`},autoComplete:{control:`text`},ariaDescribedBy:{control:`text`},formFieldWidth:{control:`select`,options:[`full`,`auto`]},dropdownWidth:{control:`select`,options:[`auto`,`fixed`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`]},selectedType:{control:`select`,options:[`amount`,`text`,`tag`]},showNoResults:{control:`boolean`},noResultsText:{control:`text`},showLoading:{control:`boolean`},loadingText:{control:`text`},showSearch:{control:`boolean`},showSelectAll:{control:`boolean`},showClearSelection:{control:`boolean`},removeTagsTexts:{control:`object`},searchValue:{control:`text`},searchLabel:{control:`text`},searchPlaceholder:{control:`text`},selectedLabels:{control:`text`},selectedPrefix:{control:`text`},selectAllLabel:{control:`text`},listLabel:{control:`text`},clearSelectionText:{control:`text`},amountText:{control:`text`},mobileCloseButtonText:{control:`text`},open:{control:`boolean`},autofocus:{control:`boolean`},onAmountChange:{action:`onAmountChange`},onOptionSelected:{action:`onOptionSelected`},onDropdownToggle:{action:`onDropdownToggle`},onSearch:{action:`onSearch`}}},p={args:{autoComplete:`country`,name:`country`,label:`Country`,placeholder:`Choose a country`,options:[{value:`DE`,label:`Germany`},{value:`AT`,label:`Austria`},{value:`CH`,label:`Switzerland`},{value:`FR`,label:`France`}],default:``},render:e=>({components:{DBCustomSelect:s,DBButton:r,DBInfotext:a,DBInput:c},setup(){return{args:e}},template:`<form  @submit="async (event) => handleSubmit(event)"  ><div class="db-stack" data-gap="fixed-md"   ><DBInfotext semantic="informational" size="small"   >
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
                        </DBButton></div>Submitted country: -</div></form>`})},m=[`AutoComplete`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}}})))()}export{u as n,h as r,p as t};