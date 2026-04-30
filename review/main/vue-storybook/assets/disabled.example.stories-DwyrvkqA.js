import{n as e}from"./chunk-DnJy8xQt.js";import{l as t,t as n}from"./src-CwgarGln.js";var r,i,a,o,s;e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBSelect/Disabled`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:r()},argTypes:{options:{control:`object`},label:{control:`text`},placeholder:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},showLabel:{control:`boolean`},message:{control:`text`},showMessage:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},disabled:{control:`boolean`},showIcon:{control:`boolean`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},name:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},size:{control:`number`},multiple:{control:`boolean`},showEmptyOption:{control:`boolean`},autocomplete:{control:`text`},messageIcon:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},a={args:{label:`Label`,placeholder:`(Default) False`,options:[{value:`Option 1`},{value:`Option 2`},{value:`Option 3`},{value:`Option 4`},{value:`Option 5`}],disabled:!1,default:``},render:e=>({components:{DBSelect:t},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBSelect v-bind="args"   >${e.default}</DBSelect></div>`})},o={args:{label:`Label`,placeholder:`True`,options:[{value:`Option 1`},{value:`Option 2`},{value:`Option 3`},{value:`Option 4`},{value:`Option 5`}],disabled:!0,default:``},render:e=>({components:{DBSelect:t},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBSelect v-bind="args"   >${e.default}</DBSelect></div>`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "placeholder": "(Default) False",
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
    "disabled": false,
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
    "placeholder": "True",
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
    "disabled": true,
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
}`,...o.parameters?.docs?.source}}},s=[`DefaultFalse`,`True`]}))();export{a as DefaultFalse,o as True,s as __namedExportsOrder,i as default};