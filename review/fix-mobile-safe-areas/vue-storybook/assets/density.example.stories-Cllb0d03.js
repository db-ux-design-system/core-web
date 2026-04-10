import{n as e}from"./chunk-BneVvdWh.js";import{D as t,_ as n,t as r}from"./src-CHVqXqQZ.js";var i,a,o,s,c,l;e((()=>{r(),{fn:i}=__STORYBOOK_MODULE_TEST__,a={title:`Components/DBIcon/Density`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{icon:{control:`select`,options:`arrow_down.arrow_left.arrow_right.arrow_up.arrow_up_right.brand.calendar.check-circle.check.check_circle.chevron_down.chevron_left.chevron_right.chevron_up.circle.circular_arrows.clock.cross.cross_circle.exclamation_mark_circle.exclamation_mark_triangle.information_circle.magnifying_glass.menu.minus.plus.resize_handle_corner.x_placeholder`.split(`.`)},variant:{control:`text`},weight:{control:`select`,options:[`16`,`20`,`24`,`32`,`48`,`64`]},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},o={args:{icon:`x_placeholder`,default:`Functional`},render:e=>({components:{DBIcon:n,DBInfotext:t},setup(){return{args:e}},template:`<div data-density="functional"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    Functional
                </DBInfotext><DBIcon v-bind="args"   >${e.default}</DBIcon></div>`})},s={args:{icon:`x_placeholder`,default:`(Default) Regular`},render:e=>({components:{DBIcon:n,DBInfotext:t},setup(){return{args:e}},template:`<div data-density="regular"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    (Default) Regular
                </DBInfotext><DBIcon v-bind="args"   >${e.default}</DBIcon></div>`})},c={args:{icon:`x_placeholder`,default:`Expressive`},render:e=>({components:{DBIcon:n,DBInfotext:t},setup(){return{args:e}},template:`<div data-density="expressive"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    Expressive
                </DBInfotext><DBIcon v-bind="args"   >${e.default}</DBIcon></div>`})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "default": \`Functional\`
  },
  render: (args: any) => ({
    components: {
      DBIcon,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div data-density="functional"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    Functional
                </DBInfotext><DBIcon v-bind="args"   >\${args.default}</DBIcon></div>\`
  })
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "default": \`(Default) Regular\`
  },
  render: (args: any) => ({
    components: {
      DBIcon,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div data-density="regular"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    (Default) Regular
                </DBInfotext><DBIcon v-bind="args"   >\${args.default}</DBIcon></div>\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "default": \`Expressive\`
  },
  render: (args: any) => ({
    components: {
      DBIcon,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div data-density="expressive"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    Expressive
                </DBInfotext><DBIcon v-bind="args"   >\${args.default}</DBIcon></div>\`
  })
}`,...c.parameters?.docs?.source}}},l=[`Functional`,`DefaultRegular`,`Expressive`]}))();export{s as DefaultRegular,c as Expressive,o as Functional,l as __namedExportsOrder,a as default};