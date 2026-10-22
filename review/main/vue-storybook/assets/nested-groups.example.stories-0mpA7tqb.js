import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./paragraph-DMK0clfl.js";import{n as r,t as i}from"./text-group-DtfIhUwq.js";var a,o,s,c;function l(){return(l=e((()=>{n(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBTextGroup/Nested groups`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{alignment:{control:`select`,options:[`start`,`center`,`end`]},textSpacing:{control:`boolean`},className:{control:`text`},id:{control:`text`}}},s={args:{textSpacing:!0,default:`<DBTextGroup alignment="start"
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
>`},render:e=>({components:{DBTextGroup:r,DBParagraph:t},setup(){return{args:e}},template:`<DBTextGroup v-bind="args"   >${e.default}</DBTextGroup>`})},c=[`Outergroupspacingnestedgroups`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}}})))()}l();export{s as Outergroupspacingnestedgroups,c as __namedExportsOrder,o as default};