const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
  console.log('🖼️  Starting image optimization...');
  
  const inputDir = 'src/images';
  const outputDir = 'public/images';
  
  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  try {
    // Convert and optimize JPEG images
    await imagemin([`${inputDir}/*.{jpg,jpeg}`], {
      destination: outputDir,
      plugins: [
        imageminMozjpeg({ quality: 80 }),
        imageminWebp({ quality: 80 })
      ]
    });
    
    // Convert and optimize PNG images
    await imagemin([`${inputDir}/*.png`], {
      destination: outputDir,
      plugins: [
        imageminPngquant({ quality: [0.6, 0.8] }),
        imageminWebp({ quality: 80 })
      ]
    });
    
    // Copy SVG files as-is (they're already optimized)
    const svgFiles = fs.readdirSync(path.join(inputDir, 'svg')).filter(file => file.endsWith('.svg'));
    const svgOutputDir = path.join(outputDir, 'svg');
    
    if (!fs.existsSync(svgOutputDir)) {
      fs.mkdirSync(svgOutputDir, { recursive: true });
    }
    
    svgFiles.forEach(file => {
      fs.copyFileSync(
        path.join(inputDir, 'svg', file),
        path.join(svgOutputDir, file)
      );
    });
    
    console.log('✅ Image optimization completed!');
    console.log('📊 Images converted to WebP format for better performance');
    
  } catch (error) {
    console.error('❌ Error optimizing images:', error);
    process.exit(1);
  }
}

optimizeImages();