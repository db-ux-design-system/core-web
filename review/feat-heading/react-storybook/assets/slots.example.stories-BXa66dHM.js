import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./badge-BNR6vw5D.js";import{n as i,t as a}from"./custom-button-DbsWUTwD.js";import{n as o,t as s}from"./custom-heading-DXudZn2H.js";import{n as c,t as l}from"./icon-BtAJmT09.js";var u,d,f,p,m,h;function g(){return(g=e((()=>{n(),i(),c(),o(),u=t(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBCustomHeading/Start and end slot`,component:s,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`3xl`,`2xl`,`xl`,`lg`,`md`,`sm`,`xs`,`2xs`,`3xs`]},fontWeight:{control:`select`,options:[`black`,`light`]},alignment:{control:`select`,options:[`start`,`center`,`end`]},paragraphSpacing:{control:`boolean`},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},p={args:{endSlot:(0,u.jsx)(r,{semantic:`critical`,emphasis:`strong`,children:`3`}),children:(0,u.jsx)(`h2`,{children:`Current disruptions`})},render:e=>(0,u.jsx)(s,{...e})},m={args:{startSlot:(0,u.jsx)(l,{icon:`x_placeholder`}),endSlot:(0,u.jsx)(a,{variant:`ghost`,icon:`more_vertical`,noText:!0,children:(0,u.jsx)(`button`,{type:`button`,children:`More options`})}),children:(0,u.jsx)(`h2`,{children:`Installation`})},render:e=>(0,u.jsx)(s,{...e})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`Endslotwithabadge`,`Bothslotswithanaction`]})))()}g();export{m as Bothslotswithanaction,p as Endslotwithabadge,h as __namedExportsOrder,f as default};