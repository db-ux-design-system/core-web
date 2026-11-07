import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./custom-select-Dq357rpT.js";var a=t({CustomSelectInteraction1:()=>u,CustomSelectInteraction2:()=>d,CustomSelectInteraction3:()=>f,CustomSelectInteraction4:()=>p,CustomSelectInteraction5:()=>m,CustomSelectInteraction6:()=>h,Interaction:()=>l,__namedExportsOrder:()=>g,default:()=>c}),o,s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{r(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBCustomSelect/Interaction`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onAmountChange:s(),onOptionSelected:s(),onDropdownToggle:s(),onSearch:s()},argTypes:{options:{control:`object`},label:{control:`text`},placeholder:{control:`text`},id:{control:`text`},multiple:{control:`boolean`},variant:{control:`select`,options:[`above`,`floating`]},values:{control:`object`},showLabel:{control:`boolean`},message:{control:`text`},showMessage:{control:`boolean`},showIcon:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},disabled:{control:`boolean`},name:{control:`text`},form:{control:`text`},autoComplete:{control:`text`},ariaDescribedBy:{control:`text`},formFieldWidth:{control:`select`,options:[`full`,`auto`]},dropdownWidth:{control:`select`,options:[`auto`,`fixed`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`]},selectedType:{control:`select`,options:[`amount`,`text`,`tag`]},showNoResults:{control:`boolean`},noResultsText:{control:`text`},showLoading:{control:`boolean`},loadingText:{control:`text`},showSearch:{control:`boolean`},showSelectAll:{control:`boolean`},showClearSelection:{control:`boolean`},removeTagsTexts:{control:`object`},searchValue:{control:`text`},searchLabel:{control:`text`},searchPlaceholder:{control:`text`},selectedLabels:{control:`text`},selectedPrefix:{control:`text`},selectAllLabel:{control:`text`},listLabel:{control:`text`},clearSelectionText:{control:`text`},amountText:{control:`text`},mobileCloseButtonText:{control:`text`},open:{control:`boolean`},autofocus:{control:`boolean`},onAmountChange:{action:`onAmountChange`},onOptionSelected:{action:`onOptionSelected`},onDropdownToggle:{action:`onDropdownToggle`},onSearch:{action:`onSearch`}}},l={args:{"data-testid":`single-select`,label:`Single`,placeholder:`Placeholder`,options:[{value:`Option 1`},{value:`Option 2`},{value:`Option 3`},{value:`Option 4`},{value:`Option 5`}]},render:e=>(0,o.jsx)(`div`,{style:{width:`200px`},children:(0,o.jsx)(i,{...e})})},u={args:{"data-testid":`multiple-select`,label:`Multiple`,placeholder:`Placeholder`,options:[{value:`Option 1`},{value:`Option 2`},{value:`Option 3`},{value:`Option 4`},{value:`Option 5`}],multiple:!0},render:e=>(0,o.jsx)(`div`,{style:{width:`200px`},children:(0,o.jsx)(i,{...e})})},d={args:{"data-testid":`search-select`,label:`Search`,placeholder:`Placeholder`,options:[{value:`Option 1`},{value:`Option 2`},{value:`Option 3`},{value:`Option 4`},{value:`Option 5`}],multiple:!0,showSearch:!0,showSelectAll:!0},render:e=>(0,o.jsx)(`div`,{style:{width:`200px`},children:(0,o.jsx)(i,{...e})})},f={args:{"data-testid":`select-all-select`,label:`Select all`,placeholder:`Placeholder`,options:[{value:`Option 1`},{value:`Option 2`},{value:`Option 3`},{value:`Option 4`},{value:`Option 5`}],multiple:!0,showSelectAll:!0},render:e=>(0,o.jsx)(`div`,{style:{width:`200px`},children:(0,o.jsx)(i,{...e})})},p={args:{"data-testid":`option-groups-select`,label:`Option Groups`,placeholder:`Placeholder`,options:[{label:`Option group 1`,isGroupTitle:!0},{value:`G1:Option 1`},{value:`G1:Option 2`},{label:`Option group 2`,isGroupTitle:!0},{value:`G2:Option 1`},{value:`G2:Option 2`}]},render:e=>(0,o.jsx)(`div`,{style:{width:`200px`},children:(0,o.jsx)(i,{...e})})},m={args:{"data-testid":`tag-select`,label:`Colors`,selectedType:`tag`,placeholder:`Select colors`,options:[{value:`Red`,label:`Red Color`},{value:`Blue`,label:`Blue Color`},{value:`Green`,label:`Green Color`}],multiple:!0,removeTagsTexts:[`Remove Red Color`,`Remove Blue Color`,`Remove Green Color`],values:[`Blue`,`Green`]},render:e=>(0,o.jsx)(`div`,{style:{width:`200px`},children:(0,o.jsx)(i,{...e})})},h={args:{"data-testid":`disabled-tag-select`,label:`Disabled colors`,selectedType:`tag`,placeholder:`Select colors`,options:[{value:`Red`,label:`Red Color`},{value:`Blue`,label:`Blue Color`},{value:`Green`,label:`Green Color`}],multiple:!0,disabled:!0,removeTagsTexts:[`Remove Red Color`,`Remove Blue Color`,`Remove Green Color`],values:[`Blue`,`Green`]},render:e=>(0,o.jsx)(`div`,{style:{width:`200px`},children:(0,o.jsx)(i,{...e})})},g=[`Interaction`,`CustomSelectInteraction1`,`CustomSelectInteraction2`,`CustomSelectInteraction3`,`CustomSelectInteraction4`,`CustomSelectInteraction5`,`CustomSelectInteraction6`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "single-select",
    "label": "Single",
    "placeholder": "Placeholder",
    "options": [{
      value: 'Option 1'
    }, {
      value: 'Option 2'
    }, {
      value: 'Option 3'
    }, {
      value: 'Option 4'
    }, {
      value: 'Option 5'
    }]
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "multiple-select",
    "label": "Multiple",
    "placeholder": "Placeholder",
    "options": [{
      value: 'Option 1'
    }, {
      value: 'Option 2'
    }, {
      value: 'Option 3'
    }, {
      value: 'Option 4'
    }, {
      value: 'Option 5'
    }],
    "multiple": true
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "search-select",
    "label": "Search",
    "placeholder": "Placeholder",
    "options": [{
      value: 'Option 1'
    }, {
      value: 'Option 2'
    }, {
      value: 'Option 3'
    }, {
      value: 'Option 4'
    }, {
      value: 'Option 5'
    }],
    "multiple": true,
    "showSearch": true,
    "showSelectAll": true
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "select-all-select",
    "label": "Select all",
    "placeholder": "Placeholder",
    "options": [{
      value: 'Option 1'
    }, {
      value: 'Option 2'
    }, {
      value: 'Option 3'
    }, {
      value: 'Option 4'
    }, {
      value: 'Option 5'
    }],
    "multiple": true,
    "showSelectAll": true
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "option-groups-select",
    "label": "Option Groups",
    "placeholder": "Placeholder",
    "options": [{
      label: 'Option group 1',
      isGroupTitle: true
    }, {
      value: 'G1:Option 1'
    }, {
      value: 'G1:Option 2'
    }, {
      label: 'Option group 2',
      isGroupTitle: true
    }, {
      value: 'G2:Option 1'
    }, {
      value: 'G2:Option 2'
    }]
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "tag-select",
    "label": "Colors",
    "selectedType": "tag",
    "placeholder": "Select colors",
    "options": [{
      value: 'Red',
      label: 'Red Color'
    }, {
      value: 'Blue',
      label: 'Blue Color'
    }, {
      value: 'Green',
      label: 'Green Color'
    }],
    "multiple": true,
    "removeTagsTexts": ['Remove Red Color', 'Remove Blue Color', 'Remove Green Color'],
    "values": ['Blue', 'Green']
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "disabled-tag-select",
    "label": "Disabled colors",
    "selectedType": "tag",
    "placeholder": "Select colors",
    "options": [{
      value: 'Red',
      label: 'Red Color'
    }, {
      value: 'Blue',
      label: 'Blue Color'
    }, {
      value: 'Green',
      label: 'Green Color'
    }],
    "multiple": true,
    "disabled": true,
    "removeTagsTexts": ['Remove Red Color', 'Remove Blue Color', 'Remove Green Color'],
    "values": ['Blue', 'Green']
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBCustomSelect {...properties} /></div>
}`,...h.parameters?.docs?.source}}}})))()}export{m as a,_ as c,p as i,a as l,d as n,h as o,f as r,l as s,u as t};