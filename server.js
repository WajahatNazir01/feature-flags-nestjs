require('dotenv').config();
const express = require('express');
const path = require('path');
const cors= require('cors');
const { FeatureFlagsClient } = require('E:/PROJECTS/nestjs-feature-flags/packages/sdk-core/dist/index.js');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Initialize your custom feature flags client engine
const flagsClient = new FeatureFlagsClient({
  apiKey: process.env.FEATURE_FLAGS_API_KEY,
  apiHost: 'http://localhost:3000',
  streamingHost: 'http://localhost:3005'
});

// Bootstrapping function
async function startServer() {
  await flagsClient.init(process.env.TENANT_ID);
  
  // Endpoint for the HTML page to check current active layout configurations
  app.get('/api/config', (req, res) => {
    res.json({
      googleSignupEnabled: flagsClient.isEnabled('simple-signup-page'),
      bannerShowingEnabled: flagsClient.isEnabled('banner-showing-flag')
    });
  });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`\n✨ Aesthetic Signup App running live on: http://localhost:${PORT}`);
  });
}

startServer();