import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./brand-BhPY-ato.js";var i=t({DefaultRegular:()=>c,Expressive:()=>l,Functional:()=>s,__namedExportsOrder:()=>u,default:()=>o}),a,o,s,c,l,u;function d(){return(d=e((()=>{n(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBBrand/Density`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{hideLogo:{control:`boolean`},showIcon:{control:`boolean`},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{"data-density":`functional`,default:`Functional`},render:e=>({components:{DBBrand:r},setup(){return{args:e}},template:`<DBBrand v-bind="args"   >${e.default}</DBBrand>`})},c={args:{"data-density":`regular`,default:`(Default) Regular`},render:e=>({components:{DBBrand:r},setup(){return{args:e}},template:`<DBBrand v-bind="args"   >${e.default}</DBBrand>`})},l={args:{"data-density":`expressive`,default:`Expressive`},render:e=>({components:{DBBrand:r},setup(){return{args:e}},template:`<DBBrand v-bind="args"   >${e.default}</DBBrand>`})},u=[`Functional`,`DefaultRegular`,`Expressive`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "default": \`Functional\`
  },
  render: (args: any) => ({
    components: {
      DBBrand
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBBrand v-bind="args"   >\${args.default}</DBBrand>\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "default": \`(Default) Regular\`
  },
  render: (args: any) => ({
    components: {
      DBBrand
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBBrand v-bind="args"   >\${args.default}</DBBrand>\`
  })
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "default": \`Expressive\`
  },
  render: (args: any) => ({
    components: {
      DBBrand
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBBrand v-bind="args"   >\${args.default}</DBBrand>\`
  })
}`,...l.parameters?.docs?.source}}}})))()}export{d as a,i,l as n,o,s as r,c as t};