import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Examples() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Examples"
      description="Deep Chat Framework Examples">
      <main>
        <div style={{padding: '2rem'}}>
          <h1>Framework Examples</h1>
          <div style={{marginTop: '2rem'}}>
            <h2>React</h2>
            <iframe src="/examples/react/index.html" style={{width: '100%', height: '500px', border: '1px solid #eee', borderRadius: '8px'}} />
            
            <h2>Vue 3</h2>
            <iframe src="/examples/vue3/index.html" style={{width: '100%', height: '500px', border: '1px solid #eee', borderRadius: '8px'}} />
            
            <h2>Vue 2</h2>
            <iframe src="/examples/vue2/index.html" style={{width: '100%', height: '500px', border: '1px solid #eee', borderRadius: '8px'}} />
            
            <h2>Svelte</h2>
            <iframe src="/examples/svelte/index.html" style={{width: '100%', height: '500px', border: '1px solid #eee', borderRadius: '8px'}} />
            
            <h2>SvelteKit</h2>
            <iframe src="/examples/sveltekit/index.html" style={{width: '100%', height: '500px', border: '1px solid #eee', borderRadius: '8px'}} />
            
            <h2>Angular</h2>
            <iframe src="/examples/angular/index.html" style={{width: '100%', height: '500px', border: '1px solid #eee', borderRadius: '8px'}} />
            
            <h2>Solid</h2>
            <iframe src="/examples/solid/index.html" style={{width: '100%', height: '500px', border: '1px solid #eee', borderRadius: '8px'}} />
            
            <h2>Next.js (App Router)</h2>
            <iframe src="/examples/nextjs-app/index.html" style={{width: '100%', height: '500px', border: '1px solid #eee', borderRadius: '8px'}} />
            
            <h2>Next.js (Pages Router)</h2>
            <iframe src="/examples/nextjs-pages/index.html" style={{width: '100%', height: '500px', border: '1px solid #eee', borderRadius: '8px'}} />
            
            <h2>Nuxt</h2>
            <iframe src="/examples/nuxt/index.html" style={{width: '100%', height: '500px', border: '1px solid #eee', borderRadius: '8px'}} />
            
            <h2>Vanilla JS</h2>
            <iframe src="/examples/vanillajs/index.html" style={{width: '100%', height: '500px', border: '1px solid #eee', borderRadius: '8px'}} />
          </div>
        </div>
      </main>
    </Layout>
  );
} 