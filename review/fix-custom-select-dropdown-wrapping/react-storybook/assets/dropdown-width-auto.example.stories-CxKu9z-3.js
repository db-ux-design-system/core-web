import{i as e}from"./preload-helper-Dk8nEwmW.js";import{t}from"./jsx-runtime-C9FcgcmA.js";import{B as n,t as r}from"./src-Ck1C4AK0.js";var i,a,o,s,c,l,u,d;e((()=>{r(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBCustomSelect/Dropdown Width Auto Edge Cases`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],args:{onAmountChange:a(),onOptionSelected:a(),onDropdownToggle:a(),onSearch:a()},argTypes:{options:{control:`object`},label:{control:`text`},placeholder:{control:`text`},id:{control:`text`},multiple:{control:`boolean`},variant:{control:`select`,options:[`above`,`floating`]},values:{control:`object`},showLabel:{control:`boolean`},message:{control:`text`},showMessage:{control:`boolean`},showIcon:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},disabled:{control:`boolean`},name:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},formFieldWidth:{control:`select`,options:[`full`,`auto`]},dropdownWidth:{control:`select`,options:[`auto`,`fixed`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`]},selectedType:{control:`select`,options:[`amount`,`text`,`tag`]},showNoResults:{control:`boolean`},noResultsText:{control:`text`},showLoading:{control:`boolean`},loadingText:{control:`text`},showSearch:{control:`boolean`},showSelectAll:{control:`boolean`},showClearSelection:{control:`boolean`},removeTagsTexts:{control:`object`},searchValue:{control:`text`},searchLabel:{control:`text`},searchPlaceholder:{control:`text`},selectedLabels:{control:`text`},selectedPrefix:{control:`text`},selectAllLabel:{control:`text`},listLabel:{control:`text`},clearSelectionText:{control:`text`},amountText:{control:`text`},mobileCloseButtonText:{control:`text`},open:{control:`boolean`},autofocus:{control:`boolean`},onAmountChange:{action:`onAmountChange`},onOptionSelected:{action:`onOptionSelected`},onDropdownToggle:{action:`onDropdownToggle`},onSearch:{action:`onSearch`}}},s={args:{label:`Auto: Long Options`,formFieldWidth:`full`,dropdownWidth:`auto`,listLabel:`auto-long-options`,options:[{value:`long-1`,label:`Dieser extrem lange Optionstext sollte eigentlich nicht umbrechen sondern sauber abgeschnitten werden`,id:`auto-long-1`},{value:`long-2`,label:`Ein weiterer viel zu langer Text der das Dropdown sprengt und haesslich umbricht`,id:`auto-long-2`},{value:`long-3`,label:`Kurz`,id:`auto-long-3`},{value:`long-4`,label:`Frankfurt(Main)Hbf - Berlin Hauptbahnhof (tief) via Erfurt Hbf`,id:`auto-long-4`},{value:`long-5`,label:`Muenchen Hbf Gleis 15 Abfahrt Richtung Stuttgart mit Umstieg in Augsburg`,id:`auto-long-5`}]},render:e=>(0,i.jsx)(`div`,{style:{width:`300px`},children:(0,i.jsx)(n,{...e})})},c={args:{label:`Auto: Wide Trigger, Short Options`,formFieldWidth:`full`,dropdownWidth:`auto`,listLabel:`auto-wide-trigger-short-options`,options:[{value:`A`,id:`auto-short-1`},{value:`B`,id:`auto-short-2`},{value:`C`,id:`auto-short-3`}]},render:e=>(0,i.jsx)(`div`,{style:{width:`400px`},children:(0,i.jsx)(n,{...e})})},l={args:{label:`Auto: Narrow Trigger`,formFieldWidth:`full`,dropdownWidth:`auto`,listLabel:`auto-narrow-trigger-long-options`,options:[{value:`narrow-long-1`,label:`Frankfurt(Main)Hbf nach Berlin Hbf`,id:`auto-narrow-long-1`},{value:`narrow-long-2`,label:`Hamburg-Altona via Hannover Hbf`,id:`auto-narrow-long-2`},{value:`narrow-long-3`,label:`Koeln Messe/Deutz (tief)`,id:`auto-narrow-long-3`}]},render:e=>(0,i.jsx)(`div`,{style:{width:`150px`},children:(0,i.jsx)(n,{...e})})},u={args:{label:`Auto: Mixed Lengths`,formFieldWidth:`full`,dropdownWidth:`auto`,listLabel:`auto-mixed-lengths`,options:[{value:`mix-1`,label:`OK`,id:`auto-mix-1`},{value:`mix-2`,label:`Mittellanger Optionstext hier`,id:`auto-mix-2`},{value:`mix-3`,label:`Dieser Optionstext ist deutlich laenger als alle anderen und sollte die Breite bestimmen`,id:`auto-mix-3`},{value:`mix-4`,label:`Kurz`,id:`auto-mix-4`}]},render:e=>(0,i.jsx)(`div`,{style:{width:`250px`},children:(0,i.jsx)(n,{...e})})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Auto: Long Options",
    "formFieldWidth": "full",
    "dropdownWidth": "auto",
    "listLabel": "auto-long-options",
    "options": [{
      value: 'long-1',
      label: 'Dieser extrem lange Optionstext sollte eigentlich nicht umbrechen sondern sauber abgeschnitten werden',
      id: 'auto-long-1'
    }, {
      value: 'long-2',
      label: 'Ein weiterer viel zu langer Text der das Dropdown sprengt und haesslich umbricht',
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
    }]
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBCustomSelect {...properties} /></div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
    }]
  },
  render: (properties: any) => <div style={{
    width: '400px'
  }}><DBCustomSelect {...properties} /></div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
    }]
  },
  render: (properties: any) => <div style={{
    width: '150px'
  }}><DBCustomSelect {...properties} /></div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
    }]
  },
  render: (properties: any) => <div style={{
    width: '250px'
  }}><DBCustomSelect {...properties} /></div>
}`,...u.parameters?.docs?.source}}},d=[`AutoLongoptiontextshouldnotwrap`,`AutoWidetriggershortoptionsdropdownshouldmatchtriggerwidth`,`AutoNarrowtriggerlongoptionsdropdownshouldgrowbeyondtrigger`,`AutoMixedoptionlengths`]}))();export{s as AutoLongoptiontextshouldnotwrap,u as AutoMixedoptionlengths,l as AutoNarrowtriggerlongoptionsdropdownshouldgrowbeyondtrigger,c as AutoWidetriggershortoptionsdropdownshouldmatchtriggerwidth,d as __namedExportsOrder,o as default};