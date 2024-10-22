import fs from 'fs-extra';

const sourceDir = './src/web/views'; // Directorio de origen de tus archivos EJS
const destDir = './dist/web/views';  // Directorio de destino

async function copyEJSFiles() {
  try {
    // Asegurarte de que el directorio destino existe
    await fs.ensureDir(destDir);
    console.log('Directorio creado con éxito.');

    // Copia los archivos
    await fs.copy(sourceDir, destDir, { recursive: true });
    console.log('Archivos EJS copiados con éxito.');
  } catch (err) {
    console.error('Error al copiar archivos:', err);
  }
}

copyEJSFiles();
