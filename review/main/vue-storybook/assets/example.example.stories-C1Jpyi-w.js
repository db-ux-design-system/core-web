import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./card-Dn8V5cZv.js";var i=t({Level1Interactive:()=>s,Level2Interactive:()=>c,Level3Interactive:()=>l,__namedExportsOrder:()=>u,default:()=>o}),a,o,s,c,l,u;function d(){return(d=e((()=>{n(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBCard/Example`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:a()},argTypes:{behavior:{control:`select`,options:[`static`,`interactive`]},elevationLevel:{control:`select`,options:[`1`,`2`,`3`]},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},s={args:{elevationLevel:`1`,behavior:`interactive`,default:`<strong>Level 1 - Interactive</strong>`},render:e=>({components:{DBCard:r},setup(){return{args:e}},template:`<button type="button"   ><DBCard v-bind="args"   >${e.default}</DBCard></button>`})},c={args:{elevationLevel:`2`,behavior:`interactive`,default:`<strong>Level 2 - Interactive</strong>`},render:e=>({components:{DBCard:r},setup(){return{args:e}},template:`<button type="button"   ><DBCard v-bind="args"   >${e.default}</DBCard></button>`})},l={args:{elevationLevel:`3`,behavior:`interactive`,default:`<strong>Level 3 - Interactive</strong>`},render:e=>({components:{DBCard:r},setup(){return{args:e}},template:`<button type="button"   ><DBCard v-bind="args"   >${e.default}</DBCard></button>`})},u=[`Level1Interactive`,`Level2Interactive`,`Level3Interactive`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "elevationLevel": "1",
    "behavior": "interactive",
    "default": \`<strong>Level 1 - Interactive</strong>\`
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "elevationLevel": "2",
    "behavior": "interactive",
    "default": \`<strong>Level 2 - Interactive</strong>\`
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "elevationLevel": "3",
    "behavior": "interactive",
    "default": \`<strong>Level 3 - Interactive</strong>\`
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
}`,...l.parameters?.docs?.source}}}})))()}export{d as a,i,c as n,l as r,s as t};