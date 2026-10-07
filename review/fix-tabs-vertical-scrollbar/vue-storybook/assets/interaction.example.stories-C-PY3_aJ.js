import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./button-BqXrJCCx.js";import{n as r,t as i}from"./tag-BVM3bRbj.js";var a,o,s,c;function l(){return(l=e((()=>{t(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBTag/Interaction`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onRemove:a()},argTypes:{emphasis:{control:`select`,options:[`weak`,`strong`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},behavior:{control:`select`,options:[`static`,`removable`]},showIcon:{control:`boolean`},noText:{control:`boolean`},content:{control:`text`},showCheckState:{control:`boolean`},overflow:{control:`boolean`},removeButton:{control:`text`},text:{control:`text`},value:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onRemove:{action:`onRemove`}}},s={args:{"data-testid":`button-tag`,default:`<DBButton :onClick="(event) => handleClick()">Test</DBButton>`},render:e=>({components:{DBTag:r,DBButton:n},setup(){return{args:e}},template:`<DBTag v-bind="args"   >${e.default}</DBTag>`})},c=[`Interaction`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "button-tag",
    "default": \`<DBButton :onClick="(event) => handleClick()">Test</DBButton>\`
  },
  render: (args: any) => ({
    components: {
      DBTag,
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBTag v-bind="args"   >\${args.default}</DBTag>\`
  })
}`,...s.parameters?.docs?.source}}}})))()}l();export{s as Interaction,c as __namedExportsOrder,o as default};