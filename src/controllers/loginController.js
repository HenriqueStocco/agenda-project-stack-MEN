import Login from '../models/LoginModel';

export function login(req, res) {
  res.render('login');
}

export function register(req, res) {
  const login = new Login(req.body);
  login.register();
  res.send(login.body);
}
