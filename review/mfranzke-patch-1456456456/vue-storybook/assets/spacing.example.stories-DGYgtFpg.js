import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./card-BTwrGZHc.js";var i=t({DefaultSmall:()=>s,Large:()=>l,Medium:()=>c,None:()=>u,__namedExportsOrder:()=>d,default:()=>o}),a,o,s,c,l,u,d;function f(){return(f=e((()=>{n(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBCard/Spacing`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:a()},argTypes:{behavior:{control:`select`,options:[`static`,`interactive`]},elevationLevel:{control:`select`,options:[`1`,`2`,`3`]},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},s={args:{spacing:`small`,default:`<strong>(Default) Small</strong>`},render:e=>({components:{DBCard:r},setup(){return{args:e}},template:`<DBCard v-bind="args"   >${e.default}</DBCard>`})},c={args:{spacing:`medium`,default:`<strong>Medium</strong>`},render:e=>({components:{DBCard:r},setup(){return{args:e}},template:`<DBCard v-bind="args"   >${e.default}</DBCard>`})},l={args:{spacing:`large`,default:`<strong>Large</strong>`},render:e=>({components:{DBCard:r},setup(){return{args:e}},template:`<DBCard v-bind="args"   >${e.default}</DBCard>`})},u={args:{spacing:`none`,default:`<strong>None</strong>`},render:e=>({components:{DBCard:r},setup(){return{args:e}},template:`<DBCard v-bind="args"   >${e.default}</DBCard>`})},d=[`DefaultSmall`,`Medium`,`Large`,`None`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "small",
    "default": \`<strong>(Default) Small</strong>\`
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
    "spacing": "medium",
    "default": \`<strong>Medium</strong>\`
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
    "spacing": "large",
    "default": \`<strong>Large</strong>\`
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "none",
    "default": \`<strong>None</strong>\`
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
}`,...u.parameters?.docs?.source}}}})))()}export{f as a,u as i,l as n,i as o,c as r,s as t};