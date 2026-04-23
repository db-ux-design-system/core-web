import{n as e}from"./chunk-BneVvdWh.js";import{O as t,t as n}from"./src-CDoPZINE.js";var r,i,a,o,s;e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBCard/Behavior`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:r()},argTypes:{behavior:{control:`select`,options:[`static`,`interactive`]},elevationLevel:{control:`select`,options:[`1`,`2`,`3`]},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},a={args:{behavior:`static`,default:`<strong>(Default) Static</strong>`},render:e=>({components:{DBCard:t},setup(){return{args:e}},template:`<DBCard v-bind="args"   >${e.default}</DBCard>`})},o={args:{behavior:`interactive`,default:`<strong>Interactive</strong>`},render:e=>({components:{DBCard:t},setup(){return{args:e}},template:`<button type="button"   ><DBCard v-bind="args"   >${e.default}</DBCard></button>`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s=[`DefaultStatic`,`Interactive`]}))();export{a as DefaultStatic,o as Interactive,s as __namedExportsOrder,i as default};