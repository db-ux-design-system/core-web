import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./brand-BVL6Fhw6.js";var i=t({CustomLogo:()=>l,DefaultWithLogo:()=>s,NoLogo:()=>c,__namedExportsOrder:()=>u,default:()=>o}),a,o,s,c,l,u;function d(){return(d=e((()=>{n(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBBrand/Variants`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{hideLogo:{control:`boolean`},showIcon:{control:`boolean`},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{default:`(Default) With Logo`},render:e=>({components:{DBBrand:r},setup(){return{args:e}},template:`<DBBrand v-bind="args"   >${e.default}</DBBrand>`})},c={args:{hideLogo:!0,default:`No Logo`},render:e=>({components:{DBBrand:r},setup(){return{args:e}},template:`<DBBrand v-bind="args"   >${e.default}</DBBrand>`})},l={args:{hideLogo:!0,default:`<img alt="this is a fancy placeholder logo" src="assets/images/placeholder.jpg" />Custom Logo`},render:e=>({components:{DBBrand:r},setup(){return{args:e}},template:`<DBBrand v-bind="args"   >${e.default}</DBBrand>`})},u=[`DefaultWithLogo`,`NoLogo`,`CustomLogo`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`(Default) With Logo\`
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
    "hideLogo": true,
    "default": \`No Logo\`
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
    "hideLogo": true,
    "default": \`<img alt="this is a fancy placeholder logo" src="assets/images/placeholder.jpg" />Custom Logo\`
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
}`,...l.parameters?.docs?.source}}}})))()}export{i as a,d as i,s as n,c as r,l as t};