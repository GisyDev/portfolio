# Portfolio de Gisela Estévez Moleiro

Este es mi portfolio web personal. Soy **Gisela Estévez Moleiro**, desarrolladora full stack, y aquí comparto mi trayectoria profesional, mi formación, las tecnologías con las que trabajo y algunos de mis proyectos. También puedes encontrar mis datos de contacto y descargar mi currículum.

![Vista previa de mi portfolio](portfolio-frontend/docs/images/readme-banner-navegador.png)

## Contenido

- **Sobre mí:** cuento quién soy, mi disponibilidad y cómo puedes contactar conmigo.
- **Tecnologías:** muestro algunos de los lenguajes y herramientas que utilizo.
- **Experiencia y educación:** comparto mi recorrido profesional y académico.
- **Proyectos:** presento algunos trabajos con capturas, tecnologías y enlaces a demos o repositorios.
- **Formación complementaria:** incluyo cursos y certificaciones que he realizado.

Entre los proyectos que presento están **TransferLog**, una aplicación para gestionar empleados y turnos; **Quiosco Next**, una aplicación de pedidos con panel de administración; y **Weather App**, una aplicación meteorológica con previsiones y gráficos interactivos.

## Tecnologías

- React 19 y TypeScript
- Vite 8
- Tailwind CSS 4
- React Router
- Motion para animaciones
- GitHub Pages para el despliegue

## Requisitos

- Node.js 20 o superior
- npm

## Desarrollo local

Para ejecutar mi portfolio en local, entra en la carpeta `portfolio-frontend` e instala sus dependencias:

```bash
cd portfolio-frontend
npm install
npm run dev
```

Después, Vite mostrará en la terminal la dirección local donde puedes abrirlo en el navegador.

## Comandos disponibles

Desde `portfolio-frontend`, puedes utilizar estos comandos:

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run build` | Comprueba los tipos de TypeScript y genera la versión de producción en `dist`. |
| `npm run preview` | Sirve localmente la versión generada. |
| `npm run lint` | Analiza el código con ESLint. |

## Despliegue

He configurado un flujo de GitHub Actions para construir y publicar mi portfolio en GitHub Pages cada vez que actualizo la rama `main`. Para producción, Vite utiliza la ruta base `/portfolio/`.

## Estructura

```text
portfolio-frontend/
├── docs/images/          # Imagen de presentación del README
├── public/               # Imágenes, iconos y documentos del portfolio
├── src/
│   ├── lib/              # Utilidades para recursos estáticos
│   └── portfolio/
│       ├── components/   # Componentes reutilizables
│       ├── data/         # Contenido del portfolio
│       ├── hooks/        # Hooks de navegación, tema y animación
│       ├── layout/       # Estructura general de páginas
│       ├── page/         # Página principal
│       └── ui/           # Secciones visuales
└── package.json
```
