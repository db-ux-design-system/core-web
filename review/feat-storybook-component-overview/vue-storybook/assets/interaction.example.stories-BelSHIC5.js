import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./navigation-CojcnQjo.js";import{n as i,t as a}from"./navigation-item-BljuAQlY.js";var o=t({Interaction:()=>l,__namedExportsOrder:()=>u,default:()=>c}),s,c,l,u;function d(){return(d=e((()=>{a(),r(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBNavigation/Interaction`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{default:`<DBNavigationItem data-testid="test1">
  Test1
  <template v-slot:sub-navigation
    ><DBNavigationItem data-testid="sub1"
      ><a href="#">Sub1</a></DBNavigationItem
    ></template
  ></DBNavigationItem
><DBNavigationItem><a href="#">Test2</a></DBNavigationItem>`},render:e=>({components:{DBNavigation:n,DBNavigationItem:i},setup(){return{args:e}},template:`<DBNavigation v-bind="args"   >${e.default}</DBNavigation>`})},u=[`Interaction`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}}})))()}export{d as n,o as r,l as t};