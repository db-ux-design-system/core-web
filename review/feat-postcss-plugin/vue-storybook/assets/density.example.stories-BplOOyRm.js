import{n as e}from"./chunk-BneVvdWh.js";import{D as t,h as n,m as r,t as i}from"./src-BQlAOnTN.js";var a,o,s,c,l,u;e((()=>{i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBNavigation/Density`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{"aria-labelledby":`functional`,default:`<DBNavigationItem>
  Navi-Item 1
  <template v-slot:sub-navigation
    ><DBNavigationItem>
      Sub-Navi-Item 1
      <template v-slot:sub-navigation
        ><DBNavigationItem
          ><a href="#" aria-current="page">
            Sub-Sub-Navi-Item 1
          </a></DBNavigationItem
        >
        <DBNavigationItem
          ><a href="#"> Sub-Sub-Navi-Item 2 </a></DBNavigationItem
        ></template
      ></DBNavigationItem
    >
    <DBNavigationItem
      ><a href="#">Sub-Navi-Item 2</a></DBNavigationItem
    ></template
  ></DBNavigationItem
><DBNavigationItem icon="x_placeholder"
  ><a href="#">Navi-Item 2</a></DBNavigationItem
><DBNavigationItem :disabled="true"
  ><a href="#">Navi-Item 3</a></DBNavigationItem
>`},render:e=>({components:{DBNavigation:n,DBInfotext:t,DBNavigationItem:r},setup(){return{args:e}},template:`<div class="fit-content-container" data-density="functional"   ><DBInfotext id="functional" size="small" semantic="informational" icon="none"   >
                    Functional
                </DBInfotext><DBNavigation v-bind="args"   >${e.default}</DBNavigation></div>`})},c={args:{"aria-labelledby":`_default__regular`,default:`<DBNavigationItem>
  Navi-Item 1
  <template v-slot:sub-navigation
    ><DBNavigationItem>
      Sub-Navi-Item 1
      <template v-slot:sub-navigation
        ><DBNavigationItem
          ><a href="#" aria-current="page">
            Sub-Sub-Navi-Item 1
          </a></DBNavigationItem
        >
        <DBNavigationItem
          ><a href="#"> Sub-Sub-Navi-Item 2 </a></DBNavigationItem
        ></template
      ></DBNavigationItem
    >
    <DBNavigationItem
      ><a href="#">Sub-Navi-Item 2</a></DBNavigationItem
    ></template
  ></DBNavigationItem
><DBNavigationItem icon="x_placeholder"
  ><a href="#">Navi-Item 2</a></DBNavigationItem
><DBNavigationItem :disabled="true"
  ><a href="#">Navi-Item 3</a></DBNavigationItem
>`},render:e=>({components:{DBNavigation:n,DBInfotext:t,DBNavigationItem:r},setup(){return{args:e}},template:`<div class="fit-content-container" data-density="regular"   ><DBInfotext id="_default__regular" size="small" semantic="informational" icon="none"   >
                    (Default) Regular
                </DBInfotext><DBNavigation v-bind="args"   >${e.default}</DBNavigation></div>`})},l={args:{"aria-labelledby":`expressive`,default:`<DBNavigationItem>
  Navi-Item 1
  <template v-slot:sub-navigation
    ><DBNavigationItem>
      Sub-Navi-Item 1
      <template v-slot:sub-navigation
        ><DBNavigationItem
          ><a href="#" aria-current="page">
            Sub-Sub-Navi-Item 1
          </a></DBNavigationItem
        >
        <DBNavigationItem
          ><a href="#"> Sub-Sub-Navi-Item 2 </a></DBNavigationItem
        ></template
      ></DBNavigationItem
    >
    <DBNavigationItem
      ><a href="#">Sub-Navi-Item 2</a></DBNavigationItem
    ></template
  ></DBNavigationItem
><DBNavigationItem icon="x_placeholder"
  ><a href="#">Navi-Item 2</a></DBNavigationItem
><DBNavigationItem :disabled="true"
  ><a href="#">Navi-Item 3</a></DBNavigationItem
>`},render:e=>({components:{DBNavigation:n,DBInfotext:t,DBNavigationItem:r},setup(){return{args:e}},template:`<div class="fit-content-container" data-density="expressive"   ><DBInfotext id="expressive" size="small" semantic="informational" icon="none"   >
                    Expressive
                </DBInfotext><DBNavigation v-bind="args"   >${e.default}</DBNavigation></div>`})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-labelledby": "functional",
    "default": \`<DBNavigationItem>
  Navi-Item 1
  <template v-slot:sub-navigation
    ><DBNavigationItem>
      Sub-Navi-Item 1
      <template v-slot:sub-navigation
        ><DBNavigationItem
          ><a href="#" aria-current="page">
            Sub-Sub-Navi-Item 1
          </a></DBNavigationItem
        >
        <DBNavigationItem
          ><a href="#"> Sub-Sub-Navi-Item 2 </a></DBNavigationItem
        ></template
      ></DBNavigationItem
    >
    <DBNavigationItem
      ><a href="#">Sub-Navi-Item 2</a></DBNavigationItem
    ></template
  ></DBNavigationItem
><DBNavigationItem icon="x_placeholder"
  ><a href="#">Navi-Item 2</a></DBNavigationItem
><DBNavigationItem :disabled="true"
  ><a href="#">Navi-Item 3</a></DBNavigationItem
>\`
  },
  render: (args: any) => ({
    components: {
      DBNavigation,
      DBInfotext,
      DBNavigationItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div class="fit-content-container" data-density="functional"   ><DBInfotext id="functional" size="small" semantic="informational" icon="none"   >
                    Functional
                </DBInfotext><DBNavigation v-bind="args"   >\${args.default}</DBNavigation></div>\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-labelledby": "_default__regular",
    "default": \`<DBNavigationItem>
  Navi-Item 1
  <template v-slot:sub-navigation
    ><DBNavigationItem>
      Sub-Navi-Item 1
      <template v-slot:sub-navigation
        ><DBNavigationItem
          ><a href="#" aria-current="page">
            Sub-Sub-Navi-Item 1
          </a></DBNavigationItem
        >
        <DBNavigationItem
          ><a href="#"> Sub-Sub-Navi-Item 2 </a></DBNavigationItem
        ></template
      ></DBNavigationItem
    >
    <DBNavigationItem
      ><a href="#">Sub-Navi-Item 2</a></DBNavigationItem
    ></template
  ></DBNavigationItem
><DBNavigationItem icon="x_placeholder"
  ><a href="#">Navi-Item 2</a></DBNavigationItem
><DBNavigationItem :disabled="true"
  ><a href="#">Navi-Item 3</a></DBNavigationItem
>\`
  },
  render: (args: any) => ({
    components: {
      DBNavigation,
      DBInfotext,
      DBNavigationItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div class="fit-content-container" data-density="regular"   ><DBInfotext id="_default__regular" size="small" semantic="informational" icon="none"   >
                    (Default) Regular
                </DBInfotext><DBNavigation v-bind="args"   >\${args.default}</DBNavigation></div>\`
  })
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-labelledby": "expressive",
    "default": \`<DBNavigationItem>
  Navi-Item 1
  <template v-slot:sub-navigation
    ><DBNavigationItem>
      Sub-Navi-Item 1
      <template v-slot:sub-navigation
        ><DBNavigationItem
          ><a href="#" aria-current="page">
            Sub-Sub-Navi-Item 1
          </a></DBNavigationItem
        >
        <DBNavigationItem
          ><a href="#"> Sub-Sub-Navi-Item 2 </a></DBNavigationItem
        ></template
      ></DBNavigationItem
    >
    <DBNavigationItem
      ><a href="#">Sub-Navi-Item 2</a></DBNavigationItem
    ></template
  ></DBNavigationItem
><DBNavigationItem icon="x_placeholder"
  ><a href="#">Navi-Item 2</a></DBNavigationItem
><DBNavigationItem :disabled="true"
  ><a href="#">Navi-Item 3</a></DBNavigationItem
>\`
  },
  render: (args: any) => ({
    components: {
      DBNavigation,
      DBInfotext,
      DBNavigationItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div class="fit-content-container" data-density="expressive"   ><DBInfotext id="expressive" size="small" semantic="informational" icon="none"   >
                    Expressive
                </DBInfotext><DBNavigation v-bind="args"   >\${args.default}</DBNavigation></div>\`
  })
}`,...l.parameters?.docs?.source}}},u=[`Functional`,`DefaultRegular`,`Expressive`]}))();export{c as DefaultRegular,l as Expressive,s as Functional,u as __namedExportsOrder,o as default};