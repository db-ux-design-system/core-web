import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./paragraph-CSoxs_F7.js";import{n as r,t as i}from"./text-group-9XZnRWIF.js";var a,o,s,c,l,u;function d(){return(d=e((()=>{n(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBParagraph/Logical alignment`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{alignment:{control:`select`,options:[`start`,`center`,`end`]},textSpacing:{control:`boolean`},className:{control:`text`},id:{control:`text`}}},s={args:{alignment:`start`,textSpacing:!0,default:`<DBParagraph>(Default) Start</DBParagraph
><DBParagraph>Inherited by every paragraph</DBParagraph>`},render:e=>({components:{DBTextGroup:r,DBParagraph:t},setup(){return{args:e}},template:`<DBTextGroup v-bind="args"   >${e.default}</DBTextGroup>`})},c={args:{alignment:`center`,textSpacing:!0,default:`<DBParagraph>Center</DBParagraph
><DBParagraph>Inherited by every paragraph</DBParagraph>`},render:e=>({components:{DBTextGroup:r,DBParagraph:t},setup(){return{args:e}},template:`<DBTextGroup v-bind="args"   >${e.default}</DBTextGroup>`})},l={args:{alignment:`end`,textSpacing:!0,default:`<DBParagraph>End</DBParagraph
><DBParagraph>Inherited by every paragraph</DBParagraph>`},render:e=>({components:{DBTextGroup:r,DBParagraph:t},setup(){return{args:e}},template:`<DBTextGroup v-bind="args"   >${e.default}</DBTextGroup>`})},u=[`DefaultStart`,`Center`,`End`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "alignment": "start",
    "textSpacing": true,
    "default": \`<DBParagraph>(Default) Start</DBParagraph
><DBParagraph>Inherited by every paragraph</DBParagraph>\`
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "alignment": "center",
    "textSpacing": true,
    "default": \`<DBParagraph>Center</DBParagraph
><DBParagraph>Inherited by every paragraph</DBParagraph>\`
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "alignment": "end",
    "textSpacing": true,
    "default": \`<DBParagraph>End</DBParagraph
><DBParagraph>Inherited by every paragraph</DBParagraph>\`
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
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as Center,s as DefaultStart,l as End,u as __namedExportsOrder,o as default};