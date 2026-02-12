import{_ as o}from"./tooltip-bsw76Umn.js";import{_ as n}from"./button-BND3SCu0.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";import"./document-scroll-listener-sPooixGf.js";import"./floating-components-1F_x7pmN.js";const{fn:y}=__STORYBOOK_MODULE_TEST__,S={title:"Components/DBTooltip/Placement",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},showArrow:{control:"boolean"},emphasis:{control:"select",options:["weak","strong"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end","left","right","left-start","left-end","right-start","right-end"]},width:{control:"select",options:["auto","fixed"]},animation:{control:"boolean"},delay:{control:"select",options:["none","slow","fast"]},variant:{control:"select",options:["description","label"]},autofocus:{control:"boolean"}}},e={args:{placement:"bottom-start",id:"tooltip-08-start",default:"Tooltip"},render:t=>({components:{DBTooltip:o,DBButton:n},setup(){return{args:t}},template:`<DBButton    >
                bottom-start
                <DBTooltip v-bind="args"   >${t.default}</DBTooltip></DBButton>`})},r={args:{placement:"bottom",id:"tooltip-08",default:"Tooltip"},render:t=>({components:{DBTooltip:o,DBButton:n},setup(){return{args:t}},template:`<DBButton    >
                (Default) bottom
                <DBTooltip v-bind="args"   >${t.default}</DBTooltip></DBButton>`})},a={args:{placement:"bottom-end",id:"tooltip-08-end",default:"Tooltip"},render:t=>({components:{DBTooltip:o,DBButton:n},setup(){return{args:t}},template:`<DBButton    >
                bottom-end
                <DBTooltip v-bind="args"   >${t.default}</DBTooltip></DBButton>`})},p={args:{placement:"left-start",id:"tooltip-10-start",default:"Tooltip"},render:t=>({components:{DBTooltip:o,DBButton:n},setup(){return{args:t}},template:`<DBButton    >
                left-start
                <DBTooltip v-bind="args"   >${t.default}</DBTooltip></DBButton>`})},s={args:{placement:"left",id:"tooltip-10",default:"Tooltip"},render:t=>({components:{DBTooltip:o,DBButton:n},setup(){return{args:t}},template:`<DBButton    >
                left
                <DBTooltip v-bind="args"   >${t.default}</DBTooltip></DBButton>`})},l={args:{placement:"left-end",id:"tooltip-10-end",default:"Tooltip"},render:t=>({components:{DBTooltip:o,DBButton:n},setup(){return{args:t}},template:`<DBButton    >
                left-end
                <DBTooltip v-bind="args"   >${t.default}</DBTooltip></DBButton>`})},i={args:{placement:"right-start",id:"tooltip-11-start",default:"Tooltip"},render:t=>({components:{DBTooltip:o,DBButton:n},setup(){return{args:t}},template:`<DBButton    >
                right-start
                <DBTooltip v-bind="args"   >${t.default}</DBTooltip></DBButton>`})},B={args:{placement:"right",id:"tooltip-11",default:"Tooltip"},render:t=>({components:{DBTooltip:o,DBButton:n},setup(){return{args:t}},template:`<DBButton    >
                right
                <DBTooltip v-bind="args"   >${t.default}</DBTooltip></DBButton>`})},u={args:{placement:"right-end",id:"tooltip-11-end",default:"Tooltip"},render:t=>({components:{DBTooltip:o,DBButton:n},setup(){return{args:t}},template:`<DBButton    >
                right-end
                <DBTooltip v-bind="args"   >${t.default}</DBTooltip></DBButton>`})},d={args:{placement:"top-start",id:"tooltip-09-start",default:"Tooltip"},render:t=>({components:{DBTooltip:o,DBButton:n},setup(){return{args:t}},template:`<DBButton    >
                top-start
                <DBTooltip v-bind="args"   >${t.default}</DBTooltip></DBButton>`})},m={args:{placement:"top",id:"tooltip-09",default:"Tooltip"},render:t=>({components:{DBTooltip:o,DBButton:n},setup(){return{args:t}},template:`<DBButton    >
                top
                <DBTooltip v-bind="args"   >${t.default}</DBTooltip></DBButton>`})},c={args:{placement:"top-end",id:"tooltip-09-end",default:"Tooltip"},render:t=>({components:{DBTooltip:o,DBButton:n},setup(){return{args:t}},template:`<DBButton    >
                top-end
                <DBTooltip v-bind="args"   >${t.default}</DBTooltip></DBButton>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "placement": "bottom-start",
    "id": "tooltip-08-start",
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
    template: \`<DBButton    >
                bottom-start
                <DBTooltip v-bind="args"   >\${args.default}</DBTooltip></DBButton>\`
  })
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "placement": "bottom",
    "id": "tooltip-08",
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
    template: \`<DBButton    >
                (Default) bottom
                <DBTooltip v-bind="args"   >\${args.default}</DBTooltip></DBButton>\`
  })
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "placement": "bottom-end",
    "id": "tooltip-08-end",
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
    template: \`<DBButton    >
                bottom-end
                <DBTooltip v-bind="args"   >\${args.default}</DBTooltip></DBButton>\`
  })
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "placement": "left-start",
    "id": "tooltip-10-start",
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
    template: \`<DBButton    >
                left-start
                <DBTooltip v-bind="args"   >\${args.default}</DBTooltip></DBButton>\`
  })
}`,...p.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "placement": "left",
    "id": "tooltip-10",
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
    template: \`<DBButton    >
                left
                <DBTooltip v-bind="args"   >\${args.default}</DBTooltip></DBButton>\`
  })
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "placement": "left-end",
    "id": "tooltip-10-end",
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
    template: \`<DBButton    >
                left-end
                <DBTooltip v-bind="args"   >\${args.default}</DBTooltip></DBButton>\`
  })
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "placement": "right-start",
    "id": "tooltip-11-start",
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
    template: \`<DBButton    >
                right-start
                <DBTooltip v-bind="args"   >\${args.default}</DBTooltip></DBButton>\`
  })
}`,...i.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    "placement": "right",
    "id": "tooltip-11",
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
    template: \`<DBButton    >
                right
                <DBTooltip v-bind="args"   >\${args.default}</DBTooltip></DBButton>\`
  })
}`,...B.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "placement": "right-end",
    "id": "tooltip-11-end",
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
    template: \`<DBButton    >
                right-end
                <DBTooltip v-bind="args"   >\${args.default}</DBTooltip></DBButton>\`
  })
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "placement": "top-start",
    "id": "tooltip-09-start",
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
    template: \`<DBButton    >
                top-start
                <DBTooltip v-bind="args"   >\${args.default}</DBTooltip></DBButton>\`
  })
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "placement": "top",
    "id": "tooltip-09",
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
    template: \`<DBButton    >
                top
                <DBTooltip v-bind="args"   >\${args.default}</DBTooltip></DBButton>\`
  })
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "placement": "top-end",
    "id": "tooltip-09-end",
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
    template: \`<DBButton    >
                top-end
                <DBTooltip v-bind="args"   >\${args.default}</DBTooltip></DBButton>\`
  })
}`,...c.parameters?.docs?.source}}};const _=["bottomstart","Defaultbottom","bottomend","leftstart","left","leftend","rightstart","right","rightend","topstart","top","topend"];export{r as Defaultbottom,_ as __namedExportsOrder,a as bottomend,e as bottomstart,S as default,s as left,l as leftend,p as leftstart,B as right,u as rightend,i as rightstart,m as top,c as topend,d as topstart};
