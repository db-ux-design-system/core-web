import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,n,r,t as i}from"./heading-h2-BVORWoQq.js";import{n as a,t as o}from"./heading-h6-BgvFGBXh.js";var s,c,l,u,d,f;function p(){return(p=e((()=>{t(),n(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBHeadingH2/Semantic and visual decoupling`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`3xl`,`2xl`,`xl`,`lg`,`md`,`sm`,`xs`,`2xs`,`3xs`]},fontWeight:{control:`select`,options:[`black`,`light`]},alignment:{control:`select`,options:[`start`,`center`,`end`]},paragraphSpacing:{control:`boolean`},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},l={args:{size:`2xl`,default:`Semantic h6, visual 2xl`},render:e=>({components:{DBHeadingH2:i,DBCustomHeading:r,DBHeadingH6:o},setup(){return{args:e}},template:`<DBHeadingH6 v-bind="args"   >${e.default}</DBHeadingH6>`})},u={args:{size:`3xs`,default:`Semantic h2, visual 3xs`},render:e=>({components:{DBHeadingH2:i,DBCustomHeading:r,DBHeadingH6:o},setup(){return{args:e}},template:`<DBHeadingH2 v-bind="args"   >${e.default}</DBHeadingH2>`})},d={args:{size:`3xl`,semanticLevel:3,default:`<span>Custom semantic level 3, visual 3xl</span>`},render:e=>({components:{DBHeadingH2:i,DBCustomHeading:r,DBHeadingH6:o},setup(){return{args:e}},template:`<DBCustomHeading v-bind="args"   >${e.default}</DBCustomHeading>`})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "2xl",
    "default": \`Semantic h6, visual 2xl\`
  },
  render: (args: any) => ({
    components: {
      DBHeadingH2,
      DBCustomHeading,
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
    "size": "3xs",
    "default": \`Semantic h2, visual 3xs\`
  },
  render: (args: any) => ({
    components: {
      DBHeadingH2,
      DBCustomHeading,
      DBHeadingH6
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBHeadingH2 v-bind="args"   >\${args.default}</DBHeadingH2>\`
  })
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "3xl",
    "semanticLevel": 3,
    "default": \`<span>Custom semantic level 3, visual 3xl</span>\`
  },
  render: (args: any) => ({
    components: {
      DBHeadingH2,
      DBCustomHeading,
      DBHeadingH6
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBCustomHeading v-bind="args"   >\${args.default}</DBCustomHeading>\`
  })
}`,...d.parameters?.docs?.source}}},f=[`h6renderedat2xl`,`h2renderedat3xs`,`Customlevel3renderedat3xl`]})))()}p();export{d as Customlevel3renderedat3xl,f as __namedExportsOrder,c as default,u as h2renderedat3xs,l as h6renderedat2xl};