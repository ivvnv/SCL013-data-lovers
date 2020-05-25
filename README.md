![header](https://raw.githubusercontent.com/ivvnv/SCL013-data-lovers/master/src/img/readme_portada.png)

# Wizards Unite: Guía para el Novato Absoluto

## Índice

* [1. Introducción](#1-Introducción)
* [2. Definición de Usuario](#2-Definición-de-Usuario)
* [3. Historias de Usuarios](#3-Historias-de-Usuarios)
* [4. Proceso y decisiones de Diseño](#4-Proceso-y-decisiones-de-Diseño)
* [5. Prototipo baja fidelidad](#5-Prototipo-baja-fidelidad)
* [6. Prototipo alta fidelidad](#6-Prototipo-alta-fidelidad)
* [7. Cómo utilzar la plataforma](#7-Cómo-utilizar-la-plataforma)
* [8. Testeos](#8-Testeos)
* [9. Pruebas Unitarias](#9-Pruebas-Unitarias)
* [10. Checklist](#10-checklist)

***

## 1. Introducción

"Guía para el Novato Absoluto de Harry Potter" es nuestro proyecto de *Data Lovers* en Laboratoria. Nuestro sitio está orientado a personas principiantes en el juego Wizards Unite del universo Harry Potter. En esta app podrán visualizar la descripción de cada personaje con un simple click; ver cosas como su casa, su ocupación, su patronus o el material de su varita.

Buscamos guiarte en la toma de decisiones con las que puedas encontrarte al momento de elegir un personaje en el juego.

## 2. Definición de Usuario

“Guía para el Novato Absoluto” esta orientada a personas que se quieran aventurar en el mundo mágico y puedan tener información relevante para poder jugar Harry Potter: Wizards Unite.


## 3. Historias de Usuarios

Historia 1 : Como usuario principiante (fan de los libros )  
 - Quiero conocer que personajes del libro están en el juego 
 - Para poder jugar con mi personaje favorito

Historia 2 : Como usuario principiante ( fan de las películas ) 

 - Quiero saber la descripción de los personajes.
 - Para saber sus habilidades y a que casa pertenecen cada uno.

Historia 3 : Como usuario gamers ( fan de Harry potter ) 
 - Quiero conocer todos los atributos que tiene disponible cada
   personaje
- Para saber con que personaje jugar o relacionarme para obtener una
   cualidad especial.

Historia 4 : Como usuario principiante (fan de Harry potter )   
 - Quiero saber las habilidades especificas de mi personaje favorito
 - Para poder jugar de mejor forma.



## 4. Proceso y decisiones de Diseño

Lo primero que hicimos al decidir nuestro proyecto fue generar un prototipo de baja fidelidad, como se puede ver en la primera imagen, luego hicimos un prototipo de alta fidelidad, tratamos de hacerlo muy similar al de baja fidelidad, teniendo cambios mínimos.
 
Como dato: Tuvimos nuestro primer feedback de parte de nuestro squad.

# Paleta de colores
![palette](https://raw.githubusercontent.com/ivvnv/SCL013-data-lovers/master/src/img/readme_paleta.png)


## 5. Prototipo baja fidelidad

![FOTO](https://raw.githubusercontent.com/ivvnv/SCL013-data-lovers/master/src/img/bajafidelidad.jpeg)


## 6. Prototipo alta fidelidad

![FOTO1](https://raw.githubusercontent.com/ivvnv/SCL013-data-lovers/master/src/img/figma1.png)
![FOTO2](https://raw.githubusercontent.com/ivvnv/SCL013-data-lovers/master/src/img/figma2.png)
![FOTO3](https://raw.githubusercontent.com/ivvnv/SCL013-data-lovers/master/src/img/figma3.png)
![FOTO4](https://raw.githubusercontent.com/ivvnv/SCL013-data-lovers/master/src/img/figma4.png)
![FOTO5](https://raw.githubusercontent.com/ivvnv/SCL013-data-lovers/master/src/img/figma5.png)


[Enlace Figma](https://www.figma.com/file/8Bg2SLPzDN2GJDezOc5EUx/data-lovers?node-id=0:1)


## 7. Cómo utilzar la plataforma

 - Ingresar a la página de Guia para el Novato Absoluto.
 - Hacer click en el menú hamburguesa.
 - Elegir una opción (ver todo, casa, ocupación, linaje u otras
   criaturas).
 - Escoger un personaje y leer la información que sale reflejada en su
   tarjeta.
 - Si quieres volver al inicio puedes clickear logo que está en la
   esquina superior izquierda.
 

**Tener en consideración:**
No salen todos los personajes del juego.

## 8. Testeos

Nuestros testeos fueron hechos por Maze, donde pudimos sacar informes porcentuales de usuabilidad, acceso directo y ruta esperada.


**Porcentajes de Usuabilidad Testeos**

![Usuabilidad](https://raw.githubusercontent.com/ivvnv/SCL013-data-lovers/master/src/img/maze1.png)
![Acceso directo](https://raw.githubusercontent.com/ivvnv/SCL013-data-lovers/master/src/img/maze2.png)
![Visión general](https://raw.githubusercontent.com/ivvnv/SCL013-data-lovers/master/src/img/maze3.png)
![.](https://raw.githubusercontent.com/ivvnv/SCL013-data-lovers/master/src/img/maze4.png)
![Grafico Ruta esperada](https://raw.githubusercontent.com/ivvnv/SCL013-data-lovers/master/src/img/maze5.png)

[Enlace Maze](https://t.maze.design/10897011)


***
## 9. Pruebas Unitarias 

![Test 100%](https://raw.githubusercontent.com/ivvnv/SCL013-data-lovers/master/src/img/tests_unitarios.png)

## 10. Checklist

* [x] Usa VanillaJS.
* [x] No hace uso de `this`.
* [x] Pasa linter (`npm run pretest`)
* [x] Pasa tests (`npm test`)
* [x] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [x] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [x] Incluye historias de usuario en `README.md`.
* [x] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [x] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [x] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [x] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [x] UI: Permite ordenar data por uno o más campos (asc y desc).
* [x] UI: Permite filtrar data en base a una condición.
* [x] UI: Es _responsive_.
