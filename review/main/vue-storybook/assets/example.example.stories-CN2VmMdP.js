import{n as e}from"./chunk-BneVvdWh.js";import{O as t,t as n}from"./src-1GpFCKEe.js";var r,i,a,o,s,c;e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBCard/Example`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:r()},argTypes:{behavior:{control:`select`,options:[`static`,`interactive`]},elevationLevel:{control:`select`,options:[`1`,`2`,`3`]},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},a={args:{elevationLevel:`1`,behavior:`interactive`,default:`<strong>Level 1 - Interactive</strong>`},render:e=>({components:{DBCard:t},setup(){return{args:e}},template:`<button type="button"   ><DBCard v-bind="args"   >${e.default}</DBCard></button>`})},o={args:{elevationLevel:`2`,behavior:`interactive`,default:`<strong>Level 2 - Interactive</strong>`},render:e=>({components:{DBCard:t},setup(){return{args:e}},template:`<button type="button"   ><DBCard v-bind="args"   >${e.default}</DBCard></button>`})},s={args:{elevationLevel:`3`,behavior:`interactive`,default:`<strong>Level 3 - Interactive</strong>`},render:e=>({components:{DBCard:t},setup(){return{args:e}},template:`<button type="button"   ><DBCard v-bind="args"   >${e.default}</DBCard></button>`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c=[`Level1Interactive`,`Level2Interactive`,`Level3Interactive`]}))();export{a as Level1Interactive,o as Level2Interactive,s as Level3Interactive,c as __namedExportsOrder,i as default};