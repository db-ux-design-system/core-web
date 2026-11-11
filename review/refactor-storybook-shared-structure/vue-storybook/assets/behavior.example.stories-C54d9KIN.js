import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./tag-DVL9WQuq.js";var i=t({DefaultStatic:()=>s,InteractiveButton:()=>l,InteractiveCheckbox:()=>d,InteractiveLink:()=>u,InteractiveRadio:()=>f,InteractiveRadio2:()=>p,Removable:()=>c,__namedExportsOrder:()=>m,default:()=>o}),a,o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{r(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBTag/Behavior`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],args:{onRemove:a()},argTypes:{emphasis:{control:`select`,options:[`weak`,`strong`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},behavior:{control:`select`,options:[`static`,`removable`]},showIcon:{control:`boolean`},noText:{control:`boolean`},content:{control:`text`},showCheckState:{control:`boolean`},overflow:{control:`boolean`},removeButton:{control:`text`},text:{control:`text`},value:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onRemove:{action:`onRemove`}}},s={args:{default:`(Default) Static`},render:e=>({components:{DBTag:n},setup(){return{args:e}},template:`<DBTag v-bind="args"   >${e.default}</DBTag>`})},c={args:{behavior:`removable`,default:`Removable`},render:e=>({components:{DBTag:n},setup(){return{args:e}},template:`<DBTag v-bind="args"   >${e.default}</DBTag>`})},l={args:{default:`<button>Interactive (Button)</button>`},render:e=>({components:{DBTag:n},setup(){return{args:e}},template:`<DBTag v-bind="args"   >${e.default}</DBTag>`})},u={args:{default:`<a href="#">Interactive (Link)</a>`},render:e=>({components:{DBTag:n},setup(){return{args:e}},template:`<DBTag v-bind="args"   >${e.default}</DBTag>`})},d={args:{default:`<label
  ><input type="checkbox" />
  Interactive (Checkbox)
</label>`},render:e=>({components:{DBTag:n},setup(){return{args:e}},template:`<DBTag v-bind="args"   >${e.default}</DBTag>`})},f={args:{default:`<label
  ><input type="radio" name="radio01" />
  Interactive (Radio)
</label>`},render:e=>({components:{DBTag:n},setup(){return{args:e}},template:`<DBTag v-bind="args"   >${e.default}</DBTag>`})},p={args:{default:`<label
  ><input type="radio" name="radio01" />
  Interactive Radio 2
</label>`},render:e=>({components:{DBTag:n},setup(){return{args:e}},template:`<DBTag v-bind="args"   >${e.default}</DBTag>`})},m=[`DefaultStatic`,`Removable`,`InteractiveButton`,`InteractiveLink`,`InteractiveCheckbox`,`InteractiveRadio`,`InteractiveRadio2`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`(Default) Static\`
  },
  render: (args: any) => ({
    components: {
      DBTag
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBTag v-bind="args"   >\${args.default}</DBTag>\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "behavior": "removable",
    "default": \`Removable\`
  },
  render: (args: any) => ({
    components: {
      DBTag
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBTag v-bind="args"   >\${args.default}</DBTag>\`
  })
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<button>Interactive (Button)</button>\`
  },
  render: (args: any) => ({
    components: {
      DBTag
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBTag v-bind="args"   >\${args.default}</DBTag>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<a href="#">Interactive (Link)</a>\`
  },
  render: (args: any) => ({
    components: {
      DBTag
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBTag v-bind="args"   >\${args.default}</DBTag>\`
  })
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<label
  ><input type="checkbox" />
  Interactive (Checkbox)
</label>\`
  },
  render: (args: any) => ({
    components: {
      DBTag
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBTag v-bind="args"   >\${args.default}</DBTag>\`
  })
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<label
  ><input type="radio" name="radio01" />
  Interactive (Radio)
</label>\`
  },
  render: (args: any) => ({
    components: {
      DBTag
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBTag v-bind="args"   >\${args.default}</DBTag>\`
  })
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<label
  ><input type="radio" name="radio01" />
  Interactive Radio 2
</label>\`
  },
  render: (args: any) => ({
    components: {
      DBTag
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBTag v-bind="args"   >\${args.default}</DBTag>\`
  })
}`,...p.parameters?.docs?.source}}}})))()}export{f as a,i as c,u as i,h as l,l as n,p as o,d as r,c as s,s as t,o as u};