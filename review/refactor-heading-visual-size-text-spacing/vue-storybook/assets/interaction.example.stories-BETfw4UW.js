import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./navigation-BBSFeEtg.js";import{n as r,t as i}from"./navigation-item-DzfAv1TY.js";var a,o,s,c;function l(){return(l=e((()=>{i(),n(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBNavigation/Interaction`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{default:`<DBNavigationItem data-testid="test1">
  Test1
  <template v-slot:sub-navigation
    ><DBNavigationItem data-testid="sub1"
      ><a href="#">Sub1</a></DBNavigationItem
    ></template
  ></DBNavigationItem
><DBNavigationItem><a href="#">Test2</a></DBNavigationItem>`},render:e=>({components:{DBNavigation:t,DBNavigationItem:r},setup(){return{args:e}},template:`<DBNavigation v-bind="args"   >${e.default}</DBNavigation>`})},c=[`Interaction`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<DBNavigationItem data-testid="test1">
  Test1
  <template v-slot:sub-navigation
    ><DBNavigationItem data-testid="sub1"
      ><a href="#">Sub1</a></DBNavigationItem
    ></template
  ></DBNavigationItem
><DBNavigationItem><a href="#">Test2</a></DBNavigationItem>\`
  },
  render: (args: any) => ({
    components: {
      DBNavigation,
      DBNavigationItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBNavigation v-bind="args"   >\${args.default}</DBNavigation>\`
  })
}`,...s.parameters?.docs?.source}}}})))()}l();export{s as Interaction,c as __namedExportsOrder,o as default};