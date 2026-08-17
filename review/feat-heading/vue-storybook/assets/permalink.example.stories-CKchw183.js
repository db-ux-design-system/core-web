import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,n,r,t as i}from"./heading-h2-BVORWoQq.js";var a,o,s,c,l;function u(){return(u=e((()=>{t(),n(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBHeadingH2/Permalink`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`3xl`,`2xl`,`xl`,`lg`,`md`,`sm`,`xs`,`2xs`,`3xs`]},fontWeight:{control:`select`,options:[`black`,`light`]},alignment:{control:`select`,options:[`start`,`center`,`end`]},paragraphSpacing:{control:`boolean`},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},s={args:{id:`installation`,class:`heading-permalink`,"aria-label":`Installation`,default:`<span>Installation</span
><a
  class="db-link heading-permalink-link"
  href="#installation"
  aria-label="Direct link to Installation"
  ><span aria-hidden="true">#</span></a
>`},render:e=>({components:{DBHeadingH2:i,DBCustomHeading:r},setup(){return{args:e}},template:`<DBHeadingH2 v-bind="args"   >${e.default}</DBHeadingH2>`})},c={args:{id:`custom-installation`,class:`heading-permalink`,"aria-label":`Custom installation`,semanticLevel:2,default:`<div
  :style="{
  display: 'inline'
}"
  >Custom installation</div
><a
  class="db-link heading-permalink-link"
  href="#custom-installation"
  aria-label="Direct link to Custom installation"
  ><span aria-hidden="true">#</span></a
>`},render:e=>({components:{DBHeadingH2:i,DBCustomHeading:r},setup(){return{args:e}},template:`<DBCustomHeading v-bind="args"   >${e.default}</DBCustomHeading>`})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "installation",
    "class": "heading-permalink",
    "aria-label": "Installation",
    "default": \`<span>Installation</span
><a
  class="db-link heading-permalink-link"
  href="#installation"
  aria-label="Direct link to Installation"
  ><span aria-hidden="true">#</span></a
>\`
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
    "id": "custom-installation",
    "class": "heading-permalink",
    "aria-label": "Custom installation",
    "semanticLevel": 2,
    "default": \`<div
  :style="{
  display: 'inline'
}"
  >Custom installation</div
><a
  class="db-link heading-permalink-link"
  href="#custom-installation"
  aria-label="Direct link to Custom installation"
  ><span aria-hidden="true">#</span></a
>\`
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
}`,...c.parameters?.docs?.source}}},l=[`Nativeanchorlink`,`Customanchorlink`]})))()}u();export{c as Customanchorlink,s as Nativeanchorlink,l as __namedExportsOrder,o as default};