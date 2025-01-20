# Types

> Confira abaixo as propriedades disponíveis para configuração no `Playground`:

### Playground

| Nome               | Tipo                                                                     | Obrigatório | Descrição                                                       |
| ------------------ | ------------------------------------------------------------------------ | ----------- | --------------------------------------------------------------- |
| text               | [IPlaygroundTextProps[]](#iplaygroundtextprops)                          | false       | define quais os `textos` serão manipulados                      |
| bool               | [IPlaygroundBoolProps[]](#iplaygroundboolprops)                          | false       | define quais campos `booleanos` serão manipulados               |
| types              | [IPlaygroundTypesProps[]](#iplaygroundtypesprops)                        | false       | define quais `types` serão manipulados                          |
| renderItem         | (pg: [IPlaygroundContextProps](#iplaygroundcontextprops)) => JSX.Element | false       | componente a ser renderizado                                    |
| componentName      | string                                                                   | false       | define qual o nome do componente será exibido ao gerar o código |
| stageScrollEnabled | boolean                                                                  | false       | ativa o scroll no `palco`                                       |
| paddingLeft        | number                                                                   | false       | adiciona um espaçamento a esquerda                              |

#### Exemplo:

```js
<StoryComponent
  text={[{title: 'TITLE', value: 'VALUE'}]}
  bool={[{title: 'TITLE', value: 'VALUE'}]}
  types={[{title: 'TITLE', value: 'VALUE'}]}
  renderItem={pg => ({ <></> })}
  componentName='COMPONENT NAME'
  stageScrollEnabled={true}
  paddingLeft={24}
/>
```

### IPlaygroundContextProps

| Nome      | Tipo                                            | Obrigatório | Descrição                                                                                         |
| --------- | ----------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------- |
| getText   | (title: string) => string                       | false       | busca um `text` baseado na sua key                                                                |
| getNumber | (title: string) => number                       | false       | busca um `number` baseado na sua key. Ao utilizar essa opção o keyboard vem com teclado númerico. |
| getBool   | (title: string) => boolean                      | false       | busca um `boolean` baseado na sua key                                                             |
| getType   | (title: string) => string                       | false       | busca um `type` baseado na sua key                                                                |
| onPress   | (title?: string, callback?: () => void) => void | false       | adiciona um controle as funções de `pressed`                                                      |
| isOpen    | boolean                                         | false       | controle para checagem se a `drawer` está aberta                                                  |

#### Exemplo:

```js
...
  renderItem={pg => (
    <Button
      onPress={pg.onPress('onPress', handlePress)}
      label={pg.getText('label')}
      loading={pg.getBool('loading')}
      blocked={pg.getBool('blocked')}
      disabled={pg.getBool('disabled')}
      onBrand={pg.getBool('on brand')}
      icon={pg.getType('icon') as any}
    />
  )}
...
```

### IPlaygroundTextProps

| Nome     | Tipo    | Obrigatório | Descrição                                         |
| -------- | ------- | ----------- | ------------------------------------------------- |
| title    | string  | true        | define qual o `título/key` da opção               |
| value    | string  | true        | define qual o valor a oção começa                 |
| group    | string  | false       | define um grupo para `juntar` muitas propriedades |
| isNumber | boolean | false       | define se este campo deve ser trato como `number` |
| field    | string  | false       | define qual o nome no `código` desse campo        |

#### Exemplo:

```js
import {IStoryTextProps} from "react-native-story-component";

const textList: IStoryTextProps[] = [
  {title: "label", value: "Label"},
  {title: "description", value: "Description"},
  {title: "subtitle", value: "Subtitle"},
];

// Como buscar esse valor
pg.getText("label");
```

### IPlaygroundBoolProps

| Nome  | Tipo   | Obrigatório | Descrição                                  |
| ----- | ------ | ----------- | ------------------------------------------ |
| title | string | true        | define qual o `título/key` da opção        |
| value | string | true        | define qual o valor a oção começa          |
| field | string | false       | define qual o nome no `código` desse campo |

#### Exemplo:

```js
import {IStoryBoolProps} from "react-native-story-component";

const boolList: IStoryBoolProps[] = [
  {title: "loading", value: false},
  {title: "blocked", value: false},
  {title: "disabled", value: false},
];

// Como buscar esse valor
pg.getBool("loading");
```

### IPlaygroundTypesProps

| Nome  | Tipo     | Obrigatório | Descrição                                  |
| ----- | -------- | ----------- | ------------------------------------------ |
| title | string   | true        | define qual o `título/key` da opção        |
| value | string   | true        | define qual o valor a oção começa          |
| list  | string[] | true        | define quais as opções disponíveis         |
| field | string   | false       | define qual o nome no `código` desse campo |

#### Exemplo:

```js
import {IStoryTypesProps} from "react-native-story-component";

const typesList: IStoryTypesProps[] = [
  {
    title: "icon",
    value: undefined,
    list: [undefined, "pix", "pin-drop", "pill", "photo-camera"],
  },
  {
    title: "type",
    list: ["preview", "changed"],
    value: "preview",
  },
];

// Como buscar esse valor
pg.getType('type') as any
```
