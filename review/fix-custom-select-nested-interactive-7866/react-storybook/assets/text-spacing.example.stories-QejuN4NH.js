import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./paragraph-C4PLeQDA.js";import{n as i,t as a}from"./text-group-DE5KCfJy.js";var o,s,c,l,u,d,f;function p(){return(p=e((()=>{n(),i(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTextGroup/Text spacing`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{alignment:{control:`select`,options:[`start`,`center`,`end`]},textSpacing:{control:`boolean`},className:{control:`text`},id:{control:`text`}}},l={args:{textSpacing:!1,children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{children:`False: the paragraphs sit directly on top of each other.`}),(0,o.jsx)(r,{children:`Nothing has to be set on the paragraphs themselves.`})]})},render:e=>(0,o.jsx)(a,{...e})},u={args:{textSpacing:!0,children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{children:`True: every child gets half a line height above and below.`}),(0,o.jsx)(r,{children:`Two adjacent children are a full line height apart, and the group keeps half of one at its outer edges.`})]})},render:e=>(0,o.jsx)(a,{...e})},d={args:{children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{children:`Unset: this group sets nothing, so it follows the surrounding element that opted in.`}),(0,o.jsx)(r,{children:`Use false to switch the spacing off for certain.`})]})},render:e=>(0,o.jsx)(`div`,{"data-text-spacing":`true`,children:(0,o.jsx)(a,{...e})})},f=[`Falsewithoutspacing`,`Truewithspacing`,`DefaultUnsetinherited`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "textSpacing": false,
    "children": <><DBParagraph>
                    False: the paragraphs sit directly on top of each other.
                </DBParagraph><DBParagraph>
                    Nothing has to be set on the paragraphs themselves.
                </DBParagraph></>
  },
  render: (properties: any) => <DBTextGroup {...properties} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "textSpacing": true,
    "children": <><DBParagraph>
                    True: every child gets half a line height above and below.
                </DBParagraph><DBParagraph>
                    Two adjacent children are a full line height apart, and the
                    group keeps half of one at its outer edges.
                </DBParagraph></>
  },
  render: (properties: any) => <DBTextGroup {...properties} />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <><DBParagraph>
                        Unset: this group sets nothing, so it follows the
                        surrounding element that opted in.
                    </DBParagraph><DBParagraph>
                        Use false to switch the spacing off for certain.
                    </DBParagraph></>
  },
  render: (properties: any) => <div data-text-spacing="true"><DBTextGroup {...properties} /></div>
}`,...d.parameters?.docs?.source}}}})))()}p();export{d as DefaultUnsetinherited,l as Falsewithoutspacing,u as Truewithspacing,f as __namedExportsOrder,c as default};