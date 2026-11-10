import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./infotext-CPn5YJez.js";import{n as r,t as i}from"./table-BHYL4qO4.js";import{n as a,s as o,t as s}from"./data-DTwDjW8k.js";var c,l,u,d,f;function p(){return(p=e((()=>{t(),i(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBTable/Column Count`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},u={args:{"data-testid":`table-20-columns`,captionPlain:`Columns 20`,data:s,showCaption:!0,default:``},render:e=>({components:{DBTable:r,DBInfotext:n},setup(){return{args:e}},template:`<div  :style="{
  inlineSize: '100%',
  display: 'flex',
  flexDirection: 'column'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Columns 20
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},d={args:{"data-testid":`table-21-columns`,captionPlain:`Columns 21`,data:a,showCaption:!0,default:``},render:e=>({components:{DBTable:r,DBInfotext:n},setup(){return{args:e}},template:`<div  :style="{
  inlineSize: '100%',
  display: 'flex',
  flexDirection: 'column',
  '--db-table-columns': '21'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Columns 21
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},f=[`Columns20`,`Columns21`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "table-20-columns",
    "captionPlain": "Columns 20",
    "data": columnCount20Table,
    "showCaption": true,
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBTable,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  inlineSize: '100%',
  display: 'flex',
  flexDirection: 'column'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Columns 20
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "table-21-columns",
    "captionPlain": "Columns 21",
    "data": columnCount21Table,
    "showCaption": true,
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBTable,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  inlineSize: '100%',
  display: 'flex',
  flexDirection: 'column',
  '--db-table-columns': '21'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Columns 21
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...d.parameters?.docs?.source}}}})))()}p();export{u as Columns20,d as Columns21,f as __namedExportsOrder,l as default};