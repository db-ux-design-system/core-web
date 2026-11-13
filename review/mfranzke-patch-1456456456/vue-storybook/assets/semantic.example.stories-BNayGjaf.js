import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./badge-CmTEyn9a.js";var i=t({AdaptiveStrong:()=>p,Critical:()=>c,CriticalStrong:()=>m,DefaultAdaptive:()=>s,Informational:()=>l,InformationalStrong:()=>h,Neutral:()=>u,NeutralStrong:()=>g,Successful:()=>d,SuccessfulStrong:()=>_,Warning:()=>f,WarningStrong:()=>v,__namedExportsOrder:()=>y,default:()=>o}),a,o,s,c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{n(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBBadge/Semantic`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{emphasis:{control:`select`,options:[`weak`,`strong`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},size:{control:`select`,options:[`small`,`medium`]},placement:{control:`select`,options:[`inline`,`corner-top-left`,`corner-top-right`,`corner-center-left`,`corner-center-right`,`corner-bottom-left`,`corner-bottom-right`]},label:{control:`text`},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{default:`(Default) Adaptive`},render:e=>({components:{DBBadge:r},setup(){return{args:e}},template:`<DBBadge v-bind="args"   >${e.default}</DBBadge>`})},c={args:{semantic:`critical`,default:`Critical`},render:e=>({components:{DBBadge:r},setup(){return{args:e}},template:`<DBBadge v-bind="args"   >${e.default}</DBBadge>`})},l={args:{semantic:`informational`,default:`Informational`},render:e=>({components:{DBBadge:r},setup(){return{args:e}},template:`<DBBadge v-bind="args"   >${e.default}</DBBadge>`})},u={args:{semantic:`neutral`,default:`Neutral`},render:e=>({components:{DBBadge:r},setup(){return{args:e}},template:`<DBBadge v-bind="args"   >${e.default}</DBBadge>`})},d={args:{semantic:`successful`,default:`Successful`},render:e=>({components:{DBBadge:r},setup(){return{args:e}},template:`<DBBadge v-bind="args"   >${e.default}</DBBadge>`})},f={args:{semantic:`warning`,default:`Warning`},render:e=>({components:{DBBadge:r},setup(){return{args:e}},template:`<DBBadge v-bind="args"   >${e.default}</DBBadge>`})},p={args:{emphasis:`strong`,default:`Adaptive Strong`},render:e=>({components:{DBBadge:r},setup(){return{args:e}},template:`<DBBadge v-bind="args"   >${e.default}</DBBadge>`})},m={args:{semantic:`critical`,emphasis:`strong`,default:`Critical Strong`},render:e=>({components:{DBBadge:r},setup(){return{args:e}},template:`<DBBadge v-bind="args"   >${e.default}</DBBadge>`})},h={args:{semantic:`informational`,emphasis:`strong`,default:`Informational Strong`},render:e=>({components:{DBBadge:r},setup(){return{args:e}},template:`<DBBadge v-bind="args"   >${e.default}</DBBadge>`})},g={args:{semantic:`neutral`,emphasis:`strong`,default:`Neutral Strong`},render:e=>({components:{DBBadge:r},setup(){return{args:e}},template:`<DBBadge v-bind="args"   >${e.default}</DBBadge>`})},_={args:{semantic:`successful`,emphasis:`strong`,default:`Successful Strong`},render:e=>({components:{DBBadge:r},setup(){return{args:e}},template:`<DBBadge v-bind="args"   >${e.default}</DBBadge>`})},v={args:{semantic:`warning`,emphasis:`strong`,default:`Warning Strong`},render:e=>({components:{DBBadge:r},setup(){return{args:e}},template:`<DBBadge v-bind="args"   >${e.default}</DBBadge>`})},y=[`DefaultAdaptive`,`Critical`,`Informational`,`Neutral`,`Successful`,`Warning`,`AdaptiveStrong`,`CriticalStrong`,`InformationalStrong`,`NeutralStrong`,`SuccessfulStrong`,`WarningStrong`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`(Default) Adaptive\`
  },
  render: (args: any) => ({
    components: {
      DBBadge
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBBadge v-bind="args"   >\${args.default}</DBBadge>\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "critical",
    "default": \`Critical\`
  },
  render: (args: any) => ({
    components: {
      DBBadge
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBBadge v-bind="args"   >\${args.default}</DBBadge>\`
  })
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "informational",
    "default": \`Informational\`
  },
  render: (args: any) => ({
    components: {
      DBBadge
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBBadge v-bind="args"   >\${args.default}</DBBadge>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "neutral",
    "default": \`Neutral\`
  },
  render: (args: any) => ({
    components: {
      DBBadge
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBBadge v-bind="args"   >\${args.default}</DBBadge>\`
  })
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "successful",
    "default": \`Successful\`
  },
  render: (args: any) => ({
    components: {
      DBBadge
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBBadge v-bind="args"   >\${args.default}</DBBadge>\`
  })
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "warning",
    "default": \`Warning\`
  },
  render: (args: any) => ({
    components: {
      DBBadge
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBBadge v-bind="args"   >\${args.default}</DBBadge>\`
  })
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "emphasis": "strong",
    "default": \`Adaptive Strong\`
  },
  render: (args: any) => ({
    components: {
      DBBadge
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBBadge v-bind="args"   >\${args.default}</DBBadge>\`
  })
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "critical",
    "emphasis": "strong",
    "default": \`Critical Strong\`
  },
  render: (args: any) => ({
    components: {
      DBBadge
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBBadge v-bind="args"   >\${args.default}</DBBadge>\`
  })
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "informational",
    "emphasis": "strong",
    "default": \`Informational Strong\`
  },
  render: (args: any) => ({
    components: {
      DBBadge
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBBadge v-bind="args"   >\${args.default}</DBBadge>\`
  })
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "neutral",
    "emphasis": "strong",
    "default": \`Neutral Strong\`
  },
  render: (args: any) => ({
    components: {
      DBBadge
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBBadge v-bind="args"   >\${args.default}</DBBadge>\`
  })
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "successful",
    "emphasis": "strong",
    "default": \`Successful Strong\`
  },
  render: (args: any) => ({
    components: {
      DBBadge
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBBadge v-bind="args"   >\${args.default}</DBBadge>\`
  })
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "warning",
    "emphasis": "strong",
    "default": \`Warning Strong\`
  },
  render: (args: any) => ({
    components: {
      DBBadge
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBBadge v-bind="args"   >\${args.default}</DBBadge>\`
  })
}`,...v.parameters?.docs?.source}}}})))()}export{l as a,g as c,f as d,v as f,s as i,d as l,i as m,c as n,h as o,b as p,m as r,u as s,p as t,_ as u};