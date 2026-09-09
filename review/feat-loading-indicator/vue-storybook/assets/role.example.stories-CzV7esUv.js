import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./infotext-Bt0SmnRj.js";import{n as r,t as i}from"./loading-indicator-DN5jS9rH.js";var a,o,s,c,l,u;function d(){return(d=e((()=>{t(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBLoadingIndicator/Role`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`bar`,`circular`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},size:{control:`select`,options:[`small`,`medium`]},state:{control:`select`,options:[`inactive`,`active`,`successful`,`critical`]},indeterminate:{control:`boolean`},value:{control:`number`},max:{control:`number`},showLabel:{control:`boolean`},showProgressText:{control:`boolean`},overlay:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]}}},s={args:{variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`,default:`Default`},render:e=>({components:{DBLoadingIndicator:r,DBInfotext:n},setup(){return{args:e}},template:`<DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator>`})},c={args:{role:`status`,variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`,default:`Status`},render:e=>({components:{DBLoadingIndicator:r,DBInfotext:n},setup(){return{args:e}},template:`<DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator>`})},l={args:{role:`alert`,variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`,default:`Alert`},render:e=>({components:{DBLoadingIndicator:r,DBInfotext:n},setup(){return{args:e}},template:`<DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator>`})},u=[`Defaultstatus`,`rolestatus`,`rolealert`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100",
    "default": \`Default\`
  },
  render: (args: any) => ({
    components: {
      DBLoadingIndicator,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBLoadingIndicator v-bind="args"   >\${args.default}</DBLoadingIndicator>\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "role": "status",
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100",
    "default": \`Status\`
  },
  render: (args: any) => ({
    components: {
      DBLoadingIndicator,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBLoadingIndicator v-bind="args"   >\${args.default}</DBLoadingIndicator>\`
  })
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "role": "alert",
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100",
    "default": \`Alert\`
  },
  render: (args: any) => ({
    components: {
      DBLoadingIndicator,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBLoadingIndicator v-bind="args"   >\${args.default}</DBLoadingIndicator>\`
  })
}`,...l.parameters?.docs?.source}}}})))()}d();export{s as Defaultstatus,u as __namedExportsOrder,o as default,l as rolealert,c as rolestatus};