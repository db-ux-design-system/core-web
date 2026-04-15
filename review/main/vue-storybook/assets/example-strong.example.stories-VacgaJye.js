import{n as e}from"./chunk-BneVvdWh.js";import{S as t,t as n}from"./src-D8ePn3Ki.js";var r,i,a,o,s,c,l,u;e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBTag/Example Strong`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],args:{onRemove:r()},argTypes:{emphasis:{control:`select`,options:[`weak`,`strong`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},behavior:{control:`select`,options:[`static`,`removable`]},showIcon:{control:`boolean`},noText:{control:`boolean`},content:{control:`text`},showCheckState:{control:`boolean`},overflow:{control:`boolean`},removeButton:{control:`text`},text:{control:`text`},value:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onRemove:{action:`onRemove`}}},a={args:{emphasis:`strong`,icon:`x_placeholder`,behavior:`removable`,default:`<button>Interactive Strong Button with Icon</button>`},render:e=>({components:{DBTag:t},setup(){return{args:e}},template:`<DBTag v-bind="args"   >${e.default}</DBTag>`})},o={args:{emphasis:`strong`,icon:`x_placeholder`,default:`<a href="#">Interactive Strong Link with Icon</a>`},render:e=>({components:{DBTag:t},setup(){return{args:e}},template:`<DBTag v-bind="args"   >${e.default}</DBTag>`})},s={args:{emphasis:`strong`,icon:`x_placeholder`,default:`<label
  ><input type="checkbox" />
  Interactive Strong Checkbox with Icon
</label>`},render:e=>({components:{DBTag:t},setup(){return{args:e}},template:`<DBTag v-bind="args"   >${e.default}</DBTag>`})},c={args:{emphasis:`strong`,icon:`x_placeholder`,default:`<label
  ><input type="radio" name="radio03" />
  Interactive Strong Radio 1 with Icon
</label>`},render:e=>({components:{DBTag:t},setup(){return{args:e}},template:`<DBTag v-bind="args"   >${e.default}</DBTag>`})},l={args:{emphasis:`strong`,icon:`x_placeholder`,default:`<label
  ><input type="radio" name="radio03" />
  Interactive Strong Radio 2 with Icon
</label>`},render:e=>({components:{DBTag:t},setup(){return{args:e}},template:`<DBTag v-bind="args"   >${e.default}</DBTag>`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "emphasis": "strong",
    "icon": "x_placeholder",
    "behavior": "removable",
    "default": \`<button>Interactive Strong Button with Icon</button>\`
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
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "emphasis": "strong",
    "icon": "x_placeholder",
    "default": \`<a href="#">Interactive Strong Link with Icon</a>\`
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "emphasis": "strong",
    "icon": "x_placeholder",
    "default": \`<label
  ><input type="checkbox" />
  Interactive Strong Checkbox with Icon
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "emphasis": "strong",
    "icon": "x_placeholder",
    "default": \`<label
  ><input type="radio" name="radio03" />
  Interactive Strong Radio 1 with Icon
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "emphasis": "strong",
    "icon": "x_placeholder",
    "default": \`<label
  ><input type="radio" name="radio03" />
  Interactive Strong Radio 2 with Icon
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
}`,...l.parameters?.docs?.source}}},u=[`InteractiveStrongButtonwithIcon`,`InteractiveStrongLinkwithIcon`,`InteractiveStrongCheckboxwithIcon`,`InteractiveStrongRadio1withIcon`,`InteractiveStrongRadio2withIcon`]}))();export{a as InteractiveStrongButtonwithIcon,s as InteractiveStrongCheckboxwithIcon,o as InteractiveStrongLinkwithIcon,c as InteractiveStrongRadio1withIcon,l as InteractiveStrongRadio2withIcon,u as __namedExportsOrder,i as default};