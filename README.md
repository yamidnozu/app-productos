# Ejercicio práctico Angular V8 

### Descripción del ejercicio
Utilizando sus conocimientos de Angular 6 o superior, desarrolle una pequeña aplicación que presente un catálogo de productos, el cual se obtiene de una API, y brinde la opción de radicar un pedido de un producto a través de un formulario, y persista los datos del pedido localmente, de modo que se puedan consultar los pedidos generados y filtrarlos por ID.

### Condiciones:
-Ruta de la API (sólo tiene 5 productos, IDs del 1 al 5):
https://fvwzxk56cg.execute-api.us-east-1.amazonaws.com/mock/productos
-En el catálogo se deben mostrar las miniaturas y al hacer clic, debe mostrar la imagen
grande
- Debe permitir solicitar los productos que tienen cantidad disponible
- El formulario del pedido debe solicitar:
- Nombre
- Fecha de nacimiento
- -Dirección de envío
- Lista desplegable con la ciudad (los valores pueden estar “quemados”)
- Solicitar la carga de un archivo que correspondería a la copia de la cédula (sólo
exigir que sea PDF y pese menos de 1MB)

- Los pedidos se deben almacenar localmente en el navegador
- Se debe generar un ID numérico por cada pedido generado
- No es necesario descontar el inventario
- La opción de visualización de los pedidos radicados debe hacerse mediante una tabla y permitir filtrar los pedidos por ID
- Se deben incluir los popups con mensajes de éxito y error que considere pertinentes
- Se debe hacer un buen manejo del “maquetado” utilizando CSS3 o SASS
- La aplicación debe tener “responsive design”
- Se debe entregar el repositorio de Github con el código del proyecto demostrando todas las buenas prácticas, y un buen README.md con la descripción del proyecto

### Versión de Angular
Angular 8.2.4

### Ejecución
Para poder hacer ejecución de este proyecto, se debe tener previamente instalado node y angular, esta seria una referencia a un paso a paso https://victorroblesweb.es/2019/05/29/novedades-e-instalacion-de-angular-8/
Posterior, se habrá que descargar el repositorio https://github.com/yamidnozu/app-productos.git y sobre la carpeta raíz ejecutar el sigiente comando
```sh
npm install
```
El siguiente paso es sobre la carpeta raiz de el proyecto correr
```sh
ng serve
```
Sobre un browser se podrá revisar la aplicación si se accede a:
```url
localhost:4200
```
### Dependencias
Para facilidad de la construcción de un modal, se uso la dependencia 'ngx-simple-modal' externa a el proyecto.

### Estructura general del proyecto
El proyecto se distribuye asi:
- Core, aquí se organizarian elementos generales y de uso común de la aplicación, por fuera de la lógica de negocio.
- Layouts, aquí se organizarian los layouts de la aplicación
- Shared, se tendrán los elementos comunes para la aplicación dentro de la lógica de negocio de la aplicación.
- Views, estarán las vistas, componentes, servicios, módulos de la aplicación.

Para este ejercicio en total existen tres módulos: AppModule, SharedModule, ProductosModule,
La la lógica principal del ejercicio se encontrará en ProductosModule, y a este módulo se carga por lazy loading, Aparte de los componentes que se encuentran en este módulo, se crean un servicio PersistenciaService que permitirá guardar y leer datos del localstorage, este no esta relacionado con la lógica propia de el proyecto, por lo cual se organiza en Core.
Se crean los componentes overlay-fullscreenComponent y topbarComponent dentro de la carpeta Layout, estos elementos podrán ser usados por cualquier componente que los necesite.
Dentro de views,  se creó un componente ListaProductoComponent que será al cual apunte a caargar el proyecto cuando arranque y sobre estas es donde se listan los prodyctos con algunos detalles de la información.
Ese listado, esta conformado por componentes ProducosComponent, y estos lo que hacen es pintar la información del producto y tener el comportamiento, de que si da click sobre la imagen, se expanda usando el componente OverlatFullscreenComponent, también tiene un botón para Pedir ese producto. Al clicar en ese botón, lo que hará será abrir el modal PedirProductoModalComponent, que tiene un formulario, al ser llenado se habilita la opción de pedir ese prodycto y este ya usará el esrvicio de PersistenciaService, enviando la información al localstorage.
Para poder revisar la lista de pedidos, en la parte superior derecha en el Topbar está el botón de pedidos, al clicar nos llevará a el componente ListaPedidosComponent, la cual nos lista los pedidos que estan en el localstorage, y se agrega un pequeño input que filtrará por el ID

Cualquier duda, ponerse en contacto con yamidnozu@gmail.com