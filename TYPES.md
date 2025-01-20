# Types

> Confira abaixo as possibilidades de propriedades e suas tipagens.

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

### IPlaygroundContextProps

| Nome      | Tipo                                            | Obrigatório | Descrição                                        |
| --------- | ----------------------------------------------- | ----------- | ------------------------------------------------ |
| getText   | (title: string) => string                       | false       | busca um `text` baseado na sua key               |
| getNumber | (title: string) => number                       | false       | busca um `number` baseado na sua key             |
| getBool   | (title: string) => boolean                      | false       | busca um `boolean` baseado na sua key            |
| getType   | (title: string) => string                       | false       | busca um `type` baseado na sua key               |
| onPress   | (title?: string, callback?: () => void) => void | false       | adiciona um controle as funções de `pressed`     |
| isOpen    | boolean                                         | false       | controle para checagem se a `drawer` está aberta |

### IPlaygroundTextProps

| Nome     | Tipo    | Obrigatório | Descrição                                         |
| -------- | ------- | ----------- | ------------------------------------------------- |
| title    | string  | true        | define qual o `título/key` da opção               |
| value    | string  | true        | define qual o valor a oção começa                 |
| group    | string  | false       | define um grupo para `juntar` muitas propriedades |
| isNumber | boolean | false       | define se este campo deve ser trato como `number` |
| field    | string  | false       | define qual o nome no `código` desse campo        |

### IPlaygroundBoolProps

| Nome  | Tipo   | Obrigatório | Descrição                                  |
| ----- | ------ | ----------- | ------------------------------------------ |
| title | string | true        | define qual o `título/key` da opção        |
| value | string | true        | define qual o valor a oção começa          |
| field | string | false       | define qual o nome no `código` desse campo |

### IPlaygroundTypesProps

| Nome  | Tipo     | Obrigatório | Descrição                                  |
| ----- | -------- | ----------- | ------------------------------------------ |
| title | string   | true        | define qual o `título/key` da opção        |
| value | string   | true        | define qual o valor a oção começa          |
| list  | string[] | true        | define quais as opções disponíveis         |
| field | string   | false       | define qual o nome no `código` desse campo |
