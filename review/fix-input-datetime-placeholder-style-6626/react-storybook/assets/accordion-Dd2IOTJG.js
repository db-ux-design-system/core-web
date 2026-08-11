import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-DJooyuAq.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{C as r,S as i,T as a,g as o,r as s,w as c}from"./utils-wm5Pw1cD.js";import{n as l,t as u}from"./accordion-item-BVU2aUNh.js";function d(e,t){let n=(0,p.useId)(),o=(0,f.useRef)(null),c=(0,f.useMemo)(()=>a(o,t),[t]),[l,d]=(0,f.useState)(()=>``),[h,g]=(0,f.useState)(()=>!1),[_,v]=(0,f.useState)(()=>!1);function y(){try{return typeof e.items==`string`?JSON.parse(e.items):e.items}catch(e){console.error(e)}return[]}return(0,f.useEffect)(()=>{g(!0),v(!0)},[]),(0,f.useEffect)(()=>{h&&o.current&&(e.behavior===`single`?e.name?l!==e.name&&d(e.name):d(`accordion-${n}`):d(``))},[h,e.name,e.behavior]),(0,f.useEffect)(()=>{if(o.current){let e=o.current.getElementsByTagName(`details`);if(e)for(let t of Array.from(e))l===``?t.removeAttribute(`name`):t.name=l??``}},[o.current,l]),(0,f.useEffect)(()=>{if(o.current&&_){if(e?.initOpenIndex&&e.initOpenIndex.length>0){let t=o.current.getElementsByTagName(`details`);if(t){let n=e.behavior===`single`&&e.initOpenIndex.length>1?[e.initOpenIndex[0]]:e.initOpenIndex;Array.from(t).forEach((e,t)=>{n?.includes(t)&&(e.open=!0)})}}v(!1)}},[o.current,_,e.initOpenIndex]),(0,m.jsxs)(`ul`,{ref:c,...i(e,[`data-icon-variant`,`data-icon-variant-before`,`data-icon-variant-after`,`data-icon-weight`,`data-icon-weight-before`,`data-icon-weight-after`,`data-interactive`,`data-force-mobile`,`data-color`,`data-container-color`,`data-bg-color`,`data-on-bg-color`,`data-color-scheme`,`data-font-size`,`data-headline-size`,`data-divider`,`data-focus`,`data-font`,`data-density`]),id:e.id??e.propOverrides?.id,...r(e,[`data-icon-variant`,`data-icon-variant-before`,`data-icon-variant-after`,`data-icon-weight`,`data-icon-weight-before`,`data-icon-weight-after`,`data-interactive`,`data-force-mobile`,`data-color`,`data-container-color`,`data-bg-color`,`data-on-bg-color`,`data-color-scheme`,`data-font-size`,`data-headline-size`,`data-divider`,`data-focus`,`data-font`,`data-density`]),className:s(`db-accordion`,e.className),"data-variant":e.variant,children:[e.items?null:(0,m.jsx)(m.Fragment,{children:e.children}),e.items?(0,m.jsx)(m.Fragment,{children:y()?.map((e,t)=>(0,m.jsx)(u,{headlinePlain:e.headlinePlain,disabled:e.disabled,text:e.text},`accordion-item-${t}`))}):null]})}var f,p,m,h;function g(){return(g=e((()=>{t(),c(),f=t(),o(),l(),p=t(),m=n(),h=(0,f.forwardRef)(d),h.__docgenInfo={description:``,methods:[],displayName:`DBAccordion`,props:{behavior:{required:!1,tsType:{name:`unknown[number]`,raw:`(typeof AccordionBehaviorList)[number]`},description:`To allow multiple items open at the same time or only 1 item`},initOpenIndex:{required:!1,tsType:{name:`Array`,elements:[{name:`number`}],raw:`number[]`},description:`The index of items which should be open when loading the accordion`},items:{required:!1,tsType:{name:`union`,raw:`DBAccordionItemDefaultProps[] | string`,elements:[{name:`Array`,elements:[{name:`intersection`,raw:`{
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
"card": w/o dividing line, but items are shown in the card variant`},children:{required:!1,tsType:{name:`any`},description:`default slot`},className:{required:!1,tsType:{name:`string`},description:`React specific for adding className to the component.`},class:{required:!1,tsType:{name:`union`,raw:`string | any`,elements:[{name:`string`},{name:`any`}]},description:`Workaround for TypeScript using class for all components.`},id:{required:!1,tsType:{name:`string`},description:`[ID](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) of the component, generated automatically for some components as a fallback if unset.`},autofocus:{required:!1,tsType:{name:`union`,raw:`boolean | string`,elements:[{name:`boolean`},{name:`string`}]},description:`Before using please check for the [accessibility concerns](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus#accessibility_concerns)`},propOverrides:{required:!1,tsType:{name:`Pick`,elements:[{name:`GlobalProps`},{name:`literal`,value:`'id'`}],raw:`Pick<GlobalProps, 'id'>`},description:`Allows overriding specific props on nested elements or internal component structure. Currently only supports propOverrides.id`}}}})))()}export{g as n,h as t};