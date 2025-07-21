# Proyecto Final API REST - Talento Tech

## Descripción del Proyecto
Este es el proyecto final para Talento Tech, una API REST desarrollada con Node.js y Express. La API permite gestionar productos, ofreciendo funcionalidades CRUD (Crear, Leer, Actualizar, Eliminar) y utiliza autenticación basada en JWT (JSON Web Tokens) para proteger las rutas de modificación de datos.
 
### Autor
Matias Gabriel Cabrera
 
### Licencia
Este proyecto está bajo la licencia MIT.
 
---
 
## Tecnologías Utilizadas
- **Node.js**: Entorno de ejecución para JavaScript.
- **Express**: Framework web para construir la API REST.
- **Firebase**: Utilizado como base de datos (Firestore) para persistir la información.
- **JSON Web Token (jsonwebtoken)**: Para la generación y validación de tokens de acceso.
- **Dotenv**: Para la gestión de variables de entorno.
- **CORS**: Para habilitar el Cross-Origin Resource Sharing.
- **Nodemon**: Herramienta de desarrollo que reinicia el servidor automáticamente ante cambios en el código.
 
---
 
## Instalación
Para configurar y ejecutar el proyecto localmente, sigue estos pasos:
 
1.  **Clona el repositorio**
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd proyecto-final-api-rest-talento-tech
    ```
 
2.  **Instala las dependencias**
    ```bash
    npm install
    ```
 
3.  **Configura las variables de entorno**
    Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables.
 
    ```dotenv
    # Configuración del servidor
    PORT=5000
 
    # Credenciales de Firebase
    APIKEY=tu_api_key_de_firebase
    AUTHDOMAIN=tu_auth_domain_de_firebase
    PROJECTID=tu_project_id_de_firebase
    STORAGEBUCKET=tu_storage_bucket_de_firebase
    MESSAGINGSENDERID=tu_messaging_sender_id_de_firebase
    APPID=tu_app_id_de_firebase
 
    # Secreto para JWT
    JWT_SECRET=tu_clave_secreta_para_jwt
    ```
 
    Asegúrate de reemplazar los valores de ejemplo con tus propias credenciales y secretos.
 
---
 
## Ejecución del Proyecto
 
Puedes ejecutar la aplicación en modo de desarrollo o producción:
 
*   **Modo de Desarrollo** (con reinicio automático):
    ```bash
    npm run dev
    ```
 
*   **Modo de Producción**:
    ```bash
    npm start
    ```
 
La API estará disponible en `http://localhost:5000` (o el puerto que hayas configurado en tu archivo `.env`).
 
---
 
## Endpoints de la API
 
### Autenticación
Para acceder a las rutas protegidas (crear, actualizar, eliminar productos), primero debes obtener un token de autenticación.
 
#### **Generar Token (Login)**
*   **Método:** `GET`
*   **Ruta:** `/auth`
*   **Cuerpo de la solicitud (JSON):**
    ```json
    {
      "email": "admin@admin.com",
      "password": "password123"
    }
    ```
