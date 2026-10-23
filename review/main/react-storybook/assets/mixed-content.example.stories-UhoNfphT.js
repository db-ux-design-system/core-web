import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./paragraph-Ct0aTvSg.js";import{n as i,t as a}from"./text-group-5SAyK3Pl.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),i(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTextGroup/Mixed content`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{alignment:{control:`select`,options:[`start`,`center`,`end`]},textSpacing:{control:`boolean`},className:{control:`text`},id:{control:`text`}}},l={args:{textSpacing:!0,children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(`h3`,{children:`A native heading`}),(0,o.jsx)(`p`,{children:`A native paragraph. The opt-in reaches it just like it reaches our components, so plain markup and components can be mixed freely.`}),(0,o.jsx)(r,{children:`A component paragraph, spaced by exactly the same rule.`})]})},render:e=>(0,o.jsx)(a,{...e})},u={args:{textSpacing:!0,children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{children:`A list is not one of the block-text elements, so it keeps whatever margin it brings.`}),(0,o.jsxs)(`ul`,{style:{marginBlock:`calc(1lh * var(--db-text-spacing, 0))`},children:[(0,o.jsx)(`li`,{children:`Opted into the same rhythm`}),(0,o.jsx)(`li`,{children:`The list items are unaffected`})]}),(0,o.jsx)(r,{children:`Set a zero block margin instead to take such a child out of the rhythm entirely.`})]})},render:e=>(0,o.jsx)(a,{...e})},d=[`Nativeblocktext`,`Achildoutsidethetextelements`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "textSpacing": true,
    "children": <><h3>A native heading</h3><p>
                    A native paragraph. The opt-in reaches it just like it
                    reaches our components, so plain markup and components can
                    be mixed freely.
                </p><DBParagraph>
                    A component paragraph, spaced by exactly the same rule.
                </DBParagraph></>
  },
  render: (properties: any) => <DBTextGroup {...properties} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "textSpacing": true,
    "children": <><DBParagraph>
                    A list is not one of the block-text elements, so it keeps
                    whatever margin it brings.
                </DBParagraph><ul style={{
        marginBlock: 'calc(1lh * var(--db-text-spacing, 0))'
      }}><li>Opted into the same rhythm</li><li>The list items are unaffected</li></ul><DBParagraph>
                    Set a zero block margin instead to take such a child out of
                    the rhythm entirely.
                </DBParagraph></>
  },
  render: (properties: any) => <DBTextGroup {...properties} />
}`,...u.parameters?.docs?.source}}}})))()}f();export{u as Achildoutsidethetextelements,l as Nativeblocktext,d as __namedExportsOrder,c as default};