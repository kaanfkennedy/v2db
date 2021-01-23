const v2db = require('../index')();
v2db.set('hello.world', 'test');
v2db.set('the.number', 100);
v2db.get('hello');
v2db.fetch('hello');
v2db.push('im.the.array', { how: 'like this' }, 'lmao', ['world']);
v2db.unpush('im.the.array', 'lmao', { how: 'like this' });
v2db.delete('hello.world');
v2db.add('the.number', 50);
v2db.substract('the.number', 25);
v2db.update('the.number', (x) => (x = 1234));
v2db.all();
// v2db.deleteAll();
