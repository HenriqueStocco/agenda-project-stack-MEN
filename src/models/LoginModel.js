import mongoose from 'mongoose';

const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.user = null;
  }

  register() {
    this.valida();
  }

  valida() {
    this.cleanUp();
    // validacao
    // O email precisa ser valido
    // A senha precisa ter entre 3 e 50 char
  }

  cleanUp() {
    for (const key in this.body) {
      if (typeof this.body[key] !== ' string') {
        this.body[key] = '';
      }
    }
    this.body = {
      email: this.body.email,
      password: this.body.password,
    };
  }
}

export default Login;
