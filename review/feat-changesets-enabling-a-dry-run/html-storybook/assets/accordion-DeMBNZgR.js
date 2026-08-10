import{f as e,n as t}from"./iframe-BBAH-R0R.js";import{C as n,S as r,g as i,r as a,w as o}from"./utils-BlxpRKVD.js";import{n as s,t as c}from"./accordion-item-hpzb8c2v.js";import{n as l}from"./rolldown-runtime-DkW27tQK.js";function u(e,t){let i=(0,f.useId)(),o=t||(0,d.useRef)(t),[s,l]=(0,d.useState)(()=>``),[u,m]=(0,d.useState)(()=>!1),[h,g]=(0,d.useState)(()=>!1);function _(){try{return typeof e.items==`string`?JSON.parse(e.items):e.items}catch(e){console.error(e)}return[]}return(0,d.useEffect)(()=>{m(!0),g(!0)},[]),(0,d.useEffect)(()=>{u&&o.current&&(e.behavior===`single`?e.name?s!==e.name&&l(e.name):l(`accordion-${i}`):l(``))},[u,e.name,e.behavior]),(0,d.useEffect)(()=>{if(o.current){let e=o.current.getElementsByTagName(`details`);if(e)for(let t of Array.from(e))s===``?t.removeAttribute(`name`):t.name=s??``}},[o.current,s]),(0,d.useEffect)(()=>{if(o.current&&h){if(e?.initOpenIndex&&e.initOpenIndex.length>0){let t=o.current.getElementsByTagName(`details`);if(t){let n=e.behavior===`single`&&e.initOpenIndex.length>1?[e.initOpenIndex[0]]:e.initOpenIndex;Array.from(t).forEach((e,t)=>{n?.includes(t)&&(e.open=!0)})}}g(!1)}},[o.current,h,e.initOpenIndex]),(0,p.jsxs)(`ul`,{ref:o,...r(e,[`data-icon-variant`,`data-icon-variant-before`,`data-icon-variant-after`,`data-icon-weight`,`data-icon-weight-before`,`data-icon-weight-after`,`data-interactive`,`data-force-mobile`,`data-color`,`data-container-color`,`data-bg-color`,`data-on-bg-color`,`data-color-scheme`,`data-font-size`,`data-headline-size`,`data-divider`,`data-focus`,`data-font`,`data-density`]),id:e.id??e.propOverrides?.id,...n(e,[`data-icon-variant`,`data-icon-variant-before`,`data-icon-variant-after`,`data-icon-weight`,`data-icon-weight-before`,`data-icon-weight-after`,`data-interactive`,`data-force-mobile`,`data-color`,`data-container-color`,`data-bg-color`,`data-on-bg-color`,`data-color-scheme`,`data-font-size`,`data-headline-size`,`data-divider`,`data-focus`,`data-font`,`data-density`]),className:a(`db-accordion`,e.className),"data-variant":e.variant,children:[e.items?null:(0,p.jsx)(p.Fragment,{children:e.children}),e.items?(0,p.jsx)(p.Fragment,{children:_()?.map((e,t)=>(0,p.jsx)(c,{headlinePlain:e.headlinePlain,disabled:e.disabled,text:e.text},`accordion-item-${t}`))}):null]})}var d,f,p,m;function h(){return(h=l((()=>{e(),o(),d=e(),i(),s(),f=e(),p=t(),m=(0,d.forwardRef)(u),m.__docgenInfo={description:``,methods:[],displayName:`DBAccordion`,props:{behavior:{required:!1,tsType:{name:`unknown[number]`,raw:`(typeof AccordionBehaviorList)[number]`},description:`To allow multiple items open at the same time or only 1 item`},initOpenIndex:{required:!1,tsType:{name:`Array`,elements:[{name:`number`}],raw:`number[]`},description:`The index of items which should be open when loading the accordion`},items:{required:!1,tsType:{name:`union`,raw:`DBAccordionItemDefaultProps[] | string`,elements:[{name:`Array`,elements:[{name:`intersection`,raw:`{
  /**
   * Initial state for the accordion item
   */
  defaultOpen?: boolean;
  /**
   * State for the accordion item
   */
  open?: boolean | string;
  /**
   * The disabled attribute can be set to keep a user from clicking on the element.
   */
  disabled?: boolean | string;
  /**
   * Title of the accordion-item as slot
   */
  headline?: any;
  /**
   * Title of the accordion-item as plain text
   */
  headlinePlain?: string;
} & TextProps`,elements:[{name:`signature`,type:`object`,raw:`{
  /**
   * Initial state for the accordion item
   */
  defaultOpen?: boolean;
  /**
   * State for the accordion item
   */
  open?: boolean | string;
  /**
   * The disabled attribute can be set to keep a user from clicking on the element.
   */
  disabled?: boolean | string;
  /**
   * Title of the accordion-item as slot
   */
  headline?: any;
  /**
   * Title of the accordion-item as plain text
   */
  headlinePlain?: string;
}`,signature:{properties:[{key:`defaultOpen`,value:{name:`boolean`,required:!1},description:`Initial state for the accordion item`},{key:`open`,value:{name:`union`,raw:`boolean | string`,elements:[{name:`boolean`},{name:`string`}],required:!1},description:`State for the accordion item`},{key:`disabled`,value:{name:`union`,raw:`boolean | string`,elements:[{name:`boolean`},{name:`string`}],required:!1},description:`The disabled attribute can be set to keep a user from clicking on the element.`},{key:`headline`,value:{name:`any`,required:!1},description:`Title of the accordion-item as slot`},{key:`headlinePlain`,value:{name:`string`,required:!1},description:`Title of the accordion-item as plain text`}]}},{name:`signature`,type:`object`,raw:`{
  /**
   * Alternative for default slot/children. Do not use together with a text children/slot, as both will be rendered and result in duplicate labels.
   */
  text?: string;
}`,signature:{properties:[{key:`text`,value:{name:`string`,required:!1},description:`Alternative for default slot/children. Do not use together with a text children/slot, as both will be rendered and result in duplicate labels.`}]}}]}],raw:`DBAccordionItemDefaultProps[]`},{name:`string`}]},description:`Alternative to pass in a simple representation of accordion items`},name:{required:!1,tsType:{name:`string`},description:`Set details name for exclusive accordions, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#name`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(openAccordionItemIds: string[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},name:`openAccordionItemIds`}],return:{name:`void`}}},description:`Informs about the changes in the internal state, which item is open`},variant:{required:!1,tsType:{name:`unknown[number]`,raw:`(typeof AccordionVariantList)[number]`},description:`Defines the display of the accordion and the items:
"divider": with a dividing line between the items
"card": w/o dividing line, but items are shown in the card variant`},children:{required:!1,tsType:{name:`any`},description:`default slot`},className:{required:!1,tsType:{name:`string`},description:`React specific for adding className to the component.`},class:{required:!1,tsType:{name:`union`,raw:`string | any`,elements:[{name:`string`},{name:`any`}]},description:`Workaround for TypeScript using class for all components.`},id:{required:!1,tsType:{name:`string`},description:`[ID](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) of the component, generated automatically for some components as a fallback if unset.`},autofocus:{required:!1,tsType:{name:`union`,raw:`boolean | string`,elements:[{name:`boolean`},{name:`string`}]},description:`Before using please check for the [accessibility concerns](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus#accessibility_concerns)`},propOverrides:{required:!1,tsType:{name:`Pick`,elements:[{name:`GlobalProps`},{name:`literal`,value:`'id'`}],raw:`Pick<GlobalProps, 'id'>`},description:`Allows overriding specific props on nested elements or internal component structure. Currently only supports propOverrides.id`}}}})))()}export{h as n,m as t};