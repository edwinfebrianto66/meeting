const app = require('./src/app');
require('dotenv').config();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`✅ Login service running on port ${PORT}`);
});
