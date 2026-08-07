# @db-ux/core-eslint-plugin

<!-- hy-mt2-i18n:start -->
[English](./README.md) | [中文](./README_zh-CN.md) | [日本語](./README_ja.md) | **Español**
<!-- hy-mt2-i18n:end -->


Plugin de ESLint para validar el uso correcto de los componentes del sistema de diseño DB UX en proyectos React, Vue y Angular.

## Instalación

```shell
npm install eslint @db-ux/core-eslint-plugin --save-dev
```

**Para proyectos Vue**, también instale `vue-eslint-parser`:

```shell
npm install vue-eslint-parser --save-dev
```

**Para proyectos Angular**, también instale `@angular-eslint/template-parser`:

```shell
npm install @angular-eslint/template-parser --save-dev
```

**Para proyectos de React/TypeScript**, también instale `@typescript-eslint/parser`:

```shell
npm install @typescript-eslint/parser --save-dev
```

## Uso

Añada esto a su configuración de ESLint:

**ESLint 9+ (configuración plana):**

```js
// eslint.config.js
import dbUx from "@db-ux/core-eslint-plugin";

export default [
	{
		plugins: {
			"db-ux": dbUx
		},
		rules: dbUx.configs.recommended.rules
	}
];
```

**Para proyectos Vue**, configure el analizador de Vue:

```js
import dbUx from "@db-ux/core-eslint-plugin";
import vueParser from "vue-eslint-parser";
import tsParser from "@typescript-eslint/parser";

export default [
	{
		files: ["**/*.vue"],
		languageOptions: {
			parser: vueParser,
			parserOptions: {
				parser: tsParser,
				ecmaVersion: "latest",
				sourceType: "module"
			}
		},
		plugins: {
			"db-ux": dbUx
		},
		rules: dbUx.configs.recommended.rules
	}
];
```

**Para proyectos Angular**, configure el analizador de plantillas de Angular:

```js
import dbUx from "@db-ux/core-eslint-plugin";
import angularTemplateParser from "@angular-eslint/template-parser";

export default [
	{
		files: ["**/*.html"],
		languageOptions: {
			parser: angularTemplateParser
		},
		plugins: {
			"db-ux": dbUx
		},
		rules: dbUx.configs.recommended.rules
	}
];
```

**O active las reglas individualmente:**

```js
import dbUx from "@db-ux/core-eslint-plugin";

export default [
	{
		plugins: {
			"db-ux": dbUx
		},
		rules: {
			"db-ux/button-no-text-requires-tooltip": "error"
		}
	}
];
```

**Para proyectos de React/TypeScript**, configure el analizador de TypeScript:

```js
import dbUx from "@db-ux/core-eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
	{
		files: ["**/*.ts", "**/*.tsx"],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: "latest",
				sourceType: "module",
				ecmaFeatures: { jsx: true }
			}
		},
		plugins: {
			"db-ux": dbUx
		},
		rules: dbUx.configs.recommended.rules
	}
];
```

## Reglas

### `button-no-text-requires-tooltip`

Asegura de que los botones con la propiedad `noText` tengan tanto un `icon` (o `iconLeading`/`iconTrailing`) como un hijo `DBTooltip`.

**❌ Inválido:**

```jsx
// React
<DBButton noText>Guardar</DBButton>
<DBButton icon="save" noText>Guardar</DBButton>

// Angular
<db-button [noText]="true">ABC</db-button>
<db-button icon="x" [noText]="true">ABC</db-button>

// Vue
<DBButton :noText="true">ABC</DBButton>
<DBButton icon="x" :noText="true">ABC</DBButton>
```

**✅ Válido:**

```jsx
// React
<DBButton icon="save" noText>
  Guardar
  <DBTooltip>Guardar documento</DBTooltip>
</DBButton>

// Angular
<db-button icon="x_placeholder" [noText]="true">
  ABC
  <db-tooltip>ABC</db-tooltip>
</db-button>

// Vue
<DBButton icon="x_placeholder" :noText="true">
  ABC
  <DBTooltip>ABC</DBTooltip>
</DBButton>
```

## Frameworks soportados

