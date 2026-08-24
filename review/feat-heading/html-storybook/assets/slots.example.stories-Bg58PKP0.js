import{n as e}from"./iframe-CzGX4pN5.js";import{n as t,t as n}from"./badge-Com0wVPh.js";import{n as r,t as i}from"./custom-button-B4y9tWao.js";import{n as a,t as o}from"./custom-heading-oi9QgI9E.js";import{n as s,t as c}from"./icon-Djvmp0zN.js";import{n as l}from"./rolldown-runtime-DkW27tQK.js";var u,d,f,p,m,h;function g(){return(g=l((()=>{t(),r(),s(),a(),u=e(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBCustomHeading/Start and end slot`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`3xl`,`2xl`,`xl`,`lg`,`md`,`sm`,`xs`,`2xs`,`3xs`]},fontWeight:{control:`select`,options:[`black`,`light`]},alignment:{control:`select`,options:[`start`,`center`,`end`]},paragraphSpacing:{control:`boolean`},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},p={args:{endSlot:(0,u.jsx)(n,{semantic:`critical`,emphasis:`strong`,children:`3`}),children:(0,u.jsx)(`h2`,{children:`Current disruptions`})},render:e=>(0,u.jsx)(o,{...e})},m={args:{startSlot:(0,u.jsx)(c,{icon:`x_placeholder`}),endSlot:(0,u.jsx)(i,{variant:`ghost`,icon:`more_vertical`,noText:!0,children:(0,u.jsx)(`button`,{type:`button`,children:`More options`})}),children:(0,u.jsx)(`h2`,{children:`Installation`})},render:e=>(0,u.jsx)(o,{...e})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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