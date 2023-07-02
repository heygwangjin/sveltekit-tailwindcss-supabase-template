# Sveltekit-TailwindCSS-Supabase Starter

### Generating schema types using Supabase CLI

```json
// package.json > scripts
"update-types": "pnpx supabase gen types typescript --project-id \"$PROJECT_REF\" --schema public > src/lib/supabase/schema.ts"
```
