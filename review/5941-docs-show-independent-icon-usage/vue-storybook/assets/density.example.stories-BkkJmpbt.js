import{_ as a}from"./button-DaU5VMLT.js";import"./iframe-C28Ha94g.js";import"./preload-helper-CwpS6C8d.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,i={title:"Components/DBButton/Density",component:a,render:c=>({components:{DBButton:a},setup(){return{args:c}},template:`
      <DBButton v-bind="args">
      ${c.default}
      </DBButton>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},disabled:{control:"boolean"},form:{control:"text"},name:{control:"text"},noText:{control:"boolean"},type:{control:"select",options:["button","reset","submit"]},value:{control:"text"},icon:{control:"select",options:["arrow_down","arrow_left","arrow_right","arrow_up","arrow_up_right","brand","calendar","check-circle","check","check_circle","chevron_down","chevron_left","chevron_right","chevron_up","circle","circular_arrows","clock","cross","cross_circle","exclamation_mark_circle","exclamation_mark_triangle","information_circle","magnifying_glass","menu","minus","plus","resize_handle_corner","x_placeholder"]},iconLeading:{control:"select",options:["arrow_down","arrow_left","arrow_right","arrow_up","arrow_up_right","brand","calendar","check-circle","check","check_circle","chevron_down","chevron_left","chevron_right","chevron_up","circle","circular_arrows","clock","cross","cross_circle","exclamation_mark_circle","exclamation_mark_triangle","information_circle","magnifying_glass","menu","minus","plus","resize_handle_corner","x_placeholder"]},iconTrailing:{control:"select",options:["arrow_down","arrow_left","arrow_right","arrow_up","arrow_up_right","brand","calendar","check-circle","check","check_circle","chevron_down","chevron_left","chevron_right","chevron_up","circle","circular_arrows","clock","cross","cross_circle","exclamation_mark_circle","exclamation_mark_triangle","information_circle","magnifying_glass","menu","minus","plus","resize_handle_corner","x_placeholder"]},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},r={args:{default:"Functional",onClick:n(),"data-density":"functional"}},e={args:{default:"(Default) Regular",onClick:n(),"data-density":"regular"}},o={args:{default:"Expressive",onClick:n(),"data-density":"expressive"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    default: "Functional",
    "onClick": fn(),
    "data-density": "functional"
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "(Default) Regular",
    "onClick": fn(),
    "data-density": "regular"
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    default: "Expressive",
    "onClick": fn(),
    "data-density": "expressive"
  }
}`,...o.parameters?.docs?.source}}};const _=["Functional","Regular","Expressive"];export{o as Expressive,r as Functional,e as Regular,_ as __namedExportsOrder,i as default};
