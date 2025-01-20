<div align="center">
  <h1 align="center">StoryComponent</h1>

  <div align="center">
     Para atender à necessidade de realizar QAs mais eficientes em componentes React Native, desenvolvi esta biblioteca. Ela facilita o entendimento, permitindo manipular ou alterar informações diretamente nos componentes. Trata-se de uma alternativa prática ao Storybook, que exige implementação individual para cada componente.  
  </div>  
<br/>     
  <div>
    <img src="https://img.shields.io/badge/React--Native@0.70.15-329bb3" alt="React Native" />
    <img src="https://img.shields.io/badge/Typescript-235a97" alt="Typescript" />
    <img src="https://img.shields.io/badge/Styled--components-d279b7" alt="styled-components" />
  </div>  
</div>
<br/><br/>

## 📋 <a name="table">Sumário</a>

1. 👔 [Exemplo](#exemplo)
2. 💻 [Instalar](#instalar)
3. 🍕 [Como usar](#como-usar)
4. ✏️ [Customizar Elementos](#customizar-elementos)
5. 🎤 [Types](./TYPES.md)

<br/>

## <a name="exemplo">👔 Exemplo</a>

![<alt-text>](./src/docfiles/storycomponent.gif)

<br/>

## <a name="instalar">💻 Instalar</a>

> Execute o comando abaixo para instalar o `StoryComponent`.

```js
npm i react-native-story-component
```

<br/>

## <a name="como-usar">🍕 Como usar</a>

> Para utilizá-la, basta instanciar o `StoryComponent`, informar o componente a ser renderizado por meio da propriedade `renderItem` e adicionar os campos que serão manipulados. Confira um exemplo prático abaixo:

```js
import { StoryComponent } from 'react-native-story-component';

<StoryComponent
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
      // define qual o valor o componente será inicializado.
      value: undefined,
      // adiciona uma lista de opções de ícones já instalados no projeto.
      list: [undefined,'pix','pin-drop','pill','photo-camera' ],
      fiedl: 'icon'
    },
  ]}
  // Nome do componente que será mostrado ao gerar o código.
  componentName="Button"
  // Define se o `palco` do componente terá scroll.
  stageScrollEnabled={false}
  // O `pg` retorna todas as funções necessárias para buscar os valores definidos no StoryComponent. Veja as opções disponíveis [aqui](#istorycontextprops).
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

<br/>

## <a name="customizar-elementos">✏️ Customizar Elementos</a>

> Para personalizar os elementos do `StoryComponent`, basta incluir o `StoryComponentThemeProvider` no início do seu projeto e configurar as propriedades de manipulação de cores conforme sua necessidade.

```js
import {StoryComponentThemeProvider} from "react-native-story-component";

<StoryComponentThemeProvider
  openButtonLabel="Abrir Playground"
  backgroundColor="red"
  textColor="#333"
  textColorSelected="blue"
  borderColor="green"
  borderRadius={500}
>
  // Componente que inicia sua aplicação ...
</StoryComponentThemeProvider>;
```
