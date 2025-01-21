# Types

> Confira abaixo as propriedades disponíveis para configuração no `ComponentStory`:

### ComponentStory

| Nome               | Tipo                                                           | Obrigatório | Descrição                                                       |
| ------------------ | -------------------------------------------------------------- | ----------- | --------------------------------------------------------------- |
| text               | [IStoryTextProps[]](#istorytextprops)                          | true        | define quais os `textos` serão manipulados                      |
| bool               | [IStoryBoolProps[]](#istoryboolprops)                          | true        | define quais campos `booleanos` serão manipulados               |
| types              | [IStoryTypesProps[]](#istorytypesprops)                        | true        | define quais `types` serão manipulados                          |
| renderItem         | (pg: [IStoryContextProps](#istorycontextprops)) => JSX.Element | true        | componente a ser renderizado                                    |
| componentName      | string                                                         | false       | define qual o nome do componente será exibido ao gerar o código |
| stageScrollEnabled | boolean                                                        | false       | ativa o scroll no `palco`                                       |
| paddingLeft        | number                                                         | false       | adiciona um espaçamento a esquerda                              |

#### Exemplo:

```js
<ComponentStory
  text={[{title: 'TITLE', value: 'VALUE'}]}
  bool={[{title: 'TITLE', value: 'VALUE'}]}
  types={[{title: 'TITLE', value: 'VALUE'}]}
  renderItem={pg => ({ <></> })}
  componentName='COMPONENT NAME'
  stageScrollEnabled={true}
  paddingLeft={24}
/>
```

### IStoryContextProps

| Nome      | Tipo                                            | Obrigatório | Descrição                                                                                         |
| --------- | ----------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------- |
| getText   | (title: string) => string                       | false       | busca um `text` baseado na sua key                                                                |
| getNumber | (title: string) => number                       | false       | busca um `number` baseado na sua key. Ao utilizar essa opção o keyboard vem com teclado númerico. |
| getBool   | (title: string) => boolean                      | false       | busca um `boolean` baseado na sua key                                                             |
| getType   | (title: string) => string                       | false       | busca um `type` baseado na sua key                                                                |
| onPress   | (title?: string, callback?: () => void) => void | false       | adiciona um controle as funções de `pressed` que exibe um texto quando o botão é pressionado.     |
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

### IStoryTextProps

| Nome     | Tipo    | Obrigatório | Descrição                                         |
| -------- | ------- | ----------- | ------------------------------------------------- |
| title    | string  | true        | define qual o `título/key` da opção               |
| value    | string  | true        | define qual o valor a opção começa                |
| group    | string  | false       | define um grupo para `juntar` muitas propriedades |
| isNumber | boolean | false       | define se este campo deve ser trato como `number` |
| field    | string  | false       | define qual o nome no `código` desse campo        |

#### Exemplo:

```js
import {IStoryTextProps} from "react-native-component-story";

const textList: IStoryTextProps[] = [
  {title: "label", value: "Label"},
  {title: "description", value: "Description"},
  {title: "subtitle", value: "Subtitle"},
];

// Como buscar esse valor
pg.getText("label");
```

### IStoryBoolProps

| Nome  | Tipo   | Obrigatório | Descrição                                  |
| ----- | ------ | ----------- | ------------------------------------------ |
| title | string | true        | define qual o `título/key` da opção        |
| value | string | true        | define qual o valor a opção começa         |
| field | string | false       | define qual o nome no `código` desse campo |

#### Exemplo:

```js
import {IStoryBoolProps} from "react-native-component-story";

const boolList: IStoryBoolProps[] = [
  {title: "loading", value: false},
  {title: "blocked", value: false},
  {title: "disabled", value: false},
];

// Como buscar esse valor
pg.getBool("loading");
```

### IStoryTypesProps

| Nome  | Tipo     | Obrigatório | Descrição                                  |
| ----- | -------- | ----------- | ------------------------------------------ |
| title | string   | true        | define qual o `título/key` da opção        |
| value | string   | true        | define qual o valor a opção começa         |
| list  | string[] | true        | define quais as opções disponíveis         |
| field | string   | false       | define qual o nome no `código` desse campo |

#### Exemplo:

```js
import {IStoryTypesProps} from "react-native-component-story";

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
