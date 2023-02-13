# How to use DBInput

How to get framework specific features (e.g. ng-model and v-model) to work with DBInput element.

## Angular

Third party controls require a ControlValueAccessor to function with angular forms. Adding an `ngDefaultControl` attribute will allow them to use that directive.
[Further information](https://stackoverflow.com/a/46465959)

```ts
<DBInput ngDefaultControl [(ngModel)]="value"></DBInput>
```

## React

TODO

## Vue

To get DBInput work with `v-model` you have to use v-model argument syntax:

```ts
<DBInput
	label="Textlabel"
	placeholder="Start"
	v-model:value="vModelTest"
></DBInput>
```

or using on-change listener:

```ts
<DBInput label="Textlabel" placeholder="Start" :value="modelAndChange" :on-change="($event) => { modelAndChange = $event.target.value;
}"/> {{ modelAndChange }}
```
