import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./paragraph-SelEeFPL.js";import{n as i,t as a}from"./text-group-CBtoOBti.js";var o=t({DefaultUnsetinherited:()=>d,Falsewithoutspacing:()=>l,Truewithspacing:()=>u,__namedExportsOrder:()=>f,default:()=>c}),s,c,l,u,d,f;function p(){return(p=e((()=>{r(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTextGroup/Text spacing`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{alignment:{control:`select`,options:[`start`,`center`,`end`]},textSpacing:{control:`boolean`},className:{control:`text`},id:{control:`text`}}},l={args:{textSpacing:!1,default:`<DBParagraph>
  False: the paragraphs sit directly on top of each other. </DBParagraph
><DBParagraph>
  Nothing has to be set on the paragraphs themselves.
</DBParagraph>`},render:e=>({components:{DBTextGroup:i,DBParagraph:n},setup(){return{args:e}},template:`<DBTextGroup v-bind="args"   >${e.default}</DBTextGroup>`})},u={args:{textSpacing:!0,default:`<DBParagraph>
  True: every child gets half a line height above and below. </DBParagraph
><DBParagraph>
  Two adjacent children are a full line height apart, and the group keeps half
  of one at its outer edges.
</DBParagraph>`},render:e=>({components:{DBTextGroup:i,DBParagraph:n},setup(){return{args:e}},template:`<DBTextGroup v-bind="args"   >${e.default}</DBTextGroup>`})},d={args:{default:`<DBParagraph>
  Unset: this group sets nothing, so it follows the surrounding element that
  opted in. </DBParagraph
><DBParagraph> Use false to switch the spacing off for certain. </DBParagraph>`},render:e=>({components:{DBTextGroup:i,DBParagraph:n},setup(){return{args:e}},template:`<div data-text-spacing="true"   ><DBTextGroup v-bind="args"   >${e.default}</DBTextGroup></div>`})},f=[`Falsewithoutspacing`,`Truewithspacing`,`DefaultUnsetinherited`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}}})))()}export{o as a,p as i,l as n,u as r,d as t};