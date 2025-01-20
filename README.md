# react-native-story-component

> Para atender à necessidade de realizar QAs mais eficientes em componentes React Native, desenvolvi esta biblioteca. Ela facilita o entendimento, permitindo manipular ou alterar informações diretamente nos componentes. Trata-se de uma alternativa prática ao Storybook, que exige implementação individual para cada componente.

- [Como usar](#como-usar)
- [Customizar Elementos](#customizar-os-elementos-do-playground)
- [Types](#types)

### Como usar

> Para utilizá-la, basta instanciar o `Playground`, informar o componente a ser renderizado por meio da propriedade `renderItem` e adicionar os campos que serão manipulados. Confira um exemplo prático abaixo:

```js
<Playground
  // Define quantos campos de manipulação
  // de texto serão criados.
  text={[
    {title: 'label', value: 'Label', field: 'Label'}
  ]}
  // Define quantos campos de manipulação
  // de booleanos serão criados.
  bool={[
    {title: 'loading', value: false, field: 'loading'},
    {title: 'blocked', value: false, field: 'blocked'},
    {title: 'disabled', value: false, field: 'disabled'},
    {title: 'on brand', value: false, field: 'onBrand'},
  ]}
  // Define quantos campos de manipulação
  // de `types` serão criados.
  types={[
    {
      title: 'icon',
      value: undefined, // define qual o valor o componente será inicializado.
      // adiciona uma lista de opções de ícones já instalados no projeto.
      list: [undefined,'pix','pin-drop','pill','photo-camera' ],
      fiedl: 'icon'
    },
  ]}
  // Nome do componente que será mostrado ao gerar o código.
  componentName="Button"
  // Define se o `palco` do componente terá scroll.
  stageScrollEnabled={false}
  // O `pg` retorna todas as funções necessárias para buscar os valores definidos no playground. Veja as opções disponíveis [aqui](#iplaygroundcontextprops).
  renderItem={pg => (
    // O componente Button será renderizando criando os controles para manipulaçãp.
    // de propriedades conforme foram criados em cada um dos tipos.

    <Button
      onPress={() => pg.onPress('onPress', handlePress)}
      label={pg.getText('label')}
      loading={pg.getBool('loading')}
      blocked={pg.getBool('blocked')}
      disabled={pg.getBool('disabled')}
      onBrand={pg.getBool('on brand')}
      icon={pg.getType('icon') as any}
    />
  )}
/>
```

## Customizar os elementos do Playground

> Para personalizar os elementos do `Playground`, basta incluir o `StoryComponentTheme` no início do seu projeto e configurar as propriedades de manipulação de cores conforme sua necessidade.

```js
<StoryComponentTheme
  buttonName="Abrir Playground"
  backgroundColor="red"
  textColor="#333"
  textColorSelected="blue"
  borderColor="green"
  borderRadius={500}
>
  // Componente que inicia sua aplicação ...
</StoryComponentTheme>
```

## Types

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
