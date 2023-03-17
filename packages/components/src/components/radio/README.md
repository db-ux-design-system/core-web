# How to use DBRadio

How to get framework specific features (e.g. `ng-model` and `v-model`) to work with DBRadio element.

## Angular

Third party controls require a ControlValueAccessor to function with angular forms. Adding an `ngDefaultControl` attribute will allow them to use that directive.
[Further information](https://stackoverflow.com/a/46465959)

```ts
<DBRadio ngDefaultControl [(ngModel)]="value"></DBRadio>
```

## React

TODO

## Vue

To get DBRadio work with `v-model` you have to use v-model argument syntax:

```ts
<DBRadio label="Textlabel" v-model:checked="vModelTest"></DBRadio>
```

or using on-change listener:

```ts
<DBRadio label="Textlabel" :value="modelAndChange" :on-change="($event) => { modelAndChange = $event.target.value;
}"/> {{ modelAndChange }}
```
