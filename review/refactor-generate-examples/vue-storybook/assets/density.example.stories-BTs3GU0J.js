import{_ as i}from"./navigation-ByeMTWG5.js";import{_ as o}from"./navigation-item-BOW6Wrwe.js";import{_ as m}from"./infotext-tCTmoIyB.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./index-B7howPqP.js";import"./constants-BMPlMwqI.js";import"./floating-components-1F_x7pmN.js";import"./button-BND3SCu0.js";const{fn:B}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBNavigation/Density",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},autofocus:{control:"boolean"}}},t={args:{"data-density":"functional","aria-labelledby":"functional",default:`<DBNavigationItem>
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
>`},render:a=>({components:{DBNavigation:i,DBInfotext:m,DBNavigationItem:o},setup(){return{args:a}},template:`<div class="fit-content-container" data-density="functional"   ><DBInfotext id="functional" size="small" semantic="informational" icon="none"   >
                    Functional
                </DBInfotext><DBNavigation v-bind="args"   >${a.default}</DBNavigation></div>`})},e={args:{"data-density":"regular","aria-labelledby":"_default__regular",default:`<DBNavigationItem>
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
>`},render:a=>({components:{DBNavigation:i,DBInfotext:m,DBNavigationItem:o},setup(){return{args:a}},template:`<div class="fit-content-container" data-density="regular"   ><DBInfotext id="_default__regular" size="small" semantic="informational" icon="none"   >
                    (Default) Regular
                </DBInfotext><DBNavigation v-bind="args"   >${a.default}</DBNavigation></div>`})},n={args:{"data-density":"expressive","aria-labelledby":"expressive",default:`<DBNavigationItem>
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
>`},render:a=>({components:{DBNavigation:i,DBInfotext:m,DBNavigationItem:o},setup(){return{args:a}},template:`<div class="fit-content-container" data-density="expressive"   ><DBInfotext id="expressive" size="small" semantic="informational" icon="none"   >
                    Expressive
                </DBInfotext><DBNavigation v-bind="args"   >${a.default}</DBNavigation></div>`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
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
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
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
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
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
}`,...n.parameters?.docs?.source}}};const c=["Functional","DefaultRegular","Expressive"];export{e as DefaultRegular,n as Expressive,t as Functional,c as __namedExportsOrder,d as default};
