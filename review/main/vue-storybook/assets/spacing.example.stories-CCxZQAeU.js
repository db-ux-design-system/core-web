import{n as e}from"./chunk-DnJy8xQt.js";import{O as t,t as n}from"./src-C6Gn60iG.js";var r,i,a,o,s,c,l;e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBCard/Spacing`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:r()},argTypes:{behavior:{control:`select`,options:[`static`,`interactive`]},elevationLevel:{control:`select`,options:[`1`,`2`,`3`]},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},a={args:{spacing:`small`,default:`<strong>(Default) Small</strong>`},render:e=>({components:{DBCard:t},setup(){return{args:e}},template:`<DBCard v-bind="args"   >${e.default}</DBCard>`})},o={args:{spacing:`medium`,default:`<strong>Medium</strong>`},render:e=>({components:{DBCard:t},setup(){return{args:e}},template:`<DBCard v-bind="args"   >${e.default}</DBCard>`})},s={args:{spacing:`large`,default:`<strong>Large</strong>`},render:e=>({components:{DBCard:t},setup(){return{args:e}},template:`<DBCard v-bind="args"   >${e.default}</DBCard>`})},c={args:{spacing:`none`,default:`<strong>None</strong>`},render:e=>({components:{DBCard:t},setup(){return{args:e}},template:`<DBCard v-bind="args"   >${e.default}</DBCard>`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l=[`DefaultSmall`,`Medium`,`Large`,`None`]}))();export{a as DefaultSmall,s as Large,o as Medium,c as None,l as __namedExportsOrder,i as default};