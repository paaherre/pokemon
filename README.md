# PokemonApp

## Intro:

Este proyecto fue realizado para un challenge técnico.
Se deben mostrar el listado de Pokemóns con una imagen, nombre, tipos y número. Debe incluir un filtro por tipo en la parte superior, también se le agregó un buscador por nombre.

## Instalación:

- En la carpeta raiz del proyecto ejecutar `npm install` 
- Ejecutar `npm start`

## Modo de uso:

En la página principal, puede utilizar el buscador de pokemon que realizará la búsqueda parcial por cada letra que ingrese.
Puede realizar la búsqueda por tipo desde la opción de 'Filtrar por Tio' donde se ejecutará el dropdown al pasar el mouse por el texto o la flecha:

![Filter](https://github.com/paaherre/pokemon/blob/main/src/assets/screenshots/typeFilter.png?raw=true)

Al seleccionar algún tipo en particular la imagen crece en tamaño y toma el color correspondiente al tipo.
Del listado de tipos puede selecionar uno o más, y se mostrarán unicamente los pokemones, que alguno de sus tipos coincida con el filtrado.
También puede encontrar una leyenda del nombre de cada tipo al pasar el mouse sobre el tipo en cada tarjeta de pokemón.

## Tecnologías:

Para crear la aplicación se utilizó Create [Create React App](https://github.com/facebook/create-react-app).
Se utilizaron los CDN de Bootstrap para las tarjetas y flexbox.
Se crearon los diseños utilizando CSS.
Se usaron hooks de React para los estados y ciclos de vida de los componentes.
Se utlizó la información brindad por [PokeApi](https://pokeapi.co/).
