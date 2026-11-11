import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./button-C_2F8_LZ.js";import{n as i,t as a}from"./loading-indicator-9S9jPRey.js";var o=t({Timeout:()=>l,__namedExportsOrder:()=>u,default:()=>c}),s,c,l,u;function d(){return(d=e((()=>{n(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBLoadingIndicator/Examples: Timeout`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onTimeout:s()},argTypes:{variant:{control:`select`,options:[`bar`,`circular`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},size:{control:`select`,options:[`small`,`medium`,`large`]},state:{control:`select`,options:[`inactive`,`active`,`successful`,`critical`]},indeterminate:{control:`boolean`},value:{control:`number`},max:{control:`number`},showLabel:{control:`boolean`},showProgressText:{control:`boolean`},overlay:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},onTimeout:{action:`onTimeout`}}},l={args:{state:`inactive`,overlay:!0,onTimeout:s(),default:`Loading`},render:e=>({components:{DBLoadingIndicator:i,DBButton:r},setup(){return{args:e}},template:`<DBButton icon="x_placeholder" :onClick="(event) => loadingState = 'active'"  ><DBLoadingIndicator v-bind="args"   >${e.default}</DBLoadingIndicator>
                Start Timeout
            </DBButton>`})},u=[`Timeout`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}}})))()}export{d as n,o as r,l as t};