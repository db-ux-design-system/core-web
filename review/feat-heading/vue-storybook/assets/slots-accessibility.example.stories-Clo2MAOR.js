import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./heading-DTC2lvyS.js";var r,i,a,o;function s(){return(s=e((()=>{t(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBHeading/Decorative slots hidden from screen readers`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{as:{control:`select`,options:[`h1`,`h2`,`h3`,`h4`,`h5`,`h6`]},size:{control:`select`,options:[`3xl`,`2xl`,`xl`,`lg`,`md`,`sm`,`xs`,`2xs`,`3xs`]},fontWeight:{control:`select`,options:[`black`,`light`]},alignment:{control:`select`,options:[`start`,`center`,`end`]},paragraphSpacing:{control:`boolean`},children:{control:`text`},startSlot:{control:!1},endSlot:{control:!1},className:{control:`text`},id:{control:`text`}}},a={args:{as:`h2`,default:`<span>Current disruptions</span
><template v-slot:start-slot><span aria-hidden="true">★ </span></template
><template v-slot:end-slot><span aria-hidden="true"> ★</span></template>`},render:e=>({components:{DBHeading:n},setup(){return{args:e}},template:`<DBHeading v-bind="args"   >${e.default}</DBHeading>`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "as": "h2",
    "default": \`<span>Current disruptions</span
><template v-slot:start-slot><span aria-hidden="true">★ </span></template
><template v-slot:end-slot><span aria-hidden="true"> ★</span></template>\`
  },
  render: (args: any) => ({
    components: {
      DBHeading
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBHeading v-bind="args"   >\${args.default}</DBHeading>\`
  })
}`,...a.parameters?.docs?.source}}},o=[`Decorativeslotshiddenfromscreenreaders`]})))()}s();export{a as Decorativeslotshiddenfromscreenreaders,o as __namedExportsOrder,i as default};