/* Zips a complete folder */

import AdmZip from 'adm-zip';

const zipFolder = async (zipName, destPath, path) => {
	const zip = new AdmZip();
	zip.addLocalFolder(path);
	return zip.writeZipPromise(`${destPath}/${zipName}`);
};

export default zipFolder;
