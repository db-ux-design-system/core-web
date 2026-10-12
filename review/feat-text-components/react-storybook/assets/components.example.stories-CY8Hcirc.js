import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./heading-h3-DOZ--Rve.js";import{n as i,t as a}from"./paragraph-w6P5DhRy.js";import{n as o,t as s}from"./text-group-rF5uDlY4.js";var c,l,u,d,f;function p(){return(p=e((()=>{n(),i(),o(),c=t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBTextGroup/With components`,component:s,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{alignment:{control:`select`,options:[`start`,`center`,`end`]},textSpacing:{control:`boolean`},className:{control:`text`},id:{control:`text`}}},d={args:{textSpacing:!0,children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{children:`A heading starts the block`}),(0,c.jsx)(a,{children:`Both components reset their own block margin, so the group is the single source of spacing for all of its children.`}),(0,c.jsx)(a,{size:`sm`,children:`Mixing components is the intended use. The gap resolves against the group's typography, so it does not change with a child's size.`})]})},render:e=>(0,c.jsx)(s,{...e})},f=[`Headingandparagraphsinonegroup`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "textSpacing": true,
    "children": <><DBHeadingH3>A heading starts the block</DBHeadingH3><DBParagraph>
                    Both components reset their own block margin, so the group
                    is the single source of spacing for all of its children.
                </DBParagraph><DBParagraph size="sm">
                    Mixing components is the intended use. The gap resolves
                    against the group's typography, so it does not change with a
                    child's size.
                </DBParagraph></>
  },
  render: (properties: any) => <DBTextGroup {...properties} />
}`,...d.parameters?.docs?.source}}}})))()}p();export{d as Headingandparagraphsinonegroup,f as __namedExportsOrder,u as default};