import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./button-Ct0v0iTB.js";import{n as r,t as i}from"./loading-indicator-CMDK_Kqq.js";var a,o,s,c;function l(){return(l=e((()=>{t(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBLoadingIndicator/Examples: Timeout`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`bar`,`circular`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},size:{control:`select`,options:[`small`,`medium`]},state:{control:`select`,options:[`inactive`,`active`,`successful`,`critical`]},indeterminate:{control:`boolean`},value:{control:`number`},max:{control:`number`},showLabel:{control:`boolean`},showProgressText:{control:`boolean`},overlay:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]}}},s={args:{state:`inactive`,overlay:!0,onTimeout:a(),default:`Loading`},render:e=>({components:{DBLoadingIndicator:r,DBButton:n},setup(){return{args:e}},template:`<DBButton icon="x_placeholder" :onClick="(event) => loadingState = 'active'"  ><DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator>
                Start Timeout
            </DBButton>`})},c=[`Timeout`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "state": 'inactive',
    "overlay": true,
    "onTimeout": fn(),
    "default": \`Loading\`
  },
  render: (args: any) => ({
    components: {
      DBLoadingIndicator,
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBButton icon="x_placeholder" :onClick="(event) => loadingState = 'active'"  ><DBLoadingIndicator v-bind="args"   >\${args.default}</DBLoadingIndicator>
                Start Timeout
            </DBButton>\`
  })
}`,...s.parameters?.docs?.source}}}})))()}l();export{s as Timeout,c as __namedExportsOrder,o as default};