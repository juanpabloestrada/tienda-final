# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



Proyecto final de React 

Tienda de ropa con uso de una API

Se realizo una pagina de venta de ropa utilizando una Api para generar el contenido que se vende, este contenido puede visualizarse de manera individual o bien en un listado donde aparecen todos los productos, dentro de la visualización individual podemos agregar uno o mas articulos al carrito, dentro del que se verá reflejada la seleccion de productos que hagamo, de igual forma dentro de esta seccion podemos agregar productos a los seleccionados originalmente.

Para generar todo el contenido de Css de la pagina utilicé tilewind

En la barra de menu principal (header), tenemos habilitados los siguientes enlaces:

1.- el logotipo nos redirecciona a la pagina principal
2.- el carrito, nos lleva al carrito
3.- la imagen junto al carrito, esta nos direcciona para realizar un login dentro de la pagina 

En la pagina principal podemos encontrar:
1.- carrusel en la parte superior
2.-diversos modelos, los cuales están divididos por categorías, y cada uno de estos está habilitado para mostrarnos una descripcion de cada uno de los productos, así como para comprar directo, ya sea desde página principal o bien desde donde se detalla cada uno de los productos

Dentro de carrito de compras:
1.- podemos agregar mas productos o podmeos vaciar el carrito
2.- podemos regresar a la pagina principal mediante el boton seguir comprando 
3.- podemos realizar el pago del carrito, para realizar este proceso es necesario hacer un sing in.
4.- podemos realizar el pago con tarjeta 

Sing In:
1.- podemos hacer sing in con nuestro correo, este proceso de realizo mediante el úso de firebase
2.- podemos hacer check out
