import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./tooltip-DYDjHk7Y.js";import{n as i,t as a}from"./button-QxDoPcgB.js";var o=t({DefaultRegular:()=>u,Expressive:()=>d,Functional:()=>l,__namedExportsOrder:()=>f,default:()=>c}),s,c,l,u,d,f;function p(){return(p=e((()=>{i(),r(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTooltip/Density`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},showArrow:{control:`boolean`},emphasis:{control:`select`,options:[`weak`,`strong`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},width:{control:`select`,options:[`auto`,`fixed`]},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},variant:{control:`select`,options:[`description`,`label`]},autofocus:{control:`boolean`}}},l={args:{id:`tooltip-01`,default:`Tooltip`},render:e=>({components:{DBTooltip:n,DBButton:a},setup(){return{args:e}},template:`<DBButton data-density="functional"   >
                Functional
                <DBTooltip v-bind="args"   >${e.default}</DBTooltip></DBButton>`})},u={args:{id:`tooltip-02`,default:`Tooltip`},render:e=>({components:{DBTooltip:n,DBButton:a},setup(){return{args:e}},template:`<DBButton data-density="regular"   >
                (Default) Regular
                <DBTooltip v-bind="args"   >${e.default}</DBTooltip></DBButton>`})},d={args:{id:`tooltip-03`,default:`Tooltip`},render:e=>({components:{DBTooltip:n,DBButton:a},setup(){return{args:e}},template:`<DBButton data-density="expressive"   >
                Expressive
                <DBTooltip v-bind="args"   >${e.default}</DBTooltip></DBButton>`})},f=[`Functional`,`DefaultRegular`,`Expressive`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-01",
    "default": \`Tooltip\`
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
    template: \`<DBButton data-density="functional"   >
                Functional
                <DBTooltip v-bind="args"   >\${args.default}</DBTooltip></DBButton>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-02",
    "default": \`Tooltip\`
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
    template: \`<DBButton data-density="regular"   >
                (Default) Regular
                <DBTooltip v-bind="args"   >\${args.default}</DBTooltip></DBButton>\`
  })
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-03",
    "default": \`Tooltip\`
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
    template: \`<DBButton data-density="expressive"   >
                Expressive
                <DBTooltip v-bind="args"   >\${args.default}</DBTooltip></DBButton>\`
  })
}`,...d.parameters?.docs?.source}}}})))()}export{p as a,o as i,d as n,l as r,u as t};