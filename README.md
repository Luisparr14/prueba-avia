# Prueba Aviatec
Para ejecutar este proyecto de forma local debe seguir una serie de pasos ya que este es un backend relaciondo con otra applicacion hecha con Angular

Este proyecto trabaja en conjunto con un frontend construido en Angular, de lo contrario no tendrá donde mostrar la informacion

Para acceder a dicho repositorio clonelo <a target="_blank" href="https://github.com/Luisparr14/prueba-avia-angular">aqui</a>


### Instalacion de dependencias
```
npm install
```
### Construción de la app con el empaquetador Esbuild
```
npm run build
```
### Ubicar la carpeta de estaticos (Por si no quieres usar la que está en este repositorio)

<h4>Sí puede use los que están aqui.</h4><br>

## Ejecutar el proyecto

Hay dos modos de ejecicion

  <li>Desarrollo</li>
  
```
npm run dev
```    
  <li>Producción</li>
    
```
npm start
```
Este solo funciona si previamente se ejecuto el comando `npm run build` y ademas tiene los archivos estaticos correspondientes a la app
## Avisos
Al ejecutar el comando ``` npm run build ``` en la aplicación de <a target="_blank" href="https://github.com/Luisparr14/prueba-avia-angular">Angular</a> se generá una carpeta ``` dist/[project-name]```.<br>
Debe mover dicha carpeta que tiene el nombre del proyecto a la carpeta ```build/public/[project-name]``` de este repositorio para que estén disponibles y servilos en la app.<br>

<li>La informacion de los hoteles se sirve en http://localhost:3000/api/v1/hotels</li>
<li>En caso de contar con los archivos estaticos se sirven en la ruta http://localhost:3000 del servidor</li>
