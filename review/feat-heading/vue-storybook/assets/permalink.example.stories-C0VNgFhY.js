import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./heading-DTC2lvyS.js";var r,i,a,o;function s(){return(s=e((()=>{t(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBHeading/Permalink`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{as:{control:`select`,options:[`h1`,`h2`,`h3`,`h4`,`h5`,`h6`]},size:{control:`select`,options:[`3xl`,`2xl`,`xl`,`lg`,`md`,`sm`,`xs`,`2xs`,`3xs`]},fontWeight:{control:`select`,options:[`black`,`light`]},alignment:{control:`select`,options:[`start`,`center`,`end`]},paragraphSpacing:{control:`boolean`},children:{control:`text`},startSlot:{control:!1},endSlot:{control:!1},className:{control:`text`},id:{control:`text`}}},a={args:{as:`h2`,id:`installation`,class:`heading-permalink`,"aria-label":`Installation`,default:`<span>Installation</span
><template v-slot:end-slot
  ><a
    class="db-link heading-permalink-link"
    href="#installation"
    aria-label="Direct link to Installation"
    ><span aria-hidden="true">#</span></a
  ></template
>`},render:e=>({components:{DBHeading:n},setup(){return{args:e}},template:`<DBHeading v-bind="args"   >${e.default}</DBHeading>`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "as": "h2",
    "id": "installation",
    "class": "heading-permalink",
    "aria-label": "Installation",
    "default": \`<span>Installation</span
><template v-slot:end-slot
  ><a
    class="db-link heading-permalink-link"
    href="#installation"
    aria-label="Direct link to Installation"
    ><span aria-hidden="true">#</span></a
  ></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBHeading
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBHeading v-bind="args"   >\${args.default}</DBHeading>\`
  })
}`,...a.parameters?.docs?.source}}},o=[`Anchorlink`]})))()}s();export{a as Anchorlink,o as __namedExportsOrder,i as default};