- React (JSX/TSX)
- Vue (SFC)
- Angular (plantillas)

El complemento detecta automáticamente el framework en función de la extensión del archivo y del analizador.

### `button-type-required`

Asegura que DBButton cuente con un atributo `type` explícito (submit, button o reset).

**❌ Inválido:**

```jsx
<DBButton>Guardar</DBButton>
<db-button>Guardar</db-button>
```

**✅ Válido:**

```jsx
<DBButton type="button">Guardar</DBButton>
<DBButton type="submit">Enviar</DBButton>
<DBButton type="reset">Restablecer</DBButton>
```

### `form-label-required`

Asegura que los componentes de formulario (DBInput, DBTextarea, DBSelect, DBCustomSelect, DBCheckbox, DBRadio, DBSwitch) cuenten con un atributo `label` para mejorar la accesibilidad.

**❌ Inválido:**

```jsx
// React
<DBInput />
<DBCheckbox />
<DBSelect />

// Angular
<db-input></db-input>
<db-checkbox></db-checkbox>

// Vue
<DBInput />
<DBCheckbox />
```

**✅ Válido:**

```jsx
// React
<DBInput label="Nombre" />
<DBCheckbox label="Aceptar términos" />
<DBSelect label="País" />

// Angular
<db-input label="Nombre"></db-input>
<db-checkbox [label]="labelText"></db-checkbox>

// Vue
<DBInput :label="dynamicLabel" />
<DBCheckbox label="Aceptar términos" />
```

### `prefer-icon-attribute`

Se recomienda utilizar el atributo `icon` en lugar del componente hijo `<DBIcon>` para aquellos componentes que soportan atributos de ícono.

**❌ Inválido:**

```jsx
// React
<DBButton><DBIcon icon="save" /></DBButton>
<DBInput><DBIcon icon="search" /></DBInput>

// Angular
<db-button><db-icon icon="save"></db-icon></db-button>

// Vue
<DBLink><DBIcon icon="external" /></DBLink>
```

**✅ Válido:**

```jsx
// React
<DBButton icon="save">Guardar</DBButton>
<DBInput icon="search" />

// Angular
<db-button icon="save">Guardar</db-button>

// Vue
<DBLink :icon="iconName">Enlace</DBLink>
```

### `text-or-children-required`

Asegura de que los componentes (DBAccordionItem, DBBadge, DBButton, DBLink, DBIcon, DBInfotext, DBNavigationItem, DBNotification) tengan bien una propiedad `text` o contenido entre hijos.

**❌ Inválido:**

```jsx
// React
<DBButton />
<DBLink />
<DBBadge />

// Angular
<db-button></db-button>
<db-notification></db-notification>

// Vue
<DBIcon icon="test" />
```

**✅ Válido:**

```jsx
// React
<DBButton text="Guardar" />
<DBButton>Guardar</DBButton>
<DBLink>Haz clic aquí</DBLink>

// Angular
<db-button text="Guardar"></db-button>
<db-button>Guardar</db-button>

// Vue
<DBBadge>Nuevo</DBBadge>
<DBIcon icon="test">Etiqueta</DBIcon>
```

### `no-interactive-tooltip-content`

Impide la inclusión de elementos interactivos (botones, enlaces, campos de entrada) dentro de DBTooltip. Utilice DBPopover para el contenido interactivo.

**❌ Inválido:**

```jsx
// React
<DBTooltip><button>Click</button></DBTooltip>
<DBTooltip><DBButton Action</DBButton></DBTooltip>
<DBTooltip><a href="#">Link</a></DBTooltip>

// Angular
<db-tooltip><button>Click</button></db-tooltip>
<db-tooltip><db-button Action</db-button></db-tooltip>

// Vue
<DBTooltip><DBLink href="#">Link</DBLink></DBTooltip>
```

**✅ Válido:**

```jsx
// React
<DBTooltip>Texto simple</DBTooltip>
<DBTooltip><span>Texto con span</span></DBTooltip>
<DBTooltip><p>Párrafo</p></DBTooltip>

// Para contenido interactivo, use DBPopover:
<DBPopover><DBButton>Action</DBButton></DBPopover>
```

