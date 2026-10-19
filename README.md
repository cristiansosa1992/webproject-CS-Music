# CS-Music

Proyecto final de desarrollo front end realizado por Cristian
durante el programa de TripleTen.

Aplicación React para explorar canciones, álbumes y artistas con
iTunes Search API, escuchar fragmentos musicales y guardar favoritos.

- **Autor:** Cristian Sosa.
- **Repositorio:** [webproject-CS-Music](https://github.com/cristiansosa1992/webproject-CS-Music).
- **Tablero:** [CS-Music — Plan de desarrollo](https://github.com/users/cristiansosa1992/projects/2).
- **Rama de desarrollo:** `stage-frontend`.
- **Aplicación publicada:** [CS-Music en GitHub Pages](https://cristiansosa1992.github.io/webproject-CS-Music/).

## Estado actual

Funciones principales implementadas y aplicación publicada en GitHub Pages.
Pendiente la revisión final contra la lista de comprobación de TripleTen.

- Página principal con catálogo musical.
- Página Sobre el autor.
- Página para rutas no encontradas.
- Búsqueda de canciones, álbumes y artistas con iTunes Search API.
- Estados visibles de carga, error y búsqueda sin resultados.
- Tarjetas musicales reutilizables.
- Agregar y eliminar canciones favoritas desde las tarjetas y el panel.
- Favoritos persistentes en localStorage, restaurados al abrir la aplicación.
- Reproducción y pausa de fragmentos desde el catálogo y favoritos.
- Un único reproductor compartido, con controles de avance y volumen.
- Resultados mostrados de diez en diez mediante Cargar más.
- Diseño adaptable desde 320 px.

Los resultados se obtienen de la API. Los fragmentos se reproducen en
streaming desde las URL proporcionadas por iTunes; no se almacenan archivos
de audio. Los resultados sin preview disponible muestran el botón de
reproducción deshabilitado. Cada contenido incluye un enlace a iTunes.

El distintivo del reproductor utiliza el recurso oficial de Apple,
disponible en sus [guías de identidad de iTunes](https://marketing.services.apple/itunes-identity-guidelines).

Los favoritos se guardan por navegador y origen, sin cuentas de usuario.
Si el almacenamiento no está disponible, se muestra un aviso y la aplicación
permite seguir trabajando durante la sesión. Los datos guardados inválidos
se descartan al cargar para evitar errores en la interfaz.

## Tecnologías

- React
- TypeScript
- Vite
- React Router
- CSS con Flexbox y Grid
- Fuente Inter alojada localmente en formato WOFF2

## Instalación

Se necesita Git, npm y una versión de Node.js compatible con Vite:
`^20.19.0` o `>=22.12.0`.

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/cristiansosa1992/webproject-CS-Music.git
   ```

2. Entrar al proyecto:

   ```bash
   cd webproject-CS-Music
   ```

3. Cambiar a la rama de desarrollo:

   ```bash
   git switch stage-frontend
   ```

4. Instalar las dependencias:

   ```bash
   npm ci
   ```

5. Iniciar el servidor de desarrollo:

   ```bash
   npm run dev
   ```

Abrir la dirección que indique la terminal. Con la configuración actual
de Vite, la ruta base es `/webproject-CS-Music/`.

## Uso

1. Escribir el nombre de una canción, artista o álbum y pulsar Buscar música.
2. Seleccionar Canciones, Álbumes o Artistas. Al cambiar de categoría,
   se repite la última búsqueda con el nuevo tipo de resultado.
3. Pulsar Cargar más para mostrar otros diez resultados de la respuesta
   recibida. Una nueva búsqueda reinicia la cantidad visible.
4. En canciones, pulsar el corazón para agregar o quitar un favorito.
   También se puede eliminar desde el panel de favoritos.
5. Pulsar Play para escuchar el fragmento disponible; volver a pulsarlo
   para pausar. El reproductor compartido permite avanzar, ajustar el
   volumen o cerrar la reproducción.

El catálogo comienza vacío hasta realizar una búsqueda. Los favoritos
guardados se restauran aunque todavía no haya resultados en pantalla.

## Organización

```text
public/           Recursos públicos, logotipo y distintivo de iTunes
src/
  components/     Componentes reutilizables con su CSS correspondiente
  constants/      Configuración de la API, paginación y almacenamiento
  hooks/          Control compartido de reproducción de audio
  images/         Recursos gráficos locales
  pages/          HomePage y AboutPage
  styles/         Normalize y estilos compartidos
  types/          Tipos de la API y propiedades de componentes
  utils/          Solicitudes, adaptación de resultados y localStorage
  vendor/         Fuente Inter y su licencia
  App.tsx         Rutas, búsqueda y estado de favoritos
  main.tsx        Punto de entrada y configuración del enrutador
```

Las rutas de la aplicación son `/` y `/about`, además de una vista para
direcciones no encontradas. Se utiliza `HashRouter`, por lo que las rutas
aparecen después de `#` en la dirección del navegador:

- Inicio: [catálogo musical](https://cristiansosa1992.github.io/webproject-CS-Music/#/).
- Sobre el autor: [presentación del autor](https://cristiansosa1992.github.io/webproject-CS-Music/#/about).

Este formato permite recargar las páginas internas en GitHub Pages sin
solicitar al servidor una ruta física como `/about`.

## API y almacenamiento

- Servicio: `https://itunes.apple.com/search`.
- Configuración centralizada en `src/constants/config.ts`.
- País de consulta: Colombia (`CO`).
- Hasta 50 resultados solicitados por búsqueda, mostrados de diez en diez.
- Entidades: `song`, `album` y `musicArtist`.
- No requiere una clave de API ni un servidor propio.
- Clave de localStorage: `cs-music:favorites:v1`.

La disponibilidad de resultados, imágenes y fragmentos depende de iTunes.
El reproductor ofrece previews, no canciones completas. Las consultas y
la reproducción requieren conexión a Internet.

Los favoritos no se sincronizan entre dispositivos. Borrar los datos del
navegador elimina los favoritos guardados. El entorno local y GitHub Pages
tienen orígenes distintos, por lo que no comparten esa lista.

## Comprobaciones

Revisar el código:

    npm run lint

Generar la versión de producción:

    npm run build

Previsualizar la versión de producción:

    npm run preview

## Despliegue

**Plataforma:** GitHub Pages.

**Estado:** publicado. GitHub Actions finalizó correctamente y el autor
confirmó el funcionamiento de la aplicación en la dirección pública.

[Abrir CS-Music](https://cristiansosa1992.github.io/webproject-CS-Music/)

La opción `base` de Vite está configurada como `/webproject-CS-Music/`
para generar las rutas de recursos dentro del subdirectorio del repositorio.
La navegación utiliza `HashRouter` para admitir la recarga de páginas internas.

El flujo `.github/workflows/deploy.yml` se ejecuta con cada push a
`stage-frontend`. Instala las dependencias con `npm ci`, ejecuta lint,
genera la versión de producción y publica el contenido de `dist/` mediante
GitHub Actions. El entorno `github-pages` permite desplegar desde esa rama.

Comprobaciones manuales confirmadas por el autor en la aplicación publicada:

- Búsqueda musical y reproducción de fragmentos.
- Agregar favoritos y conservarlos al recargar.
- Navegación a Sobre el autor y recarga sin error 404.

La rama `stage-frontend` se mantiene separada de `main` hasta completar
el proceso de revisión correspondiente.

## Próximos pasos

- Completar la revisión final contra la lista de comprobación de TripleTen.
- Crear el pull request de `stage-frontend` a `main` para la revisión,
  sin fusionarlo antes de la aprobación correspondiente.

## Recursos y créditos

- Datos, portadas y fragmentos: iTunes Search API de Apple.
- Distintivo de iTunes Store: recurso oficial de Apple.
- Tipografía: Inter, distribuida con su licencia en `src/vendor/fonts/`.
- Proyecto educativo desarrollado durante el programa de TripleTen.
