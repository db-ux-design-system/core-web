import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./badge-BwFawIzI.js";import{n as r,t as i}from"./custom-heading-TmitOpXZ.js";import{n as a,t as o}from"./heading-h2-dwOhtbeZ.js";var s,c,l,u,d;function f(){return(f=e((()=>{t(),r(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBHeadingH2/Accessible children`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`3xl`,`2xl`,`xl`,`lg`,`md`,`sm`,`xs`,`2xs`,`3xs`]},fontWeight:{control:`select`,options:[`black`,`light`]},alignment:{control:`select`,options:[`start`,`center`,`end`]},paragraphSpacing:{control:`boolean`},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},l={args:{default:`<span aria-hidden="true">* </span><span>Current disruptions</span
><span aria-hidden="true"> *</span>`},render:e=>({components:{DBHeadingH2:o,DBBadge:n,DBCustomHeading:i},setup(){return{args:e}},template:`<DBHeadingH2 v-bind="args"   >${e.default}</DBHeadingH2>`})},u={args:{default:`<h2>Current disruptions</h2
><DBBadge semantic="critical" emphasis="strong"> 3 </DBBadge>`},render:e=>({components:{DBHeadingH2:o,DBBadge:n,DBCustomHeading:i},setup(){return{args:e}},template:`<DBCustomHeading v-bind="args"   >${e.default}</DBCustomHeading>`})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<span aria-hidden="true">* </span><span>Current disruptions</span
><span aria-hidden="true"> *</span>\`
  },
  render: (args: any) => ({
    components: {
      DBHeadingH2,
      DBBadge,
      DBCustomHeading
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBHeadingH2 v-bind="args"   >\${args.default}</DBHeadingH2>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<h2>Current disruptions</h2
><DBBadge semantic="critical" emphasis="strong"> 3 </DBBadge>\`
  },
  render: (args: any) => ({
    components: {
      DBHeadingH2,
      DBBadge,
      DBCustomHeading
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBCustomHeading v-bind="args"   >\${args.default}</DBCustomHeading>\`
  })
}`,...u.parameters?.docs?.source}}},d=[`NativeDecorativechildrenhiddenfromscreenreaders`,`WrapperSiblingcontentoutsidetheaccessiblename`]})))()}f();export{l as NativeDecorativechildrenhiddenfromscreenreaders,u as WrapperSiblingcontentoutsidetheaccessiblename,d as __namedExportsOrder,c as default};