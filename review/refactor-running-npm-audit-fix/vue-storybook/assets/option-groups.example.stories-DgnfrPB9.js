import{n as e}from"./chunk-BneVvdWh.js";import{l as t,t as n}from"./src-D8ePn3Ki.js";var r,i,a,o,s;e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBSelect/Option Groups`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:r()},argTypes:{options:{control:`object`},label:{control:`text`},placeholder:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},showLabel:{control:`boolean`},message:{control:`text`},showMessage:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},disabled:{control:`boolean`},showIcon:{control:`boolean`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},name:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},size:{control:`number`},multiple:{control:`boolean`},showEmptyOption:{control:`boolean`},autocomplete:{control:`text`},messageIcon:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},a={args:{label:`Label`,placeholder:`Using optgroups`,options:[{label:`Group 1`,value:``,options:[{value:`Option 1`},{value:`Option 2`}]},{label:`Group 2`,value:``,options:[{value:`Option 3`},{value:`Option 4`}]}],default:``},render:e=>({components:{DBSelect:t},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBSelect v-bind="args"   >${e.default}</DBSelect></div>`})},o={args:{label:`Label`,placeholder:`Mixed options and groups`,options:[{value:`Single Option`},{label:`Grouped Options`,value:``,options:[{value:`Group Option 1`},{value:`Group Option 2`}]},{value:`Another Single Option`}],default:``},render:e=>({components:{DBSelect:t},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBSelect v-bind="args"   >${e.default}</DBSelect></div>`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "placeholder": "Using optgroups",
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
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBSelect
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '300px'
}"  ><DBSelect v-bind="args"   >\${args.default}</DBSelect></div>\`
  })
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "placeholder": "Mixed options and groups",
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
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBSelect
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '300px'
}"  ><DBSelect v-bind="args"   >\${args.default}</DBSelect></div>\`
  })
}`,...o.parameters?.docs?.source}}},s=[`Usingoptgroups`,`Mixedoptionsandgroups`]}))();export{o as Mixedoptionsandgroups,a as Usingoptgroups,s as __namedExportsOrder,i as default};