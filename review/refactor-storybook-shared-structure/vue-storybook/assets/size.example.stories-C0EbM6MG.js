import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./infotext-CdRPxh-C.js";var i=t({DefaultMedium:()=>s,Small:()=>c,__namedExportsOrder:()=>l,default:()=>o}),a,o,s,c,l;function u(){return(u=e((()=>{n(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBInfotext/Size`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},size:{control:`select`,options:[`small`,`medium`]},showIcon:{control:`boolean`},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{default:`(Default) Medium`},render:e=>({components:{DBInfotext:r},setup(){return{args:e}},template:`<DBInfotext v-bind="args"   >${e.default}</DBInfotext>`})},c={args:{size:`small`,default:`Small`},render:e=>({components:{DBInfotext:r},setup(){return{args:e}},template:`<DBInfotext v-bind="args"   >${e.default}</DBInfotext>`})},l=[`DefaultMedium`,`Small`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`(Default) Medium\`
  },
  render: (args: any) => ({
    components: {
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBInfotext v-bind="args"   >\${args.default}</DBInfotext>\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "default": \`Small\`
  },
  render: (args: any) => ({
    components: {
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBInfotext v-bind="args"   >\${args.default}</DBInfotext>\`
  })
}`,...c.parameters?.docs?.source}}}})))()}export{i,c as n,u as r,s as t};