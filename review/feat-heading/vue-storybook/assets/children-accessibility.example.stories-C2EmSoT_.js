import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./badge-Dy8O1mS0.js";import{n as r,t as i}from"./custom-heading-DOTEai6g.js";var a,o,s,c;function l(){return(l=e((()=>{t(),r(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBCustomHeading/Heading with additional content`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`3xl`,`2xl`,`xl`,`lg`,`md`,`sm`,`xs`,`2xs`,`3xs`]},fontWeight:{control:`select`,options:[`black`,`light`]},alignment:{control:`select`,options:[`start`,`center`,`end`]},paragraphSpacing:{control:`boolean`},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},s={args:{default:`<h2>Current disruptions</h2
><DBBadge semantic="critical" emphasis="strong"> 3 </DBBadge>`},render:e=>({components:{DBCustomHeading:i,DBBadge:n},setup(){return{args:e}},template:`<DBCustomHeading v-bind="args"   >${e.default}</DBCustomHeading>`})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<h2>Current disruptions</h2
><DBBadge semantic="critical" emphasis="strong"> 3 </DBBadge>\`
  },
  render: (args: any) => ({
    components: {
      DBCustomHeading,
      DBBadge
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBCustomHeading v-bind="args"   >\${args.default}</DBCustomHeading>\`
  })
}`,...s.parameters?.docs?.source}}},c=[`WrapperSiblingcontentoutsidetheaccessiblename`]})))()}l();export{s as WrapperSiblingcontentoutsidetheaccessiblename,c as __namedExportsOrder,o as default};