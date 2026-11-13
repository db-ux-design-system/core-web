import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./card-B4CzafgG.js";var i=t({DefaultLevel1:()=>s,Level2:()=>c,Level3:()=>l,__namedExportsOrder:()=>u,default:()=>o}),a,o,s,c,l,u;function d(){return(d=e((()=>{n(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBCard/Elevation Level`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:a()},argTypes:{behavior:{control:`select`,options:[`static`,`interactive`]},elevationLevel:{control:`select`,options:[`1`,`2`,`3`]},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},s={args:{elevationLevel:`1`,default:`<strong>(Default) 1</strong>`},render:e=>({components:{DBCard:r},setup(){return{args:e}},template:`<DBCard v-bind="args"   >${e.default}</DBCard>`})},c={args:{elevationLevel:`2`,default:`<strong>2</strong>`},render:e=>({components:{DBCard:r},setup(){return{args:e}},template:`<DBCard v-bind="args"   >${e.default}</DBCard>`})},l={args:{elevationLevel:`3`,default:`<strong>3</strong>`},render:e=>({components:{DBCard:r},setup(){return{args:e}},template:`<DBCard v-bind="args"   >${e.default}</DBCard>`})},u=[`DefaultLevel1`,`Level2`,`Level3`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "elevationLevel": "1",
    "default": \`<strong>(Default) 1</strong>\`
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
    "elevationLevel": "2",
    "default": \`<strong>2</strong>\`
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
    "elevationLevel": "3",
    "default": \`<strong>3</strong>\`
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
}`,...l.parameters?.docs?.source}}}})))()}export{d as a,i,c as n,l as r,s as t};