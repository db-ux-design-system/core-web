import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./paragraph-Cp1oJJb_.js";import{n as i,t as a}from"./text-group-DPavn6dM.js";var o=t({Center:()=>u,DefaultStart:()=>l,End:()=>d,__namedExportsOrder:()=>f,default:()=>c}),s,c,l,u,d,f;function p(){return(p=e((()=>{r(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTextGroup/Logical alignment`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{alignment:{control:`select`,options:[`start`,`center`,`end`]},textSpacing:{control:`boolean`},className:{control:`text`},id:{control:`text`}}},l={args:{alignment:`start`,textSpacing:!0,default:`<DBParagraph>(Default) Start</DBParagraph
><DBParagraph>Inherited by every paragraph</DBParagraph>`},render:e=>({components:{DBTextGroup:i,DBParagraph:n},setup(){return{args:e}},template:`<DBTextGroup v-bind="args"   >${e.default}</DBTextGroup>`})},u={args:{alignment:`center`,textSpacing:!0,default:`<DBParagraph>Center</DBParagraph
><DBParagraph>Inherited by every paragraph</DBParagraph>`},render:e=>({components:{DBTextGroup:i,DBParagraph:n},setup(){return{args:e}},template:`<DBTextGroup v-bind="args"   >${e.default}</DBTextGroup>`})},d={args:{alignment:`end`,textSpacing:!0,default:`<DBParagraph>End</DBParagraph
><DBParagraph>Inherited by every paragraph</DBParagraph>`},render:e=>({components:{DBTextGroup:i,DBParagraph:n},setup(){return{args:e}},template:`<DBTextGroup v-bind="args"   >${e.default}</DBTextGroup>`})},f=[`DefaultStart`,`Center`,`End`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}}})))()}export{p as a,o as i,l as n,c as o,d as r,u as t};