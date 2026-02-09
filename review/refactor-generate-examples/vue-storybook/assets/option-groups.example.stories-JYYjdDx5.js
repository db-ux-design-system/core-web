import{_ as a}from"./select-Dgyggzww.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./constants-qyp1P7vr.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";import"./infotext-C1MSMu4c.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,c={title:"Components/DBSelect/Option Groups",component:a,render:t=>({components:{DBSelect:a},setup(){return{args:t}},template:`
      <DBSelect v-bind="args">
      ${t.default}
      </DBSelect>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"text"},label:{control:"text"},placeholder:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},disabled:{control:"boolean"},icon:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"}}},o={args:{default:"",options:[{label:"Group 1",value:"",options:[{value:"Option 1"},{value:"Option 2"}]},{label:"Group 2",value:"",options:[{value:"Option 3"},{value:"Option 4"}]}],label:"Label",placeholder:"Using optgroups"},decorators:[()=>({template:'<div style="  width:300px"><story /></div>'})]},e={args:{default:"",options:[{value:"Single Option"},{label:"Grouped Options",value:"",options:[{value:"Group Option 1"},{value:"Group Option 2"}]},{value:"Another Single Option"}],label:"Label",placeholder:"Mixed options and groups"},decorators:[()=>({template:'<div style="  width:300px"><story /></div>'})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "options": [{
      label: 'Group 1',
      value: '',
      options: [{
        value: 'Option 1'
      }, {
        value: 'Option 2'
      }]
    }, {
      label: 'Group 2',
      value: '',
      options: [{
        value: 'Option 3'
      }, {
        value: 'Option 4'
      }]
    }],
    "label": "Label",
    "placeholder": "Using optgroups"
  },
  decorators: [() => ({
    template: \`<div style="  width:300px"><story /></div>\`
  })]
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "options": [{
      value: 'Single Option'
    }, {
      label: 'Grouped Options',
      value: '',
      options: [{
        value: 'Group Option 1'
      }, {
        value: 'Group Option 2'
      }]
    }, {
      value: 'Another Single Option'
    }],
    "label": "Label",
    "placeholder": "Mixed options and groups"
  },
  decorators: [() => ({
    template: \`<div style="  width:300px"><story /></div>\`
  })]
}`,...e.parameters?.docs?.source}}};const v=["Usingoptgroups","Mixedoptionsandgroups"];export{e as Mixedoptionsandgroups,o as Usingoptgroups,v as __namedExportsOrder,c as default};
