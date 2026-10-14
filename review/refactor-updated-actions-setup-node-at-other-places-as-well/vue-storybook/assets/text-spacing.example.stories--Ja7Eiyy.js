import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./paragraph-BBqybS2H.js";import{n as r,t as i}from"./text-group-CAdOGMyQ.js";var a,o,s,c,l,u;function d(){return(d=e((()=>{n(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBTextGroup/Text spacing`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{alignment:{control:`select`,options:[`start`,`center`,`end`]},textSpacing:{control:`boolean`},className:{control:`text`},id:{control:`text`}}},s={args:{textSpacing:!1,default:`<DBParagraph>
  False: the paragraphs sit directly on top of each other. </DBParagraph
><DBParagraph>
  Nothing has to be set on the paragraphs themselves.
</DBParagraph>`},render:e=>({components:{DBTextGroup:r,DBParagraph:t},setup(){return{args:e}},template:`<DBTextGroup v-bind="args"   >${e.default}</DBTextGroup>`})},c={args:{textSpacing:!0,default:`<DBParagraph>
  True: every child gets half a line height above and below. </DBParagraph
><DBParagraph>
  Two adjacent children are a full line height apart, and the group keeps half
  of one at its outer edges.
</DBParagraph>`},render:e=>({components:{DBTextGroup:r,DBParagraph:t},setup(){return{args:e}},template:`<DBTextGroup v-bind="args"   >${e.default}</DBTextGroup>`})},l={args:{default:`<DBParagraph>
  Unset: this group sets nothing, so it follows the surrounding element that
  opted in. </DBParagraph
><DBParagraph> Use false to switch the spacing off for certain. </DBParagraph>`},render:e=>({components:{DBTextGroup:r,DBParagraph:t},setup(){return{args:e}},template:`<div data-text-spacing="true"   ><DBTextGroup v-bind="args"   >${e.default}</DBTextGroup></div>`})},u=[`Falsewithoutspacing`,`Truewithspacing`,`DefaultUnsetinherited`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "textSpacing": false,
    "default": \`<DBParagraph>
  False: the paragraphs sit directly on top of each other. </DBParagraph
><DBParagraph>
  Nothing has to be set on the paragraphs themselves.
</DBParagraph>\`
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
    "textSpacing": true,
    "default": \`<DBParagraph>
  True: every child gets half a line height above and below. </DBParagraph
><DBParagraph>
  Two adjacent children are a full line height apart, and the group keeps half
  of one at its outer edges.
</DBParagraph>\`
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
    "default": \`<DBParagraph>
  Unset: this group sets nothing, so it follows the surrounding element that
  opted in. </DBParagraph
><DBParagraph> Use false to switch the spacing off for certain. </DBParagraph>\`
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
    template: \`<div data-text-spacing="true"   ><DBTextGroup v-bind="args"   >\${args.default}</DBTextGroup></div>\`
  })
}`,...l.parameters?.docs?.source}}}})))()}d();export{l as DefaultUnsetinherited,s as Falsewithoutspacing,c as Truewithspacing,u as __namedExportsOrder,o as default};