import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./paragraph-BynEt38f.js";import{n as r,t as i}from"./text-Bjw6k3eY.js";var a,o,s,c;function l(){return(l=e((()=>{n(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBText/Visually hidden`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`3xl`,`2xl`,`xl`,`lg`,`md`,`sm`,`xs`,`2xs`,`3xs`]},visuallyHidden:{control:`boolean`},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},s={args:{visuallyHidden:!0,default:`, reduced fare including seat reservation`},render:e=>({components:{DBText:r,DBParagraph:t},setup(){return{args:e}},template:`<DBParagraph    >
                Ticket price: 29 euros
                <DBText v-bind="args"   >${e.default}</DBText></DBParagraph>`})},c=[`Additionalcontextforscreenreaders`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "visuallyHidden": true,
    "default": \`, reduced fare including seat reservation\`
  },
  render: (args: any) => ({
    components: {
      DBText,
      DBParagraph
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBParagraph    >
                Ticket price: 29 euros
                <DBText v-bind="args"   >\${args.default}</DBText></DBParagraph>\`
  })
}`,...s.parameters?.docs?.source}}}})))()}l();export{s as Additionalcontextforscreenreaders,c as __namedExportsOrder,o as default};