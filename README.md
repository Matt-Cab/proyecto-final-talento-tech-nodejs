# Proyecto Final API REST - Talento Tech
## Descripción del Proyecto
Este es el proyecto final de una API REST desarrollado para Talento Tech. La API permite gestionar productos, ofreciendo funcionalidades CRUD (Crear, Leer, Actualizar, Eliminar) para la administración de la información de los productos.

## Autor
Matias Gabriel Cabrera

## Licencia
Este proyecto está bajo la licencia MIT.

## Tecnologías Utilizadas
## Dependencias

`dotenv`: ^17.2.0 - Para cargar variables de entorno desde un archivo .env.

`express`: ^5.1.0 - Framework web para Node.js, utilizado para construir la API.

`firebase`: ^11.10.0 - Para la integración con los servicios de Firebase (Firestore).

## Dependencias de Desarrollo
`nodemon`: ^3.1.10 - Herramienta que reinicia automáticamente el servidor Node.js cuando se detectan cambios en los archivos.

## Instalación
Para configurar y ejecutar el proyecto localmente, sigue estos pasos:

### Instala las dependencias:

`npm install`


### Crea un archivo .env:
En la raíz del proyecto, crea un archivo llamado .env y configura tus variables de entorno, como las credenciales de Firebase o el puerto del servidor. Ejemplo:

```json
PORT=3000
FIREBASE_API_KEY = tu_api_key_de_firebase
FIREBASE_AUTH_DOMAIN = tu_auth_domain_de_firebase
FIREBASE_PROJECT_ID = tu_project_id_de_firebase
FIREBASE_STORAGE_BUCKET = tu_storage_bucket_de_firebase
FIREBASE_MESSAGING_SENDER_ID = tu_messaging_sender_id_de_firebase
FIREBASE_APP_ID = tu_app_id_de_firebase
FIREBASE_MEASUREMENT_ID = tu_measurement_id_de_firebase
```


(Asegúrate de reemplazar los valores de ejemplo con tus propias credenciales de Firebase si las utilizas.)

Ejecución del Proyecto
Puedes ejecutar la aplicación en modo de desarrollo o en modo de producción:

Modo de Desarrollo:
Utiliza nodemon para reiniciar automáticamente el servidor cuando haya cambios en el código.

`npm run dev`


Modo de Producción:
Inicia la aplicación de forma normal.

`npm start`


La API estará disponible en http://localhost:3000 (o el puerto que hayas configurado en tu archivo .env).

Endpoints de la API
La API expone los siguientes endpoints para la gestión de productos:

Base URL
http://localhost:3000/api/products

1. Obtener todos los productos
Método: GET

Ruta: `/api/products`

Ejemplo de solicitud:

`GET http://localhost:3000/api/products`


Respuesta Exitosa: 200 OK

```json
[
  {
    "id": "XrXgcewURgePIJJZTGOK",
    "nombre": "Aceite",
    "precio": "2100",
    "disponible": true
  },
  {
    "id": "vitFj0e1o5b4kaWb6jGD",
    "nombre": "Aceite de oliva",
    "precio": "2100",
    "disponible": false
  }
]
```

2. Obtener un producto por ID
Método: GET

Ruta: /api/products/:id

Parámetros de ruta:

id (string): El ID único del producto.

Ejemplo de solicitud:

GET http://localhost:3000/api/products/XrXgcewURgePIJJZTGOK


Respuesta Exitosa: 200 OK

{
  "id": "XrXgcewURgePIJJZTGOK",
  "nombre": "Aceite",
  "precio": "2100",
  "disponible": true
}


Respuesta de Error: 404 Not Found si el producto no existe.

3. Crear un nuevo producto
Método: POST

Ruta: /api/products

Cabeceras: Content-Type: application/json

Cuerpo de la solicitud (JSON):

{
  "nombre": "Aceite",
  "precio": "2100",
  "disponible": true
}


Ejemplo de solicitud:

POST http://localhost:3000/api/products
Content-Type: application/json

{
  "nombre": "Aceite",
  "precio": "2100",
  "disponible": true
}


Respuesta Exitosa: 201 Created

{
  "id": "nuevoIdGenerado",
  "nombre": "Aceite",
  "precio": "2100",
  "disponible": true
}


4. Actualizar un producto por ID
Método: PUT

Ruta: /api/products/:id

Parámetros de ruta:

id (string): El ID único del producto a actualizar.

Cabeceras: Content-Type: application/json

Cuerpo de la solicitud (JSON):

{
  "nombre": "Aceite de oliva",
  "precio": "2100",
  "disponible": false
}


Ejemplo de solicitud:

PUT http://localhost:3000/api/products/vitFj0e1o5b4kaWb6jGD
Content-Type: application/json

{
  "nombre": "Aceite de oliva",
  "precio": "2100",
  "disponible": false
}


Respuesta Exitosa: 200 OK

{
  "id": "vitFj0e1o5b4kaWb6jGD",
  "nombre": "Aceite de oliva",
  "precio": "2100",
  "disponible": false
}


Respuesta de Error: 404 Not Found si el producto no existe.

5. Eliminar un producto por ID
Método: DELETE

Ruta: /api/products/:id

Parámetros de ruta:

id (string): El ID único del producto a eliminar.

Ejemplo de solicitud:

DELETE http://localhost:3000/api/products/F67qySTSrh9UToPmS9Rn


Respuesta Exitosa: 204 No Content (sin cuerpo de respuesta).

Respuesta de Error: 404 Not Found si el producto no existe.