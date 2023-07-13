import sqlite3 from 'sqlite3';

const sql3 = sqlite3.verbose();
const DB = './admin.db';

const init_database = () => {
	const db = new sql3.Database(DB);
	db.serialize(() => {
		try {
			db.run('CREATE TABLE admin (id TEXT, passwd1 TEXT, passwd2 TEXT)');
			db.run(
				"INSERT INTO admin VALUES (\
                    'b11153afc237f25619d711e43d8d5d4fd20cfa6cf613558a05efac3b6b0f38894b4c5ce8560575ab3d14df93e26a2a97e0da7437d50e30263ba30a80916f2335',\
                    'dfcd7558fd250e92b90d0002ad15b1b96c70d5a1e41dd5b58f312390930e02df9e09048a65af7cfb0421de7402f13bf0a18a2d2a32db29ac756a6b6f1d4c201e',\
                    '6ee1166a589c7fbc1059417b3331a651ec72c93c875edaeee21a5e531f44675c48f41b9a0084090a6307f8e032d8cba2ad0cedda11ebc922e7f7089eafbeaab2'\
                    )"
			);
		} catch (e) {
			console.log("################################");
			console.log(e);
			console.log("################################");
			process.exit(1);
		}
	});
	db.close();
	return;
};


init_database();
