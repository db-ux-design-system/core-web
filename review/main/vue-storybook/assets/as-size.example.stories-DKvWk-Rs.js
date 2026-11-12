import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./heading-h2-BDSvOQKB.js";import{n as i,t as a}from"./heading-h6-JD6O-vaf.js";var o=t({__namedExportsOrder:()=>d,default:()=>c,h2renderedash6:()=>u,h6renderedash1:()=>l}),s,c,l,u,d;function f(){return(f=e((()=>{n(),i(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBHeading/Semantic and visual decoupling`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{visualSize:{control:`select`,options:[`h1`,`h2`,`h3`,`h4`,`h5`,`h6`,`p-small`,`p-medium`,`p-large`]},fontWeight:{control:`select`,options:[`black`,`light`]},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},l={args:{visualSize:`h1`,default:`Semantic h6, visual h1`},render:e=>({components:{DBHeadingH2:r,DBHeadingH6:a},setup(){return{args:e}},template:`<DBHeadingH6 v-bind="args"   >${e.default}</DBHeadingH6>`})},u={args:{visualSize:`h6`,default:`Semantic h2, visual h6`},render:e=>({components:{DBHeadingH2:r,DBHeadingH6:a},setup(){return{args:e}},template:`<DBHeadingH2 v-bind="args"   >${e.default}</DBHeadingH2>`})},d=[`h6renderedash1`,`h2renderedash6`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "visualSize": "h1",
    "default": \`Semantic h6, visual h1\`
  },
  render: (args: any) => ({
    components: {
      DBHeadingH2,
      DBHeadingH6
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBHeadingH6 v-bind="args"   >\${args.default}</DBHeadingH6>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "visualSize": "h6",
    "default": \`Semantic h2, visual h6\`
  },
  render: (args: any) => ({
    components: {
      DBHeadingH2,
      DBHeadingH6
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBHeadingH2 v-bind="args"   >\${args.default}</DBHeadingH2>\`
  })
}`,...u.parameters?.docs?.source}}}})))()}export{f as i,u as n,l as r,o as t};