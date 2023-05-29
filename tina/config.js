import { defineConfig } from 'tinacms';

export default defineConfig({
    publicFolder: 'public', // Directory pubblica personalizzata del tuo progetto Jekyll
    schema: {
        collections: [
          {
            label: 'Blog Posts',
            name: 'post',
            path: 'content/posts',
            fields: [
              {
                type: 'string',
                label: 'Title',
                name: 'title',
              },
              {
                type: 'string',
                label: 'Post Body',
                name: 'body',
                isBody: true,
              },
            ],
          },
        ],
      },
});