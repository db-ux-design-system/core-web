# How to use DBSelect

How to get framework specific features (e.g. `ng-model` and `v-model`) to work with DBSelect element.

## Angular

Third party controls require a ControlValueAccessor to function with angular forms. Adding an `ngDefaultControl` attribute will allow them to use that directive.
[Further information](https://stackoverflow.com/a/46465959)

```ts
<DBSelect ngDefaultControl [(ngModel)]="value"></DBSelect>
```

## React

TODO

## Vue

To get DBSelect work with `v-model` you have to use v-model argument syntax:

```ts
<DBSelect label="Textlabel" v-model:value="vModelTest"></DBSelect>
```

or using on-change listener:

```ts
<DBSelect label="Textlabel" :value="modelAndChange" :on-change="($event) => { modelAndChange = $event.target.value;
}"/> {{ modelAndChange }}
```
