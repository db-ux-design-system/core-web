import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./paragraph-DWcrX9fC.js";import{n as i,t as a}from"./text-group-hcY6ITr8.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),i(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBParagraph/Mixed content`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{alignment:{control:`select`,options:[`start`,`center`,`end`]},textSpacing:{control:`boolean`},className:{control:`text`},id:{control:`text`}}},l={args:{textSpacing:!0,children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{children:`The gap belongs to the group, so a child does not have to be a paragraph to be spaced.`}),(0,o.jsx)(`div`,{children:`A plain div without any of our classes, spaced like every other child.`})]})},render:e=>(0,o.jsx)(a,{...e})},u={args:{textSpacing:!0,children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{children:`A list keeps the block margin the browser gives it, and that margin adds to the gap below.`}),(0,o.jsxs)(`ul`,{children:[(0,o.jsx)(`li`,{children:`Reset it to keep a single rhythm`}),(0,o.jsx)(`li`,{children:`The list items are unaffected`})]}),(0,o.jsx)(r,{children:`Only our own components reset their block margin, so the group stays their single source of spacing.`})]})},render:e=>(0,o.jsx)(a,{...e})},d=[`Childrenwithoutablockmargin`,`Achildthatbringsitsownblockmargin`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "textSpacing": true,
    "children": <><DBParagraph>
                    The gap belongs to the group, so a child does not have to be
                    a paragraph to be spaced.
                </DBParagraph><div>
                    A plain div without any of our classes, spaced like every
                    other child.
                </div></>
  },
  render: (properties: any) => <DBTextGroup {...properties} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "textSpacing": true,
    "children": <><DBParagraph>
                    A list keeps the block margin the browser gives it, and that
                    margin adds to the gap below.
                </DBParagraph><ul><li>Reset it to keep a single rhythm</li><li>The list items are unaffected</li></ul><DBParagraph>
                    Only our own components reset their block margin, so the
                    group stays their single source of spacing.
                </DBParagraph></>
  },
  render: (properties: any) => <DBTextGroup {...properties} />
}`,...u.parameters?.docs?.source}}}})))()}f();export{u as Achildthatbringsitsownblockmargin,l as Childrenwithoutablockmargin,d as __namedExportsOrder,c as default};