*   **Respuesta Exitosa (`200 OK`):**
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
    ```
 
### Productos
URL base: `/api/products`
 
#### **1. Obtener todos los productos**
*   **Método:** `GET`
*   **Ruta:** `/api/products`
*   **Respuesta Exitosa (`200 OK`):**
    ```json
    [
      {
        "id": "XrXgcewURgePIJJZTGOK",
        "nombre": "Harina 0000",
        "precio": "1200",
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
 
#### **2. Obtener un producto por ID**
*   **Método:** `GET`
*   **Ruta:** `/api/products/:id`
*   **Respuesta Exitosa (`200 OK`):**
    ```json
    {
      "id": "XrXgcewURgePIJJZTGOK",
      "nombre": "Harina 0000",
      "precio": "1200",
      "disponible": true
    }
    ```
*   **Respuesta de Error:** `404 Not Found` si el producto no existe.
 
#### **3. Crear un nuevo producto (Ruta Protegida)**
*   **Método:** `POST`
*   **Ruta:** `/api/products`
*   **Cabeceras:**
    *   `Authorization: Bearer <token>`
*   **Cuerpo de la solicitud (JSON):**
    ```json
    {
      "nombre": "Fideos tallarin",
      "precio": "850",
      "disponible": true
    }
    ```
*   **Respuesta Exitosa (`201 Created`):**
    ```json
    {
      "id": "nuevoIdGenerado",
      "nombre": "Fideos tallarin",
      "precio": "850",
      "disponible": true
    }
    ```
 
#### **4. Actualizar un producto por ID (Ruta Protegida)**
*   **Método:** `PUT`
*   **Ruta:** `/api/products/:id`
*   **Cabeceras:**
    *   `Authorization: Bearer <token>`
*   **Cuerpo de la solicitud (JSON):**
    ```json
    {
      "nombre": "Azucar blanca",
      "precio": "1600",
      "disponible": true
    }
    ```
*   **Respuesta Exitosa (`200 OK`):**
    ```json
    {
      "id": "gWYg9fhebk7GD6SeRevH",
      "nombre": "Azucar blanca",
      "precio": "1600",
      "disponible": true
    }
    ```
*   **Respuesta de Error:** `404 Not Found` si el producto no existe.
 
#### **5. Eliminar un producto por ID (Ruta Protegida)**

*   **Método:** `DELETE`
*   **Ruta:** `/api/products/:id`
*   **Cabeceras:**
    *   `Authorization: Bearer <token>`
*   **Respuesta Exitosa:** `204 No Content` (sin cuerpo de respuesta).
*   **Respuesta de Error:** `404 Not Found` si el producto no existe.


(Asegúrate de reemplazar los valores de ejemplo con tus propias credenciales de Firebase si las utilizas.)

---

## Ejecución del Proyecto

Puedes ejecutar la aplicación en modo de desarrollo o en modo de producción:

Modo de Desarrollo:
Utiliza nodemon para reiniciar automáticamente el servidor cuando haya cambios en el código.

```
npm run dev
```


Modo de Producción:
Inicia la aplicación de forma normal.

```
npm start
```


La API estará disponible en `http://localhost:5000` (o el puerto que hayas configurado en tu archivo `.env`).

---

## Endpoints de la API

La API expone los siguientes endpoints para la gestión de productos:

### URL base

```
http://localhost:5000/api/products
```

### 1. Obtener todos los productos
Método: `GET`

Ruta:

`/api/products`

Ejemplo de solicitud:

```
GET http://localhost:5000/api/products
```


Respuesta Exitosa: `200 OK`

```json
[
  {
    "id": "XrXgcewURgePIJJZTGOK",
    "nombre": "Harina 0000",
    "precio": "1200",
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

### 2. Obtener un producto por ID

Método: `GET`

Ruta:

`/api/products/:id`

Parámetros de ruta:

id (string): El ID único del producto.

Ejemplo de solicitud:

```
GET http://localhost:5000/api/products/XrXgcewURgePIJJZTGOK
```


Respuesta Exitosa: `200 OK`

```json
{
  "id": "XrXgcewURgePIJJZTGOK",
  "nombre": "Aceite",
  "precio": "2100",
  "disponible": true
}
```

Respuesta de Error: `404 Not Found` si el producto no existe.

### 3. Crear un nuevo producto

Método: POST

Ruta:

`/api/products`

Cabeceras: Content-Type: application/json

Cuerpo de la solicitud (JSON):

```json
{
  "nombre": "Aceite",
  "precio": "2100",
  "disponible": true
}
```

Ejemplo de solicitud:

```http
POST http://localhost:5000/api/products
Content-Type: application/json

{
  "nombre": "Aceite",
  "precio": 2100,
  "disponible": true
}
```

Respuesta Exitosa: `201 Created`

```json
{
  "id": "nuevoIdGenerado",
  "nombre": "Aceite",
  "precio": 2100,
  "disponible": true
}
```

### 4. Actualizar un producto por ID

Método: `PUT`

Ruta: `/api/products/:id`

Parámetros de ruta:

id (string): El ID único del producto a actualizar.

Cabeceras: Content-Type: application/json

Cuerpo de la solicitud (JSON):

```json
{
  "nombre": "Aceite de oliva",
  "precio": 2100,
  "disponible": false
}
```

Ejemplo de solicitud:

```json
PUT http://localhost:5000/api/products/vitFj0e1o5b4kaWb6jGD
Content-Type: application/json

{
  "nombre": "Aceite de oliva",
  "precio": "2100",
  "disponible": false
}
```

Respuesta Exitosa: 200 OK

```json
{
  "id": "vitFj0e1o5b4kaWb6jGD",
  "nombre": "Aceite de oliva",
  "precio": "2100",
  "disponible": false
}
```

Respuesta de Error: 404 Not Found si el producto no existe.

### 5. Eliminar un producto por ID
Método: ``DELETE``

Ruta: ``/api/products/:id``

Parámetros de ruta:

id (string): El ID único del producto a eliminar.

Ejemplo de solicitud:

```
DELETE http://localhost:5000/api/products/F67qySTSrh9UToPmS9Rn
```

Respuesta Exitosa: 204 No Content (sin cuerpo de respuesta).

Respuesta de Error: 404 Not Found si el producto no existe.
