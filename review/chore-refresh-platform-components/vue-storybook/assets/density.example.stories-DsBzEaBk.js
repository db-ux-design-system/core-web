import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./infotext-yTmgp5DE.js";import{n as i,t as a}from"./navigation-iZT6aK87.js";import{n as o,t as s}from"./navigation-item-C22gusrx.js";var c=t({DefaultRegular:()=>f,Expressive:()=>p,Functional:()=>d,__namedExportsOrder:()=>m,default:()=>u}),l,u,d,f,p,m;function h(){return(h=e((()=>{n(),s(),a(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBNavigation/Density`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},autofocus:{control:`boolean`}}},d={args:{"aria-labelledby":`functional`,default:`<DBNavigationItem text="Navi-Item 1"
  ><template v-slot:sub-navigation
    ><DBNavigationItem text="Sub-Navi-Item 1"
      ><template v-slot:sub-navigation
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
>`},render:e=>({components:{DBNavigation:i,DBInfotext:r,DBNavigationItem:o},setup(){return{args:e}},template:`<div class="fit-content-container" data-density="functional"   ><DBInfotext id="functional" size="small" semantic="informational" icon="none"   >
                    Functional
                </DBInfotext><DBNavigation v-bind="args"   >${e.default}</DBNavigation></div>`})},f={args:{"aria-labelledby":`_default__regular`,default:`<DBNavigationItem text="Navi-Item 1"
  ><template v-slot:sub-navigation
    ><DBNavigationItem text="Sub-Navi-Item 1"
      ><template v-slot:sub-navigation
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
>`},render:e=>({components:{DBNavigation:i,DBInfotext:r,DBNavigationItem:o},setup(){return{args:e}},template:`<div class="fit-content-container" data-density="regular"   ><DBInfotext id="_default__regular" size="small" semantic="informational" icon="none"   >
                    (Default) Regular
                </DBInfotext><DBNavigation v-bind="args"   >${e.default}</DBNavigation></div>`})},p={args:{"aria-labelledby":`expressive`,default:`<DBNavigationItem text="Navi-Item 1"
  ><template v-slot:sub-navigation
    ><DBNavigationItem text="Sub-Navi-Item 1"
      ><template v-slot:sub-navigation
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
>`},render:e=>({components:{DBNavigation:i,DBInfotext:r,DBNavigationItem:o},setup(){return{args:e}},template:`<div class="fit-content-container" data-density="expressive"   ><DBInfotext id="expressive" size="small" semantic="informational" icon="none"   >
                    Expressive
                </DBInfotext><DBNavigation v-bind="args"   >${e.default}</DBNavigation></div>`})},m=[`Functional`,`DefaultRegular`,`Expressive`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-labelledby": "functional",
    "default": \`<DBNavigationItem text="Navi-Item 1"
  ><template v-slot:sub-navigation
    ><DBNavigationItem text="Sub-Navi-Item 1"
      ><template v-slot:sub-navigation
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-labelledby": "_default__regular",
    "default": \`<DBNavigationItem text="Navi-Item 1"
  ><template v-slot:sub-navigation
    ><DBNavigationItem text="Sub-Navi-Item 1"
      ><template v-slot:sub-navigation
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-labelledby": "expressive",
    "default": \`<DBNavigationItem text="Navi-Item 1"
  ><template v-slot:sub-navigation
    ><DBNavigationItem text="Sub-Navi-Item 1"
      ><template v-slot:sub-navigation
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
}`,...p.parameters?.docs?.source}}}})))()}export{h as a,c as i,p as n,u as o,d as r,f as t};