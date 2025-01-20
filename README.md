# react-native-story-component

> Para atender à necessidade de realizar QAs mais eficientes em componentes React Native, desenvolvi esta biblioteca. Ela facilita o entendimento, permitindo manipular ou alterar informações diretamente nos componentes. Trata-se de uma alternativa prática ao Storybook, que exige implementação individual para cada componente.

- [Como usar](#como-usar)
- [Customizar Elementos](#customizar-os-elementos-do-playground)
- [Types](./TYPES.md)

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
