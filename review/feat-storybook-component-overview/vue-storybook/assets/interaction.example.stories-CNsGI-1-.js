import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./button-INvxNlAn.js";import{n as i,t as a}from"./tag-BVRwLtY1.js";var o=t({Interaction:()=>l,__namedExportsOrder:()=>u,default:()=>c}),s,c,l,u;function d(){return(d=e((()=>{n(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTag/Interaction`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onRemove:s()},argTypes:{emphasis:{control:`select`,options:[`weak`,`strong`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},behavior:{control:`select`,options:[`static`,`removable`]},showIcon:{control:`boolean`},noText:{control:`boolean`},content:{control:`text`},showCheckState:{control:`boolean`},overflow:{control:`boolean`},removeButton:{control:`text`},text:{control:`text`},value:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onRemove:{action:`onRemove`}}},l={args:{"data-testid":`button-tag`,default:`<DBButton :onClick="(event) => handleClick()">Test</DBButton>`},render:e=>({components:{DBTag:i,DBButton:r},setup(){return{args:e}},template:`<DBTag v-bind="args"   >${e.default}</DBTag>`})},u=[`Interaction`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}}})))()}export{d as n,o as r,l as t};