### `tooltip-requires-interactive-parent`

Asegura que DBTooltip sea un hijo de un elemento interactivo para mejorar la accesibilidad (los usuarios deben poder enfocar al elemento padre).

**❌ Inválido:**

```jsx
// React
<span>Mostrar más<DBTooltip>XXX</DBTooltip></span>
<div>Texto<DBTooltip>Información</DBTooltip></div>
<DBBadge>Insignia<DBTooltip>Información</DBTooltip></DBBadge>

// Angular
<span>Mostrar más<db-tooltip>XXX</db-tooltip></span>

// Vue
<div>Texto<DBTooltip>Información</DBTooltip></div>
```

**✅ Válido:**

```jsx
// React
<button>Guardar<DBTooltip>Guardar documento</DBTooltip></button>
<DBButton>Guardar<DBTooltip>Guardar documento</DBTooltip></DBButton>
<a href="#">Enlace<DBTooltip>Más información</DBTooltip></a>

// Angular
<db-button>Guardar<db-tooltip>Guardar documento</db-tooltip></db-button>

// Vue
<DBLink href="#">Enlace<DBTooltip>Más información</DBTooltip></DBLink>
```

### `no-nested-accordion`

Impide el anidamiento de componentes DBAccordion entre sí, ya que confunde a los usuarios.

**❌ Inválido:**

# Restricciones estrictas
1. **Bloqueo de estructura**: Mantener absolutamente intacta la estructura original de Markdown, los sangrados, los niveles de título, las tablas, los enlaces, las URL, las insignias, los bloques de código y el código inline.
2. **Traducción selectiva**: Solo traducir el contenido de lenguaje natural visible para el usuario.
3. **Prohibición de modificaciones**: Está **estrictamente prohibido** traducir o cambiar etiquetas de código, nombres de clave, placeholders de variables (como {{var}}, ${var}, %s, %d, etc.), ejemplos de comandos, rutas de archivos, nombres de proyectos, nombres de API, nombres de paquetes, nombres de modelos, identificadores y símbolos de código; a menos que ya exista una traducción correspondiente en la información de contexto.
4. La traducción de términos, estilos y nombres propios debe ser coherente con la información de contexto proporcionada.

**✅ Válido:**

```jsx
// React
<DBAccordion><DBAccordionItem>Elemento</DBAccordionItem></DBAccordion>
<div><DBAccordion>Primero</DBAccordion></div>
<DBAccordion>Primero</DBAccordion><DBAccordion>Segundo</DBAccordion>
```

### `reglas-de-colocación-de-la-insignia-en-la-esquina`

Asegura que los DBBadge con colocación en esquina tengan un máximo de 3 caracteres y un atributo label para mejorar la accesibilidad.

**❌ Inválido:**

```jsx
// React
<DBBadge placement="corner-top-left">9999</DBBadge>
<DBBadge placement="corner-top-right" text="1234" />
<DBBadge placement="corner-top-left">99</DBBadge>

// Angular
<db-badge placement="corner-top-left">9999</db-badge>

// Vue
<DBBadge placement="corner-top-right">Long text</DBBadge>
```

**✅ Válido:**

```jsx
// React
<DBBadge>El texto largo está permitido</DBBadge>
<DBBadge placement="inline">Texto largo</DBBadge>
<DBBadge placement="corner-top-left" label="Nuevos elementos">99+</DBBadge>
<DBBadge placement="corner-top-right" text="5" label="Notificaciones" />

// La corrección automática convierte:
<DBBadge placement="corner-top-left">9999</DBBadge>
// en:
<DBBadge placement="corner-top-left" label="9999">999</DBBadge>
```

### `badge-no-inline-en-elementos-interactivos`

Impide el uso de DBBadge con colocación “inline” dentro de elementos interactivos (DBButton, DBLink). Utilice la colocación en esquina en su lugar.

**❌ Inválido:**

```jsx
// React
<DBButton><DBBadge placement="inline">Badge</DBBadge>Button</DBButton>
<DBLink><DBBadge placement="inline">Badge</DBBadge>Link</DBLink>

// Angular
<db-button><db-badge placement="inline">Badge</db-badge>Button</db-button>

// Vue
<DBButton><DBBadge placement="inline">Badge</DBBadge>Button</DBButton>
```

