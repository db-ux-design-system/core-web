import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./button-BDMciApb.js";import{n as r,t as i}from"./stack-nUUWmdP_.js";var a,o,s,c,l;function u(){return(u=e((()=>{t(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBStack/Interaction`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`simple`,`divider`]},gap:{control:`select`,options:[`none`,`3x-large`,`2x-large`,`x-large`,`large`,`medium`,`small`,`x-small`,`2x-small`,`3x-small`]},direction:{control:`select`,options:[`row`,`column`]},wrap:{control:`boolean`},alignment:{control:`select`,options:[`stretch`,`start`,`end`,`center`]},justifyContent:{control:`select`,options:[`space-between`,`start`,`end`,`center`]},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{"data-testid":`default-stack`,default:`<DBButton>Focusable</DBButton><span class="dummy-component">Content 2</span>`},render:e=>({components:{DBStack:r,DBButton:n},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBStack v-bind="args"   >${e.default}</DBStack></div>`})},c={args:{"data-testid":`wrap-stack`,wrap:!0,default:`<DBButton>Focusable</DBButton><span class="dummy-component">Content 2</span
><span class="dummy-component">Content 3</span>`},render:e=>({components:{DBStack:r,DBButton:n},setup(){return{args:e}},template:`<div class="fit-content-container" :style="{
  width: '160px',
  height: '88px'
}"  ><DBStack v-bind="args"   >${e.default}</DBStack></div>`})},l=[`Interaction`,`StackInteraction1`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "default-stack",
    "default": \`<DBButton>Focusable</DBButton><span class="dummy-component">Content 2</span>\`
  },
  render: (args: any) => ({
    components: {
      DBStack,
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div class="fit-content-container"   ><DBStack v-bind="args"   >\${args.default}</DBStack></div>\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "wrap-stack",
    "wrap": true,
    "default": \`<DBButton>Focusable</DBButton><span class="dummy-component">Content 2</span
><span class="dummy-component">Content 3</span>\`
  },
  render: (args: any) => ({
    components: {
      DBStack,
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div class="fit-content-container" :style="{
  width: '160px',
  height: '88px'
}"  ><DBStack v-bind="args"   >\${args.default}</DBStack></div>\`
  })
}`,...c.parameters?.docs?.source}}}})))()}u();export{s as Interaction,c as StackInteraction1,l as __namedExportsOrder,o as default};