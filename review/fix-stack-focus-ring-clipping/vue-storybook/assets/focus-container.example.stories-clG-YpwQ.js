import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./button-B9dyNYE3.js";import{n as r,t as i}from"./stack-CN3X6qGe.js";var a,o,s,c,l,u;function d(){return(d=e((()=>{t(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBStack/Focus Container`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`simple`,`divider`]},gap:{control:`select`,options:[`none`,`3x-large`,`2x-large`,`x-large`,`large`,`medium`,`small`,`x-small`,`2x-small`,`3x-small`]},direction:{control:`select`,options:[`row`,`column`]},wrap:{control:`boolean`},alignment:{control:`select`,options:[`stretch`,`start`,`end`,`center`]},justifyContent:{control:`select`,options:[`space-between`,`start`,`end`,`center`]},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{"data-testid":`default-stack`,default:`<DBButton data-focus="default">Focusable</DBButton
><span class="dummy-component">Content 2</span>`},render:e=>({components:{DBStack:r,DBButton:n},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBStack v-bind="args"   >${e.default}</DBStack></div>`})},c={args:{"data-testid":`wrap-stack`,wrap:!0,default:`<DBButton data-focus="default">Focusable</DBButton
><span class="dummy-component">Content 2</span
><span class="dummy-component">Content 3</span>`},render:e=>({components:{DBStack:r,DBButton:n},setup(){return{args:e}},template:`<div class="fit-content-container" :style="{
  width: '160px',
  height: '88px'
}"  ><DBStack v-bind="args"   >${e.default}</DBStack></div>`})},l={args:{"data-testid":`focus-container-stack`,"data-focus-container":`true`,wrap:!0,default:`<DBButton data-focus="default">Focusable</DBButton
><span class="dummy-component">Content 2</span
><span class="dummy-component">Content 3</span>`},render:e=>({components:{DBStack:r,DBButton:n},setup(){return{args:e}},template:`<div class="fit-content-container" :style="{
  width: '160px',
  height: '88px'
}"  ><DBStack v-bind="args"   >${e.default}</DBStack></div>`})},u=[`DefaultNoClipping`,`Wrap`,`WrapFocusContainer`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "default-stack",
    "default": \`<DBButton data-focus="default">Focusable</DBButton
><span class="dummy-component">Content 2</span>\`
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
    "default": \`<DBButton data-focus="default">Focusable</DBButton
><span class="dummy-component">Content 2</span
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "focus-container-stack",
    "data-focus-container": "true",
    "wrap": true,
    "default": \`<DBButton data-focus="default">Focusable</DBButton
><span class="dummy-component">Content 2</span
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
}`,...l.parameters?.docs?.source}}}})))()}d();export{s as DefaultNoClipping,c as Wrap,l as WrapFocusContainer,u as __namedExportsOrder,o as default};