# ADR-06 - Angular Signal Forms Strategy

## Decision and justification

Signal Forms is adopted as an **additional form integration model** for `@db-ux/ngx-core-components`. The existing ControlValueAccessor (CVA) / Reactive Forms / Template-Driven Forms integration is **always registered** and remains fully functional across all supported Angular versions. Signal Forms works alongside CVA via Duck-Typing on ModelSignals.

The chosen strategy is **Option B: Always register CVA provider**. The `NG_VALUE_ACCESSOR` provider is unconditionally registered for all Angular versions. Signal Forms compatibility is achieved solely through Duck-Typing — components expose `value`/`checked` as `ModelSignal` and `hidden`/`errors` as `InputSignal`, which Angular's `[formField]` directive recognizes automatically without any library-side conditional logic.

This approach was chosen because:

1. Angular 21's `ngModel` and `formControlName` still require a CVA provider for Custom Components — removing it breaks Template-Driven and Reactive Forms
2. Angular 22 correctly prioritizes Signal Forms' `[formField]` over CVA when both are present
3. No runtime version detection needed — simpler, more predictable implementation
4. CVA and Signal Forms coexist without conflict

## Problem description and context

The library must simultaneously support the **last three Angular major versions** ([Active and two LTS](https://angular.dev/reference/releases#actively-supported-versions): currently 20, 21, 22):

- **Angular 22**: Signal Forms are stable. The `FormField` directive uses Duck-Typing to detect `FormValueControl` (has `value: ModelSignal`) or `FormCheckboxControl` (has `checked: ModelSignal`).
- **Angular 21**: Signal Forms are experimental. The `[formField]` directive works but is not yet stable. Reactive Forms and Template-Driven Forms still require CVA.
- **Angular 20**: Signal Forms do not exist. The only way to integrate custom form controls is via `ControlValueAccessor` with `NG_VALUE_ACCESSOR` provider registration.

Key insight: In Angular 21+, `ngModel` and `formControlName` on Custom Components **still require** a `NG_VALUE_ACCESSOR` provider. The ModelSignal is only recognized by the `[formField]` directive — not by the legacy forms directives.

## General conditions and decision criteria

### General conditions

- **CVA is always registered**: The `NG_VALUE_ACCESSOR` provider is present unconditionally in all Angular versions. No runtime version detection.
- **Duck-Typing for Signal Forms compatibility**: Components expose `value`/`checked` as `ModelSignal` and `hidden`/`errors` as `InputSignal`. No imports from `@angular/forms/signals` in library output.
- **No imports from `@angular/forms/signals` in library output**: The compiled library must not reference modules that only exist in Angular 21+. All Duck-Typing fields use standard Angular APIs (`model()`, `input()`) available since Angular 17.
- **`value`/`checked` as ModelSignal, `hidden`/`errors` as InputSignal**: The primary form value fields must be writable by Signal Forms (ModelSignal). The optional metadata fields are read-only from the component's perspective (InputSignal).
- **Checked components must NOT have `value` as ModelSignal**: To prevent Signal Forms from misidentifying a checkbox as `FormValueControl`, the `value` property on checked components remains an `InputSignal`.

### Decision criteria

- Backward compatibility with Angular 20, 21, and 22 (no runtime errors)
- Reactive Forms and Template-Driven Forms must continue to work in all versions
- Signal Forms (`[formField]`) must work in Angular 21+ via Duck-Typing
- Minimal implementation complexity — no conditional logic
- No dependency on Angular 21+ exclusive APIs in the compiled output

## Alternatives

### A - Runtime version detection via `shouldRegisterCVA()`

The `NG_VALUE_ACCESSOR` provider is conditionally registered based on `VERSION.major < 21`. For Angular 20, the full CVA lifecycle is active. For Angular 21+, no CVA provider is registered.

#### Evaluation

**Pros:**

- Explicit separation between Signal Forms path and CVA path
- No "redundant" CVA provider in Angular 22

**Cons:**

- **Breaks `ngModel` and `formControlName` in Angular 21**: These directives still require a CVA provider for Custom Components, even when ModelSignals are present
- Adds runtime complexity and a potential source of bugs
- The assumption that Angular 21+ doesn't need CVA is incorrect for Template-Driven and Reactive Forms

### B - Always register CVA provider (chosen)

Register `NG_VALUE_ACCESSOR` unconditionally for all Angular versions. Signal Forms works alongside CVA via Duck-Typing on ModelSignals.

#### Evaluation

**Pros:**

- No version check needed — simpler, more predictable implementation
- Works across all Angular versions without conditional logic
- Reactive Forms, Template-Driven Forms, and Signal Forms all work simultaneously
- Angular 22's `[formField]` directive correctly coexists with CVA (no conflict)
- Less code, less maintenance, fewer edge cases

**Cons:**

- CVA provider is "redundant" when consumers exclusively use `[formField]` in Angular 22+ — but this has no negative impact on performance or behavior

### C - Remove CVA completely

Drop all `NG_VALUE_ACCESSOR` provider registrations and CVA methods immediately.

#### Evaluation

**Pros:**

- Cleanest approach — no legacy code

**Cons:**

- **Breaks Angular 20, 21, and 22** for `ngModel`/`formControlName` usage
- Violates the library's support policy
- Unacceptable until Reactive Forms/Template-Driven Forms are deprecated by Angular itself

### D - Feature detection per input binding

Detect at runtime whether `[formField]` is bound, and only then skip CVA registration.

#### Evaluation

**Pros:**

- No dependency on Angular version number

**Cons:**

- **Technically not possible**: `providers` are evaluated at class definition time (static metadata), before any inputs are bound
- Angular does not support dynamic `provide`/`unprovide` based on runtime input bindings

## Consequences

- **CVA always registered**: No conditional logic, no version detection. Simplifies the implementation.
- **Signal Forms support via Duck-Typing**: Components expose the correct ModelSignal fields (`value`, `checked`, `disabled`) and InputSignal fields (`hidden`, `errors`). No Angular 21+ imports needed.
- **CVA methods annotated with `@legacy`**: All CVA methods receive `@legacy` JSDoc comments signaling future deprecation.
- **Phase-out timeline**: CVA code will be fully removed in a future major version when Angular deprecates Reactive Forms in favor of Signal Forms. This is NOT tied to dropping Angular 20 support — it depends on Angular's own deprecation timeline for `formControlName`/`ngModel`.
- **Deprecation communication**: Migration documentation, JSDoc annotations, and changelog entries communicate the availability of Signal Forms as the recommended new path.
- **Checkbox `value` remains InputSignal**: `DBCheckbox.value` is intentionally kept as `InputSignal` (not converted to `ModelSignal`) to ensure Signal Forms Duck-Typing correctly identifies the component as `FormCheckboxControl` (which requires a `checked` ModelSignal, not a `value` ModelSignal). This is not a breaking change — the public API is unchanged.

## Links

- [Angular Signal Forms Essentials](https://angular.dev/essentials/signal-forms) — Getting started guide for Signal Forms
- [Angular Signal Forms Custom Controls](https://angular.dev/guide/forms/custom-controls) — How custom controls work with Duck-Typing
- [Angular Signal Forms Migration Guide](https://angular.dev/guide/forms/migrate-to-signal-forms) — Migrating from Reactive Forms to Signal Forms
