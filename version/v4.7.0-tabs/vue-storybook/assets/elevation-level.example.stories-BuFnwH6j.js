import{n as e}from"./chunk-DnJy8xQt.js";import{O as t,t as n}from"./src-CttduW8a.js";var r,i,a,o,s,c;e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBCard/Elevation Level`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:r()},argTypes:{behavior:{control:`select`,options:[`static`,`interactive`]},elevationLevel:{control:`select`,options:[`1`,`2`,`3`]},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},a={args:{elevationLevel:`1`,default:`<strong>(Default) 1</strong>`},render:e=>({components:{DBCard:t},setup(){return{args:e}},template:`<DBCard v-bind="args"   >${e.default}</DBCard>`})},o={args:{elevationLevel:`2`,default:`<strong>2</strong>`},render:e=>({components:{DBCard:t},setup(){return{args:e}},template:`<DBCard v-bind="args"   >${e.default}</DBCard>`})},s={args:{elevationLevel:`3`,default:`<strong>3</strong>`},render:e=>({components:{DBCard:t},setup(){return{args:e}},template:`<DBCard v-bind="args"   >${e.default}</DBCard>`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c=[`DefaultLevel1`,`Level2`,`Level3`]}))();export{a as DefaultLevel1,o as Level2,s as Level3,c as __namedExportsOrder,i as default};