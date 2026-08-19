import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./custom-heading-TmitOpXZ.js";import{n as r,t as i}from"./heading-h2-dwOhtbeZ.js";var a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{t(),r(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBHeadingH2/Logical alignment`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`3xl`,`2xl`,`xl`,`lg`,`md`,`sm`,`xs`,`2xs`,`3xs`]},fontWeight:{control:`select`,options:[`black`,`light`]},alignment:{control:`select`,options:[`start`,`center`,`end`]},paragraphSpacing:{control:`boolean`},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},s={args:{alignment:`start`,default:`(Default) Start`},render:e=>({components:{DBHeadingH2:i,DBCustomHeading:n},setup(){return{args:e}},template:`<DBHeadingH2 v-bind="args"   >${e.default}</DBHeadingH2>`})},c={args:{alignment:`center`,default:`Center`},render:e=>({components:{DBHeadingH2:i,DBCustomHeading:n},setup(){return{args:e}},template:`<DBHeadingH2 v-bind="args"   >${e.default}</DBHeadingH2>`})},l={args:{alignment:`end`,default:`End`},render:e=>({components:{DBHeadingH2:i,DBCustomHeading:n},setup(){return{args:e}},template:`<DBHeadingH2 v-bind="args"   >${e.default}</DBHeadingH2>`})},u={args:{alignment:`start`,default:`<h2>Row: (Default) Start</h2>`},render:e=>({components:{DBHeadingH2:i,DBCustomHeading:n},setup(){return{args:e}},template:`<DBCustomHeading v-bind="args"   >${e.default}</DBCustomHeading>`})},d={args:{alignment:`center`,default:`<h2>Row: Center</h2>`},render:e=>({components:{DBHeadingH2:i,DBCustomHeading:n},setup(){return{args:e}},template:`<DBCustomHeading v-bind="args"   >${e.default}</DBCustomHeading>`})},f={args:{alignment:`end`,default:`<h2>Row: End</h2>`},render:e=>({components:{DBHeadingH2:i,DBCustomHeading:n},setup(){return{args:e}},template:`<DBCustomHeading v-bind="args"   >${e.default}</DBCustomHeading>`})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "alignment": "start",
    "default": \`(Default) Start\`
  },
  render: (args: any) => ({
    components: {
      DBHeadingH2,
      DBCustomHeading
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBHeadingH2 v-bind="args"   >\${args.default}</DBHeadingH2>\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "alignment": "center",
    "default": \`Center\`
  },
  render: (args: any) => ({
    components: {
      DBHeadingH2,
      DBCustomHeading
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBHeadingH2 v-bind="args"   >\${args.default}</DBHeadingH2>\`
  })
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "alignment": "end",
    "default": \`End\`
  },
  render: (args: any) => ({
    components: {
      DBHeadingH2,
      DBCustomHeading
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBHeadingH2 v-bind="args"   >\${args.default}</DBHeadingH2>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "alignment": "start",
    "default": \`<h2>Row: (Default) Start</h2>\`
  },
  render: (args: any) => ({
    components: {
      DBHeadingH2,
      DBCustomHeading
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBCustomHeading v-bind="args"   >\${args.default}</DBCustomHeading>\`
  })
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "alignment": "center",
    "default": \`<h2>Row: Center</h2>\`
  },
  render: (args: any) => ({
    components: {
      DBHeadingH2,
      DBCustomHeading
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBCustomHeading v-bind="args"   >\${args.default}</DBCustomHeading>\`
  })
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "alignment": "end",
    "default": \`<h2>Row: End</h2>\`
  },
  render: (args: any) => ({
    components: {
      DBHeadingH2,
      DBCustomHeading
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBCustomHeading v-bind="args"   >\${args.default}</DBCustomHeading>\`
  })
}`,...f.parameters?.docs?.source}}},p=[`DefaultStart`,`Center`,`End`,`RowDefaultStart`,`RowCenter`,`RowEnd`]})))()}m();export{c as Center,s as DefaultStart,l as End,d as RowCenter,u as RowDefaultStart,f as RowEnd,p as __namedExportsOrder,o as default};