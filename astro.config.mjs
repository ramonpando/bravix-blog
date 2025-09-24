import { defineConfig } from 'astro/config';
import DecapCMS from 'astro-decap-cms';

// https://astro.build/config
export default defineConfig({
  // Remove base path for now - will configure in deployment
  vite: {
    build: {
      rollupOptions: {
        external: ['#home-directory', 'path', 'fs', 'url', 'module']
      }
    },
    define: {
      global: 'window'
    }
  },
  integrations: [
    DecapCMS({
      adminRoute: '/admin',
      config: {
        // Use Netlify's "Git Gateway" authentication and target our default branch
        backend: {
          name: 'git-gateway',
          branch: 'main',
        },
        // Configure where our media assets are stored & served from
        media_folder: 'public/assets/blog',
        public_folder: '/assets/blog',
        // Configure the content collections
        collections: [
          {
            name: 'posts',
            label: 'Blog Posts',
            label_singular: 'Blog Post',
            folder: 'src/pages/posts',
            create: true,
            delete: true,
            fields: [
              { name: 'title', widget: 'string', label: 'Título del Post' },
              {
                name: 'publishDate',
                widget: 'datetime',
                format: 'DD MMM YYYY',
                date_format: 'DD MMM YYYY',
                time_format: false,
                label: 'Fecha de Publicación',
              },
              { name: 'author', widget: 'string', label: 'Autor', default: 'Bravix Team', required: false },
              { name: 'authorURL', widget: 'string', label: 'URL del Autor', required: false },
              { name: 'description', widget: 'string', label: 'Descripción', required: false },
              {
                name: 'tags',
                widget: 'select',
                label: 'Categorías',
                multiple: true,
                required: false,
                options: ['IA', 'Automatización', 'Fintech', 'Marketing', 'Tecnología', 'Tutorial', 'Caso de Estudio']
              },
              { name: 'body', widget: 'markdown', label: 'Contenido del Post' },
              {
                name: 'layout',
                widget: 'select',
                default: '../../layouts/BlogPost.astro',
                options: [
                  { label: 'Blog Post', value: '../../layouts/BlogPost.astro' },
                ],
              },
            ],
          },
        ],
      },
      previewStyles: ['/src/styles/blog.css'],
    }),
  ],
});
