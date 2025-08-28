const https = require('https');
const fs = require('fs');
const path = require('path');

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// All the images needed with fresh working Unsplash URLs
const images = {
  // Logo - using a food/restaurant related image as placeholder
  'logo.png': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=200&h=80&fit=crop&crop=center',
  
  // Main food images - using fresh reliable URLs
  'greek-salad.jpg': 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&h=600&fit=crop',
  'bruschetta.jpg': 'https://images.unsplash.com/photo-1572445271234-a78b5944a659?w=800&h=600&fit=crop',
  'hummus.jpg': 'https://images.unsplash.com/photo-1512621776951-5713541c77cb?w=800&h=600&fit=crop',
  'falafel.jpg': 'https://images.unsplash.com/photo-1512621776951-5713541c77cb?w=800&h=600&fit=crop',
  'grilled-salmon.jpg': 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&h=600&fit=crop',
  'lamb-kebabs.jpg': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop',
  'moussaka.jpg': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop',
  'chicken-souvlaki.jpg': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop',
  
  // Additional food items you requested
  'seafood-paella.jpg': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop',
  'lemon-dessert.jpg': 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&h=600&fit=crop',
  'baklava.jpg': 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&h=600&fit=crop',
  'tiramisu.jpg': 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&h=600&fit=crop',
  'greek-coffee.jpg': 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop',
  'mediterranean-tea.jpg': 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&h=600&fit=crop',
  
  // Beverages
  'lemonade.jpg': 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=800&h=600&fit=crop'
};

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(imagesDir, filename);
    
    // Check if file already exists and has content
    if (fs.existsSync(filepath) && fs.statSync(filepath).size > 0) {
      console.log(`✅ ${filename} already exists and has content`);
      resolve();
      return;
    }

    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          // Verify file size
          const stats = fs.statSync(filepath);
          if (stats.size > 0) {
            console.log(`✅ Downloaded ${filename} (${(stats.size / 1024).toFixed(1)} KB)`);
            resolve();
          } else {
            reject(new Error(`File ${filename} is empty`));
          }
        });
      } else {
        reject(new Error(`Failed to download ${filename}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      fs.unlink(filepath, () => {}); // Delete the file if there was an error
      reject(err);
    });
    
    file.on('error', (err) => {
      fs.unlink(filepath, () => {}); // Delete the file if there was an error
      reject(err);
    });
  });
}

async function downloadAllImages() {
  console.log('🚀 Starting download of all food images...\n');
  
  const promises = Object.entries(images).map(([filename, url]) => 
    downloadImage(url, filename).catch(err => {
      console.error(`❌ Error downloading ${filename}:`, err.message);
    })
  );
  
  try {
    await Promise.all(promises);
    console.log('\n🎉 Image download completed!');
    console.log(`📁 Images saved to: ${imagesDir}`);
    
    // List all downloaded files with sizes
    console.log('\n📋 Downloaded files:');
    fs.readdirSync(imagesDir).forEach(file => {
      const filepath = path.join(imagesDir, file);
      const stats = fs.statSync(filepath);
      console.log(`  ${file} - ${(stats.size / 1024).toFixed(1)} KB`);
    });
  } catch (error) {
    console.error('❌ Some images failed to download:', error.message);
  }
}

// Run the download
downloadAllImages();
