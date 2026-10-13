import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./paragraph-Dit5VUpv.js";import{n as i,t as a}from"./text-group-CictCtL3.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),i(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTextGroup/Text spacing`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{alignment:{control:`select`,options:[`start`,`center`,`end`]},textSpacing:{control:`boolean`},className:{control:`text`},id:{control:`text`}}},l={args:{children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{children:`Without text spacing the paragraphs sit directly on top of each other: block text carries no margin unless the opt-in is set.`}),(0,o.jsx)(r,{children:`Nothing has to be set on the paragraphs themselves.`})]})},render:e=>(0,o.jsx)(a,{...e})},u={args:{textSpacing:!0,children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{children:`With text spacing every child gets half a line height above and below.`}),(0,o.jsx)(r,{children:`Two adjacent children are a full line height apart, and the group keeps half of one at its outer edges.`})]})},render:e=>(0,o.jsx)(a,{...e})},d=[`DefaultWithoutspacing`,`Withtextspacing`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <><DBParagraph>
                    Without text spacing the paragraphs sit directly on top of
                    each other: block text carries no margin unless the opt-in
                    is set.
                </DBParagraph><DBParagraph>
                    Nothing has to be set on the paragraphs themselves.
                </DBParagraph></>
  },
  render: (properties: any) => <DBTextGroup {...properties} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "textSpacing": true,
    "children": <><DBParagraph>
                    With text spacing every child gets half a line height above
                    and below.
                </DBParagraph><DBParagraph>
                    Two adjacent children are a full line height apart, and the
                    group keeps half of one at its outer edges.
                </DBParagraph></>
  },
  render: (properties: any) => <DBTextGroup {...properties} />
}`,...u.parameters?.docs?.source}}}})))()}f();export{l as DefaultWithoutspacing,u as Withtextspacing,d as __namedExportsOrder,c as default};