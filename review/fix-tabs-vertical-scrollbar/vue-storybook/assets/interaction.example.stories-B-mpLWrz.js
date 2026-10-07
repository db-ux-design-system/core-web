import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./badge-DTXta4z1.js";import{n as r,t as i}from"./custom-button-B_IB7wBd.js";import{n as a,t as o}from"./custom-heading-BhoVPaJH.js";import{n as s,t as c}from"./heading-h1-GeOj3TjN.js";import{n as l,t as u}from"./heading-h6-tRsAmlvr.js";import{n as d,t as f}from"./icon-ONQSOPSe.js";var p,m,h,g;function _(){return(_=e((()=>{t(),r(),d(),a(),s(),l(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/DBHeading/Interaction`,component:c,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`3xl`,`2xl`,`xl`,`lg`,`md`,`sm`,`xs`,`2xs`,`3xs`]},fontWeight:{control:`select`,options:[`black`,`light`]},alignment:{control:`select`,options:[`start`,`center`,`end`]},paragraphSpacing:{control:`boolean`},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},h={args:{"data-testid":`native-h1`,default:`Native H1`},render:e=>({components:{DBHeadingH1:c,DBBadge:n,DBCustomButton:i,DBIcon:f,DBCustomHeading:o,DBHeadingH6:u},setup(){return{args:e}},template:`<DBHeadingH1 v-bind="args"   >${e.default}</DBHeadingH1>`})},g=[`Interaction`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "native-h1",
    "default": \`Native H1\`
  },
  render: (args: any) => ({
    components: {
      DBHeadingH1,
      DBBadge,
      DBCustomButton,
      DBIcon,
      DBCustomHeading,
      DBHeadingH6
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBHeadingH1 v-bind="args"   >\${args.default}</DBHeadingH1>\`
  })
}`,...h.parameters?.docs?.source}}}})))()}_();export{h as Interaction,g as __namedExportsOrder,m as default};