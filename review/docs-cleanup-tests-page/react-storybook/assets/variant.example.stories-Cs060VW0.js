import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./infotext-CeHQWFBP.js";import{n as i,t as a}from"./icon-BHJ5lISS.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),i(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBIcon/Variant`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{icon:{control:`select`,options:`arrow_down.arrow_left.arrow_right.arrow_up.arrow_up_right.brand.calendar.check-circle.check.check_circle.chevron_down.chevron_left.chevron_right.chevron_up.circle.circular_arrows.clock.cross.cross_circle.exclamation_mark_circle.exclamation_mark_triangle.information_circle.magnifying_glass.menu.minus.plus.resize_handle_corner.x_placeholder`.split(`.`)},variant:{control:`text`},weight:{control:`select`,options:[`16`,`20`,`24`,`32`,`48`,`64`]},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{icon:`exclamation_mark_triangle`,weight:`32`},render:e=>(0,o.jsxs)(`div`,{children:[(0,o.jsx)(r,{icon:`none`,size:`small`,semantic:`informational`,children:`(Default) Default`}),(0,o.jsx)(a,{...e})]})},u={args:{icon:`exclamation_mark_triangle`,variant:`filled`,weight:`32`},render:e=>(0,o.jsxs)(`div`,{children:[(0,o.jsx)(r,{icon:`none`,size:`small`,semantic:`informational`,children:`Filled`}),(0,o.jsx)(a,{...e})]})},d=[`DefaultDefault`,`Filled`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "exclamation_mark_triangle",
    "weight": "32"
  },
  render: (properties: any) => <div><DBInfotext icon="none" size="small" semantic="informational">
                    (Default) Default
                </DBInfotext><DBIcon {...properties} /></div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "exclamation_mark_triangle",
    "variant": "filled",
    "weight": "32"
  },
  render: (properties: any) => <div><DBInfotext icon="none" size="small" semantic="informational">
                    Filled
                </DBInfotext><DBIcon {...properties} /></div>
}`,...u.parameters?.docs?.source}}}})))()}f();export{l as DefaultDefault,u as Filled,d as __namedExportsOrder,c as default};