**✅ Válido:**

```jsx
// React
<DBBadge placement="inline">Badge</DBBadge>
<DBButton><DBBadge placement="corner-top-right" label="Nuevo">5</DBBadge>Button</DBButton>
<DBLink><DBBadge placement="corner-top-left" label="Cuenta">3</DBBadge>Link</DBLink>

// La función de corrección automática convierte:
<DBButton><DBBadge placement="inline">Badge</DBBadge>Button</DBButton>
// en:
<DBButton><DBBadge placement="corner-top-right">Badge</DBBadge>Button</DBButton>
```

### `button-single-icon-attribute`

Asegura que DBButton utilice solo un atributo de ícono (icon, iconLeading o iconTrailing).

**❌ Inválido:**

```jsx
// React
<DBButton icon="save" iconLeading="save">Guardar</DBButton>
<DBButton icon="save" iconTrailing="arrow">Guardar</DBButton>
<DBButton iconLeading="save" iconTrailing="arrow">Guardar</DBButton>

// Angular
<db-button icon="save" [iconLeading]="iconName">Guardar</db-button>

// Vue
<DBButton icon="save" :iconTrailing="icon">Guardar</DBButton>
```

**✅ Válido:**

```jsx
// React
<DBButton icon="save">Guardar</DBButton>
<DBButton iconLeading="save">Guardar</DBButton>
<DBButton iconTrailing="arrow">Siguiente</DBButton>

// Angular
<db-button icon="save">Guardar</db-button>
<db-button [iconLeading]="iconName">Guardar</db-button>

// Vue
<DBButton :iconTrailing="icon">Siguiente</DBButton>
```

### `link-external-security`

Asegura que los enlaces externos cuenten con los atributos de seguridad adecuados (target="\_blank" y referrerPolicy).

**❌ Inválido:**

```jsx
// React
<DBLink content="external">Externo</DBLink>
<DBLink content="external" target="_blank">Externo</DBLink>
<DBLink target="_blank">Externo</DBLink>

// Angular
<db-link content="external">Externo</db-link>

// Vue
<DBLink content="external" :target="linkTarget">Externo</DBLink>
```

**✅ Válido:**

```jsx
// React
<DBLink href="#">Enlace interno</DBLink>
<DBLink content="external" target="_blank" referrerPolicy="no-referrer">Externo</DBLink>

// Angular
<db-link content="external" target="_blank" referrerPolicy="no-referrer">Externo</db-link>

// Vue
<DBLink content="external" target="_blank" :referrerPolicy="policy">Externo</DBLink>
```

### `select-requires-options`

Asegura que DBSelect cuente con una propiedad options o hijos option.

**❌ Inválido:**

```jsx
// React
<DBSelect label="Country" />
<DBSelect label="Country"></DBSelect>

// Angular
<db-select label="Country"></db-select>

// Vue
<DBSelect label="Country" />
```

**✅ Válido:**

```jsx
// React
<DBSelect label="País">
  <option value="de">Alemania</option>
  <option value="us">EE. UU.</option>
</DBSelect>
<DBSelect label="País" options={countryOptions} />

// Angular
<db-select label="País">
  <option value="de">Alemania</option>
</db-select>
<db-select label="País" [options]="options"></db-select>

// Vue
<DBSelect label="País" :options="options" />
```

### `close-button-text-required`

Asegura que los componentes con botones de cierre cuenten con atributos de texto adecuados para la accesibilidad.

**❌ Inválido:**

```jsx
// React
<DBNotification closeable>Mensaje</DBNotification>
<DBDrawerHeader>Título</DBDrawerHeader>
<DBCustomSelect label="Seleccionar" />

// Angular
<db-notification closeable>Mensaje</db-notification>
<db-drawer-header>Título</db-drawer-header>

// Vue
<DBCustomSelect label="Seleccionar" />
<DBDrawerHeader>Título</DBDrawerHeader>
```

**✅ Válido:**

