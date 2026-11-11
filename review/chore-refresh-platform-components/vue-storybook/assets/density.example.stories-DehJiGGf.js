import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./card-DWm7sgE0.js";var i=t({DefaultRegular:()=>c,Expressive:()=>l,Functional:()=>s,__namedExportsOrder:()=>u,default:()=>o}),a,o,s,c,l,u;function d(){return(d=e((()=>{n(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBCard/Density`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:a()},argTypes:{behavior:{control:`select`,options:[`static`,`interactive`]},elevationLevel:{control:`select`,options:[`1`,`2`,`3`]},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},s={args:{"data-density":`functional`,default:`<strong>Functional</strong>`},render:e=>({components:{DBCard:r},setup(){return{args:e}},template:`<DBCard v-bind="args"   >${e.default}</DBCard>`})},c={args:{"data-density":`regular`,default:`<strong>(Default) Regular</strong>`},render:e=>({components:{DBCard:r},setup(){return{args:e}},template:`<DBCard v-bind="args"   >${e.default}</DBCard>`})},l={args:{"data-density":`expressive`,default:`<strong>Expressive</strong>`},render:e=>({components:{DBCard:r},setup(){return{args:e}},template:`<DBCard v-bind="args"   >${e.default}</DBCard>`})},u=[`Functional`,`DefaultRegular`,`Expressive`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "default": \`<strong>Functional</strong>\`
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
    "data-density": "regular",
    "default": \`<strong>(Default) Regular</strong>\`
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "default": \`<strong>Expressive</strong>\`
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
}`,...l.parameters?.docs?.source}}}})))()}export{d as a,i,l as n,s as r,c as t};