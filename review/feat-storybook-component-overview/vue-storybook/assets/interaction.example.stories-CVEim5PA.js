import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./tooltip-BicPyRyD.js";import{n as i,t as a}from"./button-BPKio8UX.js";var o=t({Interaction:()=>l,__namedExportsOrder:()=>u,default:()=>c}),s,c,l,u;function d(){return(d=e((()=>{i(),r(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTooltip/Interaction`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},showArrow:{control:`boolean`},emphasis:{control:`select`,options:[`weak`,`strong`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},width:{control:`select`,options:[`auto`,`fixed`]},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},variant:{control:`select`,options:[`description`,`label`]},autofocus:{control:`boolean`}}},l={args:{animation:`disabled`,id:`interaction-tooltip`,"data-testid":`tooltip`,default:`Test`},render:e=>({components:{DBTooltip:n,DBButton:a},setup(){return{args:e}},template:`<DBButton aria-describedby="interaction-tooltip" data-testid="button"   >
                Button
                <DBTooltip v-bind="args"   >${e.default}</DBTooltip></DBButton>`})},u=[`Interaction`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}}})))()}export{d as n,o as r,l as t};