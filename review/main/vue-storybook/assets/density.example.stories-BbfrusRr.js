import{n as e}from"./chunk-DnJy8xQt.js";import{O as t,t as n}from"./src-BEwlPLIG.js";var r,i,a,o,s,c;e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBCard/Density`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:r()},argTypes:{behavior:{control:`select`,options:[`static`,`interactive`]},elevationLevel:{control:`select`,options:[`1`,`2`,`3`]},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},a={args:{"data-density":`functional`,default:`<strong>Functional</strong>`},render:e=>({components:{DBCard:t},setup(){return{args:e}},template:`<DBCard v-bind="args"   >${e.default}</DBCard>`})},o={args:{"data-density":`regular`,default:`<strong>(Default) Regular</strong>`},render:e=>({components:{DBCard:t},setup(){return{args:e}},template:`<DBCard v-bind="args"   >${e.default}</DBCard>`})},s={args:{"data-density":`expressive`,default:`<strong>Expressive</strong>`},render:e=>({components:{DBCard:t},setup(){return{args:e}},template:`<DBCard v-bind="args"   >${e.default}</DBCard>`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c=[`Functional`,`DefaultRegular`,`Expressive`]}))();export{o as DefaultRegular,s as Expressive,a as Functional,c as __namedExportsOrder,i as default};