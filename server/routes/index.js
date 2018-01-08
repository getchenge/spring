const Router = require('koa-router');
const router = Router();
const Section = require('../data/section');

router.get('/api/sections', (ctx, next) => {
  return Section.find().then(docs => {

    return ctx.body = docs;
  });
});
router.post('/api/sections', (ctx, next) => {
  const section = ctx.request.body;
  const { caption, name, isList, fields } = section;
  const new_section = Object.assign({}, { caption, name, isList, fields: [] });
  fields.length > 0 && fields.map((i) => {
    const field = {
      caption: section[`caption-${i}`],
      name: section[`name-${i}`],
      type: section[`type-${i}`],
      placeholder: section[`placeholder-${i}`],
      value: ''
    };
    new_section.fields.push(field);
  });

  return Section.create(new_section).then(section => {
    ctx.body = { message: 'ok' };
  });
});
router.patch('/api/section', (ctx, next) => {
  const section = ctx.request.body.section;
  return Section.findOneAndUpdate({ name: section.name }, { $set: { value: section.value } }).then(section => {
    return ctx.body = {};
  });
});
router.get('/dashboard/*', (ctx, next) => {
  return ctx.render('dashboard');
});
router.get('*', function (ctx, next) {
  return ctx.render('index',{title:'清泉配音工作室'});
});

module.exports = router;