```jsx
// React
<DBNotification closeButtonText="Cerrar">Mensaje</DBNotification>
<DBDrawerHeader closeButtonText="Cerrar el panel">Título</DBDrawerHeader>
<DBCustomSelect mobileCloseButtonText="Cerrar" label="Seleccionar" />

// Angular
<db-notification closeButtonText="Cerrar">Mensaje</db-notification>
<db-drawer-header [closeButtonText]="closeText">Título</db-drawer-header>

// Vue
<DBCustomSelect :mobileCloseButtonText="closeText" label="Seleccionar" />
<DBDrawerHeader :closeButtonText="closeText">Título</DBDrawerHeader>
```

### `drawer-header-required`

Asegura que DBDrawer cuente con un DBDrawerHeader para mejorar la accesibilidad. El encabezado proporciona el botón de cierre y el atributo `aria-labelledby` para el diálogo.

**❌ Inválido:**

```jsx
// React
<DBDrawer>Content</DBDrawer>
<DBDrawer open={true}>Content</DBDrawer>

// Angular - falta el atributo `header` para la proyección de slots
<db-drawer><db-drawer-header>Title</db-drawer-header>Content</db-drawer>
<db-drawer>Content</db-drawer>

// Vue - falta un slot con nombre
<DBDrawer><DBDrawerHeader>Title</DBDrawerHeader>Content</DBDrawer>
<DBDrawer>Content</DBDrawer>
```

**✅ Válido:**

```jsx
// React
<DBDrawer header={<DBDrawerHeader closeButtonText="Cerrar">Título</DBDrawerHeader>}>Contenido</DBDrawer>

// Angular: utiliza el atributo `header` para la proyección ng-content
<db-drawer><db-drawer-header header closeButtonText="Cerrar">Título</db-drawer-header>Contenido</db-drawer>
<db-drawer><ng-container header><db-drawer-header closeButtonText="Cerrar">Título</db-drawer-header></ng-container>Contenido</db-drawer>

// Vue: utiliza el slot con nombre
<DBDrawer><template v-slot:header><DBDrawerHeader closeButtonText="Cerrar">Título</DBDrawerHeader></template>Contenido</DBDrawer>
<DBDrawer><template #header><DBDrawerHeader closeButtonText="Cerrar">Título</DBDrawerHeader></template>Contenido</DBDrawer>
```

### `sub-component-required-parent`

Asegura que los subcomponentes se utilicen dentro del componente padre y el slot requeridos.

**Relaciones configuradas:**

| Sub-componente     | Padre requerido | Ranura requerida |
| ----------------- | --------------- | -------------- |
| `DBDrawerHeader`  | `DBDrawer`      | `header`       |
| `DBDrawerFooter`  | `DBDrawer`      | `footer`       |
| `DBAccordionItem` | `DBAccordion`   | (hijo directo) |

**❌ Inválido:**

```jsx
// React
<div><DBDrawerHeader closeButtonText="Cerrar">Título</DBDrawerHeader></div>
<div><DBAccordionItem headlinePlain="Prueba">Contenido</DBAccordionItem></div>

// Angular: falta el atributo slot o el padre es incorrecto
<div><db-drawer-header closeButtonText="Cerrar">Título</db-drawer-header></div>
<db-drawer><db-drawer-header closeButtonText="Cerrar">Título</db-drawer-header></db-drawer>

// Vue: falta el slot nombrado o el padre es incorrecto
<div><DBDrawerHeader closeButtonText="Cerrar">Título</DBDrawerHeader></div>
<DBDrawer><DBDrawerHeader closeButtonText="Cerrar">Título</DBDrawerHeader></DBDrawer>
```

**✅ Válido:**

```jsx
// React
<DBDrawer header={<DBDrawerHeader closeButtonText="Cerrar">Título</DBDrawerHeader>}>Contenido</DBDrawer>
<DBAccordion><DBAccordionItem headlinePlain="Prueba">Contenido</DBAccordionItem></DBAccordion>

// Angular - con atributo slot
<db-drawer><db-drawer-header header closeButtonText="Cerrar">Título</db-drawer-header></db-drawer>
<db-drawer><ng-container header><db-drawer-header closeButtonText="Cerrar">Título</db-drawer-header></ng-container></db-drawer>
<db-accordion><db-accordion-item headlinePlain="Prueba">Contenido</db-accordion-item></db-accordion>

// Vue - con slot nombrado
<DBDrawer><template #header><DBDrawerHeader closeButtonText="Cerrar">Título</DBDrawerHeader></template></DBDrawer>
<DBAccordion><DBAccordionItem headlinePlain="Prueba">Contenido</DBAccordionItem></DBAccordion>
```

