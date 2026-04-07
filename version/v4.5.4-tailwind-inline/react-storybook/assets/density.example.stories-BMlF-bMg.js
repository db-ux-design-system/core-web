import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-Bn1Ys6_W.js";import{D as n,_ as r,t as i}from"./src-BxDCfhU2.js";var a,o,s,c,l,u,d;e((()=>{i(),a=t(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBIcon/Density`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{icon:{control:`select`,options:`arrow_down.arrow_left.arrow_right.arrow_up.arrow_up_right.brand.calendar.check-circle.check.check_circle.chevron_down.chevron_left.chevron_right.chevron_up.circle.circular_arrows.clock.cross.cross_circle.exclamation_mark_circle.exclamation_mark_triangle.information_circle.magnifying_glass.menu.minus.plus.resize_handle_corner.x_placeholder`.split(`.`)},variant:{control:`text`},weight:{control:`select`,options:[`16`,`20`,`24`,`32`,`48`,`64`]},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{icon:`x_placeholder`,children:`Functional`},render:e=>(0,a.jsxs)(`div`,{"data-density":`functional`,children:[(0,a.jsx)(n,{icon:`none`,size:`small`,semantic:`informational`,children:`Functional`}),(0,a.jsx)(r,{...e})]})},l={args:{icon:`x_placeholder`,children:`(Default) Regular`},render:e=>(0,a.jsxs)(`div`,{"data-density":`regular`,children:[(0,a.jsx)(n,{icon:`none`,size:`small`,semantic:`informational`,children:`(Default) Regular`}),(0,a.jsx)(r,{...e})]})},u={args:{icon:`x_placeholder`,children:`Expressive`},render:e=>(0,a.jsxs)(`div`,{"data-density":`expressive`,children:[(0,a.jsx)(n,{icon:`none`,size:`small`,semantic:`informational`,children:`Expressive`}),(0,a.jsx)(r,{...e})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "children": "Functional"
  },
  render: (properties: any) => <div data-density="functional"><DBInfotext icon="none" size="small" semantic="informational">
                    Functional
                </DBInfotext><DBIcon {...properties} /></div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "children": "(Default) Regular"
  },
  render: (properties: any) => <div data-density="regular"><DBInfotext icon="none" size="small" semantic="informational">
                    (Default) Regular
                </DBInfotext><DBIcon {...properties} /></div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "children": "Expressive"
  },
  render: (properties: any) => <div data-density="expressive"><DBInfotext icon="none" size="small" semantic="informational">
                    Expressive
                </DBInfotext><DBIcon {...properties} /></div>
}`,...u.parameters?.docs?.source}}},d=[`Functional`,`DefaultRegular`,`Expressive`]}))();export{l as DefaultRegular,u as Expressive,c as Functional,d as __namedExportsOrder,s as default};