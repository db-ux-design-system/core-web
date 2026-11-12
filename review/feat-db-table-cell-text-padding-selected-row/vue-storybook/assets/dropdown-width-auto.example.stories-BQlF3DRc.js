import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./infotext-ClxkgNnW.js";import{n as i,t as a}from"./custom-select-FaMQSxQk.js";var o=t({AutoLongoptiontextshouldnotwrap:()=>l,AutoMixedoptionlengths:()=>f,AutoNarrowtriggerlongoptionsdropdownshouldgrowbeyondtrigger:()=>d,AutoWidetriggershortoptionsdropdownshouldmatchtriggerwidth:()=>u,__namedExportsOrder:()=>p,default:()=>c}),s,c,l,u,d,f,p;function m(){return(m=e((()=>{n(),i(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBCustomSelect/Dropdown Width Auto Edge Cases`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],args:{onAmountChange:s(),onOptionSelected:s(),onDropdownToggle:s(),onSearch:s()},argTypes:{options:{control:`object`},label:{control:`text`},placeholder:{control:`text`},id:{control:`text`},multiple:{control:`boolean`},variant:{control:`select`,options:[`above`,`floating`]},values:{control:`object`},showLabel:{control:`boolean`},message:{control:`text`},showMessage:{control:`boolean`},showIcon:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},disabled:{control:`boolean`},name:{control:`text`},form:{control:`text`},autoComplete:{control:`text`},ariaDescribedBy:{control:`text`},formFieldWidth:{control:`select`,options:[`full`,`auto`]},dropdownWidth:{control:`select`,options:[`auto`,`fixed`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`]},selectedType:{control:`select`,options:[`amount`,`text`,`tag`]},showNoResults:{control:`boolean`},noResultsText:{control:`text`},showLoading:{control:`boolean`},loadingText:{control:`text`},showSearch:{control:`boolean`},showSelectAll:{control:`boolean`},showClearSelection:{control:`boolean`},removeTagsTexts:{control:`object`},searchValue:{control:`text`},searchLabel:{control:`text`},searchPlaceholder:{control:`text`},selectedLabels:{control:`text`},selectedPrefix:{control:`text`},selectAllLabel:{control:`text`},listLabel:{control:`text`},clearSelectionText:{control:`text`},amountText:{control:`text`},mobileCloseButtonText:{control:`text`},open:{control:`boolean`},autofocus:{control:`boolean`},onAmountChange:{action:`onAmountChange`},onOptionSelected:{action:`onOptionSelected`},onDropdownToggle:{action:`onDropdownToggle`},onSearch:{action:`onSearch`}}},l={args:{label:`Auto: Long Options`,formFieldWidth:`full`,dropdownWidth:`auto`,listLabel:`auto-long-options`,options:[{value:`long-1`,label:`Dieser extrem lange Optionstext bleibt im Auto-Modus in einer Zeile und das Dropdown waechst mit`,id:`auto-long-1`},{value:`long-2`,label:`Ein weiterer viel zu langer Text der die Dropdown-Breite im Auto-Modus bestimmt`,id:`auto-long-2`},{value:`long-3`,label:`Kurz`,id:`auto-long-3`},{value:`long-4`,label:`Frankfurt(Main)Hbf - Berlin Hauptbahnhof (tief) via Erfurt Hbf`,id:`auto-long-4`},{value:`long-5`,label:`Muenchen Hbf Gleis 15 Abfahrt Richtung Stuttgart mit Umstieg in Augsburg`,id:`auto-long-5`}],default:``},render:e=>({components:{DBCustomSelect:a,DBInfotext:r},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})},u={args:{label:`Auto: Wide Trigger, Short Options`,formFieldWidth:`full`,dropdownWidth:`auto`,listLabel:`auto-wide-trigger-short-options`,options:[{value:`A`,id:`auto-short-1`},{value:`B`,id:`auto-short-2`},{value:`C`,id:`auto-short-3`}],default:``},render:e=>({components:{DBCustomSelect:a,DBInfotext:r},setup(){return{args:e}},template:`<div  :style="{
  width: '400px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})},d={args:{label:`Auto: Narrow Trigger`,formFieldWidth:`full`,dropdownWidth:`auto`,listLabel:`auto-narrow-trigger-long-options`,options:[{value:`narrow-long-1`,label:`Frankfurt(Main)Hbf nach Berlin Hbf`,id:`auto-narrow-long-1`},{value:`narrow-long-2`,label:`Hamburg-Altona via Hannover Hbf`,id:`auto-narrow-long-2`},{value:`narrow-long-3`,label:`Koeln Messe/Deutz (tief)`,id:`auto-narrow-long-3`}],default:``},render:e=>({components:{DBCustomSelect:a,DBInfotext:r},setup(){return{args:e}},template:`<div  :style="{
  width: '150px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})},f={args:{label:`Auto: Mixed Lengths`,formFieldWidth:`full`,dropdownWidth:`auto`,listLabel:`auto-mixed-lengths`,options:[{value:`mix-1`,label:`OK`,id:`auto-mix-1`},{value:`mix-2`,label:`Mittellanger Optionstext hier`,id:`auto-mix-2`},{value:`mix-3`,label:`Dieser Optionstext ist deutlich laenger als alle anderen und sollte die Breite bestimmen`,id:`auto-mix-3`},{value:`mix-4`,label:`Kurz`,id:`auto-mix-4`}],default:``},render:e=>({components:{DBCustomSelect:a,DBInfotext:r},setup(){return{args:e}},template:`<div  :style="{
  width: '250px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})},p=[`AutoLongoptiontextshouldnotwrap`,`AutoWidetriggershortoptionsdropdownshouldmatchtriggerwidth`,`AutoNarrowtriggerlongoptionsdropdownshouldgrowbeyondtrigger`,`AutoMixedoptionlengths`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Auto: Long Options",
    "formFieldWidth": "full",
    "dropdownWidth": "auto",
    "listLabel": "auto-long-options",
    "options": [{
      value: 'long-1',
      label: 'Dieser extrem lange Optionstext bleibt im Auto-Modus in einer Zeile und das Dropdown waechst mit',
      id: 'auto-long-1'
    }, {
      value: 'long-2',
      label: 'Ein weiterer viel zu langer Text der die Dropdown-Breite im Auto-Modus bestimmt',
      id: 'auto-long-2'
    }, {
      value: 'long-3',
      label: 'Kurz',
      id: 'auto-long-3'
    }, {
      value: 'long-4',
      label: 'Frankfurt(Main)Hbf - Berlin Hauptbahnhof (tief) via Erfurt Hbf',
      id: 'auto-long-4'
    }, {
      value: 'long-5',
      label: 'Muenchen Hbf Gleis 15 Abfahrt Richtung Stuttgart mit Umstieg in Augsburg',
      id: 'auto-long-5'
    }],
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBCustomSelect,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '300px'
}"  ><DBCustomSelect v-bind="args"   >\${args.default}</DBCustomSelect></div>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Auto: Wide Trigger, Short Options",
    "formFieldWidth": "full",
    "dropdownWidth": "auto",
    "listLabel": "auto-wide-trigger-short-options",
    "options": [{
      value: 'A',
      id: 'auto-short-1'
    }, {
      value: 'B',
      id: 'auto-short-2'
    }, {
      value: 'C',
      id: 'auto-short-3'
    }],
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBCustomSelect,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '400px'
}"  ><DBCustomSelect v-bind="args"   >\${args.default}</DBCustomSelect></div>\`
  })
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Auto: Narrow Trigger",
    "formFieldWidth": "full",
    "dropdownWidth": "auto",
    "listLabel": "auto-narrow-trigger-long-options",
    "options": [{
      value: 'narrow-long-1',
      label: 'Frankfurt(Main)Hbf nach Berlin Hbf',
      id: 'auto-narrow-long-1'
    }, {
      value: 'narrow-long-2',
      label: 'Hamburg-Altona via Hannover Hbf',
      id: 'auto-narrow-long-2'
    }, {
      value: 'narrow-long-3',
      label: 'Koeln Messe/Deutz (tief)',
      id: 'auto-narrow-long-3'
    }],
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBCustomSelect,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '150px'
}"  ><DBCustomSelect v-bind="args"   >\${args.default}</DBCustomSelect></div>\`
  })
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Auto: Mixed Lengths",
    "formFieldWidth": "full",
    "dropdownWidth": "auto",
    "listLabel": "auto-mixed-lengths",
    "options": [{
      value: 'mix-1',
      label: 'OK',
      id: 'auto-mix-1'
    }, {
      value: 'mix-2',
      label: 'Mittellanger Optionstext hier',
      id: 'auto-mix-2'
    }, {
      value: 'mix-3',
      label: 'Dieser Optionstext ist deutlich laenger als alle anderen und sollte die Breite bestimmen',
      id: 'auto-mix-3'
    }, {
      value: 'mix-4',
      label: 'Kurz',
      id: 'auto-mix-4'
    }],
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBCustomSelect,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '250px'
}"  ><DBCustomSelect v-bind="args"   >\${args.default}</DBCustomSelect></div>\`
  })
}`,...f.parameters?.docs?.source}}}})))()}export{o as a,u as i,f as n,m as o,d as r,l as t};