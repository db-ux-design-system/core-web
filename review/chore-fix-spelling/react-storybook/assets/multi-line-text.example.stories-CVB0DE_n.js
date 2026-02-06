import{j as o}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./button-AtZrPNJW.js";import"./iframe-BzaZbsv8.js";import"./preload-helper-DZ0t5_OX.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,_={title:"Components/DBButton/Multi Line Text",component:n,render:r=>o.jsx(n,{...r,children:r.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},disabled:{control:"boolean"},form:{control:"text"},name:{control:"text"},noText:{control:"boolean"},type:{control:"select",options:["button","reset","submit"]},value:{control:"text"},icon:{control:"select",options:["arrow_down","arrow_left","arrow_right","arrow_up","arrow_up_right","brand","calendar","check-circle","check","check_circle","chevron_down","chevron_left","chevron_right","chevron_up","circle","circular_arrows","clock","cross","cross_circle","exclamation_mark_circle","exclamation_mark_triangle","information_circle","magnifying_glass","menu","minus","plus","resize_handle_corner","x_placeholder"]},iconLeading:{control:"select",options:["arrow_down","arrow_left","arrow_right","arrow_up","arrow_up_right","brand","calendar","check-circle","check","check_circle","chevron_down","chevron_left","chevron_right","chevron_up","circle","circular_arrows","clock","cross","cross_circle","exclamation_mark_circle","exclamation_mark_triangle","information_circle","magnifying_glass","menu","minus","plus","resize_handle_corner","x_placeholder"]},iconTrailing:{control:"select",options:["arrow_down","arrow_left","arrow_right","arrow_up","arrow_up_right","brand","calendar","check-circle","check","check_circle","chevron_down","chevron_left","chevron_right","chevron_up","circle","circular_arrows","clock","cross","cross_circle","exclamation_mark_circle","exclamation_mark_triangle","information_circle","magnifying_glass","menu","minus","plus","resize_handle_corner","x_placeholder"]},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},e={args:{children:"Multi-line Text With Automatic Line Breaks",onClick:i(),width:"full"},decorators:[r=>o.jsx("div",{style:{width:"300px"},children:o.jsx(r,{})})]},c={args:{children:"Multi-line Text With Automatic Line Breaks and Icon",onClick:i(),width:"full",icon:"x_placeholder"},decorators:[r=>o.jsx("div",{style:{width:"300px"},children:o.jsx(r,{})})]},t={args:{children:"Button Small Multi-line Text With Automatic Line Breaks",onClick:i(),size:"small"},decorators:[r=>o.jsx("div",{style:{width:"300px"},children:o.jsx(r,{})})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Multi-line Text With Automatic Line Breaks",
    "onClick": fn(),
    "width": "full"
  },
  decorators: [Story => <div style={{
    width: '300px'
  }}>
        <Story />
      </div>]
}`,...e.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Multi-line Text With Automatic Line Breaks and Icon",
    "onClick": fn(),
    "width": "full",
    "icon": "x_placeholder"
  },
  decorators: [Story => <div style={{
    width: '300px'
  }}>
        <Story />
      </div>]
}`,...c.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Button Small Multi-line Text With Automatic Line Breaks",
    "onClick": fn(),
    "size": "small"
  },
  decorators: [Story => <div style={{
    width: '300px'
  }}>
        <Story />
      </div>]
}`,...t.parameters?.docs?.source}}};const m=["AutomaticLineBreaks","AutomaticLineBreaksandIcon","SmallAutomaticLineBreaks"];export{e as AutomaticLineBreaks,c as AutomaticLineBreaksandIcon,t as SmallAutomaticLineBreaks,m as __namedExportsOrder,_ as default};
