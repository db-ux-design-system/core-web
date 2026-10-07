import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./button-Bdobi5e2.js";import{n as r,t as i}from"./tooltip-BuNtBWih.js";var a,o,s,c;function l(){return(l=e((()=>{t(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBTooltip/Interaction`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},showArrow:{control:`boolean`},emphasis:{control:`select`,options:[`weak`,`strong`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},width:{control:`select`,options:[`auto`,`fixed`]},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},variant:{control:`select`,options:[`description`,`label`]},autofocus:{control:`boolean`}}},s={args:{animation:`disabled`,id:`interaction-tooltip`,"data-testid":`tooltip`,default:`Test`},render:e=>({components:{DBTooltip:r,DBButton:n},setup(){return{args:e}},template:`<DBButton aria-describedby="interaction-tooltip" data-testid="button"   >
                Button
                <DBTooltip v-bind="args"   >${e.default}</DBTooltip></DBButton>`})},c=[`Interaction`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "animation": "disabled",
    "id": "interaction-tooltip",
    "data-testid": "tooltip",
    "default": \`Test\`
  },
  render: (args: any) => ({
    components: {
      DBTooltip,
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBButton aria-describedby="interaction-tooltip" data-testid="button"   >
                Button
                <DBTooltip v-bind="args"   >\${args.default}</DBTooltip></DBButton>\`
  })
}`,...s.parameters?.docs?.source}}}})))()}l();export{s as Interaction,c as __namedExportsOrder,o as default};