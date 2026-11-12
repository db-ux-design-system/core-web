import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./paragraph-Ce7v6IU7.js";import{n as i,t as a}from"./text-group-BHfn7xc6.js";var o=t({Outergroupspacingnestedgroups:()=>l,__namedExportsOrder:()=>u,default:()=>c}),s,c,l,u;function d(){return(d=e((()=>{r(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTextGroup/Nested groups`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{alignment:{control:`select`,options:[`start`,`center`,`end`]},textSpacing:{control:`boolean`},className:{control:`text`},id:{control:`text`}}},l={args:{textSpacing:!0,default:`<DBTextGroup alignment="start"
  ><DBParagraph><strong>Start-aligned block</strong></DBParagraph
  ><DBParagraph>
    Alignment is set once per group and inherited by every paragraph in it.
  </DBParagraph></DBTextGroup
><DBTextGroup alignment="center"
  ><DBParagraph><strong>Centred block</strong></DBParagraph
  ><DBParagraph size="sm">
    A nested group can differ from its parent, and the spacing keeps coming from
    the outer one.
  </DBParagraph></DBTextGroup
>`},render:e=>({components:{DBTextGroup:i,DBParagraph:n},setup(){return{args:e}},template:`<DBTextGroup v-bind="args"   >${e.default}</DBTextGroup>`})},u=[`Outergroupspacingnestedgroups`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "textSpacing": true,
    "default": \`<DBTextGroup alignment="start"
  ><DBParagraph><strong>Start-aligned block</strong></DBParagraph
  ><DBParagraph>
    Alignment is set once per group and inherited by every paragraph in it.
  </DBParagraph></DBTextGroup
><DBTextGroup alignment="center"
  ><DBParagraph><strong>Centred block</strong></DBParagraph
  ><DBParagraph size="sm">
    A nested group can differ from its parent, and the spacing keeps coming from
    the outer one.
  </DBParagraph></DBTextGroup
>\`
  },
  render: (args: any) => ({
    components: {
      DBTextGroup,
      DBParagraph
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBTextGroup v-bind="args"   >\${args.default}</DBTextGroup>\`
  })
}`,...l.parameters?.docs?.source}}}})))()}export{d as n,o as r,l as t};