import{n as e}from"./iframe-BCGjKSkO.js";import{n as t,t as n}from"./paragraph-BI_g8vD1.js";import{n as r,t as i}from"./text-group-Cnt-mw-0.js";import{n as a}from"./rolldown-runtime-DkW27tQK.js";var o,s,c,l,u,d;function f(){return(f=a((()=>{t(),r(),o=e(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTextGroup/Text spacing`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{alignment:{control:`select`,options:[`start`,`center`,`end`]},textSpacing:{control:`boolean`},className:{control:`text`},id:{control:`text`}}},l={args:{children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{children:`Without text spacing the paragraphs sit directly on top of each other: block text carries no margin unless the opt-in is set.`}),(0,o.jsx)(n,{children:`Nothing has to be set on the paragraphs themselves.`})]})},render:e=>(0,o.jsx)(i,{...e})},u={args:{textSpacing:!0,children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{children:`With text spacing every child gets half a line height above and below.`}),(0,o.jsx)(n,{children:`Two adjacent children are a full line height apart, and the group keeps half of one at its outer edges.`})]})},render:e=>(0,o.jsx)(i,{...e})},d=[`DefaultWithoutspacing`,`Withtextspacing`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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