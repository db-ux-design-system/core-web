import{_ as c}from"./button-DN4oUQWh.js";import"./iframe-CXDGy4UN.js";import"./preload-helper-J29wahVO.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,s={title:"Components/DBButton/Multi Line Text",component:c,render:n=>({components:{DBButton:c},setup(){return{args:n}},template:`
      <DBButton v-bind="args">
      ${n.default}
      </DBButton>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},disabled:{control:"boolean"},form:{control:"text"},name:{control:"text"},noText:{control:"boolean"},type:{control:"select",options:["button","reset","submit"]},value:{control:"text"},icon:{control:"select",options:["arrow_down","arrow_left","arrow_right","arrow_up","arrow_up_right","brand","calendar","check-circle","check","check_circle","chevron_down","chevron_left","chevron_right","chevron_up","circle","circular_arrows","clock","cross","cross_circle","exclamation_mark_circle","exclamation_mark_triangle","information_circle","magnifying_glass","menu","minus","plus","resize_handle_corner","x_placeholder"]},iconLeading:{control:"select",options:["arrow_down","arrow_left","arrow_right","arrow_up","arrow_up_right","brand","calendar","check-circle","check","check_circle","chevron_down","chevron_left","chevron_right","chevron_up","circle","circular_arrows","clock","cross","cross_circle","exclamation_mark_circle","exclamation_mark_triangle","information_circle","magnifying_glass","menu","minus","plus","resize_handle_corner","x_placeholder"]},iconTrailing:{control:"select",options:["arrow_down","arrow_left","arrow_right","arrow_up","arrow_up_right","brand","calendar","check-circle","check","check_circle","chevron_down","chevron_left","chevron_right","chevron_up","circle","circular_arrows","clock","cross","cross_circle","exclamation_mark_circle","exclamation_mark_triangle","information_circle","magnifying_glass","menu","minus","plus","resize_handle_corner","x_placeholder"]},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},e={args:{default:"Multi-line Text With Automatic Line Breaks",onClick:t(),width:"full"},decorators:[()=>({template:'<div style="  width: 300px"><story /></div>'})]},o={args:{default:"Multi-line Text With Automatic Line Breaks and Icon",onClick:t(),width:"full",icon:"x_placeholder"},decorators:[()=>({template:'<div style="  width: 300px"><story /></div>'})]},r={args:{default:"Button Small Multi-line Text With Automatic Line Breaks",onClick:t(),size:"small"},decorators:[()=>({template:'<div style="  width: 300px"><story /></div>'})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "Multi-line Text With Automatic Line Breaks",
    "onClick": fn(),
    "width": "full"
  },
  decorators: [() => ({
    template: \`<div style="  width: 300px"><story /></div>\`
  })]
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    default: "Multi-line Text With Automatic Line Breaks and Icon",
    "onClick": fn(),
    "width": "full",
    "icon": "x_placeholder"
  },
  decorators: [() => ({
    template: \`<div style="  width: 300px"><story /></div>\`
  })]
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    default: "Button Small Multi-line Text With Automatic Line Breaks",
    "onClick": fn(),
    "size": "small"
  },
  decorators: [() => ({
    template: \`<div style="  width: 300px"><story /></div>\`
  })]
}`,...r.parameters?.docs?.source}}};const d=["AutomaticLineBreaks","AutomaticLineBreaksandIcon","SmallAutomaticLineBreaks"];export{e as AutomaticLineBreaks,o as AutomaticLineBreaksandIcon,r as SmallAutomaticLineBreaks,d as __namedExportsOrder,s as default};
