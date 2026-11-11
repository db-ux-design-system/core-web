import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./link-C3JXeiEg.js";var i=t({DefaultMedium:()=>s,Small:()=>c,__namedExportsOrder:()=>l,default:()=>o}),a,o,s,c,l;function u(){return(u=e((()=>{r(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBLink/Size`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:a()},argTypes:{href:{control:`text`},variant:{control:`select`,options:[`adaptive`,`brand`,`inline`]},disabled:{control:`boolean`},size:{control:`select`,options:[`medium`,`small`]},content:{control:`select`,options:[`external`,`internal`]},showIcon:{control:`boolean`},wrap:{control:`boolean`},text:{control:`text`},target:{control:`select`,options:[`_self`,`_blank`,`_parent`,`_top`]},rel:{control:`text`},hreflang:{control:`text`},referrerPolicy:{control:`select`,options:[`no-referrer`,`no-referrer-when-downgrade`,`origin`,`origin-when-cross-origin`,`same-origin`,`strict-origin`,`strict-origin-when-cross-origin`,`unsafe-url`]},role:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},s={args:{href:`#`,text:`(Default) Medium`,default:``},render:e=>({components:{DBLink:n},setup(){return{args:e}},template:`<DBLink v-bind="args"   >${e.default}</DBLink>`})},c={args:{href:`#`,size:`small`,text:`Small`,default:``},render:e=>({components:{DBLink:n},setup(){return{args:e}},template:`<DBLink v-bind="args"   >${e.default}</DBLink>`})},l=[`DefaultMedium`,`Small`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "href": "#",
    "text": "(Default) Medium",
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBLink v-bind="args"   >\${args.default}</DBLink>\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "href": "#",
    "size": "small",
    "text": "Small",
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBLink v-bind="args"   >\${args.default}</DBLink>\`
  })
}`,...c.parameters?.docs?.source}}}})))()}export{i,c as n,u as r,s as t};