### `header-burger-menu-label-required`

Asegura que DBHeader cuente con el atributo burgerMenuLabel para mejorar la accesibilidad.

**❌ Inválido:**

# Restricciones estrictas
1. **Bloqueo estructural**: Mantener absolutamente intacta la estructura de datos Markdown original, los sangrados, los niveles de título, las tablas, los enlaces, las URL, las insignias, los bloques de código y el código inline.
2. **Traducción selectiva**: Solo traducir el contenido de lenguaje natural visible para el usuario.
3. **Prohibición de modificaciones**: Está **estrictamente prohibido** traducir o cambiar etiquetas de código, nombres de clave, placeholders de variables (como {{var}}, ${var}, %s, %d, etc.), ejemplos de comandos, rutas de archivos, nombres de proyectos, nombres de API, nombres de paquetes, nombres de modelos, identificadores y símbolos de código; a menos que ya se haya proporcionado una traducción correspondiente en la información de contexto.
4. Las traducciones de términos, estilos y nombres propios deben ser consistentes con la información de contexto proporcionada.

**✅ Válido:**

```jsx
// React
<DBHeader burgerMenuLabel="Menú">Contenido</DBHeader>
<DBHeader burgerMenuLabel="Abrir navegación">Contenido</DBHeader>

// Angular
<db-header burgerMenuLabel="Menú">Contenido</db-header>
<db-header [burgerMenuLabel]="menuLabel">Contenido</db-header>

// Vue
<DBHeader :burgerMenuLabel="label">Contenido</DBHeader>
```

### `navigation-item-back-button-text-required`

Asegura que DBNavigationItem cuente con el atributo backButtonText para la accesibilidad.

**❌ Inválido:**

```jsx
// React
<DBNavigationItem>Item</DBNavigationItem>
<DBNavigationItem icon="home">Item</DBNavigationItem>

// Angular
<db-navigation-item>Item</db-navigation-item>

// Vue
<DBNavigationItem>Item</DBNavigationItem>
```

**✅ Válido:**

```jsx
// React
<DBNavigationItem backButtonText="Atrás">Elemento</DBNavigationItem>
<DBNavigationItem backButtonText="Volver atrás">Elemento</DBNavigationItem>

// Angular
<db-navigation-item backButtonText="Atrás">Elemento</db-navigation-item>
<db-navigation-item [backButtonText]="backText">Elemento</db-navigation-item>

// Vue
<DBNavigationItem :backButtonText="text">Elemento</DBNavigationItem>
```

### `custom-select-tags-remove-text-required`

Asegura que DBCustomSelect con selectedType="tag" cuente con el atributo removeTagsTexts para mejorar la accesibilidad.

**❌ Inválido:**

```jsx
// React
<DBCustomSelect label="Seleccionar" selectedType="tag" />
<DBCustomSelect label="Seleccionar" selectedType="tag" options={opts} />

// Angular
<db-custom-select label="Seleccionar" selectedType="tag"></db-custom-select>

// Vue
<DBCustomSelect label="Seleccionar" selectedType="tag" />
```

**✅ Válido:**

```jsx
// React
<DBCustomSelect label="Seleccionar" />
<DBCustomSelect label="Seleccionar" selectedType="text" />
<DBCustomSelect label="Seleccionar" selectedType="tag" removeTagsTexts={["Eliminar A", "Eliminar B"]} />

// Angular
<db-custom-select label="Seleccionar" selectedType="tag" removeTagsTexts="texts"></db-custom-select>

// Vue
<DBCustomSelect label="Seleccionar" selectedType="tag" :removeTagsTexts="texts" />
```

### `tag-removable-remove-button-required`

