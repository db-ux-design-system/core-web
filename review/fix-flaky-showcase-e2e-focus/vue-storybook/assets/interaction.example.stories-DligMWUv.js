import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./button-CdUmL6QE.js";import{n as r,t as i}from"./custom-select-sC82fjXR.js";var a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{t(),r(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBCustomSelect/Interaction`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onAmountChange:a(),onOptionSelected:a(),onDropdownToggle:a(),onSearch:a()},argTypes:{options:{control:`object`},label:{control:`text`},placeholder:{control:`text`},id:{control:`text`},multiple:{control:`boolean`},variant:{control:`select`,options:[`above`,`floating`]},values:{control:`object`},showLabel:{control:`boolean`},message:{control:`text`},showMessage:{control:`boolean`},showIcon:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},disabled:{control:`boolean`},name:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},formFieldWidth:{control:`select`,options:[`full`,`auto`]},dropdownWidth:{control:`select`,options:[`auto`,`fixed`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`]},selectedType:{control:`select`,options:[`amount`,`text`,`tag`]},showNoResults:{control:`boolean`},noResultsText:{control:`text`},showLoading:{control:`boolean`},loadingText:{control:`text`},showSearch:{control:`boolean`},showSelectAll:{control:`boolean`},showClearSelection:{control:`boolean`},removeTagsTexts:{control:`object`},searchValue:{control:`text`},searchLabel:{control:`text`},searchPlaceholder:{control:`text`},selectedLabels:{control:`text`},selectedPrefix:{control:`text`},selectAllLabel:{control:`text`},listLabel:{control:`text`},clearSelectionText:{control:`text`},amountText:{control:`text`},mobileCloseButtonText:{control:`text`},open:{control:`boolean`},autofocus:{control:`boolean`},onAmountChange:{action:`onAmountChange`},onOptionSelected:{action:`onOptionSelected`},onDropdownToggle:{action:`onDropdownToggle`},onSearch:{action:`onSearch`}}},s={args:{"data-testid":`single-select`,label:`Single`,placeholder:`Placeholder`,options:[{value:`Option 1`},{value:`Option 2`},{value:`Option 3`},{value:`Option 4`},{value:`Option 5`}],default:``},render:e=>({components:{DBCustomSelect:i,DBButton:n},setup(){return{args:e}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})},c={args:{"data-testid":`multiple-select`,label:`Multiple`,placeholder:`Placeholder`,options:[{value:`Option 1`},{value:`Option 2`},{value:`Option 3`},{value:`Option 4`},{value:`Option 5`}],multiple:!0,default:``},render:e=>({components:{DBCustomSelect:i,DBButton:n},setup(){return{args:e}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})},l={args:{"data-testid":`search-select`,label:`Search`,placeholder:`Placeholder`,options:[{value:`Option 1`},{value:`Option 2`},{value:`Option 3`},{value:`Option 4`},{value:`Option 5`}],multiple:!0,showSearch:!0,showSelectAll:!0,default:``},render:e=>({components:{DBCustomSelect:i,DBButton:n},setup(){return{args:e}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})},u={args:{"data-testid":`select-all-select`,label:`Select all`,placeholder:`Placeholder`,options:[{value:`Option 1`},{value:`Option 2`},{value:`Option 3`},{value:`Option 4`},{value:`Option 5`}],multiple:!0,showSelectAll:!0,default:``},render:e=>({components:{DBCustomSelect:i,DBButton:n},setup(){return{args:e}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})},d={args:{"data-testid":`option-groups-select`,label:`Option Groups`,placeholder:`Placeholder`,options:[{label:`Option group 1`,isGroupTitle:!0},{value:`G1:Option 1`},{value:`G1:Option 2`},{label:`Option group 2`,isGroupTitle:!0},{value:`G2:Option 1`},{value:`G2:Option 2`}],default:``},render:e=>({components:{DBCustomSelect:i,DBButton:n},setup(){return{args:e}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})},f={args:{"data-testid":`tag-select`,label:`Colors`,selectedType:`tag`,placeholder:`Select colors`,options:[{value:`Red`,label:`Red Color`},{value:`Blue`,label:`Blue Color`},{value:`Green`,label:`Green Color`}],multiple:!0,removeTagsTexts:[`Remove Red Color`,`Remove Blue Color`,`Remove Green Color`],values:[`Blue`,`Green`],default:``},render:e=>({components:{DBCustomSelect:i,DBButton:n},setup(){return{args:e}},template:`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >${e.default}</DBCustomSelect></div>`})},p=[`Interaction`,`CustomSelectInteraction1`,`CustomSelectInteraction2`,`CustomSelectInteraction3`,`CustomSelectInteraction4`,`CustomSelectInteraction5`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
    }],
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBCustomSelect,
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >\${args.default}</DBCustomSelect></div>\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
    "multiple": true,
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBCustomSelect,
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >\${args.default}</DBCustomSelect></div>\`
  })
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
    "showSelectAll": true,
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBCustomSelect,
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >\${args.default}</DBCustomSelect></div>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
    "showSelectAll": true,
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBCustomSelect,
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >\${args.default}</DBCustomSelect></div>\`
  })
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
    }],
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBCustomSelect,
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >\${args.default}</DBCustomSelect></div>\`
  })
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
    "values": ['Blue', 'Green'],
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBCustomSelect,
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '200px'
}"  ><DBCustomSelect v-bind="args"   >\${args.default}</DBCustomSelect></div>\`
  })
}`,...f.parameters?.docs?.source}}}})))()}m();export{c as CustomSelectInteraction1,l as CustomSelectInteraction2,u as CustomSelectInteraction3,d as CustomSelectInteraction4,f as CustomSelectInteraction5,s as Interaction,p as __namedExportsOrder,o as default};