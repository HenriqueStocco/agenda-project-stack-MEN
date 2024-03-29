export function homePage(req, res, next) {
  res.render('index');
  next();
  return;
}

export function homeDataPost(req, res) {
  res.send(req.body);
  return;
}
