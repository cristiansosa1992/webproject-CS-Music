# CS-Music

Proyecto final de desarrollo front end realizado por Cristian
durante el programa de TripleTen.

La aplicación está pensada para explorar canciones, álbumes y
artistas, escuchar fragmentos musicales y guardar favoritos.

## Estado actual

Interfaz en desarrollo correspondiente a la Etapa 1.1.

- Página principal con catálogo musical.
- Página Sobre el autor.
- Página para rutas no encontradas.
- Formulario de búsqueda.
- Selección visual de categorías.
- Tarjetas musicales reutilizables.
- Panel de favoritos con datos de ejemplo.
- Diseño adaptable desde 320 px.

Los datos actuales están escritos a mano. La búsqueda, el filtrado
de resultados, la reproducción, la gestión de favoritos y el botón
Cargar más todavía no están conectados.

## Tecnologías

- React
- TypeScript
- Vite
- React Router
- CSS con Flexbox y Grid
- Fuente Inter alojada localmente en formato WOFF2

## Instalación

Se necesita Node.js y npm.

1. Clonar el repositorio:

   git clone https://github.com/cristiansosa1992/webproject-CS-Music.git

2. Entrar al proyecto:

   cd webproject-CS-Music

3. Cambiar a la rama de desarrollo:

   git switch stage-frontend

4. Instalar las dependencias:

   npm ci

5. Iniciar el servidor de desarrollo:

   npm run dev

Abrir la dirección que indique la terminal.

## Comprobaciones

Revisar el código:

    npm run lint

Generar la versión de producción:

    npm run build

Previsualizar la versión de producción:

    npm run preview

## Próximos pasos

- Conectar iTunes Search API.
- Implementar búsqueda y filtros con resultados reales.
- Reproducir fragmentos musicales.
- Agregar y eliminar favoritos.
- Guardar favoritos en localStorage.
- Implementar Cargar más.