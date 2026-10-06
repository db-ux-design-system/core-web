import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./badge-Cb5bg8cW.js";import{n as i,t as a}from"./custom-button-m9cmfV6D.js";import{n as o,t as s}from"./custom-heading-0b6vX8UP.js";import{n as c,t as l}from"./icon-DKAxlNLp.js";var u,d,f,p,m,h;function g(){return(g=e((()=>{n(),i(),c(),o(),u=t(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBCustomHeading/Start and end slot`,component:s,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{visualSize:{control:`select`,options:[`h1`,`h2`,`h3`,`h4`,`h5`,`h6`,`p-small`,`p-medium`,`p-large`]},fontWeight:{control:`select`,options:[`black`,`light`]},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},p={args:{endSlot:(0,u.jsx)(r,{semantic:`critical`,emphasis:`strong`,children:`3`}),children:(0,u.jsx)(`h2`,{children:`Current disruptions`})},render:e=>(0,u.jsx)(s,{...e})},m={args:{startSlot:(0,u.jsx)(l,{icon:`x_placeholder`}),endSlot:(0,u.jsx)(a,{variant:`ghost`,icon:`more_vertical`,noText:!0,children:(0,u.jsx)(`button`,{type:`button`,children:`More options`})}),children:(0,u.jsx)(`h2`,{children:`Installation`})},render:e=>(0,u.jsx)(s,{...e})},h=[`Endslotwithabadge`,`Bothslotswithanaction`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "endSlot": <DBBadge semantic="critical" emphasis="strong">
                        3
                    </DBBadge>,
    "children": <h2>Current disruptions</h2>
  },
  render: (properties: any) => <DBCustomHeading {...properties} />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "startSlot": <DBIcon icon="x_placeholder" />,
    "endSlot": <DBCustomButton variant="ghost" icon="more_vertical" noText={true}>
                        <button type="button">More options</button>
                    </DBCustomButton>,
    "children": <h2>Installation</h2>
  },
  render: (properties: any) => <DBCustomHeading {...properties} />
}`,...m.parameters?.docs?.source}}}})))()}g();export{m as Bothslotswithanaction,p as Endslotwithabadge,h as __namedExportsOrder,f as default};