import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./button-xYgo-lHn.js";import"./iframe-DSmxNo7m.js";import"./preload-helper-jcID-TXx.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,_={title:"Components/DBButton/Width",component:n,render:o=>e.jsx(n,{...o,children:o.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},disabled:{control:"boolean"},form:{control:"text"},name:{control:"text"},noText:{control:"boolean"},type:{control:"select",options:["button","reset","submit"]},value:{control:"text"},icon:{control:"select",options:["arrow_down","arrow_left","arrow_right","arrow_up","arrow_up_right","brand","calendar","check-circle","check","check_circle","chevron_down","chevron_left","chevron_right","chevron_up","circle","circular_arrows","clock","cross","cross_circle","exclamation_mark_circle","exclamation_mark_triangle","information_circle","magnifying_glass","menu","minus","plus","resize_handle_corner","x_placeholder"]},iconLeading:{control:"select",options:["arrow_down","arrow_left","arrow_right","arrow_up","arrow_up_right","brand","calendar","check-circle","check","check_circle","chevron_down","chevron_left","chevron_right","chevron_up","circle","circular_arrows","clock","cross","cross_circle","exclamation_mark_circle","exclamation_mark_triangle","information_circle","magnifying_glass","menu","minus","plus","resize_handle_corner","x_placeholder"]},iconTrailing:{control:"select",options:["arrow_down","arrow_left","arrow_right","arrow_up","arrow_up_right","brand","calendar","check-circle","check","check_circle","chevron_down","chevron_left","chevron_right","chevron_up","circle","circular_arrows","clock","cross","cross_circle","exclamation_mark_circle","exclamation_mark_triangle","information_circle","magnifying_glass","menu","minus","plus","resize_handle_corner","x_placeholder"]},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},r={args:{children:"(Default) Auto",onClick:t(),width:"auto"}},c={args:{children:"Width",onClick:t(),width:"full"},decorators:[o=>e.jsx("div",{style:{width:"500px"},children:e.jsx(o,{})})]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: "(Default) Auto",
    "onClick": fn(),
    "width": "auto"
  }
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Width",
    "onClick": fn(),
    "width": "full"
  },
  decorators: [Story => <div style={{
    width: '500px'
  }}>
        <Story />
      </div>]
}`,...c.parameters?.docs?.source}}};const d=["Auto","Full"];export{r as Auto,c as Full,d as __namedExportsOrder,_ as default};
