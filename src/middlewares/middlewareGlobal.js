export function middlewareGlobal(req, res, next) {
  res.locals.umVarLocal = 'Bom dia';
  next();
}

export function checksCsrfError(err, req, res, next) {
  if (err) {
    return res.render('404');
  }
  next();
}

// do csrf validation and insert in forms
