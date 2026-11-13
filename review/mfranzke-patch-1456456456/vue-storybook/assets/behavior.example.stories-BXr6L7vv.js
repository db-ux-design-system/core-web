import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./card-BTwrGZHc.js";var i=t({DefaultStatic:()=>s,Interactive:()=>c,__namedExportsOrder:()=>l,default:()=>o}),a,o,s,c,l;function u(){return(u=e((()=>{n(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBCard/Behavior`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:a()},argTypes:{behavior:{control:`select`,options:[`static`,`interactive`]},elevationLevel:{control:`select`,options:[`1`,`2`,`3`]},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},s={args:{behavior:`static`,default:`<strong>(Default) Static</strong>`},render:e=>({components:{DBCard:r},setup(){return{args:e}},template:`<DBCard v-bind="args"   >${e.default}</DBCard>`})},c={args:{behavior:`interactive`,default:`<strong>Interactive</strong>`},render:e=>({components:{DBCard:r},setup(){return{args:e}},template:`<button type="button"   ><DBCard v-bind="args"   >${e.default}</DBCard></button>`})},l=[`DefaultStatic`,`Interactive`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "behavior": "static",
    "default": \`<strong>(Default) Static</strong>\`
  },
  render: (args: any) => ({
    components: {
      DBCard
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBCard v-bind="args"   >\${args.default}</DBCard>\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "behavior": "interactive",
    "default": \`<strong>Interactive</strong>\`
  },
  render: (args: any) => ({
    components: {
      DBCard
    },
    setup() {
      return {
        args
      };
    },
    template: \`<button type="button"   ><DBCard v-bind="args"   >\${args.default}</DBCard></button>\`
  })
}`,...c.parameters?.docs?.source}}}})))()}export{o as a,u as i,c as n,i as r,s as t};