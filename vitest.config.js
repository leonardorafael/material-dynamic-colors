import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      enabled: true,
      reporter: ["text-summary"],
      include: ['src/cdn/**/.js', 'src/cdn/**/*.ts'],
    },
  },
});