Asegura que el DBTag con behavior="removable" cuente con el atributo removeButton para mejorar la accesibilidad.

**❌ Inválido:**

```jsx
// React
<DBTag behavior="removable">Tag</DBTag>
<DBTag behavior="removable" semantic="successful">Tag</DBTag>

// Angular
<db-tag behavior="removable">Tag</db-tag>

// Vue
<DBTag behavior="removable">Tag</DBTag>
```

**✅ Válido:**

```jsx
// React
<DBTag>Tag</DBTag>
<DBTag behavior="static">Tag</DBTag>
<DBTag behavior="removable" removeButton="Eliminar">Tag</DBTag>

// Angular
<db-tag behavior="removable" removeButton="Eliminar">Tag</db-tag>

// Vue
<DBTag behavior="removable" :removeButton="eliminarTexto">Tag</DBTag>
```

### `form-validation-message-required`

Asegura que los componentes de formulario con atributos de validación tengan un mensaje de error para ofrecer retroalimentación al usuario.

**❌ Inválido:**

```jsx
// React
<DBInput label="Name" required />
<DBTextarea label="Text" maxLength={100} />
<DBInput label="Age" min={18} />
<DBInput label="Email" pattern=".*@.*" />

// Angular
<db-input label="Name" required></db-input>

// Vue
<DBInput label="Score" :max="100" />
```

**✅ Válido:**

```jsx
// React
<DBInput label="Name" />
<DBInput label="Name" required invalidMessage="Es necesario" />
<DBTextarea label="Text" maxLength={100} invalidMessage="Demasiado largo" />
<DBInput label="Age" min={18} invalidMessage="Debe ser 18 o más" />
<DBInput label="Email" pattern=".*@.*" invalidMessage="Correo electrónico inválido" />

// Se aplica a: DBInput, DBTextarea, DBSelect, DBCustomSelect, DBCheckbox
// Verifica: required, maxLength, minLength (Input/Textarea), min, max, pattern (solo Input)
```

### `input-type-required`

Sugiere agregar el atributo type a DBInput para mejorar la experiencia del desarrollador.

**❌ Inválido:**

# Restricciones estrictas
1. **Bloqueo estructural**: Mantener absolutamente intacta la estructura de datos Markdown original, los sangrados, los niveles de título, las tablas, los enlaces, las URLs, las insignias, los bloques de código y el código inline.
2. **Traducción selectiva**: Solo traducir el contenido de lenguaje natural visible para el usuario.
3. **Prohibición de modificaciones**: Está **estrictamente prohibido** traducir o cambiar etiquetas de código, nombres de clave, placeholders de variables (como {{var}}, ${var}, %s, %d, etc.), ejemplos de comandos, rutas de archivos, nombres de proyectos, nombres de API, nombres de paquetes, nombres de modelos, identificadores y símbolos de código; a menos que ya se haya proporcionado una traducción correspondiente en la información de contexto.
4. Las traducciones de términos, estilos y nombres propios deben ser consistentes con la información de contexto proporcionada.

**✅ Válido:**

```jsx
// React
<DBInput label="Name" type="text" />
<DBInput label="Email" type="email" />
<DBInput label="Password" type="password" />

// La función de corrección automática agrega:
<DBInput label="Name" type="text" />
```

### `input-file-type-validation`

Asegura que los elementos DBInput con tipo “file” tengan el atributo accept, y valida los atributos específicos para archivos.

**❌ Inválido:**

```jsx
// React
<DBInput label="Archivo" type="file" />
<DBInput label="Nombre" type="text" multiple />
<DBInput label="Nombre" type="text" accept=".pdf" />

// Angular
<db-input label="Archivo" type="file"></db-input>

// Vue
<DBInput label="Correo electrónico" type="email" accept=".pdf" multiple />
```

**✅ Válido:**

```jsx
// React
<DBInput label="Name" type="text" />
<DBInput label="File" type="file" accept=".pdf" />
<DBInput label="Files" type="file" accept="image/*" multiple />

// Angular
<db-input label="File" type="file" accept=".jpg"></db-input>

// Vue
<DBInput label="File" type="file" accept="image/*" :multiple="true" />
```
