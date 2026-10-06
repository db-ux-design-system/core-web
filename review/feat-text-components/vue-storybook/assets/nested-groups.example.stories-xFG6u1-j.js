import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./paragraph-CSoxs_F7.js";import{n as r,t as i}from"./text-group-9XZnRWIF.js";var a,o,s,c;function l(){return(l=e((()=>{n(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBParagraph/Nested groups`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{alignment:{control:`select`,options:[`start`,`center`,`end`]},textSpacing:{control:`boolean`},className:{control:`text`},id:{control:`text`}}},s={args:{textSpacing:!0,default:`<DBTextGroup alignment="start"
  ><DBParagraph fontWeight="black"> Start-aligned block </DBParagraph
  ><DBParagraph>
    Alignment is set once per group and inherited by every paragraph in it.
  </DBParagraph></DBTextGroup
><DBTextGroup alignment="center"
  ><DBParagraph fontWeight="black">Centred block</DBParagraph
  ><DBParagraph size="sm">
    A nested group can differ from its parent, and the spacing of the outer
    group stays the same.
  </DBParagraph></DBTextGroup
>`},render:e=>({components:{DBTextGroup:r,DBParagraph:t},setup(){return{args:e}},template:`<DBTextGroup v-bind="args"   >${e.default}</DBTextGroup>`})},c=[`Outergroupspacingnestedgroups`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "textSpacing": true,
    "default": \`<DBTextGroup alignment="start"
  ><DBParagraph fontWeight="black"> Start-aligned block </DBParagraph
  ><DBParagraph>
    Alignment is set once per group and inherited by every paragraph in it.
  </DBParagraph></DBTextGroup
><DBTextGroup alignment="center"
  ><DBParagraph fontWeight="black">Centred block</DBParagraph
  ><DBParagraph size="sm">
    A nested group can differ from its parent, and the spacing of the outer
    group stays the same.
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