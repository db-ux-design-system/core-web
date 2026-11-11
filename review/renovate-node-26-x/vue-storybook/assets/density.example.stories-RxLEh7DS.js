import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./infotext-oZ7Zd0Ru.js";import{n as i,t as a}from"./icon-C57l9Hv2.js";var o=t({DefaultRegular:()=>u,Expressive:()=>d,Functional:()=>l,__namedExportsOrder:()=>f,default:()=>c}),s,c,l,u,d,f;function p(){return(p=e((()=>{n(),i(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBIcon/Density`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{icon:{control:`select`,options:`arrow_down.arrow_left.arrow_right.arrow_up.arrow_up_right.brand.calendar.check-circle.check.check_circle.chevron_down.chevron_left.chevron_right.chevron_up.circle.circular_arrows.clock.cross.cross_circle.exclamation_mark_circle.exclamation_mark_triangle.information_circle.magnifying_glass.menu.minus.plus.resize_handle_corner.x_placeholder`.split(`.`)},variant:{control:`text`},weight:{control:`select`,options:[`16`,`20`,`24`,`32`,`48`,`64`]},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{icon:`x_placeholder`,default:`Functional`},render:e=>({components:{DBIcon:a,DBInfotext:r},setup(){return{args:e}},template:`<div data-density="functional"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    Functional
                </DBInfotext><DBIcon v-bind="args"   >${e.default}</DBIcon></div>`})},u={args:{icon:`x_placeholder`,default:`(Default) Regular`},render:e=>({components:{DBIcon:a,DBInfotext:r},setup(){return{args:e}},template:`<div data-density="regular"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    (Default) Regular
                </DBInfotext><DBIcon v-bind="args"   >${e.default}</DBIcon></div>`})},d={args:{icon:`x_placeholder`,default:`Expressive`},render:e=>({components:{DBIcon:a,DBInfotext:r},setup(){return{args:e}},template:`<div data-density="expressive"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    Expressive
                </DBInfotext><DBIcon v-bind="args"   >${e.default}</DBIcon></div>`})},f=[`Functional`,`DefaultRegular`,`Expressive`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}}})))()}export{p as a,o as i,d as n,l as r,u as t};