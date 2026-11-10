import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./select-BqA766M1.js";var i=t({DefaultEmpty:()=>s,Disabled:()=>l,Filled:()=>c,Invalid:()=>u,__namedExportsOrder:()=>d,default:()=>o}),a,o,s,c,l,u,d;function f(){return(f=e((()=>{r(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBSelect/Examples Floating Label`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:a()},argTypes:{options:{control:`object`},label:{control:`text`},placeholder:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},showLabel:{control:`boolean`},message:{control:`text`},showMessage:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},disabled:{control:`boolean`},showIcon:{control:`boolean`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},name:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},size:{control:`number`},multiple:{control:`boolean`},showEmptyOption:{control:`boolean`},autocomplete:{control:`text`},messageIcon:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},s={args:{label:`Label`,variant:`floating`,placeholder:`(Default) Empty`,options:[{value:`Option 1`},{value:`Option 2`},{value:`Option 3`},{value:`Option 4`},{value:`Option 5`}],default:``},render:e=>({components:{DBSelect:n},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBSelect v-bind="args"   >${e.default}</DBSelect></div>`})},c={args:{label:`Label`,value:`Filled`,variant:`floating`,placeholder:`Filled`,options:[{value:`Filled`,selected:!0},{value:`Option 2`}],default:``},render:e=>({components:{DBSelect:n},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBSelect v-bind="args"   >${e.default}</DBSelect></div>`})},l={args:{label:`Label`,variant:`floating`,value:`Disabled`,placeholder:`Disabled`,options:[{value:`Disabled`,selected:!0},{value:`Option 2`}],disabled:!0,default:``},render:e=>({components:{DBSelect:n},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBSelect v-bind="args"   >${e.default}</DBSelect></div>`})},u={args:{label:`Label`,placeholder:`Invalid`,variant:`floating`,validation:`invalid`,invalidMessage:`Invalid Message`,options:[{value:`Option 1`},{value:`Option 2`},{value:`Option 3`},{value:`Option 4`},{value:`Option 5`}],default:``},render:e=>({components:{DBSelect:n},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBSelect v-bind="args"   >${e.default}</DBSelect></div>`})},d=[`DefaultEmpty`,`Filled`,`Disabled`,`Invalid`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "variant": "floating",
    "placeholder": "(Default) Empty",
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "value": "Filled",
    "variant": "floating",
    "placeholder": "Filled",
    "options": [{
      value: 'Filled',
      selected: true
    }, {
      value: 'Option 2'
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "variant": "floating",
    "value": "Disabled",
    "placeholder": "Disabled",
    "options": [{
      value: 'Disabled',
      selected: true
    }, {
      value: 'Option 2'
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "placeholder": "Invalid",
    "variant": "floating",
    "validation": "invalid",
    "invalidMessage": "Invalid Message",
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
}`,...u.parameters?.docs?.source}}}})))()}export{i as a,u as i,l as n,f as o,c as r,s as t};