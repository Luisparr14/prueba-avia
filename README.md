# Prueba Aviatec
Para ejecutar este proyecto de forma local debe seguir una serie de pasos ya que este es un backend relaciondo con otra applicacion hecha con Angular

### Instalacion de dependencias
```
npm install
```
### Construción de la app con el empaquetador Esbuild
```
npm run build
```
### Ubicar la carpeta de estaticos (Por si no quieres usar la que está en este repositorio)

<li>Sí puede use los que están aqui.</li><br>

Al ejecutar el comando ``` ng build ``` en la aplicación de angular se generá una carpeta ``` dist/[project-name]```.<br>
Debe mover dicha la carpeta que tiene el nombre del proyecto a la carpeta ```build/public/``` para que estén disponibles y servilos en la app.<br>
