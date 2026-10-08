import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./loading-indicator-Y2VxyQuK.js";var r,i,a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBLoadingIndicator/Interaction`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`bar`,`circular`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},size:{control:`select`,options:[`small`,`medium`,`large`]},state:{control:`select`,options:[`inactive`,`active`,`successful`,`critical`]},indeterminate:{control:`boolean`},value:{control:`number`},max:{control:`number`},showLabel:{control:`boolean`},showProgressText:{control:`boolean`},overlay:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]}}},a={args:{default:`Test`},render:e=>({components:{DBLoadingIndicator:t},setup(){return{args:e}},template:`<div data-testid="default-loading"   ><DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator></div>`})},o={args:{state:`critical`,default:`Test`},render:e=>({components:{DBLoadingIndicator:t},setup(){return{args:e}},template:`<div data-testid="critical-loading"   ><DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator></div>`})},s={args:{role:`alert`,default:`Test`},render:e=>({components:{DBLoadingIndicator:t},setup(){return{args:e}},template:`<div data-testid="role-override-loading"   ><DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator></div>`})},c={args:{id:`my-loading`,default:`Test`},render:e=>({components:{DBLoadingIndicator:t},setup(){return{args:e}},template:`<div data-testid="id-loading"   ><DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator></div>`})},l={args:{progressText:`42 of 100`,indeterminate:!1,value:42,max:100,default:`Test`},render:e=>({components:{DBLoadingIndicator:t},setup(){return{args:e}},template:`<div data-testid="determinate-loading"   ><DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator></div>`})},u={args:{variant:`bar`,indeterminate:!1,value:200,max:100,default:`Test`},render:e=>({components:{DBLoadingIndicator:t},setup(){return{args:e}},template:`<div data-testid="clamp-loading"   ><DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator></div>`})},d={args:{indeterminate:`false`,value:42,max:100,default:`Test`},render:e=>({components:{DBLoadingIndicator:t},setup(){return{args:e}},template:`<div data-testid="string-false-loading"   ><DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator></div>`})},f=[`Interaction`,`LoadingIndicatorInteraction1`,`LoadingIndicatorInteraction2`,`LoadingIndicatorInteraction3`,`LoadingIndicatorInteraction4`,`LoadingIndicatorInteraction5`,`LoadingIndicatorInteraction6`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`Test\`
  },
  render: (args: any) => ({
    components: {
      DBLoadingIndicator
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div data-testid="default-loading"   ><DBLoadingIndicator v-bind="args"   >\${args.default}</DBLoadingIndicator></div>\`
  })
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "critical",
    "default": \`Test\`
  },
  render: (args: any) => ({
    components: {
      DBLoadingIndicator
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div data-testid="critical-loading"   ><DBLoadingIndicator v-bind="args"   >\${args.default}</DBLoadingIndicator></div>\`
  })
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "role": "alert",
    "default": \`Test\`
  },
  render: (args: any) => ({
    components: {
      DBLoadingIndicator
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div data-testid="role-override-loading"   ><DBLoadingIndicator v-bind="args"   >\${args.default}</DBLoadingIndicator></div>\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "my-loading",
    "default": \`Test\`
  },
  render: (args: any) => ({
    components: {
      DBLoadingIndicator
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div data-testid="id-loading"   ><DBLoadingIndicator v-bind="args"   >\${args.default}</DBLoadingIndicator></div>\`
  })
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "progressText": "42 of 100",
    "indeterminate": false,
    "value": 42,
    "max": 100,
    "default": \`Test\`
  },
  render: (args: any) => ({
    components: {
      DBLoadingIndicator
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div data-testid="determinate-loading"   ><DBLoadingIndicator v-bind="args"   >\${args.default}</DBLoadingIndicator></div>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "bar",
    "indeterminate": false,
    "value": 200,
    "max": 100,
    "default": \`Test\`
  },
  render: (args: any) => ({
    components: {
      DBLoadingIndicator
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div data-testid="clamp-loading"   ><DBLoadingIndicator v-bind="args"   >\${args.default}</DBLoadingIndicator></div>\`
  })
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "indeterminate": "false",
    "value": 42,
    "max": 100,
    "default": \`Test\`
  },
  render: (args: any) => ({
    components: {
      DBLoadingIndicator
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div data-testid="string-false-loading"   ><DBLoadingIndicator v-bind="args"   >\${args.default}</DBLoadingIndicator></div>\`
  })
}`,...d.parameters?.docs?.source}}}})))()}p();export{a as Interaction,o as LoadingIndicatorInteraction1,s as LoadingIndicatorInteraction2,c as LoadingIndicatorInteraction3,l as LoadingIndicatorInteraction4,u as LoadingIndicatorInteraction5,d as LoadingIndicatorInteraction6,f as __namedExportsOrder,i as default};