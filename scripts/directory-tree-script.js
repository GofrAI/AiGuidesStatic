const fs = require('fs-extra');
const path = require('path');

async function createDirectoryTree() {
  try {
    // Define the base output directory
    const baseDir = path.join(process.cwd(), '.vercel/output/static');
    
    // Ensure the base directory exists
    await fs.ensureDir(baseDir);

    // Create Tcl-8.6 directory structure
    const tclBase = path.join(baseDir, 'Tcl-8.6');
    await fs.ensureDir(tclBase);

    // Create bin subdirectory
    const binDir = path.join(tclBase, 'bin');
    await fs.ensureDir(binDir);

    // Create specific bin files
    const binFiles = [
      'base-tcl8.6-thread-linux-x86_64',
      'base-tcl8.6-thread-linux-x86_64.so',
      'base-tk8.6-thread-linux-x86_64'
    ];
    for (const file of binFiles) {
      await fs.createFile(path.join(binDir, file));
    }

    // Create additional bin executables
    const binExecutables = [
      'tclsh', 'tclsh8.6', 'tclvfse', 'teacup', 
      'tkcon', 'wish', 'wish8.6'
    ];
    for (const exe of binExecutables) {
      await fs.createFile(path.join(binDir, exe));
    }

    // Create demos directory
    const demosBase = path.join(tclBase, 'demos', 'Tk8.6');
    await fs.ensureDir(demosBase);

    // Create demo TCL files
    const demoFiles = [
      'anilabel.tcl', 'aniwave.tcl', 'arrow.tcl', 'bind.tcl', 
      'bitmap.tcl', 'browse.tcl', 'button.tcl', 'check.tcl', 
      'clrpick.tcl', 'colors.tcl', 'combo.tcl', 'cscroll.tcl', 
      'ctext.tcl'
    ];
    for (const file of demoFiles) {
      await fs.createFile(path.join(demosBase, file));
    }

    console.log('Directory tree created successfully!');
  } catch (error) {
    console.error('Error creating directory tree:', error);
    process.exit(1);
  }
}

module.exports = createDirectoryTree;
