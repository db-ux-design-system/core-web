import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./infotext-D-8GcMCv.js";import{n as r,t as i}from"./icon-CsAdo_Td.js";var a,o,s,c,l,u;function d(){return(d=e((()=>{t(),r(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBIcon/Density`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{icon:{control:`select`,options:`arrow_down.arrow_left.arrow_right.arrow_up.arrow_up_right.brand.calendar.check-circle.check.check_circle.chevron_down.chevron_left.chevron_right.chevron_up.circle.circular_arrows.clock.cross.cross_circle.exclamation_mark_circle.exclamation_mark_triangle.information_circle.magnifying_glass.menu.minus.plus.resize_handle_corner.x_placeholder`.split(`.`)},variant:{control:`text`},weight:{control:`select`,options:[`16`,`20`,`24`,`32`,`48`,`64`]},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{icon:`x_placeholder`,default:`Functional`},render:e=>({components:{DBIcon:i,DBInfotext:n},setup(){return{args:e}},template:`<div data-density="functional"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    Functional
                </DBInfotext><DBIcon v-bind="args"   >${e.default}</DBIcon></div>`})},c={args:{icon:`x_placeholder`,default:`(Default) Regular`},render:e=>({components:{DBIcon:i,DBInfotext:n},setup(){return{args:e}},template:`<div data-density="regular"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    (Default) Regular
                </DBInfotext><DBIcon v-bind="args"   >${e.default}</DBIcon></div>`})},l={args:{icon:`x_placeholder`,default:`Expressive`},render:e=>({components:{DBIcon:i,DBInfotext:n},setup(){return{args:e}},template:`<div data-density="expressive"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    Expressive
                </DBInfotext><DBIcon v-bind="args"   >${e.default}</DBIcon></div>`})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u=[`Functional`,`DefaultRegular`,`Expressive`]})))()}d();export{c as DefaultRegular,l as Expressive,s as Functional,u as __namedExportsOrder,o as default};