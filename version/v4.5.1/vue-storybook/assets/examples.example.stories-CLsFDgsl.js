import{_ as t}from"./link-Bqw10tu6.js";import"./iframe-BCCTV3qu.js";import"./preload-helper-B6T4qU05.js";import"./index-B2WiKbs4.js";const{fn:s}=__STORYBOOK_MODULE_TEST__,l={title:"Components/DBLink/Examples",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{href:{control:"text"},variant:{control:"select",options:["adaptive","brand","inline"]},disabled:{control:"boolean"},size:{control:"select",options:["medium","small"]},content:{control:"select",options:["external","internal"]},showIcon:{control:"boolean"},wrap:{control:"boolean"},text:{control:"text"},target:{control:"select",options:["_self","_blank","_parent","_top"]},rel:{control:"text"},hreflang:{control:"text"},referrerPolicy:{control:"select",options:["no-referrer","no-referrer-when-downgrade","origin","origin-when-cross-origin","same-origin","strict-origin","strict-origin-when-cross-origin","unsafe-url"]},role:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},n={args:{href:"#",variant:"inline",text:"Variant Inline",default:""},render:e=>({components:{DBLink:t},setup(){return{args:e}},template:`<DBLink v-bind="args"   >${e.default}</DBLink>`})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "href": "#",
    "variant": "inline",
    "text": "Variant Inline",
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBLink v-bind="args"   >\${args.default}</DBLink>\`
  })
}`,...n.parameters?.docs?.source}}};const c=["VariantInline"];export{n as VariantInline,c as __namedExportsOrder